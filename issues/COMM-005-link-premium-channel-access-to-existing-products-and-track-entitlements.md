# COMM-005 — Unlock private Community channels from existing products

**Product:** Communities
**Type:** Feature
**Status:** New
**Impact:** High
**Date reported:** 2026-10-30
**Source:** Ivo's product-feedback follow-up; [Premium channels](https://ideas.gohighlevel.com/communities/p/make-some-channels-premiumpaid-for), [sell community access through a course offer](https://ideas.gohighlevel.com/communities/p/upsell-my-paid-community-from-a-course-offer), [paid and free channels](https://ideas.gohighlevel.com/communities/p/paid-channels-free-channels), [assign members to private GoKollab channels](https://ideas.gohighlevel.com/go-kollab/p/ability-to-assign-community-members-to-a-private-channel-in-gokollab), [COMM-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9), and the [2026-05-22 Product Town Hall feedback](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/zoom-feedback-index-2026.md).

## Observed

Private channels already support Visible/Hidden visibility and Free, one-time or recurring channel checkout. Private-channel workflow actions grant/revoke access; Community pricing plans can include channels. The October 27 official docs and the October 30 live admin inspection establish these capabilities even where Ideas Board labels still say “in progress”.

## Why it matters

Creators already sell products, course offers, bundles and memberships through their existing sales pages and commerce setup. A standalone channel checkout disconnects this purchase from the existing offer, automations and reporting. Temporary bonuses also need to expire without removing access granted by another active purchase.

## Expected

Keep the Community shell, private-channel page and native settings. Add **Existing Product / Offer** to the channel’s **Pricing** tab. Link one or more existing offers, set channel access duration for each (including a custom positive number of days), and choose its existing checkout or sales-page destination. Reuse product pricing, payment options, taxation, discounts and tracking rather than introducing another commerce or page builder.

On a visible locked channel, show its description and a direct offer action. With several linked offers, show the available choices and their access benefits. A verified successful order from **any sales route** grants access; a channel-origin purchase returns to the same channel with its normal feed unlocked. Failed/pending payments keep content locked. Product-linked access is never labelled Free.

Recognize an existing buyer’s active eligibility after sign-in and return to the same channel without another order or payment. Keep the original purchase timestamp/source; do not restart an expired bonus. One product/offer can unlock several channels from the same order, with an independent duration for each (for example, 90-day meetings plus a lifetime library).

Use independent purchase, plan, workflow and manual grants. Expiry/refund/revoke affects only the corresponding grant. Keep access while any valid grant remains. Existing members retain their current access when a pricing mapping changes. Snapshot issued policies; backfill existing buyers only through an explicit, previewed operation.

Preserve original order/funnel/UTM/affiliate data and add community/channel origin when the purchase starts there. For purchases elsewhere, keep the original source and record channel access as a benefit. Expose it in existing order/contact history, reporting, exports and workflow conditions.

## Interactive demos and requirements

- **[Open the demo guide](https://ivodimitrovpro.github.io/highlevel-product-feedback/)** — one entry point with a self-guided walkthrough and implementation requirements.
- [Current behavior](https://ivodimitrovpro.github.io/highlevel-product-feedback/COMM-005-current-behavior.html?scenario=locked) — native channel checkout, About/Pricing/Members and normal unlocked feed.
- [Proposed behavior](https://ivodimitrovpro.github.io/highlevel-product-feedback/COMM-005-proposed-product-link.html?scenario=locked) — working offer configuration → choice → existing sales-page/checkout handoff → simulated order → unlocked feed; bonus expiry, existing-buyer recognition, one order granting two channels, custom durations and order attribution.
- [Implementation contract, edge cases and feedback coverage](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/mockups/developer-notes.md).

The English prototypes recreate The Club’s Community shell with its branding and three sample posts. Top buttons switch scenarios; Reset restores sample settings. Current/Proposed settings are separate. No live payment, order, contact or channel is changed. These are interactive reference implementations, not production integrations or copied HighLevel source code.

## Acceptance examples

- Link a course offer for 90 days and a monthly membership while active. Saving updates the locked channel’s offer choices; either can unlock the same channel.
- Purchase through the existing offer checkout, with authentication/return handling. Failed/abandoned/pending payment never unlocks posts or protected APIs/media.
- Recognize a signed-in existing buyer without another purchase. A member without a qualifying order stays locked; an expired bonus is not restarted.
- One course order grants 90-day meetings and a lifetime Course Library. Expire the meetings: library access remains active.
- Configure any positive whole-day duration, such as 45; saving updates discovery/checkout, while invalid values are rejected.
- Purchase through another funnel: the same access mapping works without overwriting that funnel’s attribution.
- A 90-day bonus expires while membership remains active: the feed stays open. Only removal of the last active grant locks it again.
- Replayed/out-of-order purchase, refund, renewal and revoke events converge without duplicate grants or accidental loss of unrelated access.
- Existing manual members and Community-plan grants survive enabling product-linked pricing. Historical backfill does not restart an expired bonus.
- Desktop, responsive web and native apps support the same discovery/access outcome; native purchase restrictions and return routes need explicit app verification.

## Feedback coverage and boundaries

| Feedback | Decision |
|---|---|
| Link products, course offers, bundles and memberships; retain reporting/automations | Core addition. Use existing commerce identities, plus channel origin/benefit fields. |
| Several offers; temporary bonuses; safe expiry/refund/revoke | Core addition. Per-offer periods and independent grants. |
| Custom copy, images, long sales pages, forms/quizzes/surveys | Reuse existing offer/funnel/content tools. Link the existing sales surface; supported workflows explicitly grant access. No second page builder. |
| Real Request access for a free visible channel | Related proposed UX improvement: request → pending → manager approval. Demonstrated by selecting Free in Proposed Pricing; not claimed as shipped. |
| Points/tags/membership age and combined purchase conditions | Broader COMM-001 remains open. Reuse the grant/evaluator model; this demo does not deliver a general rules builder. |
| Auto-create a channel per customer; whole-group upsell from a course | Distinct requirements present in linked sources. Existing-channel access does not automatically deliver them; see the implementation contract. |
| Native mobile parity | Required acceptance target. Responsive prototype verified; native app purchase/return behavior not verified. |

![Current locked channel](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-current-guest.png)

![Proposed linked offers](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-proposed-guest.png)

![Proposed unlocked feed](https://raw.githubusercontent.com/IvoDimitrovPro/highlevel-product-feedback/main/output/playwright/COMM-005-proposed-unlocked.png)

## Evidence

- [Premium Channel setup — official docs](https://help.gohighlevel.com/support/solutions/articles/155000009196-how-to-create-and-manage-premium-channels-in-communities)
- [Workflow guide — group vs private channel access](https://help.gohighlevel.com/support/solutions/articles/155000001239-automate-community-group-access-with-workflows)
- [Multiple Community pricing plans — official docs](https://help.gohighlevel.com/support/solutions/articles/155000009195-communities-create-and-manage-multiple-pricing-plans)
- [Upsells within one Community](https://ideas.gohighlevel.com/communities/p/upsells-within-one-community)
- [COMM-001: broader conditional access](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9)

Sources and current/proposed distinctions were reviewed on 2026-10-30. The implementation contract contains the detailed coverage and verification boundary.
