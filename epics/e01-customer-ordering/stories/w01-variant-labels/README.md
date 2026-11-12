# W01 Fix readable storefront variant labels

Guide: [migrate/DELIVERY.md](https://github.com/aispanda/Reusable-Delivery/blob/9d32dccc738cc544481a6da257c13d438115f122/migrate/DELIVERY.md) at 9d32dccc738cc544481a6da257c13d438115f122, MIGRATE. The batch previously pinned 769a5099cb7412e9f307a38286f8e2adf74448a8. This rollout adds platform access verification and explicit role/access observations to future checks.
Revision/status/as-of: E01 consolidation revision 0.3, 12 November 2026. Published partial migration draft. Source remains authoritative. ClickUp sync deferred under [batch rules](https://github.com/aispanda/B2B-Commerce/blob/main/BATCH.md).
Origin: SRC21 and W01-E01–E03 in the restricted index. The E01 writer owns this documentation revision. The original PDP coordination and human decision owners resolve through W01-E02. The source task showed no assignee. Current W01 delivery assignee remains Pending.

## Current state

The 7 November source comments report successful site publication and readable attributes on a sampled variant card in both Category and Search. Guest and buyer sessions reached both published surfaces. The buyer opened the expected SKU and switched to the matching alternate variant on the PDP. Buyer price was unavailable and Add to Cart was disabled during this test. The later W03 browser check observed one signed-in buyer add the same sampled item and read the matching cart. Full PDP regression, independent runtime verification and human acceptance remain pending.

## Outcome and scope

As a shopper, I want readable variant attributes and package quantities on Category and Search cards so that I can identify the intended product before opening its PDP. Preserve stored values, selection identifiers and existing cart behavior. This is the card-label portion of the original PDP story. The other PDP requirements remain with that story.

Related delivery: [W03 Buyer journey](../w03-buyer-journey/README.md) uses correct variant selection and owns journey-level verification. The distinct price-recovery story remains with its existing owner and is reachable through the restricted source index.

## Source criteria and disposition

The source uses unnumbered bullets. Row numbers below are source positions, not newly assigned acceptance IDs.

| Source position | Agreed criterion | W01 disposition |
|---|---|---|
| 1 | Useful specifications, labels, units and package quantities match agreed sources; blanks do not mislead. | Sampled Category/Search label rendering reported pass. Blank-value fallback has local prototype coverage. Full PDP and runtime fallback checks pending. |
| 2 | Description is accurate and clearly demo content. Synthetic proposals are identified, not presented as manufacturer facts. | Retained in parent PDP scope. No W01 result. |
| 3 | Genuine variants select the correct SKU, specs, existing image, price and availability; invalid combinations are handled. Simple products have no misleading selector. | Sampled buyer SKU navigation and variant switch reported pass. Other combinations, images and availability pending. Pricing has separate follow-up evidence and scope. |
| 4 | Relevant documents open for the buyer; otherwise record a valid N/A reason. | Retained in parent PDP scope. No W01 result. |
| 5 | API/browser, selected cart SKU where applicable, mobile/keyboard and regression checks pass; you accept the finished PDP. | Sampled guest and buyer browser evidence. W03 observed one later buyer cart. The guest add is a historical report with primary readback pending. Broader cart, mobile, keyboard, regression and acceptance remain open. |

The linked PDP specification v4 retains its stable checks:

| Check | W01 mapping and evidence |
|---|---|
| PDP-01, PDP-03, PDP-04, PDP-06, PDP-09 | Baseline and fixtures, description and claims, product relationships and controls, document applicability and buyer access, and explicit human acceptance remain with the original PDP story. |
| PDP-02 | Sampled readable card labels, units and quantity. Full PDP specification and blank-value verification remain pending. |
| PDP-05 | One sampled expected SKU and alternate selection observed. Broader variant mapping, invalid cases, image and availability verification remain pending. |
| PDP-07 | Sampled label and SKU behavior observed. The publication check found price unavailable and the purchase control disabled. W03 later observed the same item in a buyer cart. Full native regression remains pending. |
| PDP-08, PDP-10 | Desktop/mobile/keyboard and simple-product regression, and buyer usefulness review, are relevant criteria. Their complete runtime and human checks are NOT RUN in W01. |

The source requires a simple-product control for shared variant handling and recovery of only test-added cart state.

## Solution and evidence

The deployed pilot resolves each attribute API value against the options for that same attribute, using the readable label for display while retaining selection data. Unmapped labels are omitted. The source records an open-code Product Card pilot and supporting components, a successful validation and install, Category and Search draft changes, then publication at user direction. Local checks covered sampled mappings, missing options or labels, simple products, cross-attribute matching and input immutability. Candidate files, readbacks and the publish/test transcript remain in restricted context. Recovery uses the original page component definitions, with the candidate removed only after checking for references. Facet counts were restored to the prior off setting. Filter text style was reserialized and its comparison remains open. The separate native PDP package-quantity pilot has its own scope.

| Historical identity | Intended role | Resource access observed | Result and limit |
|---|---|---|---|
| Guest browser session | Guest shopper | Published Category and Search accessible | Sampled card showed readable cannula length, tubing length and pack quantity. |
| Signed-in demo buyer browser session | Buyer | Published Category, Search and sampled PDP accessible | Same sampled card labels, expected PDP SKU and alternate variant. Price unavailable and Add to Cart disabled at this checkpoint, so buyer cart verification remained open. |
| Administrator session in Builder Preview | Administrator preview | Preview accessible under administrator context | Same sample labels observed. The preview established administrator rendering. Published guest and buyer outcomes were recorded separately. |
| Later W03 signed-in demo session | Authorized buyer | Same sampled product PDP and own cart accessible | Added one item and read the expected variant, quantity and unit/line total. One cart item only. |
| Later guest storefront session in pricing handoff | Guest shopper | Guest cart access reported in handoff | A single add and matching cart were reported. Primary cart readback was unavailable to the retained pricing audit. |

## Execution

| Step | Action | Dependencies | Executor | State |
|---|---|---|---|---|
| Verify platform access | Verify Headless 360 and Salesforce CLI against the intended Developer Edition org before Salesforce work | Existing authorization, designated environment and tools | Assigned E01 migration writer for preflight | 12 November E01 preflight stopped at Headless 360 discovery during OAuth refresh. Earlier pass is historical. CLI follow-up NOT RUN. Restore MCP access and rerun both tools against the intended org. See the restricted E01 access receipt. |
| Source reconciliation | Compare the original PDP task, comments, checklist and linked specification with this draft | Restricted source retrieval | Assigned E01 migration writer | Main task, all visible comments, 14 native rows and PDP v4 matrix read in the original UI. Retained prior evidence and record scope. |
| Independent documentation review | Check source preservation, evidence scope, role distinctions and privacy against the exact draft | Task, specification, visible notes and approved retrieval of required artifacts | Independent Codex reviewer | Direct task, comments, checklist and v4 review performed. The reviewer rechecked the repaired evidence and criterion mappings in revision 0.3. See restricted E01 review. Remaining source retrieval is open. |
| Remaining storefront checks | Run the authorized checks still pending, with role and resource access evidence | Platform access, source criteria, existing test authority and fixtures | Pending assignment | NOT RUN |
| Human acceptance | Record the source acceptance decision | Independent verification and relevant PDP criteria | Requesting product owner | Pending |

### Next bounded action

The portfolio coordinator resolves retrieval of the remaining linked originals through the restricted index. The independent reviewer verifies access and records any material discrepancy against the current staged revision. Keep the reported guest add at its historical scope until its primary receipt is retrieved. Runtime work remains separate.

## Review and history

GitHub read access confirmed through the connected GitHub account. The main-branch W01 file was a navigation placeholder at blob 422a6e9e77264fe72c436ad7dace85fa6b3bcdc4. The coordinator assigned the E01 migration writer for W01–W03 and retains publication. The previous W01 draft is preserved.

- W01-E01, current task: five unnumbered acceptance bullets, five dated comment entries including a secondary network note, and two native checklists. The comments distinguish early guest response mappings, the still-unknown card/buyer response contract at that point, the pilot proposal, the draft deployment and the later publication. Native status remains 1 of 9 completed on the package-field checklist and 0 of 5 on the priority checklist. The completed row is field reuse. The separate historical evidence shows a sampled label fix published even though the native label priority remains open.
- W01-E02, PDP supporting packet v4: the matrix and review rules remain authoritative at their scope. The specification's earlier pause is historical for the one later published card pilot. It still applies to other unapproved PDP execution. Record further source retrieval and revision differences in the restricted inventory.
- W01-E03, retained execution and pricing evidence: confirms the sampled label and SKU behavior and one later W03 buyer-cart observation. The reported guest-cart result still needs primary evidence. The local resolver's four tests passed against the matching retained source and readback. Broader specifications, manufacturer-reference search, filters, price, accessibility, final checks and user acceptance remain open in the appropriate existing stories.
