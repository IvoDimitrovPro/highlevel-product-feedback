# COMM-005 — Unlock private Community channels from existing products

**Product:** Communities
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** Ivo's product-feedback follow-up; [Premium channels](https://ideas.gohighlevel.com/communities/p/make-some-channels-premiumpaid-for), [sell community access through a course offer](https://ideas.gohighlevel.com/communities/p/upsell-my-paid-community-from-a-course-offer), [paid and free channels](https://ideas.gohighlevel.com/communities/p/paid-channels-free-channels), [assign members to private GoKollab channels](https://ideas.gohighlevel.com/go-kollab/p/ability-to-assign-community-members-to-a-private-channel-in-gokollab), [COMM-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9), and the [2026-05-22 Product Town Hall feedback](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/zoom-feedback-index-2026.md).

## Observed

Private channels already support Visible or Hidden visibility and Free, one-time, or recurring channel checkout. Visible channels show channel information but keep posts locked. Private-channel workflow actions already grant or revoke access. Community pricing plans can include channels.

## Why it matters

Creators already sell courses, bundles, and memberships through Products/Offers. A separate channel-only checkout splits the purchase from the sales page, automations, analytics, and order history. One purchase-linked access rule should work with existing checkouts and workflows, including temporary bonuses that overlap with another active purchase.

## Expected

Extend the existing private-channel flow and keep the Community, channel sidebar, feed, and settings modal. In the private channel's **Pricing** settings, add **Existing Product / Offer** beside Free, Recurring, and One-time. Let an admin select one or more existing offers and set the channel-access duration for each. Reuse each offer's checkout, price, and sales setup.

For a visible locked channel, show the existing channel information and a clear action to continue to its linked offer. If one offer is linked, use one direct action; if several are linked, show the member the available offers with their labels and purchase actions. Keep posts locked until a qualifying order succeeds, then return the buyer to the same channel with the normal feed unlocked.

Record which product/offer and channel granted access on the order/contact history so reports and workflows can use it. Model every qualifying purchase, manual grant, or workflow grant as its own access grant. An expiry, refund, cancellation, or revoke removes only the matching grant; the member keeps access while another valid grant remains. Existing manual membership and workflow grant/revoke actions use the same rule.

Support the same locked discovery, checkout handoff, and unlocked channel behavior on mobile. Never label product-linked access as **Free**. This is a focused extension of channel pricing and access; the offer's existing checkout or sales page remains the sales-content surface.

## Acceptance examples

- An admin links an existing course offer to **Срещи в Клуба** and selects 90 days. A buyer sees the offer, completes its existing checkout, and returns to the same channel with posts unlocked.
- An admin can link a second offer, such as a monthly membership, and choose a different access duration for it.
- The purchase/order and contact history identify both the purchased offer and the channel access it granted; this attribution is available to reporting and workflow conditions.
- A 90-day course bonus expires while a separate monthly membership remains active; the channel stays open. A refund or revoke removes only the matching grant.
- An existing workflow can grant or revoke channel access through the same entitlement rule. Forms, quizzes, and surveys can use those actions when their supported workflow triggers fire; no separate channel-specific form integration is needed.
- Non-members cannot read posts before they have a valid grant. The same behavior is usable on desktop and mobile.

## Feedback coverage and boundaries

| Feedback | Decision for this request |
|---|---|
| Link a channel to an existing course/product/bundle/membership purchase; retain purchase attribution and automations | Included: select existing Product/Offers; pass offer and channel attribution into order/contact reporting and workflows. |
| Offer more than one access path and support course bonuses that expire | Included: multiple offer mappings with per-offer duration and independent overlapping grants. |
| Use forms, quizzes, surveys, or workflows to grant access | Reuse existing workflow grant/revoke actions and supported triggers; avoid separate form integrations. |
| Add a mini sales page or customize the checkout | Keep channel discovery concise and link to the selected offer's existing checkout/sales page. A second sales-page builder inside Community would duplicate product/funnel capability and is outside this request. |
| Give free visible-channel visitors a real **Request access** action | Adjacent UX gap, not delivered by product-linked paid access. Current behavior tells visitors to contact a manager/admin; no in-app request button is established. Track separately if prioritized. |
| Verify identical behavior in the GoKollab mobile app | Required acceptance behavior, but current mobile implementation has not been confirmed. |

## Existing capability

**Already documented:** Private channels can be Visible or Hidden. Visible channels reveal channel information while keeping posts locked; the current Free option tells members to contact an admin/channel manager. Premium Channels have one-time and recurring channel-level checkout. Private-channel workflows can grant/revoke access, and Community pricing plans can include channels.

**Not established by current documentation:** Mapping an existing Product/Offer purchase directly to a private channel; preserving channel-specific purchase attribution; per-purchase timed grants with overlap-safe expiry/refund behavior; a direct in-app request button for visible Free channels; or matching mobile purchase behavior. Do not count the current standalone channel checkout or workflow workaround as delivery of product-linked access.

## Interactive demos

Both English prototypes use the GoKollab Community shell and **Срещи в Клуба / Events in the Club**, with sample-only names, prices, and posts. The bar at the top switches scenarios directly; the locked/unlocked layouts retain the same channel page and normal feed structure.

- [Current behavior](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/mockups/COMM-005-current-behavior.html) recreates the guest information card, payment message, Join channel button, channel checkout, and observed About / Pricing / Members settings. Its Unlocked channel scenario shows a normal channel feed.
- [Proposed product-linked access](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/mockups/COMM-005-proposed-product-link.html) adds Existing Product / Offer and access duration in Pricing. A simulated successful order returns to the same channel feed. The overlapping-access scenario explains continued access inline; there is no separate “Access sources” control.

Open either HTML file in a browser. Scenario buttons at the top can also open a specific view directly with `?scenario=locked`, `?scenario=checkout`, `?scenario=unlocked`, `?scenario=overlap`, or `?scenario=admin`. Payment and order actions are simulated locally; nothing is charged or saved.

![Current guest behavior](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-current-guest.png)

![Proposed linked-offer flow](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-proposed-guest.png)

![Proposed unlocked channel feed](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-proposed-unlocked.png)

## Evidence

- [Premium Channel setup and pricing — HighLevel docs](https://help.gohighlevel.com/support/solutions/articles/155000009196-how-to-create-and-manage-premium-channels-in-communities)
- [Private-channel access via Workflows — HighLevel docs](https://help.gohighlevel.com/support/solutions/articles/155000001239-automate-community-group-access-with-workflows)
- [Multiple Community pricing plans — HighLevel docs](https://help.gohighlevel.com/support/solutions/articles/155000009195-communities-create-and-manage-multiple-pricing-plans)
- [Private-channel based course access — changelog](https://ideas.gohighlevel.com/changelog/communities-new-private-channel-based-course-access-learning-tab)
- [Upsells within one Community — Ideas Board](https://ideas.gohighlevel.com/communities/p/upsells-within-one-community)
