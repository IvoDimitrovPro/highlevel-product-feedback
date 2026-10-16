# AI Studio external-agent interoperability — developer requirements (2026-10-16)

**Audience:** HighLevel AI Studio / platform engineering and developer experience. **Goal:** A customer-authorized external coding agent (ChatGPT, Codex, Claude Code, Gemini CLI, Cursor or another agent) can create, modify, configure, test and publish a HighLevel AI Studio website/app directly through documented APIs/MCP and/or through the existing GitHub sync, without being forced to purchase AI Studio generation turns for routine engineering work.

**Not requesting:** a replacement for AI Studio, an unsupported private API, credential sharing in chat, or bypassing hosted checkout/security. This is an interoperability contract with least-privilege permissions.

## 1. What already works — do not rebuild it

- GitHub two-way synchronization supports React/Vite and TanStack Start projects; external commits reach AI Studio and can produce an updated preview. AI Studio creates its own private repository, syncs one selected branch and has divergence handling.
- TanStack Start supports SSR, server functions, REST routes and server-side Secrets; external agents can implement these through source control.
- HighLevel's general CRM API/MCP can manage **supported** contacts, calendars, products, chat widgets and other resources with account-scoped authorization.
- AI Studio Payments can be enabled in project UI, with a HighLevel-managed checkout module, catalog and order records; storefront/UI components can be written externally.
- Chat Widget public API supports scoped creation and updates. An externally created widget can power a custom AI Studio React UI and two-way Conversations messaging without an AI Studio generation.
- Snapshots already carry AI Studio projects across sub-accounts. **Do not re-request these shipped features.**

These capabilities do **not** establish that external code alone can provision AI Studio-managed Cloud SQL schemas, project-owned payment catalogs, Secrets or all native project links.

## 2. Minimum complete developer contract

### A. Discover and administer AI Studio projects (direct API/MCP)

Provide documented, supported, versioned, auditable actions, scoped to the authorized sub-account:

- List projects and versions; inspect framework (TanStack vs legacy Vite), status, capabilities, project metadata and environment identifiers.
- Create a **minimal ready-to-edit project** from a supported blank/starter template or approved snapshot **without an AI generation**; get back project ID and deployment status.
- Read/update project configuration, permissions, domains (read and propose; explicit approval to change live DNS), Secrets metadata (never return values), Cloud/Payments/widget linkage, enabled features and current cost-related settings.
- Get build/SSR diagnostics, logs and readiness; trigger/schedule an explicit build or preview refresh; retrieve stable preview references and their versions.
- Review/approve/publish a specific immutable version; query publication success and deployed revision; rollback safely to a known good revision without silently replacing the active site.
- Expose idempotency keys, structured errors, rate limits, job IDs, async operation status, audit trail and webhook events for sync/build/preview/publish failures.
- Support least-privilege OAuth/PIT/MCP scopes such as project.read, project.write, project.preview, project.publish, native-integration.read/write; limit grant to selected location/projects and support revocation. **These are requested capability examples, not claims of current scope names.**

### A2. Direct work inside the AI Studio interface (without GitHub)

- A permissioned external agent with browser/computer-use capability must be able to inspect the **actual AI Studio project**, edit code in the platform Code Editor, configure More → Cloud/Payments/SEO/Chat Widgets, update preview and publish via normal supported UI actions where permitted.
- A direct Code Editor save is not the same as sending a paid AI Studio chat prompt. The product should expose **clear UI status and billing consequences** before any agent-triggering action.
- Expose stable accessible controls, confirmation dialogs, deterministic error/status labels and per-action audit events for supervised/agentic browser use. Do not force undocumented internal requests, DOM hacks or privileged cookies.
- Agents without a browser-control tool can still use supported public API/MCP and Git, but cannot be promised full direct UI control. API/MCP should be the reliable long-term automation surface; browser control is the supported fallback for remaining UI-only operations.
- For an existing Git-connected project, direct UI code edits should preserve/version changes in the same supported sync path, with conflict detection rather than overwriting external commits.

### B. Make GitHub a reliable second control path

- Retain existing bidirectional Git integration and single authoritative synced branch per project.
- Let agents read the actual remote, branch, latest imported commit, build status and preview/published commit IDs through a supported API; permit Pull now/Push now and status checks programmatically.
- Specify what constitutes a completed sync vs a compiled preview vs a published version. Do not conflate them.
- Safely detect and reconcile diverged branches, preserve both sides, support branches/PR reviews, prevent accidental force-push, surface human-readable failure reasons.
- Document current restriction: AI Studio creates its own repository; arbitrary existing-repo import is not a verified supported operation. Consider documented import/connect-existing-repo as an enhancement, not a prerequisite for normal external-agent edits.
- Preserve project-specific builder config, generated modules and binary assets. Publish a stable manifest describing reserved platform-managed files and safe extension points.

