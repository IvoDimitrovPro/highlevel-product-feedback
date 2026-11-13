# MR-220 — Transcription: Make language selection discoverable

**Product:** Meeting Room
**Type:** UX
**Status:** New
**Date reported:** 2026-11-13
**Source:** [Team kollab roadmap discussion, 2026-11-13](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-roadmap-community-discussion-2026-11-13.md)
**Impact:** High

## Observed
The user confirmed Bulgarian transcription works when the correct language setting is used. The Start Transcribing popup obscures the transcription settings, which are inaccessible after starting. The default English selection caused misleading output; other users report confusing the AI transcript start action with language configuration.

## Why it matters
Participants cannot reliably discover Auto or Bulgarian before starting; errors look like model failures even though Deepgram Nova-3 supports the language.

## Expected
Show language selector (including Auto) inside the Start Transcribing dialog, default to Auto for new meetings, allow reviewing/changing language after transcription starts where technically supported, and link all Start Transcript entry points to consistent settings.

## HighLevel response
HighLevel confirmed language selection and Auto exist, and user confirmed Bulgarian works. **This specific visibility/default-language UX fix is not yet acknowledged**.

## Verification
Based on the named participants' thread as supplied by the user on 2026-11-13. Release plans are not proof of shipped functionality. Thread permalink not provided.
