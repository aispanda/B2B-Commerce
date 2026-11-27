# ECOM-01 · Build an Excel-driven autonomous Salesforce B2B storefront kit

**Owner** · Pending confirmation · [Checklist](checklist.json) · [Scenarios](scenarios.json) · [Guide](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/new/DELIVERY.md)

**Outcome** · As a client and delivery operator, I want a completed Excel discovery workbook to drive a reviewed, complete agreed Salesforce B2B proof of concept, so that native and configurable storefront setup can become repeatable and increasingly autonomous.

**Scope** · The client answers to the best of their ability. Missing facts return as focused decisions. Every agreed must-have must pass; unsupported capabilities remain gaps. Reuse the separately owned media integration through a verified versioned interface. Preserve existing storefront work and unrelated assets. A manual demo or a visually complete frontend does not establish autonomous creation. Workbook ingestion, model-routing adapters, the controller and integrated fresh-org acceptance are unimplemented or unverified. This is not a live-certified storefront installer. The separate first-headless-demo effort ([W04](../../../e11-headless-storefront/README.md)) is outside this story.

**Operations** · A completed discovery workbook is ingested, reviewed and used to drive scoped, evidence-backed setup of an agreed B2B proof of concept on an authorized fresh org, with every intervention recorded and no undocumented manual configuration standing in for automation.

**Acceptance** · Pending decision. The product vision requires human acceptance. None is recorded. AC-01 through AC-07 remain open for runtime verification. Accountable owner is Pending; the tracker assignee is empty.

## Requirements and verification

[Acceptance criteria and verification checks](scenarios.json)

The seven numbered criteria from tracker revision 2 are preserved with stable labels AC-01 to AC-07. All runtime verification is NOT RUN. AC-07 has a historical documentation-package pass recorded on the implementation branch; each publication must recheck it, and this import did not re-run it.

## Agents

Delivery team not selected. Human owner, future executor and model versions, and independent QA are Pending. No agent-roster.json until named executors exist.

## Blockers

No blockers.json yet. Open items are listed below.

## Source inventory

Imported 26 November 2026 as a **migration draft** (route MIGRATE). This import uses guide `new/DELIVERY.md` at `45a5e6653f202e37f181dce8c14e6bc0d34278b7` ([new/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/new/DELIVERY.md); migrate route at the same commit: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/migrate/DELIVERY.md)). The implementation-repository story was authored against an earlier guide commit, `32eccce86ce07ea0c9fa123402a9c2021a34716d`. Both are recorded and the earlier provenance is not rewritten. Nothing was written to the tracker or to any other repository.

| Source | Destination or reference | Disposition |
| --- | --- | --- |
| Tracker item `{{TRACKER_ITEM_KIT}}`, status To Do, no assignee, no start or due date. Created 7 November 2026 9:07 AM ET. Last updated 13 November 2026 10:10 AM ET. | This story | Title, status, dates and Outcome preserved. Tracker unchanged. Task ID withheld per the repository batch brief. |
| Implementation repository `{{IMPL_REPO}}`, branch `feat/ecommerce-discovery-kit`, story `EcommerceStore/story.md` revision 3 (13 November 2026), draft PR #1 | Outcome, AC-01 to AC-07, next step R03 | Treated as the current record. Criterion meaning preserved. The branch story also indexes the package files (vision, roadmap, discovery workbook, readiness helper); they stay in that repository. |
| Tracker revision-2 attachment and other original attachments | Not copied | Retained in the tracker as historical evidence. |

**Epic placement** · The portfolio register lists E12 "Autonomous storefront delivery kit" and W05 "Reusable storefront kit" as *Deferred — no folder*. This draft adds the E12 folder so the story has a home. It does not change the register, the root README or the folder manifest, which still say E12 has no folder and need updating after review. The register's reason for deferral (headless automation only after the first headless implementation is proven) is **not** resolved by this import. Review should decide whether to keep E12 deferred, in which case this PR should not merge.

**Status** · Tracker: To Do. Implementation branch: revision 3, documentation candidate published; runtime build and fresh-org acceptance pending. Independent runtime verification: NOT RUN. Human acceptance: Pending.

**Open items** · Named accountable owner and exact AI executor or model before dispatch; a disposable Salesforce target has not been supplied; importer, review adapter, controller and integrated acceptance are outstanding; R01 and R02 client workbook usability is unproven; ACCESS-01 Salesforce access is NOT RUN; retrieval of restricted context by a new executor is NOT RUN; the E12 deferral decision above. No Salesforce write or external model spending without an explicit yes.

**Next** · Do not start a runtime build from this story. The implementation-repository story names R03 (version the workbook input contract, supporting AC-01, synthetic local inputs only) as the next eligible increment, after a named owner and executor are assigned. R17 and target ACCESS-01 wait on an identified, authorized disposable org.

## Placeholders

This repository is public. Private identifiers are replaced by named placeholders. The restricted mapping is held by the originating coordinator outside this repository.

| Placeholder | Meaning |
| --- | --- |
| `{{IMPL_REPO}}` | Private implementation repository holding the kit documentation branch and draft PR |
| `{{TRACKER_ITEM_KIT}}` | Tracker item for this story |

## Sanitization

Removed or replaced for a public repository: tracker task IDs, links and list names; the private repository name and every link into it; tracker attachment links; the checklist `githubFile` link to a private file. No client name, instance URL, org ID, real record or credential was present in the source text used.

