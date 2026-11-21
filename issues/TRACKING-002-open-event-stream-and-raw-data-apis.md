# TRACKING-002 — Events: Governed open event stream

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

## Public demand and Town Hall question — November 19, 2026

The [official External Tracking feedback board](https://ideas.gohighlevel.com/external-tracking) has other customers requesting **GET API access to analytics data and native Dashboard/Custom Report widgets**. HighLevel already provides external page/form analytics and a workflow event trigger; these are not equivalent to a documented permissioned read/export of the underlying anonymous event history. The exact full event query contract remains a **request**, not a proven platform absence in every internal endpoint. [Town Hall script](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/townhall-2026-11-19-media-tracking-chatwidget-brief.md); [our 16 acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md).

## November 19 Town Hall follow-up

Ivo posted the **raw External Tracking GET API/MCP** request in the November 19 Town Hall Zoom chat at **18:11:37**, including anonymous sessions, custom events, historical data, revenue/refunds/ad spend and a link to the [full tracking proposal](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md). **No direct written response** to this question appears in the saved chat; verbal replies were not transcribed. Status remains **New** until an engineering owner confirms scope. [Evidence](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/townhall-2026-11-19-creator-tracking-media-evidence.md).

## November 20, 2026 — Discovery follow-up, not yet shipped

In the November 20 discovery call, Ivo described connecting external visitor events to **personalized promotions, dynamic countdown timers, repeat-product-page visits, Workflows and AI Studio**. The product contact's meeting notes list exploring behavioral tracking data access, API/MCP, consent and privacy with the External Tracking team. This is a **research/action item**, not an API release or roadmap deadline; the raw event access request remains New.
