from __future__ import annotations
import csv
import pathlib
import re
import sys
from collections import Counter
from feedback_taxonomy import areas_for

ROOT = pathlib.Path(__file__).resolve().parents[1]
ISSUES = ROOT / "issues"
REQUIRED = [
    "**Product:**", "**Type:**", "**Status:**", "**Impact:**",
    "**Date reported:**", "**Source:**", "## Observed", "## Why it matters",
    "## Expected",
]
SECRET_PATTERNS = {
    "email": re.compile(r"(?i)\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b"),
    "phone": re.compile(r"(?<!\d)(?:\+?359|0)8[789]\d{7}(?!\d)"),
    "secret": re.compile(r"(?i)(?:(?:api[_ -]?key|secret|password|passwd|token)\s*[:=]\s*[^\s]{8,}|pwd=[^&\s]+|bearer\s+[A-Za-z0-9._-]{12,})"),
    "mojibake": re.compile(r"(?:â€”|â€™|Ã|ï¿½|Â)"),
}
SKIP_PARTS = {".git"}
errors: list[str] = []
warnings: list[str] = []

issue_files = sorted(ISSUES.rglob("*.md"))
ids: list[tuple[str, pathlib.Path]] = []
for p in issue_files:
    text = p.read_text(encoding="utf-8", errors="ignore")
    m = re.search(r"^#\s+([A-Z]+-\d+)\b", text, re.M)
    if not m:
        errors.append(f"Missing issue ID heading: {p.relative_to(ROOT)}")
        continue
    ids.append((m.group(1), p))
    # Titles are short and consistently "Topic: concrete outcome" on the Kanban cards.
    heading = re.search(r"^#\s+[A-Z]+-\d+\s+[—-]\s+(.+)$", text, re.M)
    if not heading or ": " not in heading.group(1) or len(heading.group(1)) > 65:
        errors.append(f"Noncanonical issue title: {p.relative_to(ROOT)}")
    if not areas_for(m.group(1)):
        errors.append(f"No product-area mapping: {m.group(1)}")
    missing = [field for field in REQUIRED if field not in text]
    if missing:
        errors.append(f"Missing fields {missing}: {p.relative_to(ROOT)}")

counts = Counter(i for i, _ in ids)
for issue_id, count in sorted(counts.items()):
    if count > 1:
        files = [str(p.relative_to(ROOT)) for i, p in ids if i == issue_id]
        errors.append(f"Duplicate ID {issue_id}: {files}")

for p in ROOT.rglob("*"):
    if not p.is_file() or any(part in SKIP_PARTS for part in p.parts):
        continue
    if p.suffix.lower() not in {".md", ".csv", ".txt", ".yml", ".yaml"}:
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    for kind, pattern in SECRET_PATTERNS.items():
        for match in pattern.finditer(text):
            line = text.count("\n", 0, match.start()) + 1
            errors.append(f"Possible {kind}: {p.relative_to(ROOT)}:{line}")

link_pattern = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
for p in ROOT.rglob("*.md"):
    if any(part in SKIP_PARTS for part in p.parts):
        continue
    text = p.read_text(encoding="utf-8", errors="ignore")
    for target in link_pattern.findall(text):
        if target.startswith(("http://", "https://", "#", "mailto:")):
            continue
        clean = target.split("#", 1)[0]
        if ISSUES in p.parents:
            errors.append(
                f"Issue body uses a relative link; use a public permalink: "
                f"{p.relative_to(ROOT)} -> {target}"
            )
            continue
        resolved = (p.parent / clean).resolve()
        if not resolved.exists():
            errors.append(
                f"Broken relative link in {p.relative_to(ROOT)} -> {target}"
            )

index = ROOT / "github-issues-index.csv"
if index.exists():
    with index.open(encoding="utf-8-sig", newline="") as f:
        rows = list(csv.DictReader(f))
    csv_ids = [r.get("ID", "").strip() for r in rows]
    file_ids = {i for i, _ in ids}
    missing_in_files = sorted(set(csv_ids) - file_ids)
    missing_in_csv = sorted(file_ids - set(csv_ids))
    if missing_in_files:
        errors.append(f"CSV IDs without markdown files: {missing_in_files}")
    if missing_in_csv:
        warnings.append(f"Markdown IDs absent from CSV index: {missing_in_csv}")

active_path = ROOT / "active-items.csv"
if active_path.exists() and index.exists():
    with active_path.open(encoding="utf-8-sig", newline="") as f:
        active_rows = list(csv.DictReader(f))
    expected_active = {r["ID"] for r in rows if r["Status"] in {"New", "Acknowledged", "Planned"}}
    actual_active = [r["ID"] for r in active_rows]
    missing_active = sorted(expected_active - set(actual_active))
    extra_active = sorted(set(actual_active) - expected_active)
    if missing_active or extra_active or len(actual_active) != len(set(actual_active)):
        errors.append(f"Active index mismatch: missing={missing_active}, extra={extra_active}, duplicates={len(actual_active) - len(set(actual_active))}")
print(f"Issue files: {len(issue_files)}")
print(f"Errors: {len(errors)}")
for item in errors:
    print(f"ERROR: {item}")
print(f"Warnings: {len(warnings)}")
for item in warnings:
    print(f"WARN: {item}")
sys.exit(1 if errors else 0)
