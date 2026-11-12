# D04: Let a buyer request a return

**Migration draft, not an acceptance or authority transfer.** Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md) at `9d32dccc738cc544481a6da257c13d438115f122`, route MIGRATE. Published partial documentation draft, 12 November 2026; original source SRC03 remains authoritative. ClickUp sync: **Pending — deferred by instruction**. Accountable business owner: Pending; source task is unassigned. No intake implementation or acceptance test was performed. The sole E09 writer consolidated this draft for coordinator publication.

[E09 Returns, exchanges and settlement](../../README.md) · [D05 Managed RMA](../d05-managed-rma/README.md) · [D07 Credits and refunds](../d07-credits-refunds/README.md)

## Current state

The agreed post-MVP demo is a signed-in buyer's **request to Customer Care**, using the standard LWR Contact Support Form and a Case. It does not itself create an RMA or perform return, inventory or payment processing. On 11 November, read-only discovery observed the standard form on an Order Support page configured to require login, but its direct live route returned “Invalid Page” once. The cause was not established. Buyer identity/Case permissions, association, sharing, ownership, routing and notifications are unverified. No fictional Case has been submitted; AC-01–03 are **NOT RUN**. Discovery is complete only for its documented, historical scope.

Documentation next action: the portfolio coordinator resolves missing source material and restricted retrieval for full preservation review; the limited local consolidation review and repair recheck have passed. Execution next action after prerequisites: **INTAKE-01A**, a read-only page and Case-access audit by a named Salesforce administrator; that human executor and business owner are still Pending. Independent implementation verification is NOT RUN. Human acceptance is required by the original story and remains Pending.

## Outcome and scope

As a signed-in hospital buyer, I want to submit a return request with an order reference and know that Customer Care will review it. Capture order reference, item/SKU, quantity and reason; acknowledge receipt without promising approval or a refund. Customer Care reviews eligibility. Preserve the external-system-owned MVP operating model. RMA creation, warehouse receipt and closure, shipping, credits and payments are outside this intake story. A fulfilled Order Management fixture is not a prerequisite for the intake audit.

Research into buyer-initiated, potentially automatically authorized RMAs is a separate design question. The observed Order Management flows and actions do not demonstrate a working self-service LWR experience, nor authorize changing AC-02. Whether to extend scope or create separately linked work requires a business decision and an authorized story; no such extension is asserted here.

## Acceptance criteria

The following wording and IDs are copied from SRC03 revision 0.3, read in the authenticated source interface on 12 November. **No criterion wording was sanitized or changed.** The public draft omits private source links and client-identifying context; the restricted source mapping and portability are Pending.

| ID | Agreed criterion | Planned check / evidence | Result |
|---|---|---|---|
| AC-01 | A signed-in demo buyer can submit a request with the needed details using the standard component and sees neutral ‘request received’ wording. | Once authorized, a fictional buyer supplies order reference, item/SKU, quantity and reason; record required-field handling and neutral acknowledgment. | NOT RUN |
| AC-02 | Customer Care can find the correctly scoped fictional Case. A request alone leaves order, RMA, inventory and payment states unchanged. | Authorized Customer Care context finds the correct Case, details and owner; compare permitted before/after evidence for each downstream state. | NOT RUN |
| AC-03 | Buyer identity and Case visibility are restricted to the authorized context. Check routing and unintended notifications before any test submission. | First inspect Case create/read and field permissions, trusted buyer association, sharing, routing, assignment and automation. With authorization, check positive and negative visibility in intended contexts. | NOT RUN |

## Proposed solution

After resolving the live route and confirming support for the actual store, reuse the existing form and a discoverable Customer Care link. Proposal: require Subject for order reference and Description for item/SKU, requested quantity and reason, one line per item; acknowledge “Return request received. Customer Care will review your request and contact you.” Validate field requirements and success/error behavior in the target environment. Description is free text, not a typed quantity, order-line relationship or eligibility check. The observed panel did not establish binding to any particular global action. Avoid reusing an unrelated Case field. A business owner must decide whether text intake is adequate.

