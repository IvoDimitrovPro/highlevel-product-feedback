# HighLevel Opportunity-first CRM: authenticated read-only audit (2026-11-14)

**Purpose:** Distinguish actual observed behavior from docs, roadmap replies, and design proposals. The public evidence here intentionally excludes access tokens, location/customer/record IDs, names, payment values and client data. No production records were created, modified, imported or deleted. A transient local verification script was used and not committed.

## Evidence levels

1. **Observed in authorized HighLevel sub-account via REST:** Using an existing authorized sub-account token, read-only requests returned HTTP 200 for:
   - `GET /objects/?locationId=…` (v3): standard Contact, Opportunity, Business/Company schemas and one Custom Object.
   - `GET /associations/?locationId=…&skip=0&limit=…` (v3): association definitions for business↔opportunity, contact↔opportunity, contact↔custom object and business↔contact. This proves these specific **definitions** exist in the account; it does not prove every association supports identical CRUD/workflow/reporting.
   - `GET /opportunities/pipelines` (v3 and legacy), `GET /opportunities/search` (v3), `GET /opportunities/{id}` (v3), `GET /contacts/` (legacy), `GET /payments/orders` (legacy), and `GET /workflows/` (legacy).
   - On the sampled Opportunity, **search returned `relations` (one relation with keys `associationId`, `recordId`, `relationId`, `objectKey`, `primary` etc.) but the same record's `GET /opportunities/{id}` response omitted `relations`**. This is an API surface difference, not proof the underlying relation is missing.
   - The sampled Order list response included `contactId` but did not expose direct `opportunityId` or `companyId` properties. This is an absence from this specific response, **not** proof that no other link or query exists.
   - The first tested access token was unauthorized for this particular location (403/401); a different existing authorized token worked. Do not infer generalized account availability from token failures.
   - Workflow definitions and live business record mutations were **not** tested.

2. **Observed in authorized, already signed-in Opera browser (not cloud browser):**
   - Opportunity list view was accessible and displayed active records, pipeline controls, list and kanban navigation, Search, Advanced filters and Manage fields.
   - Opportunity detail presented sections/controls including **Opportunity Details**, **Primary Contact Details**, **Associations**, **Notes**, **Tasks**, **Payments**, **Appointments**, **Automations**, and grouped custom fields. This confirms these screens exist in the inspected live UI. Specific multi-object edits, permissions, field move/save, and automation triggers **were not** exercised.
   - The separate cloud browser lacked the user sign-in; that isolated failure was superseded for UI access by the authenticated local Opera tab. No current user's tab with unsaved work was altered; an audit tab was opened for inspection.

3. **Observed via official LeadConnector MCP:**
   - Authenticated MCP initialization and `tools/list` succeeded at the OpenAI v2 MCP endpoint. Four unified tools were advertised: `search_operations`, `describe_operation`, `execute_operation`, `list_locations`.
   - `search_operations` returned discoverable operations for Opportunity search/get, object schema/search, association definitions, relations, Workflows, Orders and other supported services, conditional on scopes.
   - `describe_operation` returned schemas/required scopes for e.g. `get-opportunity`, `get-relations-by-record-id`, `search-opportunities-advanced`, `get-order-by-id`, `get-workflow-definition`.
   - **One actual read-only `execute_operation` call** for `get-object-by-location-id` succeeded and returned object schemas. No write-capable MCP operations were invoked. Operation availability or a successful schema read is not end-to-end feature parity.

4. **Published official HighLevel contracts (not tested mutations):**
   - [Opportunities API](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities/): Opportunity `contactId` is optional, and duplicate Opportunities per contact/pipeline are conditionally restricted by `allowDuplicateOpportunity`; contact-less Opportunities are never treated as such duplicates. Our `GET location` response did not expose this flag so its current value in the sub-account was not confirmed.
   - [Custom Objects](https://help.gohighlevel.com/support/solutions/articles/155000003897): first-class custom schemas, object relationships, workflows, searchable views. The published supported/unsupported matrix is narrower for Calendars, Payments, Conversations, email campaigns, and other surfaces.
   - [Custom Object <> Opportunity Associations release](https://ideas.gohighlevel.com/changelog/custom-object-opportunity-associations): supports role-labelled relationship cardinalities in UI. No assumption of equivalent workflow/API behavior.
   - [Association REST API](https://marketplace.gohighlevel.com/docs/ghl/associations/associations/) and [Relation REST API](https://marketplace.gohighlevel.com/docs/ghl/associations/relations/): available operations and documented scopes; exact compatibility by object pair may vary and must be tested.
   - [Official MCP server](https://marketplace.gohighlevel.com/docs/other/mcp/): OAuth/scope-gated operation catalog. An MCP discovery result is not a commitment that every UI workflow is exposed.

5. **Slack beta community observations (reported by OTHER testers, not reproduced in this account):**
   - 2026-11-12: Aayush said Custom Object-based workflows will gain cross-object Opportunity access, expected *next month*; no proof of delivery.
   - 2026-11-10: Pallavi acknowledged and roadmap-added an Opportunity-specific appointment trigger.
   - 2026-11-13: Aayush clarified that a separate association label must be configured for a Contact to relate to multiple Companies; not proof many-to-many is absent.
   - 2026-11-13: Another API tester reported that search relations lack full related-record fields, individual record GET omits relations, and association creation at Custom Object schema creation is not supported in their tested flow. Their experience is not a substitute for an independently reproduced API test.
   - Multiple testers raised B2B company-owned notes, payment methods/credits, responsive field arrangements and non-contact-centric workflows.

## Observed gap vs desired behavior

| Surface | Verified reality | Not yet established / design requirement |
| --- | --- | --- |
| Data model | Contact, Company, Opportunity and Custom Object schemas; association definitions | Uniform queryable typed relationships with roles, history and cross-object field traversal |
| Opportunity queries | Search has relation rows; detail GET omitted them on same sampled record | Consistent option to include/expand related records, predictable schema and versioning |
| Finance | Order list includes Contact linkage | Public, reversible association of orders/transactions with authorized Company, Opportunity and domain objects; source-of-truth ledger |
| MCP/API | Authentication, discovery and a schema read execute work | Equivalent object/relationship/workflow capabilities and documented limits across UI/API/MCP |
| Workflow | Existing workflows listed | Specific relation traversal, dynamic execution context, cross-object change triggers, idempotent history/replay |
| UI | New layout with associations, payments, grouped fields and list/Kanban controls | Configurable record-centric workspaces, card/side panel layouts, permission-aware views, keyboard/bulk edit |
| Migration | No migration performed | Non-destructive opt-in, reversible UI choices and compatibility with preexisting automations |

**Caution:** the audit is intentionally read-only. Missing fields in selected API shapes do not prove absence across all endpoints, feature flags or beta entitlements. This document is the evidence snapshot; [engineering proposal](../references/crm-flexible-record-centric-architecture-2026-11-14.md) contains requested behavior, not shipped-feature claims.
