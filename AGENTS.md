# Agent rules for this repository

This repository is a public evidence-backed feedback tracker, not a brainstorming dump.

## Core rules

- One distinct product feedback item = one GitHub Issue and one stable ID.
- Deduplicate before creating anything. Multiple sources belong on the same item.
- Do not infer that HighLevel accepted, planned, shipped, or rejected something. Status changes require explicit evidence.
- If HighLevel confirms behavior is expected / already supported, remove it from Active by using the appropriate Shipped or Closed status.
- Do not keep resolved misunderstandings alive as “open questions” unless there is a new, concrete unsupported requirement.
- Preserve verbatim primary-source excerpts separately from editorial summaries when available.
- Keep issue bodies short: Observed → Why it matters → Expected → Evidence/response when useful.

## Naming and product categorization

- Short issue titles are mandatory: [STABLE-ID] Topic: concrete outcome in GitHub, and # STABLE-ID — Topic: concrete outcome in issue Markdown.
- Topic describes the feature area (Presentation, Registration, Attribution, Email); the outcome is specific. Avoid long prose, marketing, redundant HighLevel prefix, or vague Make/Improve/Support titles.
- One stable issue = one canonical record, even when it belongs to multiple product boards.
- scripts/feedback_taxonomy.py defines canonical Area: labels and product views. Update it when introducing a product area or cross-product request; preserve existing issue IDs and permalinks.
- The historical Product field may contain mixed areas; board membership uses canonical Area labels. Do not create duplicate issues to appear in multiple tabs.
- A GitHub Project drag updates Project Status but scripts/sync_github.py pushes statuses from source issue files. Reconcile a board change into the source Issue and CSV index before running apply sync.

## Public-repo safety

Never publish:
- email addresses, phone numbers, client names, account IDs, API keys, passwords, tokens, private meeting links, or private customer URLs;
- raw private chat dumps;
- absolute local file paths that identify private files.

Use curated public source indexes instead. Run `python scripts/audit_feedback.py` before every publish.

## Status meanings

- New: unresolved and no verified HighLevel acceptance/delivery.
- Acknowledged: HighLevel recognized the request; no delivery commitment.
- Planned: HighLevel explicitly said planned / in development.
- Shipped: available and verified or explicitly confirmed available.
- Closed — Works as designed: expected behavior or misunderstanding.
- Closed — Not pursuing: intentionally dropped by Ivo.

“Considered”, “useful”, or “we’ll evaluate” is not Planned.

## Source and link rules

- Public GitHub Issue bodies must use public absolute links, not relative repository links or local paths.
- Historical source summaries may point to curated files under `sources/`.
- Competitive references belong under `references/`; they are inspiration, not evidence that HighLevel lacks a feature.
- When official docs conflict with an old chat, record the newer verified behavior and close/update the old item instead of preserving stale claims.

## Publishing workflow

1. Update the local issue/source files.
2. Run `python scripts/audit_feedback.py`.
3. Run `python scripts/sync_github.py` and review the dry run.
4. Run `python scripts/sync_github.py --apply`.
5. Run the dry run again; it should report zero changes.
6. Run `git diff --check`.
7. Commit and push only when the working tree is intentional and audits are clean.