Salesforce documentation: [LWR Contact Support Form release note](https://help.salesforce.com/s/articleView?id=release-notes.rn_experiences_contact_support_form_lwr.htm&language=en_US&release=242&type=5) and [Send Visitor Information to the Salesforce Case Object](https://help.salesforce.com/s/articleView?id=experience.networks_lwr_contact_support_form.htm&language=en_US&type=5) describe the standard component/Case approach; neither proves this store's configuration, permission or runtime behavior. Detailed flow/API research and org-specific evidence remain in restricted context; retrieval for other authorized executors has not been verified.

## Execution

| Step | Action and affected criteria | Dependencies | One executor | State and evidence |
|---|---|---|---|---|
| PLATFORM-01 | Verify intended Salesforce environment and access through Headless 360 MCP and Salesforce CLI with minimal read-only probes, in that order. | Named executor, authorized target and environment. | Intended INTAKE-01A administrator, assignment Pending. | Pending; required before further Salesforce discovery, review, build or tests. Prior dated observations do not substitute for this check in a new execution environment. |
| INTAKE-01 | Inspect component, navigation and Case configuration; document supported possibilities. | Historical kickoff authority. | Original coordinator; exact historical model unknown. | Complete for historical read-only discovery on 11 November; no AC pass implied. |
| INTAKE-01A | Read-only page availability and buyer/Customer Care Case security/routing audit, AC-01–03. | PLATFORM-01 passed, named administrator, current source and intended fictional buyer/Care contexts. | Human Salesforce administrator, named person Pending. | Pending; no org changes or submission. |
| INTAKE-02 | Configure/reuse supported intake and perform approved fictional demo, AC-01–03. | INTAKE-01A evidence; explicit concrete configuration, release and test authorization; assigned executor. | Pending. | Blocked; no configuration or submission performed. |
| INTAKE-03 | Fresh independent implementation check against frozen ACs, then handoff. | Implemented, checked INTAKE-02 revision and evidence. | Independent reviewer, identity/model Pending. | NOT RUN; human acceptance separately Pending. |

### Next delivery step: INTAKE-01A

- **Executor and owner:** Named human Salesforce administrator Pending; accountable business owner and Customer Care routing owner Pending. If reassigned to AI, record exact selected model and authority before dispatch.
- **Inputs and prerequisites:** Current source description and relevant comments, intended environment and identities, historical discovery, current page publication/path, Case permissions/sharing and automation; pass PLATFORM-01 first. The historical administrator session is not evidence of buyer access.
- **Operation:** One bounded read-only audit using the verified MCP first and verified CLI or authorized UI where appropriate. Inspect live route/publication, buyer license and Case create/read/field permissions, trusted Contact/Account association, sharing, queue/owner, assignment, auto-response and relevant flows/triggers. Stop on missing access, ambiguous identity, or any need to mutate; do not submit a Case, expand permissions, publish, notify, create fixtures, or touch return/payment state.
- **Output/check:** Dated evidence of expected versus observed results and source/location, with each AC mapped to findings or a specific missing dependency; identify whether a safely bounded INTAKE-02 proposal can be prepared. One focused audit and at most one alternate authorized read-only route; inspect any unexpected effects before retrying.
- **Role-dependent evidence:** Record actual test identity, intended buyer or Customer Care role, access to the specific page/Case/resource and observed outcome separately. A successful administrator login or page setting is not a buyer-access result. Actual audit: **NOT RUN**.

## Review, decisions and history

- **Maker review:** The current source's ACs were compared with this candidate; all three IDs and wording are unchanged. The public draft excludes private links and client identifiers; no claim of an approved restricted mapping or portable retrieval. This check is not independent source preservation review.
- **Independent documentation preservation review:** Pending fresh reviewer with direct access to the original description, relevant comments, attachments, decisions and execution evidence. Current source description and visible activity were inspected, but complete comments/replies, attachment-byte comparison, linked source completeness, approved restricted storage and cross-executor retrieval are not established. Missing access blocks migration acceptance, not this clearly labeled draft.
- **Historical JEV:** The original revision 0.3 records `jev-1.14.0` documentation review and a targeted recheck of three instruction gaps on 11 November. This is neither implementation acceptance nor validation of the later self-service research guide or this draft. The separate research-guide JEV review is Pending; a proposed outbound review was rejected by automatic approval review.
- **Human decision:** Pending owner assignment, sufficiency of free-text intake and eventual acceptance. Actual decision: Pending.
- **Provenance:** Source revision 0.3 preserves earlier template v1.3 / Field Guide v1 + addition v1.1 and historical INTAKE-01–03; this draft retains those IDs and adds PLATFORM-01. The repository batch referenced [migrate/DELIVERY.md at `769a5099cb7412e9f307a38286f8e2adf74448a8`](https://github.com/aispanda/Reusable-Delivery/blob/769a5099cb7412e9f307a38286f8e2adf74448a8/migrate/DELIVERY.md); the pinned rollout version adds the platform-access prerequisite and role-dependent evidence fields. Those checks are Pending, while historical discovery remains complete at its original scope. The prior ClickUp template was not a commit-pinned guide.
- **Source map:** SRC03 revision 0.3 → scope, AC-01–03 and INTAKE-01/01A/02/03 preserved here; original attachment and JEV report → historical documentation evidence, byte comparison Pending; 11 November UI observations → dated current-state history, not current runtime proof; self-service research → separate proposal, not a criterion change. Restricted index owner/retrieval procedure and full inventory remain Pending.

**Boundary:** The source task remains current. No ClickUp writeback, source supersession, publication, Salesforce change or claim of overall migration completion is made by this draft. Publication and shared portfolio updates are reserved for the coordinator under the batch rules.

## Consolidation checkpoint — 12 November 2026

The portfolio coordinator assigned one E09 writer for D04–D07. That writer verified Headless 360 first, then the installed Salesforce CLI against the intended environment. Both read probes succeeded under the same System Administrator principal. This is tool access for the E09 writer; PLATFORM-01 remains Pending for the named human INTAKE-01A executor. No buyer page, Case permission, routing, notification or intended Customer Care runtime check was performed in this consolidation. Historical Invalid Page observation remains unresolved. Initial writer/reviewer plan: gpt-6.1-sol / xhigh; exact actual runtime model unknown. The user subsequently selected GPT-6.1 Terra / Extra High; the remaining independent review was explicitly dispatched with gpt-6.1-terra / xhigh. Source completeness, approved restricted storage and portable retrieval remain Pending.

### Preserved execution controls from source revision 0.3

After each recorded result, reconcile requirements, evidence, dependencies and authority; select one eligible step with an assigned executor and a bounded contract. Verify output before Complete, record expected versus observed result and actual model if exposed, update the checklist, recompute the next eligible step and repeat until authorized work is done or an actual blocker/bound requires handoff. Continue independent eligible work that a pending decision cannot invalidate. Mark a failed executed check **Rework**, record the finding, repair within scope and rerun the affected check before completion. For blocked dependencies record the exact input and resume condition; inspect partial effects before retries.

The source's conditional technical consultation remains **NOT RUN**: first seek missing evidence; only if technical judgment still blocks authorized work, consult **Claude Opus 5.5** if available and authorized. Use minimal permitted context, one focused question and one evidence-driven follow-up; request diagnosis/options/checks, verify advice and record identity/results. Do not silently substitute a model or treat advice as acceptance. This preserves the existing source instruction, not a new consultation authorization.

### Consolidation review disposition

A fresh independent reviewer explicitly dispatched as **gpt-6.1-terra / xhigh**, following the user's model selection, reviewed the available-source scope and rechecked the repairs on 12 November 2026. **Limited local document review and focused repair recheck: Pass.** Dispatch selection is known; exact backend runtime identity was not independently exposed. The review verified unchanged criteria and the affected claims, with prior D05/D06 reviews reused only for unchanged scope. Current original-service comments, attachment byte equality, complete linked inventory, approved restricted storage and successor retrieval remain unestablished. Full source-preservation acceptance stays blocked; runtime verification and human acceptance remain Pending. This is not publication authorization. Exact reviewed hashes, source coverage and dispositions are recorded in the private local handoff.
