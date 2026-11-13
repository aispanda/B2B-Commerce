# CUST-PARTNER-01 — Model customer and partner relationships

**Guide** [new/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/56695c71dd26986eea09ebfa23e60826f1ee9359/new/DELIVERY.md), commit `56695c71dd26986eea09ebfa23e60826f1ee9359`, route NEW  
**Revision and status** 0.2 · November 12, 2026 · Design reviewed · Implementation and runtime tests NOT RUN  
**Origin** New design brief for a fictional B2B medical supplier  
**Accountable owner** Pending designation

## Current state

Read-only Salesforce schema research informed the [design](design.md). Environment-specific observations are maintained with the source design. Human design decision is pending.

## Outcome and scope

As a B2B medical supplier’s commerce product owner, I want a reviewable Salesforce model for hospital customer and partner relationships so that I can distinguish the available standard schema from the work needed to support SAP sales-area rules. Scope covers research and fictional records. Implementation and org changes are outside this story.

## Acceptance criteria

| ID | Expected result | Check and evidence | Result |
|---|---|---|---|
| AC-01 | Identify standard Salesforce objects and fields for accounts, hierarchy, partner and contact relationships, buyer/store links, and orders. Identify target-org availability and feature or license dependencies. Target-org observations are recorded with the source design. | Compare the [design](design.md) with official references and the source design’s read-only org evidence. | Pass · maker check |
| AC-02 | Provide a fictional sold-to with two ship-to clinics, a bill-to, a payer, sales areas, and contacts. Show record values, links, creation order, defaults, and access checks. | Walk through the [example and acceptance checks](design.md#fictional-example-and-creation-order). | Pass · maker check |
| AC-03 | Distinguish reusable SAP partner assignments from selected order partners and leave ownership and sync direction open. | Trace a clinic override from master data to order and review the open decisions. | Pass · maker check |
| AC-04 | Have Claude review the frozen story and design for accuracy, readability, and completeness. Record findings and recheck repairs. | Compare the independent review against the source evidence and document revision. | Pass · Claude review and repair recheck |

## Solution

Use standard Accounts, Contacts, and Commerce records. Represent sales-area partner assignments through proposed integration data or Salesforce records and retain the actual selection on the order. The [design](design.md) gives exact verified field mappings and the difference between address selection and delegated buying.

## Execution

| Step | Action and criteria | Dependencies | Executor | State |
|---|---|---|---|---|
| S-01 | Verify Salesforce access for AC-01 | Intended development org | Codex · Headless 360 and Salesforce CLI 2.157.8 | Complete · read-only connection checks recorded with source design |
| S-02 | Verify schema and draft the design for AC-01–03 | S-01 and official sources | Codex · client model metadata unavailable | Complete · [design](design.md) |
| S-03 | Review the story and design for AC-01–04 | S-02 and frozen document revisions | Claude Code 2.1.319 · `claude-sonnet-4-6` · high effort, low for recheck | Complete · findings and dispositions below |

## Review and decisions

Claude Sonnet 4.6 reviewed revision 0.1 and rechecked revision 0.2. Model identity came from Claude Code response metadata. Review covered the documents and a redacted evidence summary.

| Finding | Disposition and recheck |
|---|---|
| F-01 · Delegated buying license | Added Customer Community Plus or higher as a prerequisite. Rechecked against Salesforce buyer permissions. |
| F-02 · Blank `SendToId` | Added a fresh-cart checkout baseline before testing sales-area defaults. Claude recheck passed. |
| F-03 · Billing and payer hierarchy | Explained that the example uses standalone service entities. Claude recheck passed. |
| F-04 · Multi-account contacts | Added a conditional setting and object-availability check. Claude recheck passed. |
| F-05 · Review traceability | Recorded the findings, revision, model, and status here. |

The three supplied Salesforce references were checked directly and incorporated into the design. Decisions on system of record, sync direction, partner selection authority, and independent buyer access remain open.

Review evidence and frozen source revisions are retained with the source design.

## Blockers and history

Public design draft. ClickUp synchronization is pending because no item was specified.
