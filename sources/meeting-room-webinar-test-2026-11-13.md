# Meeting Room webinar test — 2026-11-13 (sanitized)

## Origin and evidentiary boundary
First-hand user observations from a live HighLevel Meeting Room test (host and incognito participant), plus five screenshots and the Sites > Webinars create-flow screenshot. The raw room URL, embedded passcode, account information, and participant images must **not** be published. Screenshots are retained in the private conversation; this document intentionally records only a sanitized description. These are tested-account observations, not proof of universal product limitations.

## Prioritized, observed attendee and host friction
1. Presentation shares occupy less screen area than necessary because attendee tiles remain visible; user wants content-only fullscreen (MR-211).
2. A host actively presenting must manually admit attendees who arrive after the start (MR-212).
3. Attendees can annotate shared content, without an available annotation permission toggle in the tested host panel (MR-213).
4. Direct room join requested a name, not configurable CRM fields. Prefilling previously registered webinar attendees is a requested behavior, not separately verified in this test (MR-214).
5. End-of-room feedback page lacks configurable webinar CTA/redirect options (MR-215); waiting/join page content also needs improvement (MR-108).
6. After leave/rejoin, attendee name and audio/video settings are not preserved in the test (MR-216).
7. Room-controlled fullscreen persists on the generic feedback page when the session ends (MR-217).
8. A passcode appears in room settings, but an incognito guest entered without being prompted. Security policy is unclear; **not proven to be an auth bypass** (MR-218).
9. Webinar funnel creation only prompts for an external/manual meeting URL, rather than selecting/creating a native room (existing MR-101).
10. Bulgarian speech was output as nonsensical English text; not a translation (existing MR-145).
11. Recording and transcription require separate manual activation; auto-start remains desirable (existing MR-007).

## Existing items that cover the broader webinar experience (do not duplicate)
- MR-160: audience/presenter roles and webinar stage; MR-161: moderated Q&A.
- MR-006 and MR-102: room host permission defaults and reusable presets.
- MR-104/MR-106/MR-107/MR-209: webinar/room attendance linked to CRM, originating product, workflows, and conversion reporting.
- MR-108: white-label attendee pages and waiting-room content.
- MR-101: native inline room selection from the Webinar funnel builder.
- MR-007: recording/transcription automation; MR-145: transcript quality and Bulgarian support.
- MR-004 was closed as shipped for generic configurable join modes; it does **not** prove that auto-admission, passcode UX, or verified-registration bypass rules are supported.

## Official docs checked (2026-11-13)
- [HighLevel Meeting Room overview](https://help.gohighlevel.com/support/solutions/articles/155000009149-meeting-room-in-highlevel-overview): room access/security includes passcodes, waiting room and guests; recordings do not auto-generate transcripts. The transcription UI documents a subset of languages.
- [HighLevel Webinar Funnels](https://help.gohighlevel.com/support/solutions/articles/155000004125): webinar registration forms already capture CRM contacts, and webinar funnel analytics exist. This does **not** establish direct Meeting Room join-field configuration or identity/attendance reconciliation.
- [HighLevel webinar wizard guide](https://help.gohighlevel.com/support/solutions/articles/155000006062): step 3 takes a manually pasted webinar URL.
- [Deepgram Nova-3 languages](https://developers.deepgram.com/docs/models-languages-overview) and [language prompting](https://developers.deepgram.com/docs/nova-3-language-prompting): Bulgarian (bg) support exists in Deepgram models, but HighLevel's exposed/live language options may differ. [2026-11-12 provider update](https://developers.deepgram.com/changelog/2026/11/12) improves Bulgarian batch model; it does not by itself prove Bulgarian monolingual streaming in Meeting Room.

## Priority principle
Prioritize clear attendee viewing and uninterrupted host delivery first; then join/CRM conversion flow; then recording/transcription; then rejoin/fullscreen exit/passcode clarity. Avoid treating ordinary desktop-sharing recursion as a HighLevel defect without a reproducible failure.
