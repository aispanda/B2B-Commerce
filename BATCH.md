# Documentation migration batch

This batch creates **migration drafts**. Original sources retain requirements authority. Publication of a draft does not supersede a source, prove implementation, or complete migration.

## Guide and explicit batch override

Use route MIGRATE from [migrate/DELIVERY.md at `769a509`](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md). Record this path and full commit in each draft. The [previously reviewed setup](REVIEWED-FILES.sha256.json) used guide commit `4b5406c3d74f7f56071d193ba3359218d4b70d4d`. The guide upgrade applies the [code quality rules](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/CODE-QUALITY.md) to planning later authorized implementation. In each affected story, record checks against the acceptance criteria, their executors and the evidence expected. Carry forward valid results at their recorded scope and mark unrun checks as NOT RUN.

For the project-wide story rollout, use the [migration guide at `9d32dccc`](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md). Record the full guide commit in each updated draft. The rollout adds platform access and role-specific verification evidence. Earlier review records retain the guide revisions used for those reviews.

The user's documentation-only batch instruction overrides guide steps 2 and 5 wherever they would cause ClickUp writeback. **No ClickUp writeback or field changes. Sync: Pending — deferred by instruction.** Existing descriptions and originals remain current. GitHub stories remain migration drafts until a separately authorized and verified authority transition. Do not claim synchronization or overall migration completion.

Guide steps 4 and 6 authorize no implementation, configuration, deployment, fixture creation, live-system changes, or acceptance execution in this batch. Read-only discovery and local documentation drafting are the authorized work. Accountable owners, dates and live delivery status stay per ClickUp.

## Ownership and workflow

First batch: one writer for E06 (`epics/e06-buyer-access/**`) and one writer for E07 (`epics/e07-repeat-purchasing/**`). Their file scopes are disjoint. The coordinator records and reads back each writer's assignment, model identity, scope and time bounds before dispatch. One independent reviewer checks source preservation and sanitized drafts. The main coordinating session owns dispatch and does not consume a worker slot.

Writers edit local staged drafts only. This staging directory is not an isolated Git checkout; do not create pretend branches. If a genuine isolated checkout becomes necessary, the coordinator assigns unique branches before edits and alone merges them after independent review. In either workflow, only the coordinator changes root files, the register, cross-epic links, publication and merges, and reads back published content. Writers never publish or edit other epics.

Use the existing `stories/<stable-name>/README.md` as each story file. Keep portfolio IDs stable. Retain accepted criterion IDs and wording, classify sanitization differences, and separate historical evidence from current unrun checks. Source summaries alone are insufficient to preserve requirements or support acceptance.

## Restricted-source access and completion gate

For E06, opaque source references are SRC13 and SRC14. For E07 they are SRC05 and SRC07. The originating user's coordinating session controls retrieval through the restricted source index and connected original services. Exact private paths, task IDs and access instructions stay in the restricted handoff, not here. Current portability/access confirmation: pending for each writer and the independent reviewer.

Discovery can start before capture is complete. As each artifact is found, record its revision/hash or capture time, full/partial/unavailable read state, disposition and affected criteria in the restricted inventory. Include full task descriptions, comments, attachments, linked documents, relevant prior decisions and execution evidence. Both writer and independent reviewer must demonstrate access to required originals, not merely receive summaries. Confirm approved restricted storage and retrieval ownership before retaining captures there. Missing access blocks dependent claims, not unrelated discovery.

No migration-draft acceptance until all required material artifacts are inventoried, read completeness is established, original-to-draft criterion differences are accounted for, conflicts are explicit, privacy checks pass and independent source-based review is complete. This acceptance concerns documentation preservation only. Sync stays deferred and overall migration remains incomplete. No publication or acceptance claims arise from this setup brief.

## Existing source authority and later batches

Each epic README identifies the applicable original source references. These remain authoritative for requirements; cited implementation repositories govern code; original execution artifacts govern evidence. A summary, scaffold, link or review opinion cannot replace those authorities.

E10, E10-A, E10-B and E10-C are excluded from the first batch. Assign one owner to all four sibling folders when scheduled. The existing shipment repository retains story and code authority. Portfolio pages are pointers unless a separately authorized decision permits splitting requirements and superseding the original. Repeated parent-guide links do not constitute ten migrated stories.

W07 retains Reusable-Delivery as its guide authority. W04 and W06 require an explicit original-story/code authority decision before migration acceptance. No external repository is modified by this batch. E12/W05 remain deferred. SRC18 kit scope stays there and must not expand W04. SRC22/SRC23 are tooling context, no separate story. The coordinator owns W03 cross-epic reconciliation and verifies whether consignment belongs in its claimed overlap. E08 readiness precedes dependent servicing batches.
