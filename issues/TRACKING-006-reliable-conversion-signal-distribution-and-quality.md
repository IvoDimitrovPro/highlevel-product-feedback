# TRACKING-006 — Make conversion distribution reliable, deduplicated and fully diagnosable

**Product:** Platform
**Type:** Integrations
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** [HighLevel External Tracking workflow trigger](https://help.gohighlevel.com/support/solutions/articles/155000002292); [RedTrack tracking and postbacks](https://help.redtrack.io/knowledgebase/kb/conversion-tracking/); [HYROS offline conversion guide](https://hyros.com/updates/offline-conversion-tracking/) — checked 2026-10-30

## Observed
HighLevel already has tracking/workflows and channel integrations; a universal per-event delivery ledger, mapping, backfill and replay system across Meta CAPI, Google, TikTok and other authorized destinations was not verified in the current official feature review. This request extends, not replaces, the existing [TRACKING-001 pixel consistency issue](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/64).

## Why it matters
A conversion recorded in CRM is not necessarily delivered or accepted by an ad platform. Duplicate browser/server events, missing click IDs and silent API failures undermine both optimization and data trust.

## Expected
Offer managed browser + S2S event mapping, stable event_id deduplication, destination-specific consent enforcement, channel tokens stored only server-side, encrypted least-privilege configuration, match-quality diagnostics, per-destination accepted/rejected/retried/dead-letter status, bounded replay/backfill, rate limits and delivery logs. Support successful, qualified and offline conversions with configurable routing, platform restrictions and no duplicate purchase signals. Include a side-by-side reconciliation dashboard: source-of-truth orders vs ingested events vs routed events vs accepted conversions, with lag and explainable discrepancies.

[Full product contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## HighLevel response
Not verified as end-to-end available or committed; parts of native pixel/CAPI functionality already exist.
