"""Check the synthetic consignment walkthrough without connecting to Salesforce."""

import json
from pathlib import Path
from xml.etree import ElementTree


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read_rollup_filters(source):
    namespace = {"m": "http://soap.sforce.com/2006/04/metadata"}
    stock = "Consignment_Stock__c"
    movement = "Consignment_Movement__c"
    objects = source / "objects"

    def xml(file):
        return ElementTree.parse(source / file).getroot()

    def value(node, xpath):
        return node.findtext(xpath, namespaces=namespace)

    def field(api_name, field_name):
        return xml(objects / api_name / "fields" / f"{field_name}.field-meta.xml")

    def statuses(type_name, picklist_name):
        metadata = xml(objects / movement / "recordTypes" / f"{type_name}.recordType-meta.xml")
        group = metadata.find(f"m:picklistValues[m:picklist='{picklist_name}']", namespace)
        return [(value(option, "m:fullName"), value(option, "m:default"))
                for option in group.findall("m:values", namespace)]

    for file in source.rglob("*-meta.xml"):
        node = xml(file)
        require(node.tag.startswith("{" + namespace["m"] + "}"), f"Invalid namespace in {file}")

    relationship = field(movement, "Consignment_Stock__c")
    require(value(relationship, "m:type") == "MasterDetail"
            and value(relationship, "m:referenceTo") == stock, "Missing stock master-detail field.")
    for api_name, external_key in ((stock, "Stock_Key__c"), (movement, "Event_Key__c")):
        key = field(api_name, external_key)
        require(value(key, "m:externalId") == value(key, "m:unique") == "true",
                f"{external_key} must be a unique external ID.")

    filters = {}
    for api_name, expected in (
        ("Posted_Receipts__c", {"Posted Receipt"}),
        ("Posted_Usage__c", {"Posted Usage"}),
        ("Usage_Awaiting_Posting__c", {"Reported", "Verified"}),
    ):
        metadata = field(stock, api_name)
        require(value(metadata, "m:type") == "Summary"
                and value(metadata, "m:summaryOperation") == "sum"
                and value(metadata, "m:summarizedField") == movement + ".Quantity__c"
                and value(metadata, "m:summaryForeignKey") == movement + ".Consignment_Stock__c",
                f"{api_name} must sum the movements' quantities.")
        criteria = metadata.findall("m:summaryFilterItems", namespace)
        require(len(criteria) == 1
                and value(criteria[0], "m:field") == movement + ".Posting_Status__c"
                and value(criteria[0], "m:operation") == "equals",
                f"{api_name} must filter by posting status.")
        filters[api_name] = set(value(criteria[0], "m:value").split(","))
        require(filters[api_name] == expected, f"{api_name} has incorrect posting states.")

    require(value(field(stock, "Confirmed_On_Hand__c"), "m:formula")
            == "Posted_Receipts__c - Posted_Usage__c", "Stock must subtract only posted usage.")
    require(value(field(movement, "Demo_Charge_Before_Tax__c"), "m:formula")
            == 'IF(ISPICKVAL(Posting_Status__c, "Posted Usage"), Quantity__c * Unit_Rate__c, NULL)',
            "The charge formula must use the posted usage quantity and stored rate.")

    receipt_stages = [("Recorded", "true"), ("Posted Receipt", "false"), ("Voided", "false")]
    usage_stages = [("Reported", "true"), ("Verified", "false"),
                    ("Posted Usage", "false"), ("Voided", "false")]
    billing_stages = [("Not Ready", "true"), ("Ready to Bill", "false"), ("Billed (Demo)", "false")]
    require(statuses("Receipt", "Posting_Status__c") == receipt_stages, "Receipt picklist drifted.")
    require(statuses("Consumption", "Posting_Status__c") == usage_stages, "Usage picklist drifted.")
    require(statuses("Consumption", "Billing_Status__c") == billing_stages, "Billing picklist drifted.")

    path = xml("pathAssistants/Consignment_Usage_Posting.pathAssistant-meta.xml")
    require(value(path, "m:entityName") == movement
            and value(path, "m:recordTypeName") == "Consumption"
            and value(path, "m:fieldName") == "Posting_Status__c", "Path must guide consumption posting.")
    require([value(step, "m:picklistValueName")
             for step in path.findall("m:pathAssistantSteps", namespace)]
            == [stage for stage, _ in usage_stages], "Path steps must match usage stages.")

    for api_name, layout_name, expected_fields in (
        (stock, "Stock", {"Confirmed_On_Hand__c", "Usage_Awaiting_Posting__c"}),
        (movement, "Receipt", {"Source_Shipment_Item_Id__c", "Source_Reference__c"}),
        (movement, "Consumption", {"Billing_Status__c", "Demo_Charge_Before_Tax__c",
                                    "Demo_Invoice_Reference__c"}),
    ):
        metadata = xml(f"layouts/{api_name}-Consignment {layout_name} Layout.layout-meta.xml")
        layout_fields = {node.text for node in metadata.findall(".//m:layoutItems/m:field", namespace)}
        require(expected_fields <= layout_fields, f"{layout_name} layout is missing required fields.")
        require(value(metadata, "m:excludeButtons") == "Delete", f"{layout_name} exposes Delete.")
    return filters


