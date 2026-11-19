# MEDIA-002 — Folders: Secure client upload links

**Product:** Media Storage
**Type:** Feature
**Status:** New
**Impact:** Medium
**Date reported:** 2026-11-19
**Source:** [November 19 Product Town Hall](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/townhall-2026-11-19-creator-tracking-media-evidence.md)

## Observed

During the November 19 Town Hall, Jenna requested the ability to **create a Media Library folder and share its URL with a client to upload photos**. Ivo visibly endorsed the request. Shivangi reacted positively with a thumbs-up; separately, users asked for Media Library permissions. **This was not a feature delivery or roadmap commitment.**

Media Storage already offers file/folder management and public API primitives. This request concerns **external guest upload to a specific authorized folder without making the client a broad account user**.

## Why it matters

Agencies collecting photos, property imagery, testimonials, signed files or brand assets from clients should not need email attachments, third-party file services, external forms or account seats solely for controlled upload.

## Expected

- Agency can create a folder-specific **upload-only link** with expiry, optional password/invitation, allowed file types/size, quotas and optional identity/request context. Uploaders see only the permitted upload page and optionally files they uploaded, not other private assets.
- **Role-based folder access** for agency/sub-account/team users, with clearly separate read, upload, edit, share and delete rights. Inherited permissions, labels and audit must be explicit.
- Optional file review/approval, safe virus/abuse handling, duplicate protection, upload status and consent/retention controls.
- Received files stay in the real Media Storage folder with stable asset IDs, usable from the native media picker, workflows, campaigns and authorized API.
- Owner can revoke upload link, track uploads and prevent external sharing beyond the intended tenant.

## HighLevel response

Shivangi reacted positively to the audience request in the meeting chat. No scope, availability or date was confirmed. Review with Shivangi during the November 20 appointment.

## Verification

[Source with timestamps](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/townhall-2026-11-19-creator-tracking-media-evidence.md). This item is user-endorsed feedback originally raised by another participant, not a reproduced bug. Do not claim that current Media Storage folder permissions or guest links definitely lack these controls until a live check.
