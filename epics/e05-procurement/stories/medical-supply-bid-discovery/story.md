# BID-01 · Turn public medical supply bids into Salesforce records

**Owner** · Pending confirmation · [Execution record](#execution-record) · [NEW delivery guide](https://github.com/aispanda/Reusable-Delivery/blob/bc8d7d2816995254205002d26a4ad8a59bc1696a/new/DELIVERY.md)

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
| QA-02 | NOT RUN | No Document AI batch has run. |
| QA-03 | NOT RUN | Target object and reviewer access pending. |
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

## Technical smoke test · 19 November 2026

- A private Standard bucket was created in the AI Spanda project in South Carolina. Soft delete is disabled at the owner's direction; no Salesforce records were written.
- Uploaded a one-page extract of the [Erie County medical supplies invitation](https://www3.erie.gov/purchasing/sites/www3.erie.gov.purchasing/files/bids/2025-06/250124-004-medical-supplies.pdf). This is an expired historical sample, not an open opportunity. The original is 22 pages; only page one was staged to bound processing cost. Cloud runtime identifiers remain in restricted configuration.
- Document AI processing: NOT RUN. Enabled the Document AI API in the console and verified the processor list was empty. Form Parser creation was blocked by automatic approval review pending explicit authorization and a spend limit. Processor availability, billing and bucket compatibility remain unverified.
- Local reference check on the staged page found issuer County of Erie, Division of Purchase, bid number `250124-004`, and notice type Invitation to Bid. The official source identifies the title as Medical Supplies. The page states an opening date and time of June 30, 2025 at 2:00 p.m. with no stated time zone. Preserve the published event and label and verify its meaning before mapping it to a response deadline. This historical page does not list requested items or quantities. The local PDF text layer garbled the title, so compare the parser output against the visible source.
- This one-page smoke test is separate from the full scenario checks and does not establish extraction quality or acceptance.

## Material blockers

**S-01 · Cloud and Salesforce access pending**  
The AI Spanda project now has a private Standard bucket in South Carolina. The Document AI API is enabled. The Form Parser, compatibility and billing eligibility remain pending. A billing read was blocked because the Cloud Billing API was disabled for the calling project. Verify entitlements and permissions before provisioning or running a paid batch. The Salesforce target, record type and reviewer role remain to be confirmed.

## Execution record

Route NEW, guide revision `bc8d7d2816995254205002d26a4ad8a59bc1696a`. Review draft. Cloud and Salesforce runtime identifiers belong in restricted configuration.

| Step | Action | Dependency | Executor | State |
|---|---|---|---|---|
| S-01 | Verify platform access with separate read-only probes for Salesforce Headless 360, Salesforce CLI, and Google Cloud project, storage, Document AI and billing. | Authorized target identities | Pending assignment | Pending |
| S-02 | Map source documentation, select the small batch and validate the checklist manually on a known case and a missing or conflicting case. | Public sources and applicable access | Pending assignment | NOT RUN |
| S-02a | Verify the proposed Solicitation fields, Opportunity lookup, reviewer access and amendment handling in the designated test org and review the design. | Test-org discovery and reviewer input | Pending assignment | NOT RUN |
| S-03 | Run the bounded batch and verify the test drafts, source links, replay and Opportunity linking. | Validated checklist, reviewed intake design and authorized spend/writes | Pending assignment | NOT RUN |
| S-04 | Independently inspect the observed results against criteria and record human acceptance separately. | S-03 evidence | Pending assignment | NOT RUN |

**Next** · Verify access, confirm the one-solicitation-per-Opportunity limit, and review the proposed field mapping and reviewer access before build. A separately authorized one-document technical smoke test may establish Cloud Storage and Document AI connectivity; it does not replace the scenario checks or authorize Salesforce writes.
