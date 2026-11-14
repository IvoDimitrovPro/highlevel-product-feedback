# CRM-001 — Architecture: Configurable record-centric CRM

**Product:** CRM
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-11-14
**Source:** [Live read-only CRM UI/API/MCP audit, 2026-11-14](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/ghl-crm-live-readonly-audit-2026-11-14.md); [CRM beta group](https://app.slack.com/client/T0CD5375GLV/C0CAF1ZTH2B)

## Observed

The Opportunity-first redesign is a useful improvement, and the platform already supports Contact, Company/Business, Opportunity and Custom Object schemas with typed association definitions and some related UI/API/MCP operations. Our authenticated, read-only production inspection confirms these exist. However, the individual Opportunity search response exposed `relations` while GET-by-ID for the same sampled record omitted them. The sampled order list exposed `contactId` but no direct Company/Opportunity reference in that response. This is evidence of **API shape differences**, not proof that no alternative linkage exists. We did not run mutation or cross-object workflow execution tests.

Beta-community discussions raise B2B ownership, related-record workflows, associated payment history, configurable UI, and repeated-record handling. Specific roadmap comments cover narrower features; the broader architecture is not yet committed.

## Why it matters

A business may be Contact-first, Company-first, Opportunity-first or centered on a custom entity such as Property, Project, Membership or Policy. Forcing every use case into a single "primary" record means fake Contacts, duplicate records, fragile webhooks and hidden billing or relationship histories. CRM usability should not depend on adopting one sales-process pattern.

## Expected

- **Configurable work context:** team/user/role can use Contact, Company, Opportunity or Custom Object as the primary workspace, with suitable default views, layouts, filters, fields and permissions.
- **First-class typed relationships:** directional labels and roles (buyer, payer, signer, owner, beneficiary), configurable cardinality/uniqueness, link history, safe merge/split, and query/filter by associated fields.
- **Object-neutral workflow engine:** trigger and execute on any authorized object/event; find, create, associate, update and unlink related entities with explicit zero/one/many semantics, idempotency, audits and safe messaging consent.
- **Consistent UI, REST and MCP:** documented cross-object queries, relation expansion, read/write capabilities, access scopes, webhooks, debugging and parity indicators; preserve existing integrations and legacy migrations.
- **Correct financial ownership:** deals and forecasts distinct from transactions; Companies/Contacts/Opportunities can be associated with Orders, Invoices, subscriptions and refunds without redefining who paid or who benefits.

**Full [engineering proposal and 12 acceptance tests](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/references/crm-flexible-record-centric-architecture-2026-11-14.md)**. Includes franchise relationships, company employee turnover, real estate property and buyer records, paid memberships, repeat transactions, many stakeholders, partial refunds, tenant isolation, role-specific interfaces and concurrency.

## HighLevel response

No commitment to the overarching configurable record-centric CRM design has been verified. Some narrower features are live or scheduled in the CRM beta, and are not misrepresented as the full solution. Request an explicit shipped / beta / planned / out-of-scope matrix and an isolated acceptance-test pilot.

## Verification

[Real account read-only evidence](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/ghl-crm-live-readonly-audit-2026-11-14.md). No record mutations were made and no customer identifiers or credentials are published.
