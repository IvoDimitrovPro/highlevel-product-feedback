# HighLevel Product Feedback — Ivo Dimitrov

This repository is the evidence archive. **GitHub Issues and the linked Project are the daily work surface.** One feedback item has one Issue permalink; duplicate sources are listed on that issue.

## CRM redesign — live API/MCP/UI audit and flexible architecture (2026-11-14)

- **[CRM-001 — Configurable record-centric CRM](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/96)**: object-neutral workspaces instead of an enforced Contact-first or Opportunity-first system.
- [Real authenticated read-only UI, REST and MCP verification](sources/ghl-crm-live-readonly-audit-2026-11-14.md) — exact observed surfaces and limits, no client data shared.
- [Complete engineering proposal](references/crm-flexible-record-centric-architecture-2026-11-14.md) — flexible object and relationship workflows, consistent API/MCP, financial identity, 12 use cases, 12 acceptance tests.

## HighLevel official changelog reconciliation — November 13, 2026

- [Detailed 95-Issue changelog review](references/ghl-changelog-review-2026-11-13.md) — 296 screened releases (Aug–Nov), 32 direct official articles read, 1 confirmed shipped, 25 partial and 69 with no decisive complete match.
- [95-item machine-readable audit](sources/ghl-changelog-2026-11-13-audit.json) — status after review, source links, scope boundaries. **MR-201 Breakout Rooms** moved to Shipped.

## Meeting Room roadmap update — November 13, 2026

- [Verified source and release-scope notes](sources/meeting-room-roadmap-community-discussion-2026-11-13.md) — Praveen's community replies and Ivo's Bulgarian transcription confirmation.
- [MR-220: Transcription language settings are hidden](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/90) — Bulgarian transcription works, but language selection needs a better Start Transcribing flow and Auto default.
- [MR-221: Meeting audio/video reliability](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/91) — engineering's active focus, no committed delivery date.
- [MR-224: Multiple personal rooms](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/94) and [MR-225: Sub-account-wide default settings](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/95) — planned for November 2026.
- [MR-142: Recording Sharing](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/27) and [MR-223: Stop screen sharing](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/93) — targeted/planned for the week of Nov 16–22, not verified as shipped. Do not infer Client Portal sharing or host-control details beyond confirmed scope.

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

## Product Kanban boards

Each product area has its own saved Status-based board, with concise issue titles and Impact/Type visible.
The same GitHub Issue may appear in multiple related products without duplicating it.
The stable ID, URL, evidence, and HighLevel reply live on that one issue.

- [All Products — all statuses](https://github.com/users/IvoDimitrovPro/projects/1/views/10)

- [Meeting Rooms](https://github.com/users/IvoDimitrovPro/projects/1/views/9)
- [Webinars](https://github.com/users/IvoDimitrovPro/projects/1/views/11)
- [Communities](https://github.com/users/IvoDimitrovPro/projects/1/views/12)
- [Courses](https://github.com/users/IvoDimitrovPro/projects/1/views/13)
- [AI & AI Studio](https://github.com/users/IvoDimitrovPro/projects/1/views/14)
- [Email](https://github.com/users/IvoDimitrovPro/projects/1/views/15)
- [Funnels & Forms](https://github.com/users/IvoDimitrovPro/projects/1/views/16)
- [Checkout & Orders](https://github.com/users/IvoDimitrovPro/projects/1/views/17)
- [Tracking](https://github.com/users/IvoDimitrovPro/projects/1/views/18)
- [Reporting](https://github.com/users/IvoDimitrovPro/projects/1/views/19)
- [Platform & Builders](https://github.com/users/IvoDimitrovPro/projects/1/views/20)
- [CRM & Workflows](https://github.com/users/IvoDimitrovPro/projects/1/views/21)
- [SaaS & Affiliates](https://github.com/users/IvoDimitrovPro/projects/1/views/22)
- [Calendars & Events](https://github.com/users/IvoDimitrovPro/projects/1/views/23)
- [Media & Recordings](https://github.com/users/IvoDimitrovPro/projects/1/views/24)
- [Invoices & Documents](https://github.com/users/IvoDimitrovPro/projects/1/views/25)
- [Tasks & Helpdesk](https://github.com/users/IvoDimitrovPro/projects/1/views/26)

The Project is linked to this repository. It tracks Status, Product, Feedback type, Impact, Source, HighLevel response, Date reported, and Last verified. GitHub reserves the exact custom field name `Type`, so the board calls it `Feedback type`; Issues also carry the requested `Type: ...` labels.

## Status definitions

- **New** — no verified HighLevel acceptance or delivery; reply may be missing.
- **Acknowledged** — HighLevel recognized the request, with no delivery commitment.
- **Planned** — HighLevel said it is planned/in development; delivery is not verified.
- **Shipped** — documented or verified as available.
- **Closed — Works as designed** — expected behavior or a supported-flow misunderstanding.
- **Closed — Not pursuing** — intentionally dropped.

Closed and shipped issues remain searchable in All Products and the relevant product Kanban boards. Product boards display all statuses.

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
