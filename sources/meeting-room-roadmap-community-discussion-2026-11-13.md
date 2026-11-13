# Meeting Room — community roadmap and transcript findings (2026-11-13)

**Provenance:** Verbatim thread/replies pasted by the user on 2026-11-13. Original discussion by Marcel Kleusener, comments from Praveen Gupta (Team kollab), Dominik Blümel and Ivo Dimitrov. A permanent GoKollab discussion URL was not supplied; links to participant profiles are not primary-source evidence. Relative release windows are interpreted using the date of the supplied discussion. No shipment has been independently verified.

## Development status — Praveen's reply
- **Current engineering focus:** improve reliability/performance, specifically audio jitter, video freezes/choppiness and overall stability. This is active work, not a guarantee that the problems have been solved (MR-221).
- **Recording Sharing:** planned by **next week**, interpreted as the week of **2026-11-16 to 2026-11-22** (existing MR-142; this public statement does *not* confirm Client Portal, expiry, or all contact-sharing capabilities).
- **Default Meeting Settings:** planned for **November 2026**, with a sub-account-wide page to configure all future meetings; explicit examples: co-hosts, automatic recording, open meetings, automatic transcription (new MR-225). This is a global level, distinct from saved per-room defaults (MR-006) and user-created presets (MR-102). No exact release date.
- **Multiple Meeting Rooms:** planned for **November 2026**, allowing users to manage multiple rooms instead of one personal room (new MR-224).
- **Stop sharing:** Praveen says the stop-sharing feature will be *planned for next week*. A participant reports that only the presenter can cancel a shared screen; clarify whether the intended change lets a host end another participant's share (MR-223). No confirmed release.
- **Separate recording outputs:** Martin Jokub asks for independently recorded screen sharing, all-attendee faces and speaker camera. No public delivery commitment in the supplied thread. Keep MR-144 closed because this specific scope was previously declined by the repository owner.

## Language / transcription — verified in the same discussion
- Ivo asked about Bulgarian support in Deepgram Nova-3. **Praveen confirmed HighLevel uses Nova-3 and supports the languages offered by the model, with manual language selection or Auto detection**.
- Ivo then **confirmed Bulgarian transcription now works** after finding the correct settings. The earlier nonsensical English transcript arose while using the wrong/default language path; no evidence remains of an inherent inability to transcribe Bulgarian. This resolves only the Bulgarian-availability part of MR-145, **not** its audio export, AI-ready formats, chapters or end-to-end processing requests.
- **Usability defect remains (MR-220):** the Start Transcribing modal obscures the language/settings control; after transcription starts those settings aren't available. Ivo asks that language settings appear in the Start Transcribing modal, or remain readily available; **Auto** should be the default instead of English.
- Ivo supplied a short [Loom demonstration](https://www.loom.com/share/7ffd3fd9bf9c45939f0f470c857ab1c8). The video reportedly contains unrelated Town Hall audio; do not infer audio evidence of Ivo speaking.
- Dominik was looking in the AI/settings **Start transcript** action instead of the transcript-settings control; this supports the discoverability problem.
- Marcel reported German selection was remembered across sessions. Anecdotal user observation; not proof of all account and language persistence behavior.
- Official [HighLevel Meeting Room documentation](https://help.gohighlevel.com/support/solutions/articles/155000009149-meeting-room-in-highlevel-overview) documents live-transcription language selection and Mixed Languages mode, though the public article enumerates a subset of languages. Praveen's direct product reply and Ivo's functional Bulgarian test clarify the tested account.

## New participant microphone onboarding gap
- Dominik reports a Windows/Chrome guest missed the microphone permission prompt after joining without pre-enabling the microphone.
- Praveen said he was discussing a possible solution with the internal team and would reproduce/check it. **Acknowledged only**, not a confirmed planned delivery (MR-222).
- A clear in-app permission guide/popup and a retry action would be appropriate; browser-specific screenshots/steps should not rely solely on the browser chrome.

## Tracking standards
- Planned does **not** mean shipped; check real product functionality before closing.
- Retain product-specific issues even if part of a broader roadmap.
- Do not reuse a vendor's stated generic Recording Sharing release to claim a specific secure Client Portal sharing workflow is delivered.
