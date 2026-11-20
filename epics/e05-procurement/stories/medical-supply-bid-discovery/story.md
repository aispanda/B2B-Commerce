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

| Check ID | Status | Observed result and evidence |
|---|---|---|
| QA-01 | NOT RUN | Live discovery and status verification pending. |
| QA-02 | NOT RUN | No Document AI batch has run. |
| QA-03 | NOT RUN | Target object and reviewer access pending. |
| QA-04 | NOT RUN | Replay and amendment fixtures pending. |

## Acceptance criteria

| ID | Proposed criterion | Coverage |
|---|---|---|
| AC-01 | Only relevant public solicitations with a verified future deadline and current notice status can enter the open-bid queue. | QA-01 |
| AC-02 | The batch produces a traceable result or an explicit error for every file. Each required field or line is supported by the source or flagged for review. | QA-02 |
| AC-03 | Salesforce stores reviewable bid data and source links. Google Cloud Storage holds original PDFs and extraction JSON. A person decides whether to pursue the bid. | QA-03 |
| AC-04 | Reprocessing a notice is idempotent using source and solicitation ID. Changes to a known notice are visible to the reviewer. | QA-04 |

## Files

- [Official public opportunity feed](https://open.gsa.gov/api/get-opportunities-public-api/) for U.S. federal discovery.
- [Public hospital medical supply bid PDF](https://quezoncity.gov.ph/wp-content/uploads/2025/11/54.-QCGH-26-MSLI-0093.pdf) for historical extraction, with no claim that bidding is open.
- [Document AI batch requests](https://docs.cloud.google.com/document-ai/docs/send-request#batch-processing) for Cloud Storage input and output. [Extraction pricing](https://cloud.google.com/products/document-ai/pricing) for estimating page charges.

## Salesforce intake design (pending)

Before building or writing intake records:

1. Inspect the designated test org and compare suitable existing objects with a purpose-built bid intake object; record the selected object, record type and rationale.
2. Map solicitation-level fields, line items, issuer, deadline and time zone, source links, extraction evidence and reviewer status to Salesforce fields or related records. Identify missing fields and required permissions.
3. Define the source-and-solicitation identity, duplicate handling, amendment history, expired-notice treatment and human review decisions. Confirm how reviewers open the original PDF and how uncertain extraction is flagged.
4. Review the proposed model and access with the owner and reviewer before configuration or test-record writes. Update the scenario checks to match the approved design.

## Material blockers

**S-01 · Cloud and Salesforce access pending**  
The AI Spanda project now has a private Standard bucket in South Carolina. Document AI compatibility and billing eligibility remain unverified. A billing read was blocked because the Cloud Billing API was disabled for the calling project. Verify entitlements and permissions before provisioning or running a paid batch. The Salesforce target, record type and reviewer role remain to be confirmed.

## Execution record

Route NEW, guide revision `bc8d7d2816995254205002d26a4ad8a59bc1696a`. Review draft. Cloud and Salesforce runtime identifiers belong in restricted configuration.

| Step | Action | Dependency | Executor | State |
|---|---|---|---|---|
| S-01 | Verify platform access with separate read-only probes for Salesforce Headless 360, Salesforce CLI, and Google Cloud project, storage, Document AI and billing. | Authorized target identities | Pending assignment | Pending |
| S-02 | Map source documentation, select the small batch and validate the checklist manually on a known case and a missing or conflicting case. | Public sources and applicable access | Pending assignment | NOT RUN |
| S-02a | Design and review the Salesforce intake object, field mapping, reviewer access, deduplication and amendment handling. | Test-org discovery and reviewer input | Pending assignment | NOT RUN |
| S-03 | Run the bounded batch and verify the test drafts, source links and replay. | Validated checklist, reviewed intake design and authorized spend/writes | Pending assignment | NOT RUN |
| S-04 | Independently inspect the observed results against criteria and record human acceptance separately. | S-03 evidence | Pending assignment | NOT RUN |

**Next** · Verify access and document the intake design. A separately authorized one-document technical smoke test may establish Cloud Storage and Document AI connectivity; it does not replace the scenario checks or authorize Salesforce writes.
