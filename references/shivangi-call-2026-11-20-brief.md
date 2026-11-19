# Shivangi Awasthi — 30-minute product call, Nov 20 2026

**Friday November 20, 14:00–14:30 Europe/Sofia.** Confirmed in user's calendar, subject “creator studio, tracking”. Booking path: https://speakwith.us/shivangi. **Meeting join URL lives only in the user's private calendar, not this public document.**

## The outcome to leave with

1. **Creator Studio — a real pilot:** named owner and feasible path for a shareable *editable* HighLevel product-feature demo video template, with agency-only access, localization and branding. Ask for **three sample official videos** or a minimum working proof of concept, not another generic public MP4.
2. **External Tracking — an explicit answer or hand-off:** named owner for the **raw event read/export API/MCP and cross-builder pixel hub**, with shipped/beta/planned/not-planned scope and accessible documentation.
3. **Media Storage — implementation/ownership clarity:** status of external upload-only folder links, private permissions, Markdown support and asset references/synchronization to Courses/Meetings/Creator. **Only request a live demonstration of what already exists.**
4. Get permission to send the public, evidence-backed GitHub proposal and follow up with one product contact per topic; no “we'll look into it” without an owner and a way to verify.

## Run of show

| Time | Main focus | Desired answer |
| --- | --- | --- |
| **00–02 min** | Say the desired outcome, not the long history | Does Shivangi own Creator Studio, Media Storage, External Tracking — or which team leads each? |
| **02–15 min** | Editable official white-label videos | Can an official editable source project be shared via agency-scoped link and customized directly in Creator Studio? Pilot, owner, access/licensing |
| **15–23 min** | External Tracking, data and reusable settings | Is the raw GET API/stream/export and pixel hub planned separately from the Stats revamp? Named engineering owner |
| **23–27 min** | Media Storage + client upload links + Markdown | Which capabilities are already available; scoped gaps and APIs, next delivery |
| **27–30 min** | Confirm decisions and actions | Specific links/docs, who owns what, what to test/when, next checkpoint |

Use the priorities flexibly: **if Shivangi does not own Tracking, don't consume the 8 minutes on architecture—ask for the responsible product lead and arrange a follow-up.**

## Opening script (English, ~35 seconds)

> Thank you for taking the time, Shivangi. I'm building and selling HighLevel through my own agency, RoasFlow, and I keep a public, evidence-based tracker of customer-facing product gaps. I don't want another feature for the sake of a feature. I want agencies to **take an official HighLevel product video, import it as an editable Creator Studio project, and turn it into their own unique, localized, white-label tutorial or sales video without recreating it from scratch**. That would help agencies sell HighLevel and educate clients much faster. I also have two focused questions about tracking data and Media Storage. Could we start with the video-template workflow?

## Creator Studio — what to request and test

### Minimum usable flow

1. HighLevel publishes a small **official product video template catalog** (e.g., Workflows, CRM/Opportunities, AI Studio, Meeting Room, and brand-new releases).
2. An agency opens a **template share link** and chooses Import into Creator Studio. It produces an editable *project*, **not only MP4/image output**.
3. Agency can replace its logo, fonts/Brand Board colors, product/screenshots, language, audio/voiceover, subtitle files, CTA, link, contact details and selected scenes.
4. Replacing one element doesn't regenerate/change unrelated scenes, typography, brand or layout. The agency can preview, revise, export common landscape/portrait/square formats.
5. The video remains **private to the agency or explicitly selected subaccounts**. Other subaccounts do not automatically see it.
6. HighLevel publishes **clear resell/rebrand rights and content updates**; agencies choose when to refresh an outdated UI demonstration and keep their own customized versions.

### Five exact questions

- Do official HighLevel **feature demo projects exist as editable Creator Studio source templates** today, or only finished videos? Who can provide a first three-template pilot?
- Can Creator Studio **export/import/share project-level templates via link**, especially across subaccounts/agencies, with explicit agency-only or selected-subaccount access? Is this *the same* engine as generic Template Library, or a separate feature?
- Does Creator Studio support **non-destructive targeted edits** (change one layer/text scene without altering unrelated design) and version history/undo? Other users reported unexpected whole-design changes today. Can we see a live 30-second edit demonstration?
- Can a project reference agency **Brand Board / Media Library** files and swap localized voice/captions? What source formats are editable versus flattened export? What costs/credits apply when editing/importing and exporting a video?
- Can HighLevel **license** the project source for white-label education and resale, and issue content update notifications for changing GHL interfaces?

**One-line acceptance test:** Give an agency an official editable video about “How to use Workflows”; via one secure link, they brand it to RoasFlow, replace a voiceover in Bulgarian and the CTA, make one scene edit without modifying others, export a video, and keep it private until they choose to distribute it.

