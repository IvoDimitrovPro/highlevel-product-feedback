# TRACKING-004 — Tie attribution to verified orders, refunds and offline revenue lifecycle events

**Product:** Platform
**Type:** Integrations
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** [HighLevel attribution rules](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-traffic-sources); [RedTrack conversion updates](https://www.redtrack.io/platform/features/) — checked 2026-10-30

## Observed
Native payment and order reporting exists, but a documented **universal** source-of-truth lifecycle contract for HighLevel, external WooCommerce/Shopify/Stripe checkouts, subscriptions and offline deals tied to one journey was not established. A thank-you page view must not be counted as a confirmed sale.

## Why it matters
Attempted checkouts, successful charges, recurring invoices, partial refunds, chargebacks and cancelled orders can be miscounted or attributed inconsistently. Financial reporting and ad optimization need the same verifiable sale record.

## Expected
Define authenticated commerce connectors and S2S lifecycle events: checkout_started, payment_succeeded/failed, order_paid, partially_refunded, refunded, disputed, subscription_renewed/cancelled and offline_closed_won (only when value is verified). Use stable provider order/transaction IDs, idempotency, signed webhooks, out-of-order correction/replay, event timestamps, immutable audit trail, original currency, VAT/shipping/fees and clear gross/net/refund/FX methodology. Offer reconciliation against authoritative payment ledgers; correct historical attribution after refunds without deleting original evidence. Cover order bumps/upsells and avoid renewal versus first-order double counting.

[Full product contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## HighLevel response
No verified universal cross-platform order-lifecycle attribution implementation or delivery commitment recorded. Native HighLevel commerce capabilities should be reused, not rebuilt.
