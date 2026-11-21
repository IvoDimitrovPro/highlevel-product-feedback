from __future__ import annotations
import argparse
import csv
import json
import pathlib
import re
import subprocess
import sys

from feedback_taxonomy import areas_for, label_for

ROOT = pathlib.Path(__file__).resolve().parents[1]
REPO = "IvoDimitrovPro/highlevel-product-feedback"
PROJECT_NUMBER = "1"
OWNER = "IvoDimitrovPro"
CATEGORY_PREFIXES = ("Status: ", "Impact: ", "Type: ", "Product: ", "Area: ")

def gh(*args: str, check: bool = True) -> str:
    p = subprocess.run(["gh", *args], text=True, encoding="utf-8",
                       errors="replace", capture_output=True)
    if check and p.returncode:
        raise RuntimeError(f"gh {' '.join(args)}\n{p.stderr}")
    return p.stdout

def parse_file(path: pathlib.Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    heading = re.search(r"^#\s+([A-Z]+-\d+)\s+—\s+(.+)$", text, re.M)
    if not heading:
        raise ValueError(f"Bad heading: {path}")
    data = {"ID": heading.group(1), "Title": heading.group(2), "Body": text}
    for key in ("Product", "Type", "Status", "Impact", "Date reported", "Source"):
        m = re.search(rf"^\*\*{re.escape(key)}:\*\*\s*(.*)$", text, re.M)
        data[key] = m.group(1).strip() if m else ""
    m = re.search(r"^## HighLevel response\s*\n(.+?)(?=\n## |\Z)", text, re.M | re.S)
    data["HighLevel response"] = m.group(1).strip() if m else ""
    return data

def issue_files() -> dict[str, pathlib.Path]:
    result = {}
    for p in (ROOT / "issues").rglob("*.md"):
        m = re.match(r"([A-Z]+-\d+)-", p.name)
        if m:
            result[m.group(1)] = p
    return result

def index_rows() -> list[dict[str, str]]:
    with (ROOT / "github-issues-index.csv").open(
        encoding="utf-8-sig", newline=""
    ) as f:
        return list(csv.DictReader(f))

def desired_source_label(source: str) -> str | None:
    if "Zoom feedback index" in source:
        return "Source: Zoom"
    if "Meeting Room beta response" in source:
        return "Source: Meeting Room beta"
    return None

def project_source(source: str) -> str:
    return re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", source).strip()

def ensure_issue(row: dict[str, str], meta: dict[str, str], apply: bool) -> int:
    num = row["Issue"]
    current = json.loads(gh(
        "issue", "view", num, "--repo", REPO,
        "--json", "title,body,state,labels"
    ))
    desired_title = f"[{meta['ID']}] {meta['Title']}"
    desired_body = meta["Body"].rstrip() + "\n"
    current_labels = [x["name"] for x in current["labels"]]

    desired_core = [
        f"Status: {meta['Status']}",
        f"Impact: {meta['Impact']}",
        f"Type: {meta['Type']}",
        f"Product: {meta['Product']}",
    ]
    source_label = desired_source_label(meta["Source"])
    if source_label:
        desired_core.append(source_label)
    desired_core.extend(label_for(area) for area in areas_for(meta["ID"]))
    remove = [
        x for x in current_labels
        if x.startswith(CATEGORY_PREFIXES) and x not in desired_core
    ]
    add = [x for x in desired_core if x not in current_labels]
    should_close = meta["Status"].startswith("Closed") or meta["Status"] == "Shipped"
    changes = []
    if current["title"] != desired_title:
        changes.append("title")
    current_body = current["body"].replace("\r\n", "\n").rstrip()
    wanted_body = desired_body.replace("\r\n", "\n").rstrip()
    if current_body != wanted_body:
        changes.append("body")
    if add or remove:
        changes.append("labels")
    if (current["state"] == "OPEN") == should_close:
        changes.append("state")
    if not changes:
        return 0
    print(f"#{num} {meta['ID']}: {', '.join(changes)}")
    if not apply:
        return 1
    args = ["issue", "edit", num, "--repo", REPO,
            "--title", desired_title, "--body-file", str(issue_files()[meta["ID"]])]
    for label in remove:
        args += ["--remove-label", label]
    for label in add:
        args += ["--add-label", label]
    gh(*args)
    if should_close and current["state"] == "OPEN":
        gh("issue", "close", num, "--repo", REPO)
    elif not should_close and current["state"] == "CLOSED":
        gh("issue", "reopen", num, "--repo", REPO)
    return 1

def sync_project(rows: list[dict[str, str]], apply: bool) -> int:
    project = json.loads(gh(
        "project", "view", PROJECT_NUMBER, "--owner", OWNER, "--format", "json"
    ))
    project_id = project["id"]
    fields = json.loads(gh(
        "project", "field-list", PROJECT_NUMBER, "--owner", OWNER, "--format", "json"
    ))["fields"]
    field_map = {f["name"]: f for f in fields}
    items = json.loads(gh(
        "project", "item-list", PROJECT_NUMBER, "--owner", OWNER,
        "--format", "json", "--limit", "500"
    ))["items"]
    item_by_num = {
        str(i["content"]["number"]): i for i in items
        if i.get("content", {}).get("type") == "Issue"
    }
    changed = 0
    for row in rows:
        item = item_by_num.get(row["Issue"])
        if not item:
            print(f"WARN missing Project item for issue #{row['Issue']}")
            continue
        values = {
            "Status": row["Status"], "Impact": row["Impact"],
            "Product": row["Product"], "Feedback type": row["Type"],
            "Source": project_source(row["Source"]),
            "HighLevel response": row["HighLevel response"],
            "Date reported": row["Date reported"],
        }
        for name, value in values.items():
            current = item.get(name[0].lower() + name[1:], "")
            if name == "HighLevel response":
                current = item.get("highLevel response", "")
            if str(current or "").strip() == str(value or "").strip():
                continue
            changed += 1
            print(f"Project #{row['Issue']} {name}: update")
            if not apply:
                continue
            field = field_map[name]
            args = ["project", "item-edit", "--id", item["id"],
                    "--project-id", project_id, "--field-id", field["id"]]
            if field["type"] == "ProjectV2SingleSelectField":
                opts = {o["name"]: o["id"] for o in field["options"]}
                if value not in opts:
                    print(f"WARN missing option {name}={value}")
                    continue
                args += ["--single-select-option-id", opts[value]]
            elif name == "Date reported":
                args += ["--date", value]
            else:
                args += ["--text", value]
            gh(*args)
    return changed

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--skip-project", action="store_true")
    args = ap.parse_args()
    files = issue_files()
    rows = index_rows()
    changed = 0
    for row in rows:
        p = files.get(row["ID"])
        if not p:
            print(f"ERROR no markdown file for {row['ID']}", file=sys.stderr)
            return 2
        meta = parse_file(p)
        changed += ensure_issue(row, meta, args.apply)
    project_changes = 0
    if not args.skip_project:
        project_changes = sync_project(rows, args.apply)
    mode = "APPLIED" if args.apply else "DRY RUN"
    print(f"{mode}: issue changes={changed}, project field changes={project_changes}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
