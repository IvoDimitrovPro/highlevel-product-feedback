# Town Hall speaking brief — Media Storage, External Tracking & Chat Widget

**Thursday 2026-11-19, 18:00–19:00 Europe/Sofia.** Prepared from our GitHub feedback, downloaded 2026 Zoom Town Hall chats including November 9/16/18, prior documented RoasFlow tests, public HighLevel feedback and official docs/changelog. The focus is **ask what is still missing and get a named owner, scope and test**, not demand already shipped features.

**Official session link:** https://gohighlevel.com/townhall

## Read this first — top three questions (English, paste one at a time in the meeting)

### 1. External Tracking — the underlying data engine, not just the dashboard (top priority)

> Rahul, on the September 17 Town Hall you said tracking events in the Funnels/Websites Stats revamp were planned for this quarter. Could you update us on that exact scope and ETA? More importantly, will we get a **supported, permissioned GET API/MCP and export for the underlying External Tracking events**, including anonymous sessions, page views, clicks, forms, consent, timestamps and stable IDs, rather than only prebuilt graphs? We need to join these with actual paid orders/refunds and ad spend to build customizable dashboards and AI analysis. The tracking script and basic external analytics already work; **reading the complete data back and reconciling real revenue is the missing foundation**. Complete spec + 16 acceptance tests: https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md

**Follow-up if time:** Can an agency export/query event history via API by domain/session/contact and access the same numbers in Dashboard/Custom Reports? What is the documented endpoint, scope, retention/backfill and delivery/webhook plan? Which data remain unavailable and why?

**Demo challenge:** An approved/consenting visitor lands on an external WordPress/AI Studio site, browses, leaves, returns, buys through WooCommerce/HighLevel and later gets a partial refund. Can we query observed touchpoints and authoritative net sale once, without a second tracker, and choose the report/model ourselves? State unknowns when not observable. Do not imply that the user currently has every part of this scenario implemented.

### 2. Media Storage — one asset across products, safely synchronized (second priority)

> Praveen said on the November 16 Town Hall that Meeting Room recordings are planned to integrate with Media Library and recording sharing was coming that week. In yesterday's Courses meeting, Harsh had an action item to scope **two-way Media Storage ↔ Courses synchronization**, including updating a course when its source video is replaced. Can the team confirm the **actual product scope and target release**? We need one versioned media asset referenced by Courses, Ask AI, Meeting Room recordings, Community, Websites, Email and Workflows — not disconnected copies requiring download/re-upload. Should file replacement propagate to all consumers with preview/rollback and clear permissions? Can transcript/caption assets be generated, edited, copied/downloaded and used across those surfaces? Relevant feedback: https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/26 and https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/5

**Follow-up if time:** I personally raised `.md` support for Media Storage on August 20, and Jeff said he'd raised it with Shivangi. Today Managed Agents/Ask AI accept Markdown, but the current Media Storage format list doesn't explicitly include `.md`. Is Markdown supported end-to-end (Media Library upload, Media Picker, Ask AI and Course/knowledge workflows), or is there a definite plan? https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/19

**Evidence distinction:** The Nov 18 two-way synchronization item came from an automated Otter summary and other participants; get verbal confirmation from Harsh/team before stating that it is committed or dated.

### 3. Chat Widget — reuse native objects across AI Studio, public API and MCP (third priority)

> We tested the public Chat Widget API in RoasFlow: an externally created Live Chat widget worked in normal HighLevel Sites/Chat Widgets, and an external React site sent messages to Conversations and received replies. But in that October test, we couldn't **select or manage the same API-created widget in AI Studio's native Chat Widgets panel**. Is there a plan to let us attach an existing, API-created or snapshot-provisioned Chat Widget directly to an AI Studio project, so every channel/agent uses the same widget ID, configurations and conversation history? Could you clarify which widget types and settings are currently **create/update/clone-able via API/MCP** (beyond Live/Email), and what native project-binding API is planned? Full engineering brief: https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/ai-studio-external-agent-development-brief-2026-10-16.md

**Follow-up if time:** Can clients attach their chosen external AI/agent to the same live conversation and escalation workflow without forcing AI Studio chat-generation credits or duplicating widgets? We already have official widget public APIs, snapshot support and embedded layouts, so this is about **linkage, portability, lifecycle, permissions and feature parity**, not re-requesting widget creation.

## The 20-second opening, if invited to speak

> Thanks for the recent progress. My recurring feedback is to **give agencies the engine, not only predefined dashboards and disconnected product features**. Simple defaults are great for nontechnical clients, but agencies need reusable Media Storage assets, raw External Tracking data via documented APIs, and existing Chat Widgets attachable across products. We have real test cases and an organized feedback repository: https://github.com/IvoDimitrovPro/highlevel-product-feedback

## Very short questions, useful in fast-moving Zoom chat

