# SHIP-01 · Synchronize MVP shipment tracking twice daily

**Owner** · Pending confirmation · [Checklist](checklist.json) · [Scenarios](scenarios.json) · [Guide](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/new/DELIVERY.md)

**Outcome** · As a B2B buyer, I want accurate package tracking on order details so I can follow delivery.

**Scope** · Self-hosted middleware polls the ERP and carriers outbound and synchronizes Salesforce Shipment. Job A runs 07:00/19:00; Job B runs 07:15/19:15. SAP retains fulfillment ownership. FulfillmentOrder and ShipmentItem are deferred, subject to model validation. No public inbound webhook. This MVP integration is separate from the post-MVP fictional demo story [D09 Show shipment tracking for a fictional order](../d09-shipment-demo/README.md). This story authorizes no implementation, Salesforce write, production deployment or live shipment activity.

**Operations** · Twice daily, Job A stages ERP dispatch changes and upserts Salesforce Shipment records. Job B then polls approved carriers and updates changed shipments. An authorized buyer sees carrier, tracking, status and available dates on order details, with truthful empty and stale states.

**Acceptance** · Pending decision. No human has authorized acceptance, waiver or closure. AC-01 through AC-08 are open and NOT RUN. Accountable owner is Pending.

## Requirements and verification

[Acceptance criteria and verification checks](scenarios.json)

Eight criteria. AC-01 through AC-07 are the proposed translations of the original specification, with the original IDs and meaning kept. AC-08 was added later and is also proposed. All are NOT RUN. Run results belong in approved restricted storage, not in this repository.

## Agents

Delivery team not selected. Human owner, implementation executor, independent checker and test operator are Pending. No agent-roster.json until named executors exist.

## Blockers

No blockers.json yet. Open items and unresolved source conflicts are listed below.

## Source inventory

Imported 26 November 2026 as a **migration draft** (route MIGRATE: the work already existed). Guide: `new/DELIVERY.md` at `45a5e6653f202e37f181dce8c14e6bc0d34278b7` ([new/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/new/DELIVERY.md); the migrate route is at the same commit, [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/migrate/DELIVERY.md)). Original sources keep requirements authority and the implementation repository keeps code authority. Nothing was written to the tracker or to any other repository.

| Source | Destination or reference | Disposition |
| --- | --- | --- |
| Tracker item `{{TRACKER_ITEM_SHIPMENT_MVP}}`, status To Do, no assignee, no start or due date. Created 11 November 2026 4:33 PM ET. Last updated 11 November 2026 9:24 PM ET. | This story | Outcome, status and dates preserved. Tracker unchanged. Task IDs are withheld per the repository batch brief. |
| Tracker description revision 0.1 with proposed AC-01 to AC-08 and DOC/IMP/QA IDs | `scenarios.json`; checklist comments | Criterion IDs and meaning preserved, with sanitization differences listed below. |
| Implementation repository `{{IMPL_REPO}}`, branch `docs/shipment-tracking-poc`, draft PR #2, story revision 0.2 | Outcome, scope, AC-08, S-01 to S-06 | Treated as the newer documentation record. Conflicts with the tracker are listed below, not overwritten. Files on that branch: `shipment-tracking/story/user-story.md`, `research/technical-design.md`, `research/design-notes.md`, `research/verification-matrix.md`, and an implementation plan (not re-opened for this import). |
| Related tracker item `{{TRACKER_ITEM_SHIPMENT_DEMO}}` (To Do) | Existing [D09](../d09-shipment-demo/README.md) | Separate demo story, already a placeholder here. Not duplicated. |

Three historical tracker attachments were not copied.

**Relationship to the E10 placeholders** · E10-A, E10-B and E10-C list the original shipment backlog stories (A1 to C4). This story is the umbrella MVP story and does not split or supersede them. The shipment implementation repository keeps story and code authority, per the E10 README. The E10 README and the register still list only D09 as a story placeholder and should link this story after review.

**Conflicts kept visible**

- Timezone: the tracker description (rev 0.1) says Pending. The implementation-repo story (rev 0.2) states Eastern Time. Not resolved here.
- Documentation status: the tracker later reports DOC-01 and DOC-02 complete for initial capture and DOC-03 complete with limits. The implementation-repo story marks S-01 Complete in its table and In progress in its actual-result line. No task is marked Pass here, because no Task AC was re-verified.
- Next action: an earlier tracker paragraph still asks the user to supply the repository. A later 11 November update records the private repository and draft PR #2.

**Status** · Tracker: To Do. Documentation: revision 0.2 in progress. Implementation, independent verification and human acceptance: NOT RUN.

**Open items** · Named accountable owner and executors; timezone conflict; ERP identity and crosswalk; carrier and API contracts (the implementation-repo story names UPS, FedEx and USPS as initial US carriers, not re-verified here); buyer sharing and standard-UI proof; missed-run behavior; alert destination; five-request budget accounting; Delivered-event correction policy; whether the optional runtime LLM classifier is used (open, not approved); target-org metadata. No Salesforce write, deployment or live carrier call without an explicit yes.

**Next** · Do not start implementation. Confirm the accountable owner and resolve the timezone conflict before any build or org write.

## Placeholders

This repository is public. Private identifiers are replaced by named placeholders. The restricted mapping is held by the originating coordinator outside this repository.

| Placeholder | Meaning |
| --- | --- |
| `{{IMPL_REPO}}` | Private implementation repository holding the shipment documentation branch and draft PR |
| `{{TRACKER_ITEM_SHIPMENT_MVP}}` | Tracker item for this story |
| `{{TRACKER_ITEM_SHIPMENT_DEMO}}` | Tracker item for the related demo story (D09) |

## Sanitization

Removed or replaced for a public repository: the client name (the demo client is not named); tracker task IDs, links and list names; the private repository name and every link into it; tracker attachment links; the private chat and session references from the source description; checklist `githubFile` links to private files. No instance URLs, org IDs, real records, credentials or service URLs were present in the source text used.

