# Premium Channels: implementation contract

Companion to [COMM-005 / issue #74](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/74). This is a proposed implementation, not a claim about shipped HighLevel behavior.

## Smallest coherent change

Extend the existing private channel’s Pricing tab with **Existing Product / Offer**. Link one or more existing products, course offers, bundles or recurring memberships. Each mapping specifies the access period and the existing checkout or sales-page destination. Reuse the platform’s product/price picker and existing commerce identifiers; do not create a competing product catalog, checkout, or page builder.

The locked channel keeps its description and privacy boundary. With one linked offer, show one direct purchase/view-offer action. With several, show their labels, actual price/billing and channel access benefit. Do not label product-linked access Free. Preserve the same channel URL through the purchase and return to its normal feed after verified success. Failed, abandoned or pending payments keep it locked.

Custom copy, images, forms, quizzes and surveys belong to the existing offer/funnel/content tools. The channel description provides concise context; its action can open that existing surface. A supported workflow may grant access after a qualifying form/quiz/survey event. Merely opening a URL or submitting an arbitrary form never proves paid eligibility. Do not imply that every form trigger is already supported.

## One access model, multiple independent grants

Suggested records, using existing identities wherever possible:

- Mapping: channel, product/offer and eligible price, duration policy, destination, active state and policy version.
- Grant: member/contact, channel, source type, source/order/subscription/action identifier, start, end, status and mapping version.
- Access decision: the member can read the channel while at least one applicable grant remains active. Group membership and identity prerequisites still apply; channel eligibility does not bypass a separate group paywall.

The same service handles product purchases from **all sales routes**, Community plans, workflow grants and manual membership. A channel-origin purchase is only one entry point. Existing native paid-channel checkout and Community-plan access continue to work. Keep their independent grants when product-linked pricing is enabled.

Use verified server-side commerce events; grant once per source transaction/action. Duplicate and out-of-order webhooks must converge to the same result. Never trust a client redirect, browser state, or clicked success button. Expiry/refund/revocation applies to its matching grant only. Explicit “remove all access” administration, if offered, must say so and must not be the default workflow revoke behavior.

## Time, changes and migration

| Case | Required behavior |
|---|---|
| Course bonus | Start on verified successful purchase; 90 days means a stored UTC expiry, displayed in the member’s timezone. It limits channel access, not ownership of the purchased course. |
| Recurring membership | Grant through the paid-through date. Cancel-at-period-end retains paid access until that date. Successful renewal extends it; a failed renewal follows the platform’s existing retry/grace policy. Do not silently invent a new billing policy. |
| Refund, chargeback or administrative revoke | Invalidate the matching grant under the existing commerce policy. Keep other active grants. Define partial-refund behavior explicitly. |
| Repeat purchase or overlapping grants | Keep source transactions distinct; do not reset or shorten another grant. Lifetime access has no artificial expiry. |
| Mapping edited or removed | Snapshot the policy on issued grants. Changes apply prospectively unless an admin explicitly chooses and previews a migration. Do not silently remove paid historical access. |
| Existing buyers | Offer an explicit eligible-customer backfill with preview/count and idempotent processing. Use original transaction/paid-through dates; do not accidentally restart expired bonuses. |
| Existing manually added members | Preserve membership as a manual grant. Switching Pricing must not lock out existing members automatically. |
| Identity / purchase outside the Community | Reconcile to the same contact/member after authentication; preserve the intended channel return route through login. Respect the existing group membership prerequisites. |
| Hidden channel | Do not list or reveal its posts to non-members. Direct URL checks enforce the same server-side access decision. |

## Attribution and operations

For a purchase initiated from the locked channel, attach stable community/channel origin fields to the existing order and contact activity while preserving product, price, funnel/page, UTM, affiliate, campaign and payment identifiers. A purchase from another funnel keeps that original source and records channel access as a benefit. Make these fields available to reporting, exports and workflow conditions.

Keep existing product taxation, payment methods, discounts, affiliate attribution and automation semantics. Product checkout reuse is the architectural intent; do not claim that this prototype verifies every payment or tax integration. Reuse existing access-granted/revoked events and expose the responsible source and expiry. Member support should be able to explain why access remains active without an extra member-facing “Access sources” screen.

## Coverage and honest boundaries

| Feedback | Disposition |
|---|---|
| One visible locked channel inside the same Community | Existing visibility + proposed offer action; preserve the original shell. |
| Link existing products, course offers, bundles, subscriptions | Core addition, using one mapping/grant model. |
| Custom sales text, images, checkout or sales page | Reuse existing offer/funnel tools and allow a configured destination; no second page builder. |
| Several offers and timed course bonuses | Core addition; per-offer periods and overlap-safe access. |
| Order, analytics, workflows, taxes and affiliate continuity | Preserve the existing commerce path; add channel origin/benefit fields. |
| Forms/quizzes/surveys and manual grants | Reuse supported workflow actions and the same grant service. |
| Free visible channel has no Request access button | Related proposed improvement: real request → pending → manager approval, no automatic unlock. The current prototype intentionally retains contact-admin messaging. In Proposed choose Free in Pricing to see the requested action. |
| Native mobile parity | Required acceptance target; only responsive web is demonstrated here. Native app payment policies, deep links and return flow need separate verification. |
| Purchases X AND Y, points, tags, membership age | Broader [COMM-001](https://github.com/IvoDimitrovPro/highlevel-product-feedback/issues/9). Reuse the same evaluator/grants if rules are added. This demo does not implement a general rules builder; do not mark COMM-001 delivered by this product picker. |
| Auto-create a private channel per customer/service | The linked Ideas Board request includes this distinct behavior. Granting access to an existing channel does not create channels; retain it as a separate requirement rather than claiming coverage. |
| Whole-community upsell from a course | The linked course-offer request also covers group-level access. This channel proposal must integrate with existing group-plan eligibility; it does not by itself deliver a general Community checkout redesign. |

## Acceptance path

1. In The Club’s private channel, link a 90-day course offer and an active-membership offer; save. The guest sees both choices and their actual access benefits.
2. Purchase either through its existing checkout; authenticate if required; return to the same channel with normal posts unlocked. Failed/pending payment leaves posts inaccessible, including API/media access.
3. Buy the qualifying offer from an unrelated funnel. The same channel unlocks while the original funnel attribution remains intact.
4. Expire the course grant while membership remains active. Access continues. End the last grant: posts lock again; the member can renew.
5. Repeat/refund/revoke an event and deliver it out of order. No duplicate access, premature lockout or discarded manual/plan grant.
6. Repeat discovery, selection, authentication and return in responsive web and the native apps. Verify app-specific purchase restrictions explicitly.

## Evidence checked on 2026-10-30

Live admin inspection of The Club confirmed the channel feed, Community shell, About / Pricing / Members, channel Edit and native pricing choices. Guest-channel behavior also has the preceding task’s inspection and the current official documentation. Chrome’s guest browser was unavailable during this review; it was not represented as freshly re-inspected. The recreated feed contains three sample posts, not copied private discussions or recordings.

- [Official Premium Channel setup](https://help.gohighlevel.com/support/solutions/articles/155000009196-how-to-create-and-manage-premium-channels-in-communities): Visible/Hidden and Free/Recurring/One-time pricing, modified October 27.
- [Official multiple Community pricing plans](https://help.gohighlevel.com/support/solutions/articles/155000009195-communities-create-and-manage-multiple-pricing-plans): plans can bundle channels and other content; this does not establish arbitrary existing product mappings.
- [Official workflow guide](https://help.gohighlevel.com/support/solutions/articles/155000001239-automate-community-group-access-with-workflows): group and private-channel actions are distinct.
- [Premium/paid channels](https://ideas.gohighlevel.com/communities/p/make-some-channels-premiumpaid-for) and its merged paid/free request; [upsells inside one Community](https://ideas.gohighlevel.com/communities/p/upsells-within-one-community).
- [Course-offer / subscription-product access](https://ideas.gohighlevel.com/communities/p/upsell-my-paid-community-from-a-course-offer); [assign/reactivate private-channel members](https://ideas.gohighlevel.com/go-kollab/p/ability-to-assign-community-members-to-a-private-channel-in-gokollab).
- [Ivo’s curated Zoom feedback](https://github.com/IvoDimitrovPro/highlevel-product-feedback/blob/main/sources/zoom-feedback-index-2026.md) and the Premium Channels discussion supplied by Ivo, including existing-product sales, channel attribution, custom sales surfaces, forms and temporary bonuses.

The Ideas Board status labels lag the documented release in places. Treat the newer official capability documentation and observed UI as evidence of what exists, rather than describing every historical request as still missing.