- **External Tracking:** “Will the underlying event data be queryable through a supported GET API/MCP, not just visible in the External Tracking dashboard? Is it planned, and who owns it? https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75”
- **Dashboards:** “Will External Tracking become an ordinary source in the Dashboard widget engine and scheduled custom reports? Can we choose/filter/reorder fields rather than use only fixed Stats pages?”
- **Pixel hub:** “Is the reusable Pixel/CAPI/GTM configuration hub across Funnels, Websites, Forms, Surveys, Quizzes and Stores planned? The September 17 reply mentioned only Funnel/Website Stats: https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/64”
- **Media:** “Can one Media Storage asset be linked to lessons and recordings, edited or replaced once, and automatically updated everywhere without breaking existing URLs/access?”
- **Markdown:** “Does Media Storage itself accept `.md` today? Ask AI/Managed Agents already do, but the Media Storage file-type documentation doesn't list it: https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/19”
- **Chat Widget:** “Can a Chat Widget created via the public API be adopted by AI Studio's native Chat Widgets integration without recreating it? We tested CRM/Conversations two-way messaging; project binding was the missing step.”
- **Governance:** “Could you give us a shipped/beta/planned/out-of-scope matrix with the relevant API/docs links and an owner for a small test tenant?”

## What already exists — do not re-request as unavailable

| Topic | Already available / documented | What is **not** thereby proven |
| --- | --- | --- |
| Media Storage | File/folder list/upload/update/trash APIs; folder upload/download; Media Picker integration into Forms/Surveys/Quizzes; workflow attachments; some Google Drive sync | A single logical asset ID with automatic bidirectional reference propagation across Course/Meeting/Email/AI/Community; uniform secure permission/expiry and transcript assets |
| Media + AI | HighLevel Managed Agents gained video understanding and transcript/highlights via Media Library; Ask AI Projects/Managed Agents support Markdown files | Same `.md` works inside every Media Storage picker and can be edited/reused; videos in every Course get automatically editable/portable caption assets |
| External Tracking | JS script for external sites; page/form analytics, field mapping, domain controls, iframe forms in Labs, workflow External Tracking Event trigger | **Read-only raw event GET/export**, full non-converter journeys, verified payment/refund ledger, audited ad-network delivery, report engine parity |
| Chat Widget | Public list/get/create/update/patch/clone/delete endpoints, native AI Studio insertion, cross-account snapshot copying, inline embedding for all chat types | Adoption of an externally created widget into an existing AI Studio project's native integration; APIs for *all* widget types; fully shared versioning and agent-provider portability |

HighLevel official references:
- [External Tracking Analytics](https://help.gohighlevel.com/support/solutions/articles/155000007809-analytics-for-external-tracking) and [domain/iFrame controls](https://help.gohighlevel.com/support/solutions/articles/155000009476-field-mapping-and-iframe-form-tracking-in-external-tracking).
- [Canny External Tracking feedback board](https://ideas.gohighlevel.com/external-tracking) includes other users' requests for GET API, custom dashboard widgets and preventing empty-contact spam. This demonstrates broader demand, not resolution.
- [Media Storage API reference](https://marketplace.gohighlevel.com/docs/ghl/medias/media-files-folders/index.html), [current file format table](https://help.gohighlevel.com/support/solutions/articles/48001216629-media-library-specs-formats), [Chat Widget public APIs](https://ideas.gohighlevel.com/changelog/chat-widget-public-apis), [Chat Widget snapshot support](https://ideas.gohighlevel.com/changelog/chat-widget-snapshot-support), [inline embedding across chat types](https://ideas.gohighlevel.com/changelog/chat-widget-embed-any-chat-widget-inline).
- [HighLevel November 16 video analysis](https://ideas.gohighlevel.com/changelog) should be acknowledged as shipped for Managed Agents, not confused with course lesson captions.

## Link shortlist — post these in Zoom chat as needed

1. **This meeting brief:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/townhall-2026-11-19-media-tracking-chatwidget-brief.md
2. **Complete External Tracking engineering proposal (16 tests):** https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md
3. **External Tracking raw-event request:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75
4. **Pixel/CAPI/GTM reusable hub:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/64
5. **Media Storage `.md`:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/19
6. **Reuse recording across GHL:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/26
7. **Ask AI → Course content import bug:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/5
8. **AI Studio + external agents/widgets interoperability:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/ai-studio-external-agent-development-brief-2026-10-16.md
9. **All requests:** https://github.com/IvoDimitrovPro/highlevel-product-feedback

## Close with one actionable request

> Could we arrange a product owner to confirm which of these are shipped, in beta, planned or excluded, and test the missing API/Media/Widget integration cases together? The current public issues include detailed acceptance tests. We'd prefer a working contract and small reference demonstration over another partial UI panel.

## Evidence/limitations

[Curated source notes](../sources/townhall-media-tracking-widget-evidence-2026-11-19.md) distinguish Ivo's own archived Zoom comments, other participants, product-team replies, automated notes and documented release behavior. Additional [CRM architecture work](crm-flexible-record-centric-architecture-2026-11-14.md) captures our general design principle: configurable record-centric systems instead of one locked-in use case. No claim of exhaustive coverage of every private Community post or every historical conversation.