**Existing precedents, not proofs of this feature:** [email share links](https://help.gohighlevel.com/support/solutions/articles/155000006716-whitelabel-email-template-sharing-step-by-step-guide), [general Template Library](https://help.gohighlevel.com/support/solutions/articles/155000001304-add-custom-templates-to-template-library), [AI Studio cloning](https://ideas.gohighlevel.com/changelog/clone-projects-in-ai-studio). Today Creator Studio blank/template flows and custom blank sizes were mentioned as already available, though discoverability was criticized.

**Public implementation request:** [CREATOR-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/97).

## External Tracking — short, outcome-oriented challenge

> During today's Town Hall I shared our tracking spec, but there was no direct written reply in the Zoom chat. Rahul said back on September 17 that event tracking was planned for the Funnel/Website Stats revamp this quarter. Is that only a visual Stats change, or is HighLevel building a **queryable raw External Tracking event model** with anonymous session IDs, custom events, historical data, consent and linked actual payments/refunds, accessible to agency developers and AI agents through scoped GET API/MCP/export? We also need one saved Pixel/CAPI/GTM configuration that can be selected across all builders. Who owns these separately?

**Don't confuse:** Existing script/form analytics, Meta CAPI optimizations and event-trigger workflows ≠ full raw event read/export and complete ROI reconciliation. Only product owner or docs can commit to those APIs.

**Links:** [tracking engine, detailed 16 tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md), [raw event API #75](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75), [reusable tracking hub #64](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/64).

**Ask if she isn't owner:** “Who on the External Tracking team can validate the API contract and show the endpoint/schema? Could you introduce me to them, please?”

## Media Storage — scope the shared foundation

> Our long-standing Media Library concern is **assets reused across products**, not simply uploading the same file multiple times. We need stable media references so a lesson, meeting recording, site or Creator Studio project can reuse a file while respecting permissions and optional version updates. Yesterday's Course Town Hall had a scoping discussion around two-way Media Library sync; can you confirm what is actually committed and what's still research?

Then mention two tight features:

1. **Client upload-only folder link with permissions**: Jenna asked today, I supported it and you reacted positively. Can an agency send a scoped upload-only link to a specific folder without creating an account login, with expiry/revocation and no access to other client media? [MEDIA-002](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/98).
2. **Markdown**: I requested `.md` upload in August; Jeff said it was passed to you. Today agents can use Markdown but Media Storage documentation doesn't explicitly list the file extension. Does Media Storage itself accept, preview, link and manage `.md`? [MEDIA-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/19).

If her team owns assets, add transcript/caption portability and permission inheritance for reusable Meeting Room assets: [MR-141](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/26).

## Optional if time: Chat Widget / AI Studio

We have a reproducible **historical** integration gap (Oct 16): an API-created Live Chat widget worked in regular HighLevel and on external React/Conversations, but could not be chosen in AI Studio's native Chat Widgets panel. Ask if the same existing widget can now be adopted by AI Studio, and request the native project-binding API. [AI-003](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/4). Don't imply a fresh November failure without retest.

## What to record in meeting notes

| Topic | Current / Shipped | Beta or planned | Not planned | Owner | Demo/docs link | Next action / target |
| --- | --- | --- | --- | --- | --- | --- |
| Creator official editable video templates | | | | | | |
| Creator project links and agency-only access | | | | | | |
| Creator non-destructive edits, layers, versioning | | | | | | |
| External Tracking raw event GET/MCP/export | | | | | | |
| Shared Pixel/CAPI/GTM hub | | | | | | |
| Media guest folder upload and permission scopes | | | | | | |
| Reusable asset references, Markdown and courses | | | | | | |

Do not mark New issues Planned until a named team member confirms a specific delivery scope; do not mark Shipped without published documentation or a successful concrete test.

## Public links to paste in call/chat

- **Full call brief:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/shivangi-call-2026-11-20-brief.md
- **Creator Studio implementation request:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/97
- **Media Storage client upload link:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/98
- **External Tracking full spec:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/tracking-open-attribution-platform-2026-10-30.md
- **All product feedback:** https://github.com/IvoDimitrovPro/highlevel-product-feedback
- **Attributed Nov 19 Zoom chat findings:** https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/townhall-2026-11-19-creator-tracking-media-evidence.md

## Another follow-up from today's chat

Ivo asked for the **Meeting AI Private Beta enrollment link**. Ryan Howell provided a form in the meeting chat:
https://api.leadconnectorhq.com/widget/form/lYnAEwcJtgu9ryGQRT3T

This is a separate beta program and should **not consume the limited 30-minute Shivangi call**, unless she explicitly owns enrollment or accessibility. Ivo also reported that some official videos say “request early access” without telling users where to request it. Keep this as an onboarding/discoverability issue for the relevant beta team.
