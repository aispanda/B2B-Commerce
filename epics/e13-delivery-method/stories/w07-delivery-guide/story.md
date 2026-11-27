# W07 · Maintain shared delivery template and execution guide

**Owner** · Pending confirmation · [Checklist](checklist.json) · [Scenarios](scenarios.json) · [Guide](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/new/DELIVERY.md)

**Outcome** · As a delivery operator, I want a portable, version-pinned AI delivery guide and story template so new and existing work can be authored and migrated consistently.

**Scope** · Reconcile the earlier portable delivery guide, which lives on a documentation branch of the private implementation repository, with the public guide in [Reusable-Delivery](https://github.com/aispanda/Reusable-Delivery), which remains authoritative for guidance. This story merges, deletes and publishes nothing. No tracker story exists for this work. It is mentioned only in passing inside the CMS-middleware tracker story ([W08](../../../e14-cms-integration/README.md)). The outcome sentence above is drafted for this import and is not a quoted source requirement.

**Operations** · An operator resolves the guide at a pinned commit, follows its route and templates, and authors or migrates a story without inventing owners, results or unauthorized writes.

**Acceptance** · Pending decision. No earlier accepted criteria were found. A-01 to A-03 are newly proposed here and NOT RUN. Accountable owner is Pending.

## Requirements and verification

[Acceptance criteria and verification checks](scenarios.json)

All criteria are Proposed and NOT RUN. No earlier criterion IDs existed to preserve.

## Agents

Delivery team not selected. Owner Pending confirmation. No agent-roster.json until named executors exist.

## Blockers

No blockers.json yet. Open items are listed below.

## Source inventory

Imported 26 November 2026 as a **migration draft** (route MIGRATE: the branch already existed). Guide: `new/DELIVERY.md` at `45a5e6653f202e37f181dce8c14e6bc0d34278b7` ([new/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/new/DELIVERY.md); migrate route at the same commit: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/45a5e6653f202e37f181dce8c14e6bc0d34278b7/migrate/DELIVERY.md)). Nothing was written to the tracker or to any other repository.

| Source | Destination or reference | Disposition |
| --- | --- | --- |
| Implementation repository `{{IMPL_REPO}}`, branch `docs/portable-ai-delivery-guide`, tip commit `c3d23a499f3f28806de6d335d673dd04ef487045`, 11 November 2026 7:27 PM ET, message "Move delivery material into reusable-delivery-model". The prior commit has the same message one second earlier. | Status and dates | Observed read-only. The branch holds a README, `delivery/DELIVERY.md`, `delivery/VALIDATION.md`, and `reusable-delivery-model/` with the same git tree as `delivery/`. File bodies were not compared. No pull request was observed. |
| Public guide, [Reusable-Delivery](https://github.com/aispanda/Reusable-Delivery) at `45a5e6653f202e37f181dce8c14e6bc0d34278b7` | Guidance authority | Whether the branch is superseded by it is unverified (see A-03). |
| Existing W07 placeholder in this folder (`README.md`) | Left unchanged | The placeholder says "Migration pending". It should be updated or removed after review. Reconciliation note it carries: the historical tracker guide and the current GitHub method are related versions. |
| Passing mention in the CMS-middleware tracker story | Related mention only | Not a story of record. Not edited. |

**Status** · No tracker story, so no tracker status, assignee or dates. Branch last commit 11 November 2026 7:27 PM ET. Proposed criteria and the comparison are NOT RUN.

**Open items** · Named owner; whether Reusable-Delivery supersedes the branch; whether `delivery/` and `reusable-delivery-model/` should remain duplicates; whether a tracker pointer or pull request is wanted.

**Next** · Do not modify the branch or the tracker. A named owner should decide whether the branch is a current source or historical relative to the public guide at the pinned commit. Comparison task C-02 is ready once that owner is assigned.

## Placeholders

This repository is public. Private identifiers are replaced by named placeholders. The restricted mapping is held by the originating coordinator outside this repository.

| Placeholder | Meaning |
| --- | --- |
| `{{IMPL_REPO}}` | Private implementation repository holding the portable-guide documentation branch |

## Sanitization

Removed or replaced for a public repository: the private repository name and links into it; the tracker task ID of the story that mentions this work; the checklist `githubFile` link to a private branch. No client name, instance URL, org ID, real record or credential was present.

