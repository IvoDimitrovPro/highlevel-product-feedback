# MR-218 — Clarify when passcodes are required for guest entry

**Product:** Meeting Room
**Type:** UX
**Status:** Closed — Works as designed
**Date reported:** 2026-11-13
**Source:** [Sanitized live-webinar test, 2026-11-13](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-webinar-test-2026-11-13.md); [HighLevel reply](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/highlevel-meeting-room-webinar-response-2026-11-13.md)
**Impact:** Medium

## Observed
Room settings showed a passcode, but in the tested incognito guest join flow no passcode was requested. The conditions under which it applies were not apparent.

## Why it matters
Hosts cannot confidently predict whether public webinar invitees can join without a code or whether an access restriction is active.

## Expected
Explain the join passcode rules clearly. The observed no-prompt join is now explained as expected behavior. Any separately reproducible missing settings/UI problem can be filed independently.

## HighLevel response
Praveen Gupta (Team kollab), 2026-11-13: For guests not logged in, a manual passcode is required only if the URL does not include the pwd parameter. A full meeting URL includes the code, so the observed no-prompt join is expected and is not an authentication bypass. [Source](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/highlevel-meeting-room-webinar-response-2026-11-13.md).

## Verification
Reported from one account's live test on 2026-11-13; not verified as a platform-wide limitation. Screenshots remain private because they contain attendee identity and meeting access information.
