# MR-006 — Permissions: Save room defaults

**Product:** Meeting Room
**Type:** UX
**Status:** Acknowledged
**Date reported:** 2026-09-25
**Source:** [Meeting Room beta response](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/highlevel-meeting-room-response-2026-09-25.md)
**Impact:** Medium


## Observed
Live host controls exist, but reusable room defaults for participant permissions still need to be completed.

## Why it matters
Recurring meetings should not require the host to reconfigure the same permissions every time.

## Expected
Save defaults for join muted, mic, camera, screen share, chat, reactions, raise hand, links/files and join-before-host; allow per-session override.

## HighLevel response
HighLevel agrees host controls should have reusable defaults with per-session overrides; feedback noted.

## Live webinar test follow-up — 2026-11-13

**Source:** [Sanitized test notes](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-webinar-test-2026-11-13.md)

Host defaults also need to preserve the annotation policy requested in MR-213 once those permissions exist; the test showed that presenting a webinar should not require hosts to reconfigure safety/participation settings before each session.

## November 2026 roadmap cross-reference

Praveen confirmed a **sub-account-wide Default Meeting Settings** page planned for November, including co-hosts, automatic recording, open meetings and automatic transcription (MR-225). **This is not proof that the per-room permission defaults and override semantics requested here are committed**. Keep this item Acknowledged. [Source](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/meeting-room-roadmap-community-discussion-2026-11-13.md).

## Official changelog verification — 2026-11-13

**Result:** Partial implementation — request remains open.

**Already available:** Meeting Room includes co-hosts and live participant microphone/camera/screen-sharing controls.

**Scope decision:** Persistent per-room default policies and override semantics remain distinct; a later November roadmap promise is not proof of release.

**Official sources:** [Introducing Meeting Room](https://ideas.gohighlevel.com/changelog/introducing-meeting-room).

**Checked:** 2026-11-13. A feature announced only in Labs/private beta is not automatically generally available.
