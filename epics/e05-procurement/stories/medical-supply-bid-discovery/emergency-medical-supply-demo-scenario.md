# ABCMed emergency medical-supply bid demo scenario

**Status:** Proposed demo narrative; end-to-end demo NOT RUN. This supplements [BID-01](story.md); the story remains authoritative for acceptance, implementation status, and execution evidence.

## Business scenario

ABCMed supplies medical instruments and materials to organizations responding to urgent public-health and humanitarian needs. Its bid coordinator receives a time-sensitive solicitation for items such as trauma instruments, sutures, and sterile dressings. The coordinator needs to understand the requested items, deadline, and delivery requirements quickly and verify them against the source before deciding whether to pursue the bid.

A UN, WHO, military, or NGO buyer, an emergency event, and a 48-hour deadline are illustrative unless supported by the selected source. A realistic public solicitation or clearly labeled synthetic document can be used for the demonstration; do not represent invented details as a real agency's notice.

## Bounded first demonstration

1. Stage a small, explicitly bounded batch of public or synthetic medical-supply PDFs in the private Google Cloud Storage bucket. Include a line-item table, an expired notice, and an amendment or conflict. Manually trigger the batch.
2. A **proposed** Document AI custom processor extracts the notice fields and requested items into structured output. A **proposed** n8n workflow hosted on Google Cloud visually maps and transforms that output to the existing Salesforce Solicitation object.
3. In the ABCMed test org, present a draft Solicitation marked **Needs Review**, including issuer, solicitation number, title, published deadline and time zone where stated, requested item descriptions, quantities and units when found, and authenticated source references. Keep original PDFs and extraction JSON in private storage.
4. A reviewer checks the source, corrects or flags uncertain or missing values, and decides whether to pursue the notice. An existing Opportunity may be linked manually; it is not created automatically.
5. Demonstrate that replaying a notice does not create a duplicate, and that an amendment preserves the prior evidence and routes changes for review. Show an explicit error or review outcome for unrecognized, missing, or conflicting information.

The proposed pipeline and custom processor are not demonstrated as working until tested. The story's QA-01–QA-05 govern the full pilot; a short demo alone does not establish acceptance.

## Acceptance examples

- A bounded run produces a traceable result or explicit error for each input. The reviewer can inspect the original PDF and extraction evidence.
- The draft's supported fields and requested-item summary match the source or are flagged. An unverified deadline or time zone remains unverified; expired or unverifiable notices stay out of the active queue.
- An identical replay leaves the existing reviewed record intact. An amendment preserves prior source evidence and flags changes for review.
- Two existing test Opportunities may link to one Solicitation while another remains unlinked; a solicitation-based report counts the bid once.
- Record actual test results, elapsed time, and charges where available. Do not promise zero errors, guaranteed compliance, a 60-second run, or specific savings without evidence.

## Existing evidence and proposed changes

The story records the Salesforce Solicitation object and optional Opportunity lookup, a private bucket, a one-page Erie Form Parser smoke test that produced BID-00001, and a draft mapper/LangGraph preview. Those are historical technical evidence, not proof of the full batch. The story records separate reviewer access, end-to-end QA, replay/amendment checks, and billing verification as pending.

A custom Document AI processor and n8n-based Google Cloud integration are the desired proposed direction. Compare that direction with the existing configurable-template plan and LangGraph slice, document any changes to the design and delivery sequence, and preserve the reviewed code and evidence. Assess n8n licensing, persistent deployment, credentials, and actual costs before selecting the implementation.

## Later possibilities

Separate line-item and amendment objects; automatic Opportunity creation; matching requested items to catalog SKUs; shelf-life, certification, and inventory checks; Agentforce summaries; fulfillment and replenishment are possible later enhancements. None is implied to exist or be accepted by this scenario. Clinical substitutions and compliance decisions require appropriately qualified human review.

## Source

The scenario incorporates and bounds the emergency-response demo proposed in the [Gemini discussion](https://share.gemini.google/AMsxE8MvmfOo). Treat its agency examples, timings, savings, and claims as illustrative until independently verified.
