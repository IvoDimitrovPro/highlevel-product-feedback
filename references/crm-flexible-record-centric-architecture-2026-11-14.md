# An open, configurable CRM — not a single forced “primary record” (2026-11-14)

**Audience:** HighLevel CRM Redesign, Contacts, Companies, Opportunities, Custom Objects, Workflows, Payments, API/MCP and platform engineering.

**Ask:** Build on the new Opportunity-first UX *without making Opportunity the mandatory center of every business*. Give each agency, team and individual a configurable **record-centric working model** with common first-class data, typed relationships, workflows, queries, automation and public API/MCP across entities. Use existing HighLevel primitives; this is a contract and interoperability request, not a proposal to replace internal databases or make Contacts/Opportunities/Orders identical.

**Evidence:** [Authenticated read-only UI/API/MCP audit](../sources/ghl-crm-live-readonly-audit-2026-11-14.md). All observations are scoped to the tested account, routes and permissions; no write tests were run. The behavior requested below must not be represented as shipped.

## 1. Why “Opportunity-first” cannot be the universal business model

Opportunity = potential sale/deal, Contact = person, Company = organization/customer, Custom Object = a domain resource (property, project, policy, device, account, enrollment), Order/Invoice/Subscription = financial and contractual facts. These entities overlap, but **none should be forced to impersonate another**.

A deal may be the right starting point for sales. An account/Company may be right for B2B delivery and billing; a Property for an agent; a Project for a contractor; a Student/Membership for a creator; a Contact for a small local-service business. A repeat customer can have zero, one or many simultaneous deals and transactions. An Opportunity may have no confirmed Contact at all. Billing identity is not always the person who submits a form.

**Principle:** the CRM may offer excellent Opportunity-first defaults, while leaving the **record focus, navigation, workflow entry object, connected data, user permissions and visual presentation configurable**. “Primary record” is a per-workflow/view/context choice, not a new global database primary key.

## 2. Existing capabilities to preserve — do not rebuild

