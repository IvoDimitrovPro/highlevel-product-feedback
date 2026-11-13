# HighLevel Product Feedback — Ivo Dimitrov

This repository is the evidence archive. **GitHub Issues and the linked Project are the daily work surface.** One feedback item has one Issue permalink; duplicate sources are listed on that issue.

## Meeting Room webinar readiness — 2026-11-13

- [Praveen's 2026-11-13 reply](sources/highlevel-meeting-room-webinar-response-2026-11-13.md) - planned webinar UI, acknowledged observations, and explained pwd behavior.
- [MR-219 - Planned dedicated webinar UI](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/89) - confirmed broad initiative, without promising individual feature delivery.
- [Prioritized webinar blocker list](references/meeting-room-webinar-priorities-2026-11-13.md) — new live-test issues and existing related requests, ordered by host/attendee impact.
- [Sanitized live-test evidence](sources/meeting-room-webinar-test-2026-11-13.md) — observed behavior, official documentation and verification boundaries; no private room URLs or attendee screenshots.
- [Meeting Room issues in GitHub](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues?q=is%3Aissue+label%3A%22Product%3A+Meeting+Room%22) — public tracker and ongoing status.

## Strategic tracking and attribution proposal — 2026-10-30

- [Executive request to HighLevel](references/tracking-executive-request-to-highlevel-2026-10-30.md) — single link to forward to the product team.
- [Full engineering contract and 16 acceptance tests](references/tracking-open-attribution-platform-2026-10-30.md) — cross-platform event access, consent-aware journeys, verified revenue, attribution, CAPI quality and actionable analytics.
- The six distinct requests are [TRACKING-002](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75) through [TRACKING-007](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/80). Existing [TRACKING-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/64) remains the owner of consistent pixel/GTM setup across builders.

## Start here — visual GitHub Projects boards

- **[Meeting Rooms — Kanban](https://github.com/users/IvoDimitrovPro/projects/1/views/9)** — all Meeting Room requests, including cross-product integrations, grouped by Status.
- **[Active — Kanban](https://github.com/users/IvoDimitrovPro/projects/1/views/1)** — default board for New / Acknowledged / Planned items across all products.
- **[All Products — Kanban](https://github.com/users/IvoDimitrovPro/projects/1/views/10)** — complete board, including shipped and closed items.
- **[All / Archive — Table](https://github.com/users/IvoDimitrovPro/projects/1/views/2)** — full searchable table with all statuses.

Click any card for observations, expected behavior and the HighLevel response. Dragging a card changes its **Project status** immediately; retain a source-backed Issue/CSV status update before running the repository-to-GitHub sync, which otherwise treats local issue files as authoritative.

## Other focused views

- [Priority / Next to send](https://github.com/users/IvoDimitrovPro/projects/1/views/8) — New items with High impact.
- [Needs HighLevel Reply](https://github.com/users/IvoDimitrovPro/projects/1/views/3) — New items.
- [Planned](https://github.com/users/IvoDimitrovPro/projects/1/views/4)
- [By Product](https://github.com/users/IvoDimitrovPro/projects/1/views/5) — active items with Product and Feedback type fields.
- [Shipped](https://github.com/users/IvoDimitrovPro/projects/1/views/6)
- [Closed / History](https://github.com/users/IvoDimitrovPro/projects/1/views/7)

The Project is linked to this repository. It tracks Status, Product, Feedback type, Impact, Source, HighLevel response, Date reported, and Last verified. GitHub reserves the exact custom field name `Type`, so the board calls it `Feedback type`; Issues also carry the requested `Type: ...` labels.

## Status definitions

- **New** — no verified HighLevel acceptance or delivery; reply may be missing.
- **Acknowledged** — HighLevel recognized the request, with no delivery commitment.
- **Planned** — HighLevel said it is planned/in development; delivery is not verified.
- **Shipped** — documented or verified as available.
- **Closed — Works as designed** — expected behavior or a supported-flow misunderstanding.
- **Closed — Not pursuing** — intentionally dropped.

Closed and shipped issues stay searchable. Only New / Acknowledged / Planned belong in Active.

## Sources and evidence

- [Meeting Room source history](sources/meeting-room-feedback-history.md)
- [HighLevel point-by-point Meeting Room response](sources/highlevel-meeting-room-response-2026-09-25.md)
- [Zoom feedback index — 2026](sources/zoom-feedback-index-2026.md)
- [Official capability check](references/official-feature-status-2026-09-25.md)

The export contains 33 date-matched Zoom chat files and 435 messages authored by `Ivo (pr. Evo)`. Issues include only distinct product feedback, not every message. Zoom dates and source files are recorded per issue. The point-by-point beta response excerpt supplied by Ivo is preserved separately; its original forum URL was not included.

[MR-145](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/29) is the active audio-only/transcript workflow; [MR-144](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/53) archives the separate-track idea as not pursuing. `active-items.csv` is an export for offline reading; edit and manage items in the Project and Issues.

## Maintenance

Before publishing changes, run `python scripts/audit_feedback.py`. It checks issue structure, duplicate IDs, broken relative links, accidental personal data/secrets, and encoding problems.

Use `python scripts/sync_github.py` for a dry run and `python scripts/sync_github.py --apply` to synchronize issue bodies, labels/statuses, and Project fields from the repository. Commit and push only after the audit and a final dry run return clean.
