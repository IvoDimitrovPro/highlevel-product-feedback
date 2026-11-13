# TRACKING-007 — Funnels: Explain drop-offs and revenue

**Product:** Reporting
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** [HighLevel external-site analytics](https://help.gohighlevel.com/support/solutions/articles/155000007809-analytics-for-external-tracking); [HighLevel site/funnel analytics](https://help.gohighlevel.com/support/solutions/articles/155000003094-how-to-use-site-and-funnel-analytics-in-highlevel); [RedTrack path and report features](https://www.redtrack.io/platform/features/) — checked 2026-10-30

## Observed
HighLevel offers site and external-form aggregate performance reporting. The reviewed docs do not demonstrate a fully configurable cross-platform behavioral journey/funnel engine that distinguishes every observed transition, partial checkout, campaign version and revenue consequence.

## Why it matters
Teams need to know **where** paying and non-paying visitors get stuck, which source/offer/page/version produced the result, and what evidence supports an improvement recommendation. Aggregate page views and contact-only attribution cannot answer these questions reliably.

## Expected
Provide a step-agnostic journey graph from verified events: entry → page → CTA → checkout_started → payment attempt → paid/refund/return (only when observed). Allow dynamic funnels for any site, cohort comparisons, event/path segmentation, first/returning views, device/source/ad filters, per-step drop-offs, date windows, campaign/offer/variant revision IDs and immutable release metadata. Separate historical configuration evidence from mutable page IDs; never claim archived page HTML exists when it was not captured. Explain unknown/direct traffic, missing observations, duplicate handling and data freshness; preserve real repeat/self transitions. Support exportable reports, agency dashboards, evidence-linked AI recommendations and safe, human-approved optimization actions.

[Full product contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## HighLevel response
No confirmation of a complete cross-platform journey-and-actionable-analysis feature. Existing site/funnel and external analytics are already shipped and should remain the foundation.

## Official changelog verification — 2026-11-13

**Result:** Partial implementation — request remains open.

**Already available:** Meta InitiateCheckout now fires when checkout starts, giving a clearer checkout-versus-payment abandonment signal.

**Scope decision:** Full source/page-version funnel dropoff diagnostics, verifiable revenue and next-action recommendations are outside that narrow change.

**Official sources:** [Meta Pixel: Improved InitiateCheckout Accuracy & Enhanced AddPaymentInfo Data](https://ideas.gohighlevel.com/changelog/meta-pixel-improved-initiatecheckout-accuracy-enhanced-addpaymentinfo-data).

**Checked:** 2026-11-13. A feature announced only in Labs/private beta is not automatically generally available.
