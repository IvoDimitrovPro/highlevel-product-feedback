# AI-008 — Expose AI Studio project, Git sync, preview and publish lifecycle through API/MCP

**Product:** Ask AI / AI Studio

**Type:** Integrations

**Status:** New

**Impact:** High

**Date reported:** 2026-10-16

**Source:** [AI Studio Git sync changelog](https://ideas.gohighlevel.com/changelog/ai-studio-git-sync-with-github) — 2026-10-15; [Snapshot support](https://ideas.gohighlevel.com/changelog/ai-studio-snapshot-support-is-live); controlled agency Git-to-preview and starter tests — 2026-10-16

## Observed

AI Studio now synchronizes code with a private GitHub repository and offers preview/update/publish UI. A coding agent can commit source changes, but documented project-management APIs/MCP to create a blank/starter AI Studio project, inspect the exact imported revision/build, activate its preview, publish a chosen revision, inspect native feature bindings or automate Snapshot installation were not established. The shipped Git control creates its own repo and only syncs the connected branch.

## Why it matters

An agent can code without AI Studio tokens but still needs manual platform steps to create, connect, test and release customer projects. Git push alone proves neither a successful preview nor a published website.

## Expected

- Scoped project list/create/get/update/**clone within the same sub-account** (choose without-history, select destination/folder), including **no-generation starter/snapshot project creation**, idempotent calls and supported framework/config enumeration. Project cloning exists in UI but is not established as an official public API/MCP action.
- Return clearly defined clone billing/usage behavior (if any), enforce independent project Git repository/branch, and expose a verifiable inventory of **origin versus destination Cloud/Auth/Storage/Secrets/Payments/Chat bindings**. Clone must not silently reuse an origin customer's managed backend or payment resources; a safe zero-shared-resources mode is required for starter distribution.
- Read Git remote/branch/latest imported commit and Sync History; Pull now / preview build / diagnostic logs / exact preview commit via supported API.
- Explicit approve/publish and deployed-version readback, rollback, branch-divergence handling and lifecycle webhooks/job statuses.
- Machine-readable platform-managed/generated files and native resource binding manifest, with independent client IDs/secrets after Snapshot clone/import.
- Least-privilege authorization and direct cost visibility; no silent AI Studio prompt charge for standard programmatic configuration.

[Full implementation contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/ai-studio-external-agent-development-brief-2026-10-16.md).

## HighLevel response

Git synchronization and Snapshot copy have shipped. No published confirmation of the requested **external AI Studio project lifecycle management API** was established; do not confuse it with the separate Agent Studio Public API.