- HighLevel already supports Contacts, Companies, Opportunities and Custom Objects. The authorized account exposes definitions and several association types.
- Native Opportunity lists, pipeline views, searchable records, filters, grouped fields, saved business records, associations and related sections exist in the inspected UI.
- Official [Custom Object ↔ Opportunity associations](https://ideas.gohighlevel.com/changelog/custom-object-opportunity-associations) allow multiple cardinalities and labelled relationships in UI.
- Official [Custom Objects guidance](https://help.gohighlevel.com/support/solutions/articles/155000003897) covers schemas, relationships, form inputs, workflows, advanced filtering, APIs and some reporting.
- Public REST already exposes Opportunity search, individual detail, object schemas, association definitions/relations, Orders and workflows. Official MCP exposes discoverable, permissioned operations; an authenticated operation was successfully executed read-only.
- Changelog/roadmap: HighLevel team said [Company ↔ Opportunity workflow association is in private beta](https://ideas.gohighlevel.com/opportunities/p/workflow-action-and-api-endpoint-to-associate-programmatically-an-opportunity-wi) with some actions but not removal/public API parity. In the Nov 12 beta Slack thread, a HighLevel representative expected related Custom Object → Opportunity workflow context *next month*. These are distinct scopes, not confirmation of rollout.

## 3. Product contract

### A. Uniform first-class records and relationships (P0)

1. Stable type-qualified IDs for Contacts, Companies, Opportunities, Custom Objects, Orders, Invoices, Subscriptions, Meetings and other native domain records. Each has independent lifecycle, owner/assignees, audit, privacy, permissions, typed metadata and deletion/archival semantics.
2. Configurable association model: one-to-one, one-to-many, many-to-many, optional or required; **directional role labels** (payer, buyer, owner, billing contact, decision maker, student, beneficiary, broker, agent, property, employer); link/unlink/change history, timestamps, origin, who changed the link and whether it was derived or manually entered.
3. Allow **multiple concurrent valid records** and relationships when the business requires it. Duplicate prevention should be based on explicit record identity/uniqueness policies and idempotency keys, not “one Contact may have at most one Opportunity in a Pipeline” as a universal assumption. Preserve an opt-in conservative mode.
4. A transaction does not necessarily belong to a single Opportunity or Contact. Support configurable `bill_to`, `paid_by`, `beneficiary`, `associated_with` distinctions; one order can contain multiple products, one purchase can grant rights to several beneficiaries, and many payments/refunds may reconcile to one invoice/deal.
5. Typed graph queries support filtering on associated **fields**, not only association IDs or labels; return linked record summaries safely and let users explicitly expand full records. Query, pagination, sorting and export semantics should remain consistent across all objects.
6. Support non-destructive dedup/merge/split and migration of links with complete provenance and GDPR/consent/retention boundaries. Never silently merge people because names, IPs, phones or company emails look alike.

### B. Workflows that can operate on any authorized object (P0–P1)

1. Trigger by create/update/delete/status/relationship event on any supported object, or by payment, form, calendar, external event and API. Select a typed **execution subject** (e.g. Opportunity, Company, Contact, Property, Order), not always the Contact that happened to trigger the workflow.
2. Native actions to `find / upsert / associate / unassociate / update / enrol in workflow` a related record, using typed lookups and filters. An Opportunity workflow can traverse to its Company, all stakeholders, Orders and project/Custom Objects; a Company workflow can target multiple Opportunities and their authorized contacts; a Custom Object workflow can update a related Opportunity.
3. Support traversal across one or more relationships with explicit ambiguity semantics (0 / 1 / multiple matches; first, all, role-based, or stop with error). No arbitrary silent “pick first” and no requirement for fake Contacts, helper fields or external webhook round-trips.
4. Atomic/idempotent operations where feasible and reliable backoff/replay. Expose execution subject IDs and relationship snapshots, correlation/event IDs, structured failures, loop prevention, race controls, and mutation/audit log.
5. Preserve contact-scoped messaging consent: send to specifically chosen opted-in recipients, including primary/secondary/billing stakeholders, not everyone attached to a deal by accident.

### C. One consistent control plane: UI, REST, MCP, SDK and events (P0–P1)

1. All supported object/relationship types have common read/query/search/filter, permission-checked mutations, stable versioned schemas, deep links and webhooks. REST/MCP/UI should share the same validation, business rules and role labels rather than offering incompatible snapshots.
2. **Live gap observed:** `GET /opportunities/search` included `relations` on the sampled record, but `GET /opportunities/{id}` omitted them. Provide explicit `include=relations`/`expand=...` (or an equivalent stable contract) and consistent pagination, error and authorization behavior.
3. **Live gap observed:** Order list objects exposed Contact linkage but not direct Opportunity/Company references. Document supported source-of-truth relationship retrieval, update and reporting for financial records without implying all billing must originate from a Contact.
4. Reliable cross-object association APIs need create/search/update/delete/unlink and batch support; `GET relation by record` must be usable without guesswork. New object schemas should be declaratively installable with supported association definitions, not several fragile manual steps.
5. Scope by agency/location/entity/action, support least-privilege OAuth and approved private integrations, provide webhook subscriptions and replay, API changelogs, rate limits, cursor pagination, SDK examples and ability to validate against isolated test sub-accounts.
6. Keep AI assistant functionality an optional consumer of these same APIs. Do not make AI or a hidden prompt the only way to model an association, create a workflow or configure a view.

### D. Configurable experience without breaking existing teams (P1)

1. Team/user/admin may choose default homepage and context: Contact-centric, Company-centric, Opportunity-centric, or a Custom Object workspace. Switching context is a view choice; records and histories remain intact.
2. Allow separate saved, shareable views/layouts per object type and role: Kanban, compact list, table, detail page, calendar/timeline where relevant; search, field folders, labels, responsive resizable panels, keyboard navigation, custom columns, sorting, filters, conditional visibility, quick edits, bulk actions and exports.
3. Let a card open inline or in a resizable side panel, preserving scroll position, pipeline, filters and last tab. Offer focused presentation by role; don't make every user scroll a giant universal sidebar.
4. Allow agency-wide defaults and sub-account/team/user overrides, migration from legacy layouts with preview, opt-in/rollback where practical, and no workflow or snapshot breakage.

### E. Commercial truth and activity history (P1–P2)

- Separate CRM pipeline **potential value** from actual authorized **paid revenue** and entitlement state. Support partial payments, instalments, recurring subscriptions, coupons, taxes, FX, upsells, refunds, chargebacks, offline payments and order-level identifiers. Do not count Thank You page views as sales.
- Links to Company, Contact, Opportunity and domain entities must retain original transaction IDs and real payer; refunds change only relevant items/grants and are auditable. Associate payment records without reassigning their financial owner.
- Expose notes, activities, tasks, communication, appointments and audit records at the correct business entity, with **explicit sharing/retention rules** for contact turnover, multiple linked records and GDPR requests.
- Our separate measurement proposal [TRACKING-002–007](tracking-open-attribution-platform-2026-10-30.md) owns the full attribution/event-ledger requirement. The CRM redesign request is the **enabling data/relationship and automation contract**, not a demand to rebuild analytics inside Opportunities.

## 4. Edge-case matrix (to avoid designing only for a simple single-buyer pipeline)

| Use case | Correct model | Typical “one primary record” failure |
| --- | --- | --- |
| **Repeat sales** | Same Contact, two independently tracked purchases/deals in one pipeline, different dates/owners | Second deal merges/overwrites the first; native API default duplicate restrictions need explicit policy |
| **B2B account** | One Company with several buying contacts, sales Opportunities, invoices and company-owned notes/payment methods | Billing/history disappears when an employee leaves, notes sit on an invented Contact |
| **Franchise group** | One human Contact is owner of multiple Companies with branch-specific roles, and one parent holding Company | Single company assignment cannot express roles for branches; users must hack names |
| **Real estate** | One Property links to multiple interested buyers, sellers, brokers, showings and independent Opportunities; deal parties may be couples | Property is forced into Opportunity or Contact; one listing cannot host concurrent buyer pipelines |
| **Course/club/agency** | One Company or parent pays for several member Contacts; one Contact buys several products; timed entitlements independent | Payment attached to wrong Contact, renewals overwrite deal, refund removes unrelated memberships |
| **Multiple stakeholders** | Opportunity has multiple contacts: decision maker, billing, signer, assistant with separate consent | Single “primary contact” receives all communications or hides additional stakeholders |
| **Anonymous lead** | Opportunity/project can exist without personal identity; later consented Contact is linked | CRM forces a fake Contact to begin; privacy assumptions break |
| **One payment, many benefits** | Order has multiple lines; beneficiary/entitlement rows link independently to products or Contacts | No way to attribute grants/refunds correctly or reconcile revenue |
| **Concurrent work** | Two automations update different linked records, retries do not cause duplicate relationships/orders | Silent last-write-wins, loops, duplicate purchases or lost notes |
| **Merge/split** | Contacts/Companies split/merge with relationship provenance and history preserved | Historical invoices, consent or attribution accidentally reassigned |
| **Multi-tenant agency** | Reusable snapshot/schema/view presets with fresh tenant-owned records and least-privilege scopes | Imported associations reference previous client's records or expose unrelated data |
| **Different users/roles** | Sales sees pipeline; finance sees Companies/Orders; service sees Projects; owner sees rollups | One fixed UI floods everyone with irrelevant fields or hides critical context |

These are **architecture test cases** drawn from our work, the Slack beta group's discussion and general CRM design patterns; they are not claims that every edge case currently fails in HighLevel.

## 5. Minimum acceptance suite (isolated test location; no production mutation)

- **C01** — Create two independent Opportunities for the same Contact and Pipeline when authorized configuration permits; preserve existing conservative duplicate controls.
- **C02** — Create a Contact, link to Companies A and B with different roles/validity windows, query it from either Company and via REST/MCP without losing names/IDs.
- **C03** — Create a custom Property/Project record and associate multiple Opportunities, Contacts and Companies; list and filter by linked properties and role in UI and API.
- **C04** — Opportunity search and detail/read-by-ID show consistent links and expandable summaries with permission-aware fields; no “bare IDs only” surprise.
- **C05** — Run a Custom Object workflow that updates a linked Opportunity and one permitted related Company; 0/1/many relationship cardinality is explicit, retry is idempotent, logs show each step.
- **C06** — A calendar appointment linked to Opportunity X triggers a workflow **for X**, not an arbitrary other opportunity of the same Contact; preserves scheduled context.
- **C07** — Inbound form/email can find/create the correct person then create or associate an Opportunity using that result, without converting workflow execution to the wrong Contact or requiring an outbound/returning webhook.
- **C08** — One B2B Company owns notes, contracts, orders, invoices and payment methods independently; removing an employee access/association retains business history and respects consent.
- **C09** — Order A, two products, several beneficiaries, partial refund and renewal reconcile correctly without inventing sales or removing unrelated grants; financial audit carries source IDs.
- **C10** — A user switches Contact-first → Company-first → Opportunity-first layouts, saved filters, tables and card interaction without changing the actual underlying relationships or losing history.
- **C11** — Roles cannot reveal hidden linked records through API/MCP field expansion or cross-location access; audit trails show links and mutations.
- **C12** — Existing Contact-first workflows and historical data run unchanged after beta opt-in; snapshots and migration preview identify anything that cannot be migrated automatically.

## 6. Sensible phased implementation request

**P0 — foundation:** documented common object/relationship query contract, predictable record/expanded relations, configurable cardinality and identities, cross-object workflow context with explicit 0/1/many semantics; no breaking default conversions.

**P1 — usable control surface:** workflow actions/events for relationships; UI/API/MCP parity; customizable field layouts and saved views; appointment/deal links; audit/idempotency/permissions.

**P2 — end-to-end commerce:** company/order/subscription/beneficiary link semantics, repeat purchases, refunds and reporting reconciliation; snapshot/migration/role-based packaging.

The request is **not** “make every object the same internally,” “invent a second tracking platform,” “force full custom code,” or “turn every sub-account into a developer project.” Native UI must remain excellent for nontechnical users.

## 7. Decision requested from the beta team

1. Is the goal merely an Opportunity-first UI, or a **configurable object/relationship-centered CRM** where different workspaces may start from different records?
2. Which parts of this contract are **already shipped, gated to beta, on the roadmap, or intentionally out of scope**? Specifically relation expansion in API/MCP; cross-object workflow execution; Company-owned payments/notes; multiple Opportunities per Contact/Pipeline; and reversible UI preferences.
3. Can product/engineering assign an owner for a small **read-only inventory + isolated test tenant pilot** using C01–C12, sharing documented API endpoints/feature flags and roadmap checkpoints?

## 8. Existing requests already owned elsewhere; do not duplicate them

- [AI-003 — external AI/API interoperability](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/4)
- [ORDERS-001 — IDs in Workflows and exports](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/57)
- [COMM-001 — purchases/entitlements](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9) and [COMM-005 — product-linked channel access](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/74)
- [REPORT-001 — configurable tables](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/60), [REPORT-002 — finance analytics](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/61)
- [MR-103 — appointment session links](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/49), [MR-106 — CRM meeting associations](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/51), [MR-107 — meeting activity workflows](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/52), [MR-209 — attendance to revenue](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/56)
- [TRACKING-002 — open events](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/75), [TRACKING-003 — consented journeys](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/76), [TRACKING-004 — financial source of truth](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/77), [TRACKING-005–007 — attribution/measurement/diagnostics](tracking-open-attribution-platform-2026-10-30.md)

**Current status: Design proposal / New.** No HighLevel commitment to this umbrella architecture has been established. Keep the Slack message brief and link to the evidence-backed proposal rather than pasting the entire contract into a beta channel.
