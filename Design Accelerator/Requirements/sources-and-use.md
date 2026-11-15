# Sources, evidence and reuse

## Sources and scope

| Key | Source | What it contributes / caution |
|---|---|---|
| A | [Agentforce workbook](https://docs.google.com/spreadsheets/d/1_qaxZ0e2-dJEHFQH5eOyza9vYak1UBux/edit) | Requirements rows 2–224 contain journey, request, candidate agent job, persona, need, goal and pain point. Coverage Matrix, Subagents, Actions and Knowledge Article Plan provide leads, not verified deployment. The workbook also contains customer and org-specific material: access only if authorized; do not copy it into a public project. |
| B | [Journey-mapped flow inventory](https://docs.google.com/spreadsheets/d/1nXyqEq3NlDQK2LpGr0ly8qZCiu3MxmEpOkMoc2DyYOo/edit) | Flow templates, Scenarios, Journey stages, Journey objects and Tracing guide connect candidate process steps to templates and records. It includes org observations and examples; those are not portable evidence of another org. |
| C | [Repository Agentforce reference index](../../Agentforce/REFERENCE-INDEX.md) | Salesforce documentation routes for agent actions, Knowledge, testing and grounding. Source index is project-specific; assess access and suitability before reuse. |
| D | [Repository object guide](../DataModel/) | Detailed journey/object views and diagrams. Its source data and examples are a project-specific guide; do not treat observed relationships or sample values as universal. |
| E | Salesforce documentation linked at each `SF` claim in [salesforce-capabilities.md](salesforce-capabilities.md). | Authoritative starting point for documented behavior; check release, edition, license, supported product and limitations. Some Salesforce Help pages may require access. |

The workbook links are preserved for traceability; their content can be access-restricted and may change. Do not ingest the workbooks wholesale into a public or cross-customer knowledge base. The summarized requirements are intentionally generalized; they do not reproduce customer decisions, specific records, org URLs, IDs, prices or operational observations.

## Evidence vocabulary

- **Candidate / REQ:** a possible need or requirement to confirm; no implementation or customer approval implied.
- **Documented / SF:** a capability stated in a cited Salesforce source, within that source's scope; no local implementation implied.
- **Mapping / MAP:** a possible relationship between candidate needs and documented capabilities; not proof of coverage or compatibility.
- **Customer verified:** reserved for evidence kept in the customer's controlled workspace, identifying the target, release, source, date, owner and test result. No customer verification is claimed here.
- **Unknown:** unverified or unsupported by available evidence. Do not convert missing evidence into a negative or a product promise.

## Adaptation checklist

1. Select relevant `REQ` IDs and personas; interview the customer and record approved policy, scope, owner and measurable outcomes privately.
2. For each selected `MAP`, check the cited Salesforce page and target org's product, edition, release, license, storefront architecture, installed/active assets and permission model. Record evidence separately.
3. Trace data and action ownership across storefront, Commerce, OM, warehouse, ERP, carrier, tax and payment systems. Define identities, effective-account access, failure states, safe retry and reconciliation.
4. Establish approved product, safety and support content and publication owners. Avoid medical advice, invented compatibility, guarantees and unnecessary personal information. Define human escalation.
5. Test authorized and denied access, account switching, stale prices, stock changes, pending operations, duplicate submissions, cancellations, returns, finance outcomes and service handoff as applicable.
6. Refresh these generic files when Salesforce documentation changes. Keep stable IDs where possible; note source and date for material changes. Do not add private examples, transcripts or credentials.
