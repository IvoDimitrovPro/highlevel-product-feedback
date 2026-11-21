# Meeting Room — Recording Sharing release and follow-up (2026-11-20–21)

**Primary evidence:** [Praveen Gupta (Team kollab), “Recording Sharing Is Here in Meeting Room!”, November 20, 2026](https://www.gokollab.com/meeting-rooms/home/posts/6b00729921bd52751e5d120a?commentId=6b0072e01ed0c5179d757433). Reviewed November 21 through the signed-in GoKollab account in a browser. This is a private-group post; only a limited technical summary is reproduced here.

## Shipped, according to the official release post

- Hosts/authorized users can share recordings directly from the Meeting Room recording list/details with multiple recipients, including email notifications.
- Three access patterns: explicitly approved recipients, logged-in members of the sub-account, and anyone with a link (optionally passcode protected).
- Link expiry: 7, 30 or 90 days, or user-chosen date; optional six-digit passcode.
- A share configuration can allow/disallow video download and visibility of transcript and chat. The transcript can be searched, and viewers can jump to recording moments. Summary and Next Steps can be shown when generated/included.
- Hosts receive notification email when recording is saved. Release post also states video/audio reliability, video background and recording/transcription-start fixes.
- This release **fulfills generic secure-link recording sharing**, not necessarily the full scope of [MR-142](../issues/meeting-room/MR-142-share-a-recording-directly-with-a-contact-client-in-client-portal.md). No direct Client Portal entitlement binding, SMS/Conversations delivery, revoke workflow or viewing analytics was independently verified in this release note.
- No independent in-account end-to-end playback/share test was conducted as part of this November 21 source check. The user, in a comment, confirms having tested the feature and praised it.

## Specific reply from Praveen in this thread

- Customization of **recording-share notification emails** is **not yet provided**; he says the team intends to plan it soon, with no delivery commitment or date.
- Contacts chosen from the recipient picker are sent an email.
- Host/co-host control to **stop another attendee's screen share** plus **disable screen annotations** is planned for a November 2026 release. This is **not shipped** in this thread; retain [MR-223](../issues/meeting-room/MR-223-host-stop-screen-sharing.md) as Planned.
- The post says sub-account-wide automatic recording/transcription defaults and multiple user-owned rooms are still coming in future releases; retain [MR-224] and [MR-225] Planned.

## Ivo's tested-feature feedback on November 21

In his comment addressed to Shivani Gera (Product at Kollab), Ivo:
1. Confirmed the current sharing feature works and is useful.
2. Asked for **separate permissions to download transcript and chat but forbid downloading the video**. The current release describes video download control and transcript/chat *viewing*, not these separate downloads.
3. Asked for configurable visibility of Summary, Next Steps, Date, Time and other elements, including default sharing presets. The user wants to **hide or replace** low-quality generated summaries/next steps with their own text and links.
4. Asked for optional use of **Parakeet or a model performing as well or better on Bulgarian**, citing his own comparisons. Do not claim Parakeet is officially deployed or that benchmark results were published.
5. Asked for a **custom vocabulary/keyword list** so company/brand names and recurring terms are correctly transcribed.

No direct reply to the user's November 21 comment was visible at the time of review.

## Separate third-party feedback

- Marcel Kleusener requested opt-out from **host recording-ready emails** after every call and editable/white-label **recipient notification email design** important for SaaS providers. This is not the user's original message, but aligns with agency usability and is separately tracked.
- A request for the embedded demo video URL was made by another participant; no link was confirmed in the inspected thread.

## Tracking implications

- Update [MR-142](../issues/meeting-room/MR-142-share-a-recording-directly-with-a-contact-client-in-client-portal.md) as **partially shipped; remaining Client Portal and automation/analytics scope open**, not fully Shipped.
- Add independent open requests for per-asset download rights, custom shared recording presentation, and model/vocabulary customization.
- Keep reliability and host stop-share issue statuses grounded in their specific evidence; announcements of fixes alone aren't proof of full remediation.
- No client names, private meeting URLs, passcodes or token values stored in this file.