### C. Provide supported management of native Cloud resources

- Provide project-scoped, authorized Cloud provisioning and health/status inspection (not just app-side Supabase SDK).
- Managed DB: transactional versioned SQL schema migrations; table/index/foreign key creation, schema diff and dry-run; RLS policy create/read/update, policy validation and rollback.
- Users/Auth: configure supported sign-in policies and redirects, authorized user management, role/claims integration, clear test environment and logs.
- Storage: buckets, public/private setting, quotas, signed URLs, Storage policies and authorization tests through documented APIs.
- Secrets: named server-side secret create/update/rotate/delete with write-only values and metadata readback; never embed server secrets into GitHub, browser bundles or logs.
- Per-client Cloud isolation when cloning, snapshotting or remixing. New client projects must not retain references to an originating customer's database/users/storage. Expose rebind/regenerate flow, migration status and explicit isolation checks.
- If privileged Cloud management **cannot** be exposed safely, document that restriction and provide a supported non-AI-prompt operator workflow with exportable migrations. Publishing generated TypeScript types is not equivalent to applying database DDL/RLS.
- Securely distinguish browser publishable key, runtime server service-role credential and actual SQL/management privileges. They are not interchangeable.

### D. Payments, CRM linking, Chat Widgets and analytics

- Payments: read/enable project capability; select sub-account catalog products/prices for **that project**; inspect provider/mode (Test/Live), project-specific checkout module reference, webhook/order status and mapping. Config changes should be possible through documented UI and preferably APIs without paid AI prompts. Never expose provider secrets, collect card data in app code or recreate the sealed hosted checkout.
- Ensure protected checkout client interfaces, versioning and regeneration behavior are documented. An agent should edit storefront/cart/thank-you pages **around** the managed module and verify orders using authoritative server/HighLevel records, not a client-side success flag.
- CRM forms, calendars and workflows: document which platform resources and native `AI Studio Form Submitted` events need separate project connection and which standard API/embed routes are equivalent or intentionally different. A visually correct widget is not a successful integration.
- Chat Widgets: add supported linking/discovery of **an existing public-API-created chat widget** to an AI Studio project so it appears under More → Chat Widgets and relevant project analytics without requiring an AI Studio prompt. Existing chat-widget API creation is already working; the gap is project ownership/visibility.
- Analytics → Overview, Form Submissions and Chat Widgets: documented project-scoped read access/export with proper privacy controls, or explicitly identify unsupported endpoints. Preserve platform-owned analytics instrumentation.
- SEO & AI Search: documented project settings that are not represented in SSR source; for metadata, robots, sitemap, canonical and JSON-LD, allow regular GitHub code edits. Preview and published crawl/index status must be distinguishable.

### E. Snapshot/client onboarding

- Provide stable starter project + snapshot creation/refresh, account-target install, verification and rollback; support programmatic orchestration if permissioned.
- After install, generate independent Git repository link, project identifiers, managed Cloud environments (if enabled), payment/widget associations and environment settings. Never carry another customer's credentials or data.
- Document precisely which assets snapshot copies vs references; provide machine-readable post-install manifest and required binding checklist.
- Allow agents to perform as many steps as access permits and request a single human action only for consent, sign-in, provider configuration, expenses or live publication.

## 3. Agent workflow expected to work

1. Discover authorized location/project; determine framework, git link, live revision, existing integrations and capabilities.
2. For a new project, create minimal TanStack Start starter or install snapshot without invoking an AI builder turn, then establish a project-owned Git remote.
3. Clone/read source. Implement frontend, SSR, routes, supported SDK calls, test suites and metadata; leave platform-managed SDK/checkout generated code intact.
4. For native backend resources, call documented Cloud management actions with narrowly scoped authorization; apply migration/RLS/Storage/Auth/Secrets and verify each operation. If not supported, return a precise blocked operation rather than fake a substitute.
5. Configure only the needed CRM/payment/chat integrations in the correct sub-account. Never activate a payment provider or paid service without customer approval.
6. Run dependency install, static checks, client + SSR builds, route/UI/mobile checks, integration round trips and security tests.
7. Commit/push with ordinary Git, wait for AI Studio sync/build success, verify new preview at exact commit. Failure should return actionable diagnostic information.
8. Publish *only* the approved version, then validate live domain, expected resource bindings, recorded CRM events/orders and rollback capability.
9. Return links, commit SHA, configuration/result IDs (not secrets), tests actually passed, any expense, and only genuinely blocked human actions.

