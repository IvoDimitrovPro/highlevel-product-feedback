# External Tracking × OfferFlow — Product brief for HighLevel

**Prepared for:** Shivangi Awasthi and HighLevel's External Tracking / Workflows / AI Studio teams
**Date:** November 21, 2026
**Context:** Follow-up to the November 20 product-discovery conversation. The requested deliverable is a **functional brief or prototype** of our WordPress-based OfferFlow tracking, countdown and personalization workflow.
**Purpose:** Build on HighLevel's existing External Tracking, native sites/funnels, CRM, payments, Workflows and AI Studio. Give agencies **reliable, permissioned, reusable behavioral data and rules**, not only predefined analytics widgets or one new countdown feature.

## The business outcome

We need to understand: **who** was reached (when legitimately known), **which experience** they actually saw, **what they interacted with**, **what offers and prices they were eligible for**, **where and why they stopped**, **what they eventually purchased/refunded**, and **which actions we can take next**.

The outcome is a complete, consent-respecting customer-journey/offer context that can power:

- **Audience understanding:** meaningful returning/new segments, progression, recurring objections and bottlenecks, offer and ad/creative performance.
- **Individualized customer experiences:** dynamic pages, banners, countdowns, CTAs, discounts and next steps driven by explicit, server-enforced rules.
- **Behavioral automations:** targeted follow-ups, sales notifications, suppression rules and lifecycle journeys through HighLevel Workflows.
- **Extensibility:** other native GHL products, AI Studio projects and external authorized applications use the **same event stream, segment state and evaluation APIs** to implement use cases not anticipated by a fixed UI.
- **Measurable business decisions:** conversion, net revenue, margin-aware economics and ad spend reconciled to genuine purchases, with known coverage and uncertainty.

**Design principle:** Deliver strong turnkey defaults for nontechnical customers, **and an open event/decision engine for everyone else**. Don't hardwire one sales funnel, analytics layout, CMS, contact-first model or countdown type.

## What we have built — OfferFlow v0.25.0 (local WordPress/WooCommerce package)

The source for this brief is our latest available OfferFlow `v0.25.0` package, particularly its **Telemetry, Analytics, Attribution, Promotion Activation, Commerce/Promotion Separation, Runtime and Experimentation contracts**. This is a **functional reference, not an assertion that HighLevel must copy our code**.

| Component | Existing OfferFlow behavior / verified package contract | Why the HighLevel platform should expose this capability |
| --- | --- | --- |
| Identity and sessions | First-party anonymous browser and 30-minute inactivity session IDs, observed acquisition source, browser journeys | A consent-aware longitudinal journey with explicit identities and discontinuities |
| Event ledger | Observed pages, transitions, CTA and section exposures, scroll, visible/idle/hidden time, form states, checkout milestones, performance metrics | Raw events with reliable semantics, not only aggregated page-view numbers |
| Commerce truth | Ordinary Woo orders/purchases/refunds tracked even without a promotion; Woo paid-order state is authoritative | Native and external commerce feed one verifiable transaction ledger |
| Offer/promotion | Separates commerce context, product, promotion eligibility, frozen per-person deadlines, state and server-authoritative prices | Personalization without false urgency, inconsistent price or deadline resets |
| Segmentation/experiments | Distinct assignment, observed exposure, conversion/outcome and acquisition evidence | Correct cohort comparison and safe adaptive experiences |
| Analytics | Overview + Deep Dive; people/session/order denominators, paths/Sankey, abandonment, ad-cost and first-party evidence, products/offer variants, quality warnings | Flexible reporting, customer journeys and AI-ready **evidence**, not vanity metrics |
| Exports | Decision-complete Markdown/JSON, forensic raw session/event ZIP with bounded reads and coverage warnings | Authenticated event GET/API, reproducible exports and structured AI inputs |

**Important scope differences:** A future generic Web SDK and GHL adapter are described as **intended** in OfferFlow's runtime contract, not implemented parity. Media/video progress instrumentation is a **future adapter**, not automatically collected today. Some provider/daily-spend, FX and LTV analysis remains intentionally unavailable when evidence is missing. We do **not** claim our current plugin implements every requested item below.

## Four examples from our actual campaign needs

