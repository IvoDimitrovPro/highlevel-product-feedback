# TRACKING-003 — Provide consent-aware anonymous-to-customer journeys across domains and devices

**Product:** Platform
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** [HighLevel attribution rules](https://help.gohighlevel.com/support/solutions/articles/48001219997-understanding-attribution-traffic-sources); [External Tracking domain and iframe controls](https://help.gohighlevel.com/support/solutions/articles/155000009476-field-mapping-and-iframe-form-tracking-in-external-tracking) — checked 2026-10-30

## Observed
HighLevel supports native/external tracking, contact attribution and domain controls. Its public documentation does not establish a complete queryable anonymous visitor timeline that later joins to a contact across owned domains and verified touchpoints. Cross-domain iframe form support does not by itself establish cross-domain person identity.

## Why it matters
Knowing only First/Latest attribution cannot explain repeat visits, intermediate campaigns, abandoned checkouts, returning customers or the paths of visitors who never become leads.

## Expected
Provide stable privacy-aware anonymous/session identifiers, explicit consent-governed identity linking on verified login/form/order actions, deterministic cross-domain continuation only across authorized domains, and a clear audit trail for link/unlink/merge/split. A timeline must retain first, intermediate and last observed touchpoints, referrers, campaign/click IDs and confidence/source, with honest unknown states. Identity may not be inferred from probabilistic device fingerprinting; do not silently merge different people, and support DSAR deletion, consent withdrawal and data-retention rules.

[Full product contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## HighLevel response
No confirmed plan/delivery for the full cross-domain identity and reconstructable journey contract; supported contact attribution and external tracking already exist.
