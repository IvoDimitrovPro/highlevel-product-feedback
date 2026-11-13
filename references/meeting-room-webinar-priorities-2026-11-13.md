# Meeting Room webinar readiness — prioritized feedback (2026-11-13)

Source: [sanitized live test](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-webinar-test-2026-11-13.md). Observations are from one account's live test; issue statuses remain grounded in documented replies. **These are product priorities, not HighLevel delivery commitments.**

## P1 — Attendee presentation and uninterrupted hosting

**Confirmed planned umbrella:** [MR-219 — Dedicated webinar UI and experience](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/89) — Planned, High. No specific delivery date or item-level scope confirmed.

1. [MR-211 — content-only presentation fullscreen](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/81) — Acknowledged, High.
2. [MR-212 — configurable auto-admit for late attendees](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/82) — Acknowledged, High.
3. [MR-213 — host restriction of screen annotations](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/83) — Acknowledged, High.
4. [MR-160 — webinar view-only audience / presenter roles](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/30) — Acknowledged, High. [MR-006 — persistent host permission defaults](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/20) — Acknowledged, Medium.

## P1 — Frictionless registration, conversion and native integrations

5. [MR-214 — custom direct-join fields, identified registrants and prefill](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/84) — Acknowledged, High.
6. [MR-215 — customizable end page and CTA/redirects](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/85) — Acknowledged, High.
7. [MR-108 — custom join/waiting-room messages and white-label UI](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/23) — Acknowledged, **impact raised to High**.
8. [MR-101 — native Meeting Room selector in webinar funnel wizard](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/47) — Planned, High. Still manual URL entry in the tested wizard.
9. [MR-106 — contact identity, attendance, CRM linkage](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/51), [MR-104 — return room outcomes to webinar funnel](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/50), [MR-107 — room attendance-driven workflows](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/52), [MR-209 — source-to-conversion reporting](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/56) — Planned, High. Generic webinar registration/analytics already exist; the missing scope is seamless native room identity and outcome reconciliation.

## P1/P2 — Recording, transcripts and reliability

10. [MR-220 — Language settings inside Start Transcribing](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/90) — New, High. Bulgarian now **works**, but the language control is hidden/obscured and Auto should be the default. [MR-145 — remaining export/captions/chapter requests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/29) stays New for the other gaps.
11. [MR-007 — recording/transcription automation](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/21) — Acknowledged, High; a *global default* for auto-recording and auto-transcription is planned in [MR-225](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/95), but the entire AI processing chain is not yet confirmed.
12. [MR-216 — remember name and devices after rejoining](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/86) — Acknowledged, Medium.
13. [MR-217 — exit fullscreen when a meeting ends](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/87) — Acknowledged, Medium.
14. [MR-218 — passcode/guest access state clarity](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/88) — Closed — Works as designed, Medium. Full link with pwd explains no manual prompt.
15. [MR-161 — moderated webinar Q&A](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/31) — Acknowledged, High; already tracked.

## Scope decisions

- No duplicate tickets for features covered by existing issues, including native recording, role-based webinars, CRM/workflows, funnel integration and Q&A.
- Do not file desktop screen-sharing recursion as a defect; it is normal when sharing the display containing the meeting window, absent proof of product malfunction.
- Do not mark [MR-004](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/69) unshipped: it covers configurable *generic* participant join modes. Auto-admission and passcode clarity have distinct tickets.
- Preserve private room links, participant details and screenshots outside the public repository.

## 2026-11-13 developer response

[Praveen Gupta's response](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/highlevel-meeting-room-webinar-response-2026-11-13.md) acknowledges the list and confirms an overall webinar UI/UX initiative is planned, without exact feature delivery commitments. The full URL containing pwd explains the passcode behavior; MR-218 is closed.

## November 2026 release tracking — not yet shipped

- [MR-221 — Audio/video stability](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/91): primary active engineering focus, no ETA.
- [MR-142 — Recording Sharing](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/27): vendor target week November 16–22; scope of secure client sharing remains unconfirmed.
- [MR-223 — Host stop-sharing control](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/93): vendor plans to plan this for next week; precise host action needs confirmation.
- [MR-224 — Multiple meeting rooms](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/94) and [MR-225 — Subaccount default settings](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/95): planned during November, no exact release dates.
- [MR-222 — Microphone permissions onboarding](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/92): acknowledged; possible solution under discussion, no commitment.

[Community discussion and distinctions between confirmed, planned, and requested items](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-roadmap-community-discussion-2026-11-13.md).