### 1. Behavior-based follow-up

A prospect views the same product page **five times** across eligible sessions but has not purchased.

- Collect first-party `page_view` or `product_view` with event time, URL/product ID, anonymous visitor/session ID, consent status and verified Contact ID *when available*.
- Query an authorized **rolling window with deduplication rules**, not five artificially inflated browser refreshes.
- Workflows evaluate `distinct_product_visits >= 5 AND paid_order_count = 0 AND marketing_consent = true`.
- Send a targeted, product-specific follow-up through the correctly consented channel, or notify a sales rep. Suppress or cancel when a payment is confirmed.
- AI Studio or the agency should be able to adjust the threshold, channel, interval and content without changing HighLevel's internal code.

**Open design question:** Can the existing External Tracking Event trigger access a cross-session counter, time window and related product/offer context in a reliable, queryable way today? Which endpoint/action provides this?

### 2. Personalized promotion with a genuine deadline

A customer completes a qualifying quiz and is granted an eligible offer. Our real OfferFlow model supports:

- Visitor journey tracking beginning **before** the quiz, without starting the promotion clock.
- Explicit **server-side enrollment/grant** only after successful quiz completion/verified condition.
- A **minimum six-hour duration**, then expiry at the **next applicable local 00:00 or 12:00 cutoff** in `Europe/Sofia`. For example, entry at 08:00 means the minimum is 14:00 and the deadline is 00:00; entry at 05:00 means the cutoff is 12:00.
- The first eligible plan and absolute deadline are **frozen** across reloads, revisits and presentation variants; changes to campaign rules apply to future enrollments rather than rewriting history.
- Price, visible countdown, cart, upsell and checkout use a single server-authoritative offer state. A direct promo URL without entitlement should not silently grant or renew a discount; standard traffic continues to work without any promotion.
- The rule and result can be inspected through API/MCP with `offer_id`, `grant_id`, `promotion_generation`, `eligible_from`, `deadline_at`, `timezone`, `applied_price`, `policy_revision`.

**Request:** HighLevel does **not** have to build this exact timer. It needs to expose the identity, event, grant/state, policy and secure execution hooks so a native workflow/AI Studio/custom component can build any fair personalized promotion. It must never let a cosmetic client-side timer override actual checkout price.

### 3. What on the page causes leakage?

We need *observed* rather than assumed behavior:

- Did the visitor actually reach the pricing section? For how long was it visible, and was the tab active?
- Was CTA #2 exposed, clicked and followed by a real next page? Did they see the FAQ, guarantee or bonus section?
- Did they start a form, fail validation or leave during checkout? Collect **state/result**, never passwords or the entered content.
- Which page, offer, experiment variant and **page/config version** was served at the time?
- Can we compare real cohorts with repeat visits, attention, checkout friction, real-user performance and verified net revenue, without labeling correlation as causation?

OfferFlow's current Analytics contract keeps these in **Deep Dive** with explicit coverage limits and distinguishes assigned experiment variants from actual exposure.

### 4. Real revenue and cross-channel decisions

A user arrives via an ad, reads content, returns via email, buys an initial product, renews and later receives a partial refund.

- Connect **only observed, legitimately linkable** touches to the verified Contact and actual order IDs.
- Store advertising UTM/click ID/campaign/ad set/ad IDs separately from the internal GHL funnel/offer/campaign ID.
- Sales are **server-confirmed payment facts**, not thank-you page views; each retry, webhook or browser event has a deduplication/idempotency key. Keep partial refunds, renewals, taxes, coupons, currency and order lines distinct.
- Let us compare **first observed**, **purchase session**, **prior assists** and observed source sequence, plus optional selectable attribution models. Provider-reported Meta ROAS remains explicitly separate from first-party order-based ROAS.
- Let us segment by contact/customer/cohort, traffic source, campaign, ad, page/offer revision, product/price-state and outcome; export for our own decision tools and AI agents.

## Data/events required: minimum normalized contract

We want a **versioned, documented schema with stable identifiers** for first-party JS and signed server-side events; all fields scoped to the owning agency/location/property.

**Always:** `event_id`, `event_schema_version`, `event_name`, `occurred_at_utc`, `received_at_utc`, `source/collector`, `location_id`, `property/site/domain_id`, `environment` (test/production), `consent/purpose`, `tracker_version`.

