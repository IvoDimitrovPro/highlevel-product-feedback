# MR-145 — Transcripts: Bulgarian, exports and chapters

**Product:** Meeting Room
**Type:** Feature
**Status:** New
**Date reported:** 2026-09-25
**Source:** [Meeting Room beta response](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/highlevel-meeting-room-response-2026-09-25.md); [Meeting Room source history](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-feedback-history.md)
**Impact:** High

## Observed
After each meeting, Ivo downloads the video, extracts its audio in Camtasia, transcribes it with AssemblyAI, then gives the transcript to AI. This repeated manual workflow adds work before meeting content can be searched, summarized, or used for follow-up.

## Why it matters
An audio-first export and useful transcript would remove several manual steps after regular client/team meetings and make meeting content ready for AI workflows.

## Expected
For each recording, provide:

- Audio-only export.
- A high-quality transcript with speaker labels and timestamps.
- TXT/Markdown output for AI workflows, plus SRT/VTT captions.
- Bulgarian language support, including accurate recognition/transcription.
- Optional AI-generated chapters/key moments with clickable timestamps.
- Per-room/session controls to enable or disable transcription and chapter processing, including for webinars.

## HighLevel response
Praveen's response on MR-144 says reliable final audio mixing is the priority and separate logical tracks/exports will be evaluated separately. It does not specifically answer or commit to audio-only export, transcript quality/speaker labels/timestamps, text/caption formats, Bulgarian support, chapters, or per-session processing controls. Keep this item New until HighLevel responds to these requirements.

## Related feedback
MR-144 preserves the historical separate-track suggestion, which Ivo has decided not to pursue.

## Live webinar test follow-up — 2026-11-13

**Source:** [Sanitized test notes](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-webinar-test-2026-11-13.md)

In the 2026-11-13 Bulgarian-language test, transcription output was nonsensical English text, **not an English translation**. Users need explicit Bulgarian selection/recognition with correctly transcribed Bulgarian text. [HighLevel documents limited live language options](https://help.gohighlevel.com/support/solutions/articles/155000009149-meeting-room-in-highlevel-overview), while [Deepgram supports Bulgarian](https://developers.deepgram.com/docs/models-languages-overview). The vendor's available models and HighLevel's exposed real-time configuration are not necessarily identical. This is a reproduced account-level quality/language issue, not proof that all accounts are affected.

## Deepgram support verification — 2026-11-13

Deepgram [Nova-3 model documentation](https://developers.deepgram.com/docs/models-languages-overview) lists Bulgarian (bg) for both monolingual and multilingual transcription. [Streaming language hinting](https://developers.deepgram.com/docs/nova-3-language-prompting) also supports bg. The [November 12 changelog](https://developers.deepgram.com/changelog/2026/11/12) improves the Bulgarian batch model; that particular improvement is batch, not a new streaming-specific release.

This confirms provider-level capabilities, NOT that HighLevel Meeting Rooms exposes, configures, or has deployed those settings. Request an explicit bg setting or Nova-3 multilingual with a bg language hint and verify Bulgarian output in a live Meeting Room.
