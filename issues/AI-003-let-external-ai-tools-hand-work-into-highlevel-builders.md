# AI-003 — Integrations: Connect external AI to builders

**Product:** Ask AI / API

**Type:** Integrations

**Status:** New

**Impact:** High

**Date reported:** 2026-06-15

**Source:** [Original Zoom feedback index](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/zoom-feedback-index-2026.md) — 2026-06-15 Product Town Hall; [GitHub sync shipped](https://ideas.gohighlevel.com/changelog/ai-studio-git-sync-with-github) — 2026-10-15; [Cloud docs](https://help.gohighlevel.com/support/solutions/articles/155000009113-managed-cloud-backend-in-ai-studio) — 2026-10-09; controlled agency integration testing — 2026-10-16

## Observed

The original request asked for supported API/MCP handoff from external AI tools into HighLevel sites/funnels/builders. GitHub two-way sync now solves **AI Studio source editing**; TanStack Start SSR, server functions, REST routes and external HighLevel Chat Widget API also work. But a code commit cannot independently provision native project-owned Cloud SQL schema/RLS or every native project setting. Published SDKs for general CRM and **Agent Studio** do not automatically grant control of **AI Studio**.

## Why it matters

Customers should be able to ask their chosen AI coding agent to build, configure, test and manage AI Studio websites end-to-end, with minimal AI Studio generation spending and no GitHub/programming education required from the customer. Agents need a supported path, not browser automation against undocumented private endpoints or guesses about generated code.

## Expected

- Preserve existing Git sync; expose secure, versioned project APIs/MCP for discovery, supported configuration, builds/previews, native connections and versioned publication.
- Explicitly document the distinction between editable Git source, platform-managed resources and ordinary HighLevel CRM resources.
- Provide least-privilege account/project OAuth, auditable operations and actionable errors.
- Support agent-ready snapshots and isolated onboarding; no cloned customer data or secrets.
- Document native Payments, Cloud, Chat Widget, analytics and SEO boundaries and stable SDK/managed-code contracts.
- Allow an external agent to complete everything authorized and return only necessary human approvals or genuine platform blockers.

**Full engineer-ready specification with workflow and acceptance tests:** [AI Studio external-agent interoperability brief](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/ai-studio-external-agent-development-brief-2026-10-16.md).

**Important:** This does not ask to rebuild already shipped Git sync or standard Chat Widget APIs.

## HighLevel response

No confirmed official commitment to the additional AI Studio native-resource and project-lifecycle API capabilities. Git synchronization has shipped, but the broader original request is only partially addressed.

## Official changelog verification — 2026-11-13

**Result:** Partial implementation — request remains open.

**Already available:** Official LeadConnector MCP support can create/debug/publish Workflows in private beta.

**Scope decision:** A generic supported external-agent handoff to Websites/Funnels and all AI Studio native builders is not established.

**Official sources:** [Workflows Now in MCP – Ask Your AI Assistant to Build, Debug and Publish Workflows](https://ideas.gohighlevel.com/changelog/workflows-now-in-mcp-ask-your-ai-assistant-to-build-debug-and-publish-workflows).

**Checked:** 2026-11-13. A feature announced only in Labs/private beta is not automatically generally available.

## Chat Widget scope verified for Town Hall — November 19, 2026

HighLevel has shipped official [Chat Widget public APIs](https://ideas.gohighlevel.com/changelog/chat-widget-public-apis), [Snapshot support](https://ideas.gohighlevel.com/changelog/chat-widget-snapshot-support), and [all-type inline embedding](https://ideas.gohighlevel.com/changelog/chat-widget-embed-any-chat-widget-inline). In our **October 16 test**, an API-created Live Chat widget appeared under Sites/Chat Widgets and successfully exchanged external React-site messages through Conversations, **but the same widget was not listed in AI Studio's native Chat Widgets integration panel**. Native AI Studio insertion and arbitrary code embedding are separate capabilities. Ask for project adoption of existing widgets, documented binding API/MCP and type coverage; do not request basic API creation again. [Evidence](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/townhall-media-tracking-widget-evidence-2026-11-19.md); [Town Hall questions](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/townhall-2026-11-19-media-tracking-chatwidget-brief.md).
