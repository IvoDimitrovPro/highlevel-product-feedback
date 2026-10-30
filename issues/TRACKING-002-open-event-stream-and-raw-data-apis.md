# TRACKING-002 — Make every tracking event accessible through a governed, open event stream

**Product:** Platform
**Type:** Integrations
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** [HighLevel External Tracking Analytics](https://help.gohighlevel.com/support/solutions/articles/155000007809-analytics-for-external-tracking); [HighLevel External Tracking roadmap](https://ideas.gohighlevel.com/external-tracking) — checked 2026-10-30

## Observed
HighLevel documents external page/form analytics and workflow triggers, but a complete documented raw-event read/stream/export contract for all anonymous and identified tracking events was not established. A related public request asks for External Tracking GET APIs and dashboard widgets. This is a **requested capability**, not a claim that no private/internal event storage exists.

## Why it matters
Agencies cannot reliably build independent attribution, loss analysis, customer journeys or AI Studio dashboards from aggregate reports alone. Rebuilding a second tracker wastes resources and duplicates data.

## Expected
Provide a versioned, scoped, multi-tenant event schema and read API for all supported native/external website, funnel, form, calendar, chat, checkout, custom and server-side events. Include stable event/session/site IDs, source, timestamps, documented attribution evidence, cursor pagination, backfills, webhook/stream subscriptions, bulk export to customer storage, schema/version discovery, quotas, idempotency, structured errors and least-privilege grants. Allow permissioned ingestion via browser SDK and authenticated server API, including *arbitrary external sites* without a HighLevel page-builder dependency. Do not expose raw PII by default. Preserve event provenance and explicit unknown fields rather than inventing values.

[Full product contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## HighLevel response
No confirmation yet that this full raw-event interoperability contract is shipped or committed. Existing External Tracking analytics and workflow triggers are acknowledged as available; they are not the same as complete raw-event export.
