# ABCMed emergency medical-supply bid demo scenario

**Status:** Proposed demo narrative for business audiences; end-to-end demo NOT RUN. This supplements [BID-01](story.md); the story remains authoritative for acceptance, implementation status, and execution evidence.

## Business scenario

ABCMed supplies medical instruments and materials to organizations responding to urgent public-health and humanitarian needs. Its bid coordinator receives a time-sensitive solicitation for items such as trauma instruments, sutures, and sterile dressings. The coordinator needs to understand the requested items, deadline, and delivery requirements quickly and verify them against the source before deciding whether to pursue the bid.

A UN, WHO, military, or NGO buyer, an emergency event, and a 48-hour deadline are illustrative unless supported by the selected source. A realistic public solicitation or clearly labeled synthetic document can be used for the demonstration; do not represent invented details as a real agency's notice.

## The problem

Bid notices arrive as PDFs in different layouts, often with time-sensitive deadlines. Coordinators must find and check the details, manage amendments, and make sure the same bid isn't treated as several separate bids.

## Proposed value and solution highlights

The proposed solution aims to:

- Bring key bid details into one Salesforce record for a person to review.
- Keep original PDFs in private storage, with links for authorized reviewers.
- Bring repeat and amended notices together under the same bid for review.
- Count each bid once, even when several sales opportunities relate to it.

Time saved, accuracy, and costs need to be measured; they are not yet proven.

## How it would work

1. **Collect:** Place bid PDFs in private Google Cloud Storage and start a bounded batch.
2. **Read:** A proposed Document AI custom processor extracts bid details and requested items.
3. **Map:** A proposed n8n workflow on Google Cloud maps the results into Salesforce.
4. **Review:** Salesforce presents a draft marked Needs Review, with source documents available to an authorized reviewer.
5. **Decide:** A person verifies the information, decides whether to pursue the bid, and may link existing Opportunities.

Human review remains in control. A reviewer decides whether a later document is a duplicate or an amendment and updates the bid if appropriate. Clinical and compliance decisions remain with qualified people.

## Bounded first demonstration

1. Stage a small, explicitly bounded batch of public or synthetic medical-supply PDFs in the private Google Cloud Storage bucket. Include a line-item table, an expired notice, and an amendment or conflict. Manually trigger the batch.
2. A **proposed** Document AI custom processor extracts the notice fields and requested items into structured output. A **proposed** n8n workflow hosted on Google Cloud visually maps and transforms that output to the existing Salesforce Solicitation object.
3. In the ABCMed test org, present a draft Solicitation marked **Needs Review**, including issuer, solicitation number, title, published deadline and time zone where stated, and requested item descriptions, quantities and units when found. A proposed related Solicitation Document would hold the authenticated PDF link and review metadata. Keep original PDFs and extraction JSON in private storage.
4. A reviewer checks the source, corrects or flags uncertain or missing values, and decides whether to pursue the notice. An existing Opportunity may be linked manually; it is not created automatically.
5. Submit a known notice again and an amended notice. Each incoming PDF would get a proposed Solicitation Document marked Needs Review; neither creates a second Solicitation or overwrites reviewed fields. A reviewer records Duplicate or Amendment, adds notes, and updates the Solicitation if needed. Earlier documents remain accessible. Show an explicit error or review outcome for unrecognized, missing, or conflicting information. **QA-04**

The proposed pipeline and custom processor are not demonstrated as working until tested. The story's QA-01–QA-05 govern the full pilot; a short demo alone does not establish acceptance.

## Acceptance examples

- A bounded run produces a traceable result or explicit error for each input. The reviewer can inspect the original PDF and extraction evidence.
- The draft's supported fields and requested-item summary match the source or are flagged. An unverified deadline or time zone remains unverified; expired notices and notices whose open status cannot be confirmed on the buyer's official portal stay out of the active queue.
- A repeat or amendment leaves the reviewed Solicitation intact until a person reviews it. Each incoming PDF appears as a separate Solicitation Document with its review decision and notes; earlier source evidence remains available. **QA-04**
- Two existing test Opportunities may link to one Solicitation while another remains unlinked; a solicitation-based report counts the bid once.
- Record actual test results, elapsed time, and charges where available. Do not promise zero errors, guaranteed compliance, a 60-second run, or specific savings without evidence.

## What exists today and what is proposed

**Existing test-environment evidence:** The Salesforce Solicitation object and optional Opportunity lookup, a private storage bucket, a one-page Erie Form Parser smoke test that produced historical record BID-00001, and a reviewed local mapper/LangGraph preview. The full batch has not been demonstrated.

**Proposed, not built:** The Solicitation Document child and review history, the Document AI custom processor, and the n8n workflow on Google Cloud. Separate reviewer access, the full demo checks, repeat and amendment checks, and billing verification remain pending.

## Architecture and review considerations

- **One bid, one record:** Identify a bid by its source or buyer and solicitation number; design duplicate protection and test it.
- **Private evidence:** Keep original PDFs and extraction results in private Google Cloud Storage. Authorized Salesforce reviewers use links to inspect the source.
- **Verified open status:** Confirm the deadline and latest notice status on the buyer's official portal.
- **Product choices:** Evaluate the custom processor with representative documents and measured results. Assess n8n licensing, persistent hosting, credentials, and actual costs.
- **Quality and delivery:** Compare the proposed direction with the historical Erie mapper and LangGraph preview; the live-flow LangGraph decision remains pending. The story records technical design, tests, review gates, and current status. Earlier architecture and AI-assisted design reviews inform the proposal; their suggestions require verification.
- **Measured outcomes:** Bound each test run and record actual outcomes and charges where available.

## Later possibilities

Separate line-item and amendment objects; automatic Opportunity creation; matching requested items to catalog SKUs; shelf-life, certification, and inventory checks; Agentforce summaries; fulfillment and replenishment are possible later enhancements. None is implied to exist or be accepted by this scenario. Clinical substitutions and compliance decisions require appropriately qualified human review.

## Source

The scenario incorporates a proposed emergency-response demo. Agency examples, timings, savings, and claims are illustrative until independently verified.
