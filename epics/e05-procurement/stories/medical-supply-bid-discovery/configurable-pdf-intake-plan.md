# Configurable PDF intake for BID-01

[Current BID-01 story](story.md)

## Outcome and current state

An operator opens a representative PDF, draws a box around each field's expected value, selects the corresponding Solicitation field, previews the result, then publishes a versioned template. A manually triggered batch processes staged PDFs from the private bucket. A matching PDF with a valid identity becomes a Salesforce Solicitation draft for review. Unknown or ambiguous layouts appear under a private review prefix with a reason. The existing Erie smoke test used a manually initiated Form Parser run and a sample-specific script. The general batch is proposed.

## Implementation slices

| Slice | Solution design | Verification |
|---|---|---|
| 1. Define and test the first template | Versioned JSON stores template ID, page selectors, normalized rectangles in a top-left coordinate frame, fixed label anchors and tolerances, field types, requiredness, transformations, and allowlisted Salesforce field mappings. Build a pure mapper using Document AI text anchors and token polygons from saved Form Parser output. Compare Google Custom Extractor template mode, which provides box labeling but requires separate labeled training and test documents. Use invoice2data as a reference for declarative matching. | Dry run saved Erie output and synthetic variants with changed values, blank optional fields, missing identity, a shifted scan, and two matching templates. Require exactly one matching template and explain every rejected file. |
| 2. Author templates visually | Use PDF.js to render a sample PDF. Drag rectangles, choose field and page, configure nearby printed labels, preview extracted values, and export validated JSON. Save normalized coordinates independent of zoom and handle PDF rotation and crop boxes explicitly. Publish template versions through the repository. | Draw the box at two zoom levels and confirm equivalent coordinates and extracted values. Test rotation, accidental overlap and a held-out same-template PDF. |
| 3. Run a bounded batch | Start with a manually invoked CLI using an explicit manifest of GCS objects and generations. Send eligible files to Document AI, persist the operation ID, reconcile every input's status and shards, and resume polling on retries. Use per-file page and total run caps. Keep source and extraction output private. Add a Cloud Run Job once the CLI passes the test; retain manual execution for the pilot. | Run fixtures with mixed success and failure, interruption and resume, multiple shards, and an empty manifest. Run a bounded live test after checks and within authorized spend. |
| 4. Route and write | Keep original object paths stable. For unknown or ambiguous PDFs create a private review entry under `review/unknown-template/` with a reason, an exact source reference, and a link or copy for reviewer access. Put recognized PDFs with invalid required fields under a separate review status. On valid identity, safely create one `Bid__c` by unique source plus solicitation identity, with Needs Review, source links and extraction evidence. For each repeat or potential amendment, create a linked Solicitation Document marked Needs Review; retain the PDF without overwriting the Solicitation. A reviewer decides duplicate versus amendment, records notes, and updates the Solicitation if needed. Use conflict-aware writes and keep Opportunity linking manual. | In the designated Salesforce test org, submit a new matching fixture and verify one draft, replay it and verify zero duplicates, then test an unknown template and a missing identity with zero Salesforce writes. Verify source access and inspect the draft as a reviewer. |

Start with Erie County's fixed header and fields for issuer, solicitation number, title, notice type, published opening date and time. Keep the verified response deadline blank unless an authoritative source establishes its meaning and time zone. Line-item extraction requires a separately verified schedule. Keep credentials and private runtime identifiers outside the repository. Use scoped service identities and log the template version, source generation, processing outcome, and Salesforce record reference without logging full OCR content.

Run local checks for each coherent code slice, then CodeRabbit, verify and fix findings, run the additional Codex review, and send the repaired revision to a fresh Claude Opus final review. Record reviewed revisions and rerun affected checks before dependent implementation or deployment.

## References

- [Google Document AI template mode](https://docs.cloud.google.com/document-ai/docs/ce-template-based)
- [Document AI output coordinates](https://docs.cloud.google.com/document-ai/docs/handle-response)
- [Cloud Run jobs](https://docs.cloud.google.com/run/docs/create-jobs)
- [PDF.js](https://github.com/mozilla/pdf.js)
- [invoice2data template guide](https://github.com/invoice-x/invoice2data/blob/master/docs/tutorial.md)

## Neon High review

Reviewed by Gemini Neon at High reasoning. A condensed Markdown version was pasted inline after the attachment attempt timed out; the conversation is restricted. Adopt these refinements for the pilot:

- Use label-relative rectangles and start with hand-authored JSON and a static overlay. Match render and OCR coordinates explicitly, including OCR deskew, and handle omitted text anchor start offsets as zero. Build the editor after the held-out dry run passes.
- Snapshot authorized inputs at immutable object names with generation preconditions. Enforce the page cap before submission since batch requests take whole staged inputs. Evaluate Document AI Toolbox for combining result shards. [Batch request schema](https://docs.cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations.processors/batchProcess) · [Document AI Toolbox](https://docs.cloud.google.com/document-ai/docs/toolbox)
- Use the existing unique external ID. A conflicting create or retry must read and reconcile the existing identity. For every incoming file with an existing identity, retain the PDF and create a linked review document without overwriting reviewed Solicitation fields; the reviewer decides duplicate or amendment. Automatic content comparison is deferred. Test one matching page, its exact replay, and an unknown or invalid page. Reuse the first extraction for the replay where possible and keep the live run within separately authorized spend.
- Google’s official source files were verified for [retrieving-developer-knowledge](https://github.com/google/skills/blob/main/plugins/cloud/google-cloud-developer/skills/retrieving-developer-knowledge/SKILL.md), [gcloud](https://github.com/google/skills/blob/main/plugins/cloud/google-cloud-developer/skills/gcloud/SKILL.md), and [google-cloud-recipe-auth](https://github.com/google/skills/blob/main/skills/cloud/google-cloud-recipe-auth/SKILL.md). The auth skill is already installed. The first two are candidates for official documentation lookup and cloud CLI work. Neither is needed for the local mapper. No additional installation performed.
