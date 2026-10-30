# Make HighLevel the open tracking and attribution platform agencies no longer need to replace (2026-10-30)

**For HighLevel Product Leadership, External Tracking, Ads, Payments, Reporting and Developer Platform teams.**

## The opportunity
HighLevel already has external website tracking, page/form analytics, CRM attribution, workflow events, native funnels, checkout, payments and agency distribution. We want to **connect these into one provable, accessible measurement system** that competes credibly with HYROS, RedTrack and custom marketing analytics—without forcing agencies to install or pay for a second tracking platform.

The most important requirement is not another reporting widget. It is **permissioned access to complete, provenance-rich event data, with verifiable commerce and privacy-preserving identities**. Dashboards, AI Studio apps and campaign optimization can then use the *same source of truth*.

## Six concrete feature requests
1. [TRACKING-002 — Open event stream and public APIs](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75): all native/external events, anonymous activity, cursor queries, webhooks, export and warehouse feeds.
2. [TRACKING-003 — Cross-domain journeys](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/76): consent-aware anonymous → known person identity, observed history, link/unlink audit without invasive fingerprinting.
3. [TRACKING-004 — Revenue source of truth](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/77): native/external paid orders, subscriptions, refunds, disputes, offline deals and deduplication.
4. [TRACKING-005 — Transparent multi-touch + profitability](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/78): multiple models, ad spend, ROAS/CAC/MER, FX, unknown sources and reproducible reports.
5. [TRACKING-006 — Reliable ad conversion signals](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/79): consent-aware Meta/Google/TikTok delivery, browser/S2S dedup, accepted/rejected/retry logs and reconciliation.
6. [TRACKING-007 — Funnel intelligence and actionability](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/80): non-converters, true drop-offs, offer/variant history, evidence-linked AI analysis and safe approval workflows.

[Read the complete engineering specification, competitive baseline and 16 acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## Proposed implementation order
**Foundation:** Stable cross-site event contract + raw APIs + consent-safe identity + authoritative orders. These eliminate the need for an independent collector.

**Performance parity:** Multi-touch attribution + spend and CAPI routing with audited quality, corrections, refunds and offline conversions.

**Differentiation:** Source-of-truth journey graphs, campaign version-aware optimization, white-label agency dashboards and explainable AI decisions grounded in events.

## What a successful live demonstration must show
A consenting visitor arrives at a non-HighLevel WordPress page from a paid ad, visits multiple pages, leaves, returns from email, starts checkout, then pays via an external commerce platform. We can retrieve the complete observed anonymous-to-known journey via public scoped API, reconcile the payment including a later refund, compare first/last/U-shaped attribution, validate ad-platform signal delivery, see spend and net profit, and explain drop-offs among *non-buyers*. Without second tracking infrastructure, fabricated attribution or data leaking between sub-accounts.

We are **not** asking to rebuild capabilities that have already shipped, expose unsafe private internals, or claim impossible 100% attribution accuracy. We are asking HighLevel to become the most trustworthy and interoperable measurement platform.

## Decision requested from HighLevel
Please assign a product/engineering owner, identify which sub-capabilities are already available with official API documentation, which are planned and which need design, and share whether a partner pilot can be organized around the observable acceptance suite. We can help validate this from a real agency operator use case. Until explicitly confirmed, all requests remain **New** (not Planned).
