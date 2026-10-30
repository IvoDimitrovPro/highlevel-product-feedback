# HighLevel Open Tracking & Attribution Platform — engineering proposal (2026-10-30)

**Audience:** HighLevel Product, External Tracking, Attribution, Payments, Reporting, Ads and Platform/API engineering.
**Objective:** Make HighLevel the default, consent-respecting, cross-platform measurement and revenue-decision system for agencies and merchants, sufficiently open and reliable that customers do not need to run a parallel HYROS, RedTrack or bespoke event collector.
**Nature of document:** Product requirements and measurable acceptance tests, **not claims about currently shipped functionality**. Competitive capabilities below are sourced from vendor materials, not independently verified superiority rankings.

## Executive request
Evolve existing native HighLevel sites/funnels, External Tracking, CRM attribution, payments and workflow events into **one instrumented event model, privacy-aware identity graph, authoritative conversion ledger, transparent attribution and activation layer with supported read/export APIs**. Reuse existing first-party infrastructure; do not ask customers to rebuild websites, replace checkout, or install multiple trackers. Let agencies, AI Studio apps and external tools use **permissioned read access** to the same event truth.

**Make this a platform capability, not another isolated analytics widget.** Expose account/site-scoped SDK/API/MCP/exports, independent of which builder produced the page; preserve user-visible distinctions between observed, inferred, unknown and modeled data.

