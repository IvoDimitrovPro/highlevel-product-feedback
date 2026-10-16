# AI-007 — Provide managed AI Studio Cloud schema and resource management APIs

**Product:** Ask AI / AI Studio

**Type:** Integrations

**Status:** New

**Impact:** High

**Date reported:** 2026-10-16

**Source:** [Managed Cloud documentation](https://help.gohighlevel.com/support/solutions/articles/155000009113-managed-cloud-backend-in-ai-studio) — 2026-10-09; controlled TanStack AI Studio Cloud implementation tests — 2026-10-16

## Observed

AI Studio Cloud provisions a project-owned managed Supabase backend. Its generated browser and server clients can query existing authorized resources, but creating native database tables and RLS policies is documented through AI Studio chat. No **documented, authorized external Cloud management API/SQL DDL path** was established in the tests. The browser publishable key, app runtime service-role credential, and actual schema-management privileges are separate things. Generated code, TypeScript types or Git commits do not apply schema migrations.

## Why it matters

External coding agents can build sophisticated app code, but cannot safely complete native data-backed applications when the managed schema/policies are inaccessible without an AI Studio generation turn. Copying a snapshot may also preserve references to the original project's backend unless independently rebound, risking cross-client data access.

## Expected

- Scoped API/MCP or documented CLI for project Cloud provisioning, schema migrations, indexes, relationships and RLS policy create/read/update with dry-run/version/rollback support.
- Supported Auth settings/users, Storage bucket/policy management, and server-only Secrets lifecycle with write-only values.
- Explicit per-project tenant isolation, including cloning and Snapshot import with safe new Cloud binding.
- Structured audit, status, error messages, least privilege and no exposure of privileged tokens in frontend/Git.
- If managed DDL cannot be exposed, document a deterministic *non-generative* supported workflow for authorized schema/policy changes.

[Full implementation contract and acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/ai-studio-external-agent-development-brief-2026-10-16.md).

## HighLevel response

No confirmed API-based native Cloud DDL/RLS administration or tenant-safe Snapshot binding contract. The currently documented AI Studio Cloud activation and UI/AI-assisted operations are not equivalent to an external management API.
