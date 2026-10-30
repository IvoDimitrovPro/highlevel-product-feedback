# COMM-005 — Unlock private Community channels from existing products

**Product:** Communities
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** Ivo's product-feedback follow-up; [Premium channels](https://ideas.gohighlevel.com/communities/p/make-some-channels-premiumpaid-for), [sell community access through a course offer](https://ideas.gohighlevel.com/communities/p/upsell-my-paid-community-from-a-course-offer), [paid and free channels](https://ideas.gohighlevel.com/communities/p/paid-channels-free-channels), [assign members to private GoKollab channels](https://ideas.gohighlevel.com/go-kollab/p/ability-to-assign-community-members-to-a-private-channel-in-gokollab). Related: [COMM-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9).

## Observed

Private channels already support Visible or Hidden visibility and Free, one-time, or recurring channel checkout. Visible channels show channel information but keep posts locked. Private-channel workflow actions already grant or revoke access.

## Why it matters

Creators already sell courses, bundles, and memberships through Products/Offers. A second channel-only payment splits sales attribution, automations, and analytics. Linking the existing purchase makes access automatic and allows temporary bonuses without removing access earned from another active plan.

## Expected

Extend the existing private-channel flow; keep the current Community, channel sidebar, feed, and settings modal. Add **Existing Product / Offer** beside the current Free, Recurring, and One-time modes in Pricing. Let the admin select one or more existing Products/Offers and set access duration per offer. A visible channel shows its current information card and one clear action to continue to the linked product checkout; its posts stay locked. After a successful order, return the member to the same channel with its normal feed unlocked.

Keep product/offer and channel source on the order for order/contact reporting and workflows. Each source creates its own channel-access grant. Expiry, refund, cancellation, or workflow revoke changes only its matching grant; access remains while any other valid grant exists. Keep current manual access and private-channel workflow grant/revoke actions on this same access rule.

This is a focused addition to private-channel settings and the locked-channel view, not a Community redesign or a separate sales-page builder. Use the existing product checkout. Product-linked access must not be presented as “Free.”

## Why

Creators already sell courses, bundles, and memberships through Products/Offers. A second channel-only payment splits sales attribution, automations, and analytics. Linking the existing purchase makes access automatic and allows temporary bonuses without removing access earned from another active plan.

## Acceptance examples

- An admin links an existing course offer to “Срещи в Клуба” and selects 90 days; a buyer sees one CTA, completes the existing offer checkout, and the same channel feed opens.
- The purchase/order and contact timeline identify both the offer and channel that granted access.
- A 90-day bonus expires while a separate monthly membership remains active; the channel stays open. A refund or revoke removes only its related grant.
- A workflow can grant or revoke through the same entitlement logic. Forms, quizzes, and surveys can use those workflow actions when their supported workflow triggers fire; no separate channel-specific integration is required.
- Locked discovery and purchase work on desktop and mobile. Non-members cannot read channel posts before access.

## Existing capability

**Already documented:** Private channels can be Visible or Hidden. Visible channels reveal channel information while keeping posts locked; the current Free option tells members to contact an admin/channel manager. Premium Channels also have one-time and recurring channel-level checkout. Private-channel access has workflow grant/revoke actions, and Community pricing plans can include channels.

**Not established by current documentation:** Mapping an existing Product/Offer order directly to a private channel; channel-level order attribution; per-source timed grants with overlap-safe expiry/refund behavior; or matching mobile purchase behavior. Do not treat the current standalone channel checkout as completion of this request.

## Interactive demos

Both English prototypes use the GoKollab Community layout and the same private channel, with sample-only member, offer, and price data.

- [Current behavior](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/mockups/COMM-005-current-behavior.html) recreates the guest information card, “Complete the payment to join the channel” message, current Join channel button, channel checkout, and observed About / Pricing / Members settings.
- [Proposed product-linked access](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/mockups/COMM-005-proposed-product-link.html) adds Existing Product / Offer to Pricing, per-offer access duration, and a one-action guest flow into the existing offer checkout. Simulate the order to return to the same channel feed. The Access sources control demonstrates overlap-safe expiry.

Open either HTML file in a browser. **Prototype controls** changes between member and admin states. All payment, save, and order actions are simulated locally.

![Current guest behavior](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-current-guest.png)

![Proposed linked-offer flow](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-proposed-guest.png)

## Evidence

- [Premium Channel setup and pricing — HighLevel docs](https://help.gohighlevel.com/support/solutions/articles/155000009196-how-to-create-and-manage-premium-channels-in-communities)
- [Private-channel access via Workflows — HighLevel docs](https://help.gohighlevel.com/support/solutions/articles/155000001239-automate-community-group-access-with-workflows)
- [Multiple Community pricing plans — HighLevel docs](https://help.gohighlevel.com/support/solutions/articles/155000009195-communities-create-and-manage-multiple-pricing-plans)
- [Private-channel based course access — changelog](https://ideas.gohighlevel.com/changelog/communities-new-private-channel-based-course-access-learning-tab)
- [Upsells within one Community — Ideas Board](https://ideas.gohighlevel.com/communities/p/upsells-within-one-community)