## 4. Acceptance tests for engineering

| ID | Required observable result |
| --- | --- |
| AT-01 | With a scoped account grant, an external agent lists and selects the correct AI Studio project without copying credentials into chat. |
| AT-02 | An existing site is modified via external Git commit; AI Studio pulls it, successfully builds, exposes exact commit in preview; live revision remains unchanged until approved publication. |
| AT-03 | New TanStack starter can be provisioned without a paid AI generation; independent project Git remote is returned. |
| AT-04 | API-driven preview/build/publish status and logs are readable, errors actionable; branch divergence and rollback preserve work. |
| AT-05 | In project-managed Cloud, agent applies a sample table/index and RLS rule with actual DDL rights; unauthorized tenant cannot read it; migration is versioned and reversibly deployed. **Not verified today.** |
| AT-06 | Auth signup/sign-in/session and private Storage upload/read/unauthorized-denial complete against the actual project Cloud. **Not verified today.** |
| AT-07 | A project-bound catalog product is sold in Test mode through the managed checkout; authoritative Order and CRM mapping verified, without handling card data in source. **Not verified today.** |
| AT-08 | A widget created with the existing public API can be explicitly linked to AI Studio project, be managed/seen in More → Chat Widgets and attributed correctly in analytics. **Native project linkage not verified today.** |
| AT-09 | Snapshot restores into a distinct location and has isolated Git/revisions/resources; no origin Cloud IDs, contacts, secrets or payment connections leak. **Not verified today.** |
| AT-10 | Git-only changes, direct config actions and native AI generation are separately logged and priced. Operations are not silently counted as paid AI generations. |
| AT-11 | One end-to-end permissioned agent flow documents every needed human approval and no step is falsely marked working from only a local build or mock UI. |

## 5. Verified observations vs gaps (controlled agency tests, 15–16 Oct 2026)

**Verified:** Git commits imported by AI Studio; TanStack SSR and server route compilation; native Payments public catalog GET HTTP 200 (empty catalog); native Cloud auth-settings GET HTTP 200; externally provisioned Live Chat widget and preview ↔ Conversations two-way messages. Read-only checks alone do **not** prove payment transaction or auth authorization.

**Not yet demonstrated:** documented public AI Studio project administration API; agent-controlled native Cloud SQL DDL/RLS; tenant-safe Cloud clone/snapshot rebind; external AI Studio project widget link API; native AI Studio payment catalog mapping API; externally controlled preview/publish lifecycle API; true independent snapshot install with feature isolation.

**Costs:** AI Studio generation charges were observed in testing, but their assignment to individual Cloud/Payments/Chat operations is not conclusively determined. Ask for per-operation event/charge IDs and explicit zero-credit config actions.

## 6. References

- [AI Studio Git sync](https://ideas.gohighlevel.com/changelog/ai-studio-git-sync-with-github)
- [AI Studio full-stack architecture](https://help.gohighlevel.com/support/solutions/articles/155000008701-ai-studio-ssr-server-functions-rest-apis-and-secrets)
- [Managed Cloud Backend](https://help.gohighlevel.com/support/solutions/articles/155000009113-managed-cloud-backend-in-ai-studio)
- [AI Studio Payments](https://help.gohighlevel.com/support/solutions/articles/155000009049-accept-payments-in-ai-studio)
- [Chat Widget Public API](https://marketplace.gohighlevel.com/docs/ghl/chat-widget/chat-widget/)
- [AI Studio Chat Widgets](https://help.gohighlevel.com/support/solutions/articles/155000009182-how-to-add-chat-widgets-in-ai-studio)
- [AI Studio Snapshots](https://ideas.gohighlevel.com/changelog/ai-studio-snapshot-support-is-live)
- [Forms and calendars](https://help.gohighlevel.com/support/solutions/articles/155000007599-connect-forms-and-calendars-in-ai-studio)
- [Existing Agent Studio Public API (different product; illustration of lifecycle API design)](https://help.gohighlevel.com/support/solutions/articles/155000007515-how-to-use-public-apis-in-agent-studio)

**Feedback ownership:** [AI-003, existing request](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/4) tracks the overall interoperability outcome. Narrow blocking requests should link back here instead of generating duplicate broad issues.