**Identity and session:** `anonymous_id`, `session_id`, verified `contact_id` (when applicable), identity-link source/effective time, acquisition `referrer` / `utm_*` / `click_ids`, device category and approximate region *when permitted*. Do not merge unrelated people by shared IP.

**Experience:** `page_id/url/path`, `page_revision/fingerprint`, `funnel_id/step_id`, `experiment_id/variant_id`, separate `assigned` and `exposed` timestamps, `section_id`, `cta_id`, `scroll_depth`, `visible_ms`, `elapsed_ms`, `interaction_active_ms`, `validation_status`, `checkout_step`, `performance_vitals`, safe allowlisted custom metadata.

**Commerce/personalization:** `product/variation_id`, `order_id`, `payment/transaction_id`, `currency`, gross/net/refund components, `offer_id`, `promotion_id/generation`, `eligibility_grant_id`, `price_state`, `quoted/applied_price`, `deadline_at`, `policy/config_revision`, `campaign_id` (internal vs ad-platform namespace), signed status/receipt provenance.

**Completeness:** explicit `observed/estimated/unknown` or equivalent evidence label; reason for missing fields, duplicates, consent restrictions, lost events and bounded sampling. Never fabricate unseen steps, costs or conversions.

**Optional future event adapters:** video/media progress, product use, quiz category/score, appointment outcomes, email delivery/click, community, chat and calls, each with precise provider semantics and consent. The ability to add custom named events and object links is more important than shipping a closed hardcoded list.

## What we need HighLevel to provide

### P0 — Accessible, trustworthy event foundation

1. **Native + external event read API/MCP**, cursor-pagination, filter by time/property/anonymous/session/Contact/event/product; structured historical backfill/export, scoped webhooks, rate/retention policy and versioned schema. Same semantics in native Sites/Funnels and externally hosted WordPress/AI Studio sites.
2. **Consented identity/journey linking**, verified anonymous-to-known transitions, limited cross-domain handoff, privacy deletion/withdrawal and clear unlinked segments. No covert fingerprinting or raw-IP identity.
3. **Transaction reconciliation** with actual GHL payments and supported external sales: paid/partial/refund/recurring, exact IDs, deduplication, and clear gross/net/FX provenance. Report completeness rather than invented attribution.
4. **A queryable event + derived-segment/aggregate layer** usable in Workflows, API/MCP and AI Studio; not just triggering a workflow once on a named event.

### P1 — Rules and customizable experiences

5. **Reusable behavior-rule builder/API**: count/distinct sessions, windows, ordered sequences, inclusion/exclusion, cohorts, product and campaign filtering, visit-depth/engagement conditions, aggregate values and consent. Trigger and revoke journeys safely.
6. **Personalized offer state APIs:** eligibility/grants, frozen server-calculated deadlines, price/product context, explicit promotion generations and immutable history; secure presentation to site builder/AI Studio components, not dependent on a hardcoded GHL countdown.
7. **CRO/event instrumentation SDK** for visible sections and CTA exposure/click, form/checkout milestones and optional performance metrics with known semantics. Configurable event taxonomy, no raw form data or passwords.
8. **Agency-defined analytics/data exports:** raw and aggregate queries, saved view definitions, configurable filters/columns/cohorts, human and machine formats, coverage warnings. Ready-made dashboards remain valuable defaults.

### P2 — Optimization and connected ecosystem

9. **Measurement-quality tooling:** captured/rejected/duplicate events, browser↔server and ad network deduplication, webhook retries, status/latency/error reasons, test-vs-live separation.
10. **Cross-product extensibility:** scoped authorization for AI Studio, external AI agents, CRM/Workflows, email/SMS, Courses, Media and other GHL products using the same identity and event contracts.
11. **Attribution and decisions:** external ad spend/creative data through connectors, consistent currencies and costs, model comparisons, accountable funnel-loss signals and evidence-backed suggestions that an agency can approve before changing live campaigns.

## Acceptance demonstration we request from HighLevel

Show these on an isolated test sub-account (or state exactly what is shipped / private beta / planned / out of scope):