def verify(fixture, filters):
    scenario = fixture["scenario"]
    shipment = fixture["shipment_item"]
    receipt = fixture["movements"]["receipt"]
    usage = fixture["movements"]["usage"]
    void_check = fixture["movements"]["void_check"]
    require(scenario["fill_up_due_cents"] == 0 and scenario["optional_po"] is None,
            "Fill-up must have zero due and a blank optional PO.")
    require(scenario["infusion_sets_per_box"] == 1, "Each demo box holds one infusion set.")
    require(receipt["quantity"] == shipment["quantity"] and shipment["sku"] == scenario["sku"],
            "Receipt does not match the shipment line.")
    require(receipt["event_date"] == shipment["receipt_date"]
            and receipt["source_reference"] == shipment["receipt_reference"],
            "Receipt evidence does not match the shipment fixture.")
    require(usage["event_date"] > receipt["event_date"]
            and usage["unit_rate_cents"] == scenario["unit_rate_cents"],
            "Usage must follow receipt and preserve the demo rate.")

    movements = {}
    stages = {
        "Receipt": {"Recorded": {"Posted Receipt", "Voided"}},
        "Consumption": {
            "Reported": {"Verified", "Voided"},
            "Verified": {"Posted Usage", "Voided"},
        },
    }
    shipment_status = shipment["shipment_status_before_receipt"]

    def load(source):
        key = source["event_key"]
        if key in movements:
            require(all(movements[key][field] == value for field, value in source.items()),
                    f"Conflicting source fields for {key}")
            return movements[key]
        require(isinstance(source["quantity"], int) and source["quantity"] > 0,
                f"Quantity must be positive whole boxes for {key}")
        new = dict(source)
        if source["kind"] == "Receipt":
            new["posting_status"] = "Recorded"
        else:
            new.update(posting_status="Reported", bill_status="Not Ready")
        movements[key] = new
        return new

    def set_posting(movement, status):
        allowed = stages[movement["kind"]].get(movement["posting_status"], set())
        require(status in allowed, f"Invalid posting transition to {status}")
        if status == "Posted Receipt":
            require(shipment_status == "Delivered" and movement["source_reference"],
                    "Receipt posting requires confirmed delivery.")
        movement["posting_status"] = status

    def set_billing(movement, status, invoice=None):
        require(movement["posting_status"] == "Posted Usage",
                "Billing requires posted usage.")
        require((movement["bill_status"], status) in {
            ("Not Ready", "Ready to Bill"), ("Ready to Bill", "Billed (Demo)")
        }, f"Invalid billing transition to {status}")
        if status == "Billed (Demo)":
            require(bool(invoice), "Demo billing requires an invoice reference.")
            movement["invoice"] = invoice
        movement["bill_status"] = status

    def total(field_name):
        return sum(m["quantity"] for m in movements.values()
                   if m["posting_status"] in filters[field_name])

    def check(step, movement=None):
        actual = {"on_hand": total("Posted_Receipts__c") - total("Posted_Usage__c"),
                  "pending": total("Usage_Awaiting_Posting__c")}
        if movement is not None:
            actual.update(bill_status=movement["bill_status"],
                          charge_cents=movement["quantity"] * movement["unit_rate_cents"])
        require(actual == fixture["expected"][step], f"{step}: unexpected results {actual}")

    def expect_rejection(action, *args):
        try:
            action(*args)
        except ValueError:
            return
        raise ValueError(f"Expected rejection from {action.__name__}")

    check("shipped")
    draft_receipt = dict(receipt, posting_status="Recorded")
    expect_rejection(set_posting, draft_receipt, "Posted Receipt")
    shipment_status = shipment["shipment_status_at_receipt"]
    posted_receipt = load(receipt)
    check("shipped")  # A recorded receipt still contributes zero.
    set_posting(posted_receipt, "Posted Receipt")
    check("received")

    consumption = load(usage)
    check("reported")
    expect_rejection(set_billing, consumption, "Ready to Bill")
    expect_rejection(set_posting, consumption, "Posted Usage")
    set_posting(consumption, "Verified")
    check("verified")
    set_posting(consumption, "Posted Usage")
    check("posted", consumption)
    expect_rejection(set_posting, consumption, "Voided")

    set_billing(consumption, "Ready to Bill")
    check("ready", consumption)
    expect_rejection(set_billing, consumption, "Billed (Demo)")
    set_billing(consumption, "Billed (Demo)", fixture["demo_invoice_reference"])
    check("billed", consumption)

    require(load(receipt) is posted_receipt and load(usage) is consumption and len(movements) == 2,
            "Replayed keys must keep the original movements.")
    require(consumption["invoice"] == fixture["demo_invoice_reference"],
            "Replay lost the invoice reference.")
    expect_rejection(load, dict(usage, quantity=4))
    check("billed", consumption)

    set_posting(load(void_check), "Voided")
    check("voided")


if __name__ == "__main__":
    root = Path(__file__).resolve().parent
    filters = read_rollup_filters(root / "salesforce/force-app/main/default")
    verify(json.loads((root / "fixture.json").read_text()), filters)
    print("PASS: source structure and offline shipment, receipt, usage, billing, replay, and void checks.")
