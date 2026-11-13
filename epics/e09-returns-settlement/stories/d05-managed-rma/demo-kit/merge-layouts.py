"""Add RMA demo fields/lists to retrieved target layouts. Review and dry-run before deploy."""
import argparse
import json
from pathlib import Path
import xml.etree.ElementTree as ET

p = argparse.ArgumentParser(description=__doc__)
p.add_argument("source", type=Path, help="Directory with retrieved layout-meta.xml files")
p.add_argument("destination", type=Path, help="New directory for the changed layouts")
args = p.parse_args()
NS = "http://soap.sforce.com/2006/04/metadata"
ET.register_namespace("", NS)
q = lambda name: f"{{{NS}}}{name}"
plan = json.loads(Path(__file__).with_name("layouts.json").read_text())
args.destination.mkdir(parents=True, exist_ok=False)

def add(parent, tag, value=None):
    e = ET.SubElement(parent, q(tag))
    e.text = value
    return e

for name, spec in plan.items():
    src = args.source / (name + ".layout-meta.xml")
    if not src.exists():
        print(f"Missing layout: {name}. Resolve its name in the target org.")
        continue
    root = ET.parse(src).getroot()
    fields = {f.text for f in root.iter(q("field"))}
    new_fields = [(f, b) for f, b in spec["fields"].items() if f not in fields]
    existing_lists = {rl.findtext(q("relatedList")): rl for rl in root.findall(q("relatedLists"))}
    changed = bool(new_fields)
    if new_fields:
        section = ET.Element(q("layoutSections"))
        for tag, value in [("customLabel", "true"), ("detailHeading", "true"),
                           ("editHeading", "true"), ("label", "RMA Demo Details")]:
            add(section, tag, value)
        for entries in (new_fields[::2], new_fields[1::2]):
            col = add(section, "layoutColumns")
            for f, behavior in entries:
                item = add(col, "layoutItems")
                add(item, "behavior", behavior)
                add(item, "field", f)
        add(section, "style", "TwoColumnsLeftToRight")
        idx = max(i for i, e in enumerate(root) if e.tag == q("layoutSections"))
        root.insert(idx + 1, section)
    for key, preferred in spec["relatedLists"].items():
        existing = existing_lists.get(key)
        if existing is None:
            rl = ET.Element(q("relatedLists"))
            add(rl, "relatedList", key)
            later = {"relatedLists", "relatedObjects", "runAssignmentRulesDefault", "showEmailCheckbox",
                     "showRunAssignmentRulesCheckbox", "showSubmitAndAttachButton", "summaryLayout", "useDefaultFeedSettings"}
            idx = next((i for i, e in enumerate(root) if e.tag.split("}")[-1] in later), len(root))
            root.insert(idx, rl)
            existing_lists[key] = rl
            existing = rl
        columns = [f.text for f in existing.findall(q("fields"))]
        # Keep existing columns and their order when approaching the layout limit.
        merged = preferred + [f for f in columns if f not in preferred]
        if len(merged) > 10:
            merged = columns
            print(f"Column limit: review {name} / {key} manually.")
        if merged != columns:
            for f in existing.findall(q("fields")):
                existing.remove(f)
            idx = next(i for i, e in enumerate(existing) if e.tag == q("relatedList"))
            for i, field in enumerate(merged):
                element = ET.Element(q("fields"))
                element.text = field
                existing.insert(idx + i, element)
            changed = True
    lead = {"ReturnOrder-Return Order Layout": "ReturnOrderLineItems",
            "CreditMemo-Credit Memo Layout": "CreditMemoLines"}.get(name)
    if lead and lead in existing_lists:
        first = next(i for i, node in enumerate(root) if node.tag == q("relatedLists"))
        target = existing_lists[lead]
        if root[first] is not target:
            root.remove(target)
            root.insert(first, target)
            changed = True
    if changed:
        ET.indent(root, space="    ")
        ET.ElementTree(root).write(args.destination / src.name, encoding="UTF-8", xml_declaration=True)
        print(name)