### Current native capabilities — retain and extend
- [External Tracking Analytics](https://help.gohighlevel.com/support/solutions/articles/155000007809-analytics-for-external-tracking): external page/form views, responses, time-on-page, short exits, devices/geography, filters by domain/page/form.
- [Domain-level controls, field mapping and supported iframe forms](https://help.gohighlevel.com/support/solutions/articles/155000009476-field-mapping-and-iframe-form-tracking-in-external-tracking) updated 2026-10-27; limitations remain for certain JS-only/nested iframe implementations.
- [External Tracking Event workflow trigger](https://help.gohighlevel.com/support/solutions/articles/155000002292) supports named client/server events in eligible workflows. Workflow triggers alone are not an unrestricted raw-event read API.
- [Contact attribution](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-traffic-sources) captures source on supported form/calendar/chat/order conversion actions; existing First/Latest views do not establish a complete cross-domain anonymous history.
- [Funnel/site analytics](https://help.gohighlevel.com/support/solutions/articles/155000003094-how-to-use-site-and-funnel-analytics-in-highlevel) already has page/step metrics and revenue.
- [Public feedback](https://ideas.gohighlevel.com/external-tracking) requests raw External Tracking GET APIs and dashboard/report widgets. This indicates demand; it does not establish absence of internal capabilities.

### Competitive baseline, from official vendor publications
| Dimension | Public competitor capabilities | HighLevel target |
| --- | --- | --- |
| Multi-touch | [HYROS U-shaped (40/20/40)](https://hyros.com/updates/power-features/new-attribution-model-u-shaped-attribution/), [RedTrack attribution models](https://help.redtrack.io/knowledgebase/kb/basic-setup-9785/reports-and-dashboards-r-10959/reporting-attribution-modeling/) | Transparent selectable first/last/paid/linear/U-shaped/time-decay with raw evidence and unknowns |
| Track and correct conversions | [RedTrack S2S/API, conversion updates and dedup](https://www.redtrack.io/platform/features/) | Verified payments/offline/renewal/refund lifecycle, replay and audit |
| Ads activation | [HYROS offline event feedback](https://hyros.com/updates/offline-conversion-tracking/), [RedTrack CAPI/postbacks](https://help.redtrack.io/knowledgebase/kb/automation/traffic-source-integration-status-2/) | Consent-aware delivery, match quality, error/retry logs and reconciliation |
| Ad spend/ROI | [RedTrack cost sync, ROI and rules](https://www.redtrack.io/platform/features/) | Verified spend by campaign/ad; net revenue, CAC, CPA, ROAS, MER and optional margin |
| Data access | [RedTrack reports/API/export](https://www.redtrack.io/platform/features/), [HYROS API documentation](https://docs.hyros.com/docs/hyros-metrics-guide) | Direct full event stream, bulk exports, scoped API, warehouse feed, safe SDK |
| Actionability | [RedTrack journey and optimization rules](https://www.redtrack.io/platform/features/) | Reproducible evidence → diagnosis → impact estimate → human-approved action |
Do not adopt claims such as “100% accurate attribution” as engineering guarantees. Make *measurement quality, reconciliation and provenance* the product advantage.

## Contract A — Universal instrumentation & event access (TRACKING-002)
- One lightweight async JS SDK/GTM option for external websites, AI Studio, legacy/modern SPA and server-rendered sites; native HighLevel sites/funnels instrumented automatically; no forced redirects.
- Standard semantic events: page_view, page_leave, CTA_click, form_view, form_submit_success/failure, checkout_view, checkout_start, payment_attempt, order_paid, refund, subscription_renewal, appointment, call_qualified, webinar/video progress; only instrument observable and authorized actions. Extensions may emit validated namespaced custom events.
- First-party/custom tracking domain where feasible; documented browser storage, cookie policy, consent and performance impact. Server-to-server events are signed, scoped and rate-limited.
- Event envelope: schema_version, event_id, event_name, occurred_at_utc, received_at_utc, location/site/property IDs, anonymous_id, session_id, optional verified contact_id, page/step/funnel/campaign/variant revision IDs, referral/UTM/click IDs, consent state, source/platform, event provenance, sanitized properties.
- Client input is untrusted: no public secret, no arbitrary raw PII, bounded schemas, allowlisted custom fields, payload/rate limits, bot/test flags, service availability and dropped-event counters.
- Public authenticated GET event APIs with cursor pagination and stable ordering; query by site, time, visitor, session, contact and event type. Include webhook stream, backfill, bulk export to authorized cloud storage, optional warehouse sink, retention settings and cost/usage visibility.
- Exports distinguish event-time and ingestion-time, use explicit timezones, encode currency/FX provenance and preserve raw observations after dedup rather than deleting evidence.

## Contract B — Consent-aware journeys (TRACKING-003)
- Preserve sequential anonymous activity across authorized pages; after verified login/form/order, link earlier *eligible consented* sessions deterministically to a known contact. No covert fingerprinting or hidden identity enrichment.
- Continuation across separately owned domains only when explicit tenant/domain permission and consent allow it. Prefer signed short-lived link/redirect handoffs and server-observed verified identifiers; do not assume third-party cookies work.
- Store typed identity edges (anonymous → verified contact), evidence, confidence/known-unknown flag, timestamp and unlink/merge history; do not merge unrelated contacts based solely on IP/device patterns.
- Support privacy lifecycle (opt-in/out, consent version/region, withdraw, export/delete, retention, tenant transfers) and record discontinuities when data cannot be linked.
- Allow timeline queries for both converters and non-converters, returning observed transitions including repeats/self-loops; show missing data and sampling explicitly.

## Contract C — Authoritative commerce & offline conversions (TRACKING-004)
- Standard order ledger linked to identities/journeys: native HighLevel Payments/Orders, WooCommerce, Shopify, Stripe and documented S2S adapters; non-native platforms via signed webhook/API.
- IDs and status machine separate cart intent, checkout started, pending, payment attempt, paid, partially refunded, refunded, chargeback, void, renewal, and offline closed-won with verifiable value.
- Dedup via provider_event_id / order_id / transaction_id and idempotency keys, with late/out-of-order event upserts and immutable correction log. No revenue counted from thank-you page impression alone.
- Clear definitions: gross/net, initial vs recurring revenue, discounts, tax, shipping, fees, partial refunds, currency and FX conversion timestamp/source.
- Order bump/upsell and multi-product per-item reporting without double-counting; refund/rebill correction should update results historically while keeping original records.
- Reconcile accepted/successful payments against CRM order totals and emitted ad conversions; expose mismatches and recovery actions.

## Contract D — Attribution, spend & economics (TRACKING-005)
- Model choices: first-touch, last-touch, first paid, last paid, linear, U-shaped, time-decay, rules-based; optional data-driven model only with explainable assumptions and credible sample size.
- Track every observed touchpoint and source transitions, ad click IDs, UTM, referrer, ad creative identifiers, email/call/appointment and qualified opportunities when allowed; distinguish multi-touch **credit allocation** from causal uplift.
- Configurable conversion windows; date of click vs date of conversion, timezone, delays, return visits, referral/direct treatment and non-attributable bucket.
- Authorized OAuth connectors for cost and campaign hierarchy (Meta/Google/TikTok initially); reconcile ad/adset/campaign-level costs, historical changes, attribution windows, dedup and currency; surface sync age.
- Report orders, gross and net revenue, MER, ROAS, CPA, CAC, LTV by cohort and margin **only when source costs are known**; show denominators and qualification rules.
- Recompute alternative attribution models against retained event history with versioned model definitions and explainable per-order credit. Both cohort and campaign/date range comparisons must be reproducible.

## Contract E — Delivery to ad networks, QA and observability (TRACKING-006)
- Delivery engine maps verified source events to Meta CAPI, Google Ads, TikTok and extensible S2S destinations with explicit rules and permissions; browser/server dedup shares event_id.
- Diagnostics: collected, validated, dropped, deduplicated, queued, sent, accepted, rejected, retried, dead-letter and replayed, by destination and event with documented reason codes.
- OAuth/token secrets server-side; configurable match fields with regional and consent restrictions; prohibit forwarding unconsented data. Track match-quality feedback without inventing acceptance metrics.
- Retry and dead-letter with bounded TTL, idempotency and authorized replay; safe safeguards for platform-specific restrictions; alert when orders and accepted conversions diverge.
- Privacy and fraud QA: declared consent, bot/test filtering, first-party domain verification, referral spam defenses, opt-out propagation, optional IP anonymization and clear data retention.

## Contract F — Decision intelligence, not vanity metrics (TRACKING-007)
- Custom funnels/paths, drop-offs and cohorts for any external/native website using event definitions. Show every observed step, ordering, duplicates, and missing steps, rather than hiding data to simplify diagrams.
- Visualize returning/non-returning customers, time-to-convert, page/checkout and campaign/creative variants; compare by device, region, source, ad, offer and product; dynamic date filtering.
- Stable campaign/offer/variant revision IDs and configuration snapshots on activation, not automatic copies of builder pages. Do not pretend current page content is historical page content.
- Revenue impact accounting uses **authoritative net value** from Contract C, with stated observation and attribution coverage.
- Evidence-first AI: each recommendation identifies the metric, timeframe, cohort, confidence, potential confounders, the impacted revenue and a reversible experiment. Never silently edit live funnels, ads, budgets or customer data.
- Configurable columns, dashboards, scheduled reports, exports, raw-event drilldown, documented APIs, and white-label agency/client permission boundaries.

## Release sequence requested
**P0, platform foundation (must ship before marketing “full attribution”):** Universal event schema, native + external event access, controlled identity, API/export, and verifiable transaction/order lifecycle. Unlock independent analysis without duplicate trackers.
**P1, performance parity:** Revenue-ledger reconciliation, ad spend connectors, multi-touch reports and CAPI delivery quality; click → paid → refunded path end to end.
**P2, differentiation:** Cross-site funnel intelligence, version-aware experiment comparisons, grounded AI recommendations, privacy-by-default agency white-label and safe activation workflow.
**P3, expansion:** Calls/offline, affiliates, advanced cohorts, LTV predictions and partner marketplace SDKs, after verifiable source data exists.

## Acceptance suite — should be automated on an isolated test tenant
| ID | Observable pass condition |
| --- | --- |
| T01 | JS installed on non-HighLevel site and native HighLevel funnel sends page and CTA events with stable IDs; browser consent-off session sends no nonessential identifiers/events. |
| T02 | Permissioned API retrieves paginated events for one site across weeks in correct timestamp order; anonymous users are included, sensitive fields restricted; arbitrary other-tenant read is denied. |
| T03 | Same consenting anonymous browser visits sales, exits, returns, submits form and buys: timeline includes verified touches in order and is queryable before/after conversion. |
| T04 | Cross-domain verified link preserves eligible journey; unrelated browser with same IP is not merged; consent withdrawal stops linkage and permits deletion. |
| T05 | Browser purchase event, platform checkout callback and retry represent **one paid order**, preserve duplicates as marked records and show one net-revenue fact. |
| T06 | Failed payment and thank-you refresh do **not** count as paid; two order items, an upsell, renewal, partial refund and chargeback produce correct corrected balances. |
| T07 | Ad spend and one paid order reconcile across gross/net/CAC/ROAS, with stable UTM/ad IDs, cost timestamps, FX provenance and no fake ROI when cost missing. |
| T08 | First/Last/U-shaped models recalculate from the same event log with reproducible credit outputs; attribution unknowns remain visible. |
| T09 | Consent-approved Meta CAPI/other S2S delivery logs send ID, platform response, acceptance, retries, dedup and failure reason; unauthorized forwarding denied. |
| T10 | A deliberately failing conversion postback is retried and recoverable; dead-letter/replay does not create a second order or double conversion. |
| T11 | A live A/B/offer version change preserves a stable version identifier and reports which version observed each event; no fabricated historical HTML archive. |
| T12 | Visual funnel reports include non-converters and real repeated page/checkout transitions; step filters and counts reconcile to raw events within declared rules. |
| T13 | A client role accesses only that client's reports, events and assets; agency role sees authorized rollup; location transfer does not leak historical contacts. |
| T14 | Export/delete a test identity and expire a chosen data-retention window; test and bot traffic are explicitly flagged, with audit record and no accidental order loss. |
| T15 | For a measurable sample, compare HighLevel paid orders, payments, event ledger and accepted ad-network conversions. Dashboard shows **reconciliation gaps and source reasons**, not an unsubstantiated accuracy percentage. |
| T16 | AI suggestion displays directly inspectable supporting events/metrics and requires human approval before any live action; bad/missing evidence yields no recommendation. |

## Delivery and security requirements
- Document rate limits, retention tiers, API scopes, consent semantics, storage location/data residency, SLA for event ingestion/delivery, billing per events/sites/exports, and model-cost transparency.
- Explicit feature availability per plan/agency/location; no assumptions that AI Studio Cloud per-project DB equals access to HighLevel's native tracking events.
- Avoid shared backend IDs or access tokens when installing snapshots across sub-accounts; secure tenancy and RLS are prerequisite to agency scale.
- Publish reference SDK for JS and server events, schema examples, webhooks, API changelog, deprecations, integration tests and transparent troubleshooting.

## Linkage to the existing feedback program
- Existing [TRACKING-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/64) owns consistent Meta Pixel/CAPI/GTM configuration **across builders**. This initiative deliberately does not duplicate that request.
- [REPORT-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/60) owns generic data-table customization; this proposal requires measurement-specific event-level analysis and links back instead of recreating generic tables.
- [External Tracking roadmap](https://ideas.gohighlevel.com/external-tracking) includes narrower requests for raw GET and report widgets. Extend and deduplicate with existing upstream requests where available, rather than claiming a new feature was accepted.

**Product asks filed as separate GitHub issues:** TRACKING-002 event stream, TRACKING-003 journey identity, TRACKING-004 commerce truth, TRACKING-005 attribution economics, TRACKING-006 conversion distribution, TRACKING-007 actionable diagnostics. Their status remains **New** until explicit HighLevel response and verified release.
