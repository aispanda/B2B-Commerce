# BID-01 · Turn public medical supply bids into Salesforce records

**Owner** · Pending confirmation · [Execution record](#execution-record) · [MIGRATE delivery guide](https://github.com/aispanda/Reusable-Delivery/blob/302385554c48443a020000c51d75cec7888dbb4f/migrate/START.md)

**Outcome** · As a medical supply sales coordinator, I want relevant public RFQs and invitations to bid turned into Salesforce records for review so that I can identify bids worth pursuing before their deadlines.

**Demo result** · NOT RUN.

**Acceptance** · Pending. Pilot covers public solicitations, batch extraction and draft intake in a designated test org. Bid submission, production writes and automatic opportunity creation are outside scope.

## Proposed scenario checks

- **Where / who** · Authorized Google Cloud project and Salesforce test org. A sales reviewer checks the drafts.
- **Start with** · Select three to five short public solicitation PDFs from an official portal. Include a page with a line-item table, an expired notice, and a known amendment or a synthetic conflict. Record expected fields from the official notice and PDFs before running the batch. Use the 119-page hospital packet for a later stress test.

1. **QA-01** · Find a relevant medical supply RFQ or invitation to bid. Confirm notice type, issuer, solicitation ID, response deadline and latest amendment against the official portal. Expired or unverifiable deadlines do not qualify as open. **AC-01**
2. **QA-02** · Stage the PDFs in Google Cloud Storage, run one Document AI batch, and confirm each input has a corresponding result or an explicit processing error. Compare extracted requested items, quantities and units, where stated, against their source pages. Flag missing or conflicting values. **AC-02**
3. **QA-03** · Open the Salesforce test draft. Verify the issuing organization, solicitation ID, deadline with time zone where stated, requested items, review status and source links. Verify the original PDF opens for the reviewer and is stored outside Salesforce. **AC-03**
4. **QA-04** · Replay the same notice and then an amended notice. Verify the original intake record is not duplicated, and the amendment is flagged for review. Expired samples may be retained as historical test evidence and must not appear in the active sales queue. **AC-04**
5. **QA-05** · Link two existing synthetic Opportunities to the same Solicitation and leave a third unlinked. Verify that both links resolve to the same record, the third can remain blank, and the solicitation report counts the bid once. **AC-05**

| Check ID | Status | Observed result and evidence |
|---|---|---|
| QA-01 | NOT RUN | Live discovery and status verification pending. |
| QA-02 | NOT RUN | One-page technical smoke test passed. The full scenario batch and line-item comparison are pending. |
| QA-03 | NOT RUN | Partial historical evidence for the full scenario. On 20 November the signed-in pilot operator saw the grouped Details fields and opened the one-page private PDF from the Salesforce link. The visible number, title, issuer, and opening date/time matched the page; the verified deadline and time zone were blank. This historical sample has no requested items. A separately designated reviewer, missing/conflicting case, and complete scenario remain unverified. |
| QA-04 | NOT RUN | Replay and amendment fixtures pending. |
| QA-05 | NOT RUN | Opportunity lookup and synthetic test records pending. |

## Acceptance criteria

| ID | Proposed criterion | Coverage |
|---|---|---|
| AC-01 | Only relevant public solicitations with a verified future deadline and current notice status can enter the open-bid queue. | QA-01 |
| AC-02 | The batch produces a traceable result or an explicit error for every file. Each required field or line is supported by the source or flagged for review. | QA-02 |
| AC-03 | Salesforce stores reviewable bid data and source links. Google Cloud Storage holds original PDFs and extraction JSON. A person decides whether to pursue the bid. | QA-03 |
| AC-04 | Reprocessing a notice is idempotent using source and solicitation ID. Changes to a known notice are visible to the reviewer. | QA-04 |
| AC-05 | A reviewer can link multiple existing Opportunities to one Solicitation. The link is optional and the bid appears once in solicitation counts. | QA-05 |

## Files

- [Configurable PDF intake plan](configurable-pdf-intake-plan.md) · Implementation slices and Neon design feedback.

- [Claude solution design review](claude-solution-design-review.md) · Complete generated draft preserved for review; its claims and proposed decisions are not yet independently verified or approved.

- [Official public opportunity feed](https://open.gsa.gov/api/get-opportunities-public-api/) for U.S. federal discovery.
- [Public hospital medical supply bid PDF](https://quezoncity.gov.ph/wp-content/uploads/2025/11/54.-QCGH-26-MSLI-0093.pdf) for historical extraction, with no claim that bidding is open.
- [Document AI batch requests](https://docs.cloud.google.com/document-ai/docs/send-request#batch-processing) for Cloud Storage input and output. [Extraction pricing](https://cloud.google.com/products/document-ai/pricing) for estimating page charges.

## Salesforce intake design (pilot)

Use one custom **Solicitation** object (proposed API name `Bid__c`) and one optional **Solicitation** lookup on Opportunity. One solicitation can be linked to several Opportunities. Each Opportunity can link to at most one solicitation. Confirm that limit with the reviewer during test-org discovery. Revisit a junction object if an Opportunity needs to link to multiple solicitations or the relationship needs its own fields.

| Step | Pilot design |
|---|---|
| Capture | Document AI reads the staged PDF and writes extraction JSON to private Cloud Storage. The intake process maps the title, issuer, solicitation number, notice type, deadline as published, verified deadline and time zone where available, and extraction flags to the Solicitation. Keep requested items as readable rows in a long text field with description, quantity, unit and source page where available. Flag missing or conflicting values for review. Use the JSON for complete detail if the summary exceeds the field limit. |
| Preserve sources | Keep each PDF revision and its extraction JSON in Cloud Storage. Use a distinct, write-once object path for each PDF revision. Store the official notice URL and an authenticated PDF link on the Solicitation. Confirm that a named reviewer can open the exact PDF with their normal Google account. |
| Handle replays and amendments | Upsert one Solicitation by a unique external ID based on source and solicitation number, including issuer when the source requires it to distinguish notices. An identical replay leaves reviewed data and status intact. For an amendment, retain the previous document and extraction result, update the current source reference and extracted fields, and return the Solicitation to review. Keep it out of the open queue when the deadline or notice status cannot be verified. |
| Review and link | A reviewer checks the extracted fields against the PDF and records the decision. When an existing Opportunity is relevant, the reviewer links it manually using the optional lookup. Use a Solicitation-based report for bid counts, so two linked Opportunities still count as one solicitation. |

Keep the pilot to this object and lookup. Separate line-item and amendment objects, product matching, and forecast changes can be evaluated if reviewer or reporting needs justify them. The test org, field definitions and reviewer permissions still need verification before build. The [Claude design review](claude-solution-design-review.md) preserves the broader alternatives.

**Test-org schema deployed.** Salesforce validated and deployed `Bid__c` (Solicitation), its 15 fields, and the optional `Opportunity.Solicitation__c` lookup. Tooling API confirmed the fields and the lookup target. Common text uses 255 characters, Requested Items and Extraction Notes use Long Text Area, and published date, published time and verified deadline use Date, Time and Date/Time respectively. Needs Review defaults on and Source Key is a unique External ID. The pilot operator's field access is enabled. The signed-in pilot operator's Details view and source PDF access were verified as described below; access for any separately designated reviewer remains unverified.

**Transfer smoke test.** The pilot operator received the scoped Bid Intake Pilot permission set. A sample-specific operator script read the one-page Document AI JSON from Cloud Storage and created historical Solicitation BID-00001 in the ABCMed test org, marked Needs Review. A readback matched the bid number, issuer, title, notice type, published date and time. The time zone and verified response deadline remain blank. A sequential replay found the same source key and did not modify the record. The PDF link is present; the signed-in pilot operator subsequently opened it, as recorded below. The script is a single-sample smoke test and does not implement general ingestion, concurrent deduplication, or amendment handling. No Opportunity has been linked.


**Layout and relationship update.** The Solicitation page layout now groups the pilot fields by details, dates, source documents and extracted content, and includes an Opportunities related list. The optional Solicitation lookup was added to the four existing Opportunity layouts. The edit form displays the fields and values, and the Related tab displays Opportunities; no Opportunity has been linked. An earlier Details view showed only system fields. On 20 November, after a fresh sign-in, the signed-in pilot operator saw the grouped fields and their values in Details. QA-05 and access for a separately designated reviewer remain unverified.

## Technical smoke test · 19 November 2026

- A private Standard bucket was created in the AI Spanda project in South Carolina. Soft delete is disabled at the owner's direction; no Salesforce records were written.
- Uploaded a one-page extract of the [Erie County medical supplies invitation](https://www3.erie.gov/purchasing/sites/www3.erie.gov.purchasing/files/bids/2025-06/250124-004-medical-supplies.pdf). This is an expired historical sample, not an open opportunity. The original is 22 pages; only page one was staged to bound processing cost. Cloud runtime identifiers remain in restricted configuration.
- Document AI processing: SUCCEEDED for the one-page smoke test. A US Form Parser used the existing South Carolina bucket for input and output, and returned one JSON result with a successful per-file status. Raw JSON and runtime identifiers remain in restricted storage. The list-price processing estimate is $0.03 for one page. Billing and credits were not verified.
- Local reference check on the staged page found issuer County of Erie, Division of Purchase, bid number `250124-004`, and notice type Invitation to Bid. The official source identifies the title as Medical Supplies. The page states an opening date and time of June 30, 2025 at 2:00 p.m. with no stated time zone. Preserve the published event and label and verify its meaning before mapping it to a response deadline. This historical page does not list requested items or quantities. The local PDF text layer garbled the title, so compare the parser output against the visible source.
- **Observed field mapping.** Form Parser returned structured pairs for `BID NUMBER` (`250124-004`), `OPENING DATE` (`June 30, 2025`) and `TIME` (`2:00 PM`). `Medical Supplies`, `County of Erie / Division of Purchase` and `Invitation to Bid` were present in OCR text rather than structured pairs. Use a text fallback with reviewer confirmation. The detected table concerns exhibits, so do not map it to requested items. Leave the verified response deadline blank until an authoritative source confirms the event and time zone. Validate requested-item fields using a separate sample with an actual item schedule.
- This one-page smoke test is separate from the full scenario checks and does not establish extraction quality or acceptance.


**Code slice review · sample transfer script (20 November 2026).** CodeRabbit CLI 0.9.6 reviewed a sanitized local snapshot, followed by an additional Codex CLI review and fresh Claude Opus 5.5 High reviews. Confirmed fixes add checks for required issuer/notice text, reject duplicate required labels, decode command output as UTF-8, and use the verified Salesforce username for later operations. After the last fix CodeRabbit rechecked sanitized SHA-256 `fe501cbe5702b33ccf97e8232961753adb3845ba3d506402f98d624015f418c6`; its suggestion to accept a comma-free date was deferred for this single known sample: the actual result has a comma and other formats fail closed. A fresh Opus 5.5 High final review found no further changes for that snapshot. The corresponding local working script SHA-256 is `b9790c1795cdcd51932a6c7d248cb279e74e66e65b001f09989ef1706c28a78f`; identifiers differ by deliberate sanitization. The CodeRabbit review did not cover the separate Salesforce metadata.

Python 3.14.8 syntax compilation and mocked checks passed for existing-record replay, verified target on query/create, duplicate required labels, missing issuer text and invalid page count. A read-only inspection of the existing extraction confirmed the expected phrases and one of each required field; a read-only Salesforce query confirmed the previously created record's title, issuer, notes, date, time and review flag. These do not constitute an end-to-end run of the repaired script. The earlier historical code review blocker is resolved for availability, but the reviewed script and checks are local, not committed in the story's repository; repeatable repository-owned checks and durable reviewable artifacts remain pending before relying on this as a portable delivery gate. Dependent work on unreviewed code or metadata remains subject to its own required review sequence. Human acceptance remains pending.

## Guide reconciliation and test approach · 20 November 2026

This existing story follows the [MIGRATE route at revision a89fb67](https://github.com/aispanda/Reusable-Delivery/blob/a89fb67e70b823f449fca4df631018677a41ae8f/migrate/START.md). Its original NEW guide revision was `bc8d7d2816995254205002d26a4ad8a59bc1696a`. The existing AC-01–AC-05 and QA-01–QA-05 wording is retained. The updated guide adds explicit code-slice review and pull-request requirements relative to that original revision; its bounded LangGraph guidance was already present. Earlier results remain historical evidence. Code and metadata checks affected by a new revision remain open until verified against that revision. Human acceptance remains pending.

**Modules consulted:** agreement, privacy, story, execution, states, platform, reference, using, publication, review and automation at the new revision. The existing story, historical smoke test, schema, layout and review notes above are retained as the source-to-destination record. Restricted runtime identifiers remain outside this story.

**Current access and record evidence:** On 20 November, the Salesforce CLI read-only limits check passed and a read of the existing historical test record confirmed the title, issuer, solicitation number and Needs Review flag. Headless 360 MCP discovery failed during OAuth refresh with `invalid_request: scope parameter not supported`. The in-app browser initially required Salesforce login. After the user approved Salesforce Authenticator, the signed-in pilot operator opened BID-00001: Details showed the grouped fields, Medical Supplies, County of Erie Division of Purchase, 250124-004, Needs Review, Opening Date 6/30/2025 and 2:00 PM. The source PDF link opened the one-page document in the browser; its visible values match those fields. Verified response deadline and time zone remain blank and requested items are absent from this sample. This verifies access in the current signed-in Salesforce and Google browser sessions only, not a separate reviewer account. A previously observed related-list heading is historical evidence only. Billing eligibility and credits remain unverified. No new batch or Salesforce write was run during these checks.

**Planned verification:** Preserve QA-01–QA-05 as the acceptance checks. For QA-03, first manually verify the record as the intended reviewer and compare the visible Details values with a read-only Salesforce record read; exercise a missing or conflicting case before automating. Use Playwright for repeatable user-visible checks and Salesforce CLI or API for saved values and relationships. Test QA-02 extraction using sanitized Document AI fixtures with source-checked expectations, then separately run an authorized bounded batch. Test QA-04 replay and amendment behavior and QA-05 with synthetic opportunities once those fixtures and capabilities exist. Compare TestZeus Hercules on the same passing and missing-field cases as an evaluation, without treating its output as acceptance evidence by itself.

**Review and delivery:** The sample transfer script review above applies to a sanitized local snapshot and its mapped local version, not a repository PR head. Prepare a durable sanitized, reviewable revision and repository-owned checks. For each changed code slice, run relevant checks, CodeRabbit first, verify and fix findings, then obtain a fresh Opus 5.5 final review; rerun affected checks and reviews for changed scope. Record exact revisions and keep merge, deployment and human acceptance separate. Salesforce metadata and the general ingestion pipeline require their own applicable verification.

**Synchronization:** The existing local ClickUp synchronization record reports the prior task-creation attempt was rate-limited with no task ID returned. Search for BID-01 before any retry to avoid duplication; synchronization remains pending until the saved item and link are verified.

**Batch readiness check · 20 November 2026.** There is no general bucket-to-Salesforce batch implementation evidenced by the current pilot. The operator-run local transfer script consumes one previously produced Document AI JSON and hard-codes the Erie sample; it is not a batch runner. Read-only checks found no Cloud Run jobs in `us-east1` and no notifications configured on the pilot bucket. Eventarc and Cloud Scheduler listing was unavailable because their APIs were disabled; this does not establish the absence of other orchestration. A new end-to-end batch test is blocked until a general reviewed batch implementation exists. No new Document AI processing or Salesforce writes were performed in this check.

## Configurable PDF intake (proposed)

One versioned extraction template per layout maps annotated PDF regions to approved Solicitation fields. The first slice uses saved Form Parser output, printed label anchors and a hand-authored Erie template with a static overlay. Test changed values, missing identity, shifts and ambiguous matches on fixtures before building the PDF.js authoring screen. Evaluate managed Custom Extractor separately if enough labeled examples are available.

An operator starts a bounded batch with an explicit manifest of private source objects. The batch checks page limits, stages immutable inputs, reconciles each Document AI result and routes unknown or ambiguous layouts for review with a reason. A recognized layout requires a valid identity before Salesforce write. Create a draft marked Needs Review using the existing unique source key. An identical replay leaves the draft intact, while changed content for the same identity goes to review with its evidence. Opportunity linking stays manual.

Gemini Neon, High reasoning, reviewed the proposed design. Adopted refinements include label-relative boxes, a fixture-first sequence, immutable staging and replay reconciliation. Google Skill Finder located Cloud Storage Basics, Cloud Run Basics and Solution Architecture. The Neon review and proposed tests are in the linked plan. Implementation, deployment and end-to-end testing remain pending.

## Material blockers

**S-03 / QA-02–QA-04 · General batch unavailable**
- **Goal** · Run a bounded PDF batch and verify draft creation, review routing and replay.
- **Blocker** · The verified pilot uses a one-document operator script. A general batch and reviewed mapper are pending.
- **Current fix** · Validate the first versioned template locally, then implement the reviewed batch slices and run the bounded live test within authorized spend.
- **Documentation** · [Document AI batch processing](https://docs.cloud.google.com/document-ai/docs/send-request#batch-processing)

**S-01 · Cloud and Salesforce access pending**  
The AI Spanda project now has a private Standard bucket in South Carolina. The Document AI API and US Form Parser are enabled. A one-page batch verified read/write compatibility with the South Carolina bucket. Billing eligibility and credits remain unverified. A billing read was blocked because the Cloud Billing API was disabled for the calling project. Verify entitlements and permissions before provisioning or running a paid batch. The schema is deployed to the ABCMed test org. The pilot operator's Details view and PDF access were observed; separate reviewer access and the remaining scenario checks still require verification.

## Execution record

Current route MIGRATE at `302385554c48443a020000c51d75cec7888dbb4f`. Supersedes `2e1c80dbc0c89ae81b9bcaedc79258c07a6b2e3c` for current execution. The new guide requires scoped approval for exceptions and an applicability decision before dependent work. Existing criteria, historical checks and review evidence are preserved. Prior MIGRATE revision `a89fb67e70b823f449fca4df631018677a41ae8f`; original NEW revision `bc8d7d2816995254205002d26a4ad8a59bc1696a`. Loaded agreement, privacy, story, execution, states, platform, automation, review, publication, using, reference, and CODE-QUALITY at the current revision. The current guide clarifies progress tracking and exact-revision review evidence. Existing scenario wording and AC-01–AC-05 are preserved. QA-03 retains the prior observation and remains NOT RUN as a complete scenario. The local intake plan and Neon feedback are mapped to the linked plan. Cloud and Salesforce runtime identifiers stay in restricted configuration.

| Step | Action | Dependency | Executor | State |
|---|---|---|---|---|
| S-01 | Verify platform access with separate read-only probes for Salesforce Headless 360, Salesforce CLI, and Google Cloud project, storage, Document AI and billing. | Authorized target identities | Pending assignment | Pending |
| S-02 | Map source documentation, select the small batch and validate the checklist manually on a known case and a missing or conflicting case. | Public sources and applicable access | Pending assignment | NOT RUN |
| S-02a | Verify the proposed Solicitation fields, Opportunity lookup, reviewer access and amendment handling in the designated test org and review the design. | Test-org discovery and reviewer input | Pending assignment | NOT RUN |
| S-03 | Run the bounded batch and verify the test drafts, source links, replay and Opportunity linking. | Validated checklist, reviewed intake design and authorized spend/writes | Pending assignment | NOT RUN |
| S-04 | Independently inspect the observed results against criteria and record human acceptance separately. | S-03 evidence | Pending assignment | NOT RUN |

**S-02 / QA-02 · Mapper implementation in progress.** The local mapper preview matched six fields on saved one-page Erie Form Parser output. A conflicting header mutation routed to unknown-template. Six local tests passed on Python 3.14.8, including a regression for split OCR punctuation. CodeRabbit raised one issue on local review revision `6f194124f272b59b5e412b33f6e79e7990a2a54c`. The fix preserves adjacent punctuation and passed the repeated dry run. Fresh CodeRabbit recheck of `88cf4df316ef19b8723758a0ceb50077f5d1ff5d` raised zero issues. The additional Codex review of that revision’s repair found two whitespace regressions. Both were reproduced and fixed. Eight local tests and the repeated saved-output dry run passed on `b554d64ea6751e15034d709552e6e971a4dd1693`. A fresh CodeRabbit review of the repaired revision is running. Fresh Opus 5.5 remains pending. These are local review revisions. Full scenario checks remain NOT RUN.

**LangGraph integration decision · Pending.** Decision owner: story owner (confirmation pending). The user directed that the reviewed mapper be exercised in LangGraph. Confirm the graph boundary after manual checklist validation and before implementing the repeatable batch. Proposed boundary: deterministic mapping and routing with a bounded run. Gemini is optional for summarization and the story's Gemini API key is unverified. Any decision to bypass LangGraph or change the required reviewer sequence needs scoped authorization from the accountable human. The LangGraph integration will have its own local checks and CodeRabbit-first, Opus-last review sequence.

**Next** · S-02 / QA-02. Finish the mapper reviews and record the final revision and checks. Then revisit the LangGraph boundary before implementing the repeatable batch.
