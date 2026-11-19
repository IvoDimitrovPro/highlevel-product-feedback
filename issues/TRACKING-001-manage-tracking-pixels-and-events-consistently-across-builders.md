# TRACKING-001 — Pixels: Consistent setup across builders

**Product:** Forms / Surveys / Funnels / Stores
**Type:** Integrations
**Status:** New
**Impact:** High
**Date reported:** 2026-07-10
**Source:** [Zoom feedback index](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/zoom-feedback-index-2026.md) — 2026-07-10 Product Town Hall

## Observed
Ivo reported inconsistent Meta Pixel/CAPI/GTM setup and Purchase events not firing across surfaces.

## Why it matters
Inconsistent tracking produces unreliable attribution and weakens ad optimization and reporting.

## Expected
Provide one tracking hub for Meta Pixel/CAPI, GTM, and other tracking values that can be reused across Forms, Surveys, Quizzes, Funnels, Websites, and Stores, with consistent event diagnostics including Purchase.

## HighLevel response
No direct response or resolution recorded.

## Official changelog verification — 2026-11-13

**Result:** Partial implementation — request remains open.

**Already available:** Meta InitiateCheckout timing/deduplication and AddPaymentInfo payloads improved for configured funnels/websites/stores.

**Scope decision:** One reusable cross-builder Pixel/CAPI/GTM tracking hub with verified Purchase diagnostics remains unconfirmed.

**Official sources:** [Meta Pixel: Improved InitiateCheckout Accuracy & Enhanced AddPaymentInfo Data](https://ideas.gohighlevel.com/changelog/meta-pixel-improved-initiatecheckout-accuracy-enhanced-addpaymentinfo-data).

**Checked:** 2026-11-13. A feature announced only in Labs/private beta is not automatically generally available.

## September 17 roadmap reply; November 19 follow-up

On September 17, Rahul Louis Antony replied to Ivo's reusable tracking-hub request that **event tracking shown in the Funnels/Websites Stats tab revamp was planned for that quarter**. This is explicitly **not** a commitment for one shared Meta Pixel/CAPI/GTM credential hub reused by Forms/Surveys/Quizzes/Stores. Narrower [Meta Pixel event improvements](https://ideas.gohighlevel.com/changelog/meta-pixel-improved-initiatecheckout-accuracy-enhanced-addpaymentinfo-data) already shipped. Keep the global hub open and ask for its **separate scope/ETA**. [Evidence](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/townhall-media-tracking-widget-evidence-2026-11-19.md).
