# COMM-005 — Link Premium Channel access to existing products and track entitlements

**Product:** Communities
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** Ivo's product-feedback follow-up (2026-10-30); [HighLevel Ideas Board: premium channels](https://ideas.gohighlevel.com/communities/p/make-some-channels-premiumpaid-for), [selling community access through a course offer/product](https://ideas.gohighlevel.com/communities/p/upsell-my-paid-community-from-a-course-offer), [paid and free channels](https://ideas.gohighlevel.com/communities/p/paid-channels-free-channels), and [private-channel assignment in GoKollab](https://ideas.gohighlevel.com/go-kollab/p/ability-to-assign-community-members-to-a-private-channel-in-gokollab). Related: [COMM-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9).

## Observed
Premium Channels now support visible/hidden private channels and direct one-time or recurring checkout. However, existing product/course sales, funnels, automations, and reporting remain separate concerns. Creators need an existing product or offer to grant access, to know which channel/product caused a sale, and to expire bonus access without removing access earned through another active purchase or plan.

## Why it matters
Separate channel checkout duplicates offers and fragments tax handling, affiliates, funnels, automations, and analytics. Manual or per-product workflows become fragile for bundles, timed bonuses, renewals, refunds, and upgrades.

## Expected
Keep channel **visibility** separate from **access**. A visible private channel previews its description while all content remains locked; a hidden channel remains undiscoverable. In Channel Settings, let an admin connect one or more existing Products/Offers and/or membership plans to the channel, or use the existing native channel checkout. Provide a configurable CTA to the linked product/funnel; a compact native sales card with editable text/images can be a later UI over the same offer, not a new sales-page builder. Never label a channel “Free” when its access requires buying another offer.

Use one reusable channel-entitlement record for each qualifying source (existing product/order, membership plan, or workflow grant). Record source type/ID, order/payment reference, channel, grant time, optional expiry, and active/revoked state. Support manual grants and the existing Grant/Revoke Private Channel Access workflow actions; Forms, Quizzes, and Surveys should be able to grant through their workflow events rather than bespoke channel integrations. Expire/revoke the matching grant on its end date or configured cancellation/refund event. Access remains while any other valid grant exists; admins can still override access. Expose channel/source attribution in the order/contact timeline and relevant workflow/export data.

## Acceptance examples
- Buying an existing course/product grants its mapped channel without a duplicate channel product; the channel/source is traceable on the resulting sale.
- A 3-month bonus grant expires, but a separate active monthly membership keeps the same channel unlocked; cancellation/refund removes only the grant it relates to.
- A form/quiz/survey workflow can grant or revoke access through the common action. The locked preview and purchase/access flow work on web and mobile.

## Current capability and response
Official docs confirm Premium Channel visibility (Visible/Hidden), Free (contact admin/channel manager), One-time, and Recurring pricing; community plans can include channels/courses/events; workflows can grant/revoke private-channel access; courses can be limited to selected private-channel members. The docs do not establish existing Product/Offer mapping, channel-level order attribution, an editable mini sales page, native timed entitlements, or premium checkout parity on mobile. The visible Free option is documented as “contact admin/channel manager,” not a self-serve request button. No direct HighLevel commitment to the remaining items is recorded.

## Evidence
- [Premium Channel setup and pricing — official docs](https://help.gohighlevel.com/support/solutions/articles/155000009196-how-to-create-and-manage-premium-channels-in-communities)
- [Community workflow access automation — official docs](https://help.gohighlevel.com/support/solutions/articles/155000001239-automate-community-group-access-with-workflows)
- [Multiple Community pricing plans — official docs](https://help.gohighlevel.com/support/solutions/articles/155000009195-communities-create-and-manage-multiple-pricing-plans)
- [Private Channel-based course access — official changelog](https://ideas.gohighlevel.com/changelog/communities-new-private-channel-based-course-access-learning-tab)
- [Upsells within one Community — Ideas Board](https://ideas.gohighlevel.com/communities/p/upsells-within-one-community)