| Test | Observable success |
| --- | --- |
| **D01 Event retrieval** | Script on external WordPress site and a native GHL page records consented events; GET API/MCP returns same chronological session history and safe metadata; a visitor without consent creates no nonessential identifiers/events. |
| **D02 Repeat interest** | Five qualifying views of product A across eligible sessions trigger one product-specific workflow for a consenting lead; an order cancels/suppresses follow-up. |
| **D03 Personal deadline** | Quiz completion grants an offer, 6-hour minimum + local noon/midnight boundary is frozen; reload/new page/new variant cannot restart timer or change checkout price. |
| **D04 Journey/engagement** | Section exposure versus merely loaded page, CTA clicks, elapsed vs visible/idle time, form-validation and checkout steps can be queried without raw personal form values. |
| **D05 Honest revenue** | One paid order + duplicate browser and webhook events yields one purchase, later partial refund corrects net revenue; source and provider metrics remain separately evidenced. |
| **D06 Personalized AI Studio** | An authorized AI Studio app queries a consenting visitor's approved segment and offer state to render the correct CTA/timer and can call an approved workflow. No access to unrelated contacts. |
| **D07 Versioned experiment** | One customer retains original eligibility/deadline across an A/B reassignment, while actual exposure and page/config revision are reported accurately. |
| **D08 Open analysis** | Agency exports raw evidence and a summary for a selected period; source, variant, product and buyer cohorts can be recomputed without relying on a fixed dashboard; missing coverage is flagged. |
| **D09 Privacy and isolation** | Multi-tenant API denies cross-location reads; consent withdrawal stops enrichment and supports user data export/deletion; same-IP visitors are not improperly merged. |

We **do not** need HighLevel to implement all nine as new native modules at once. **The highest-leverage first deliverable is the well-documented P0 data/identity/query contract that unlocks external and AI Studio implementations.**

## Delivery questions for Shivangi and the engineering team

1. Which raw event fields and history are retained today, and what **GET, stream, webhook, export or MCP** methods can expose them? Please provide endpoint/schema/scope examples and rate/retention limits.
2. Which behavioral **aggregates, sequences and segments** can a Workflow currently evaluate across anonymous/known sessions, rather than react only to single page views?
3. Is there a supported way to connect event/session/offer context to **AI Studio** and native builder components, without copying data through outside services?
4. What normalized link exists from External Tracking events to **orders, refunds, subscriptions and ad-source identifiers**, and how is consent/deduplication enforced?
5. Who owns each area (External Tracking, Workflows, AI Studio, Payments), and which items are shipped, gated, planned or outside scope? Can we test D01–D09 together?

## Source/reference links

- [Existing detailed Open Tracking & Attribution proposal](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md) — full 16-test analytics, revenue, consent, CAPI and measurement architecture. This brief **complements** it with OfferFlow personalization and offer-state needs.
- [TRACKING-002 — governed raw event access](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75), [TRACKING-003 — consented journeys](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/76), [TRACKING-004 — revenue truth](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/77), [TRACKING-007 — diagnostics and decisions](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/80), [CREATOR-001 — editable white-label GHL video templates](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/97).
- [HighLevel External Tracking current analytics](https://help.gohighlevel.com/support/solutions/articles/155000007809), [native workflow trigger documentation](https://help.gohighlevel.com/support/solutions/articles/155000002292-a-list-of-workflow-triggers), [External Tracking customer feedback board](https://ideas.gohighlevel.com/external-tracking).
- **Implementation reference inspected locally:** `OfferFlow v0.25.0` package, specifically `docs/ANALYTICS-CONTRACT.md`, `TELEMETRY-CONTRACT.md`, `ATTRIBUTION.md`, `EXPERIMENTATION-CONTRACT.md`, `COMMERCE-PROMOTION-SEPARATION-0.24.0.md`, `PROMOTION-ACTIVATION.md`, `RUNTIME-CONTRACT.md`, and `DATA-SAFETY-0.23.4.md`. Proprietary source code, credentials, customer data and server endpoints are not published here.

**Status:** Product requirements / discovery follow-up. The D01–D09 list and advanced APIs are requested behavior, **not** a statement that HighLevel currently supports them. Existing External Tracking page/form analytics and workflow event triggers should be reused, not reinvented.
