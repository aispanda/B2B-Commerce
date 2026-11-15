# Medical-device and supply B2B commerce grounding

Single-file, customer-neutral grounding for people and AI agents designing Salesforce B2B Commerce, Order Management (OM), Payments, Service and Agentforce experiences for medical-device and medical-supply sellers. Search by stable ID (`P`, `J`, `REQ`, `AG`, `SF`, `FLOW`, `BP`, `OBJ`, `TR`, `KA`, `GR`). Sources checked 2026-11-15.

> **Status of this file.** This is a design accelerator. It is not approved customer policy, an implementation specification, legal or regulatory advice, medical advice, or evidence that any capability is licensed, installed, active or authorized in a particular org. Recheck the cited Salesforce documentation and the target org before design or build.

## 0. How to read and use this file

### 0.1 Evidence labels (always keep them separate)

| Label | Meaning | What it never means |
|---|---|---|
| **REQ / candidate** | A proposed customer need, agent job or requirement, generalized from the source workbooks. | An approved requirement, a universal need, or a priority. |
| **SF / documented** | Behavior stated in a cited Salesforce source, within that source's editions, licenses, products, release and limitations. | That it is licensed, enabled, configured, active, B2B-supported, LWR-compatible or permitted in a target org. |
| **MAP / candidate mapping** | A possible link between a REQ and a capability, flow, action or object. | End-to-end coverage, compatibility, or that an agent can safely perform it. |
| **INV / inventory lead** | A template, subflow, action or object named in the source inventory. | Salesforce-documented behavior (unless also marked SF) or presence in another org. |
| **PROP / proposal** | A design proposal added by this baseline (for example the safety and traceability items in §7). | A documented Salesforce feature or a legal/regulatory determination. |
| **Unknown** | Not supported by available evidence. | A negative finding. Do not turn missing evidence into "not supported" or a promise. |
| **Customer verified** | Reserved for evidence kept in the customer's controlled workspace (target, release, date, owner, test result). | Nothing in this file is customer verified. |

### 0.2 Agent operating rules (GR)

- **GR-01 Authorize first.** Identify the person, verify identity where required, and confirm the effective buying account (and any represented customer) before reading or changing account-specific data. Catalog visibility is not record-level authorization.
- **GR-02 Actual outcomes only.** Use authoritative system results. Distinguish *requested*, *submitted*, *pending*, *accepted*, *completed* and *failed*. Never invent a price, availability, delivery date, eligibility, fee, refund, credit, warranty, compatibility, order result or policy.
- **GR-03 Confirm before side effects.** Summarize account, items, quantities, charges and consequences and get explicit confirmation before add/remove/delete cart, submit order, cancel, return, exchange, accept quote, update contact or case, record consumption or change memory settings.
- **GR-04 Reconcile before retry.** After a timeout or uncertain result, read the actual record state before offering a retry; never blindly repeat an order, charge, cancellation, return, consumption or quote acceptance.
- **GR-05 No credentials or payment data in chat.** Do not request passwords, one-time codes (except in an approved verification step), card numbers or bank details.
- **GR-06 No clinical advice.** Refer clinical suitability, treatment, equivalence and use questions to qualified professionals; direct urgent medical concerns to local emergency services. Show only approved product content.
- **GR-07 Minimize sensitive data.** Do not solicit patient or health information; use the approved secure route when it is genuinely required.
- **GR-08 Route safety and possible complaints.** Treat reports of malfunction, injury, damaged or unsafe product, or suspected defect as possible safety/complaint signals and route them to the approved process (see REQ-16), not only to returns or refunds.
- **GR-09 Disclose the AI.** Identify the agent as an AI, state limits and offer a verified human route.
- **GR-10 Don't reveal restricted data.** No-result, access-denied and eligibility answers must not disclose another account's records or restricted products.

### 0.3 Sources and access warning

| Key | Source | Use / caution |
|---|---|---|
| SRC-A | Agentforce workbook — Requirements (rows 2–224), Coverage Matrix, Subagents, Actions, Knowledge Article Plan, References | Candidate jobs and mappings. **Access may be restricted and the workbook contains customer- and org-specific material**; open only when authorized; do not ingest wholesale into public or cross-customer knowledge bases. |
| SRC-B | Journey and flow inventory — Flow templates, Scenarios, Object model, Tracing guide, Journey stages/objects/placements, Object relationships | Process steps, template leads, object landmarks. **Access may be restricted; includes org observations and demo data that are not portable evidence.** |
| SRC-C | Salesforce documentation linked inline (`SF`) | Authoritative starting point; check release, edition, license and product scope. Some pages require sign-in or may be temporarily unavailable. |
| SRC-D | [Published object guide](https://github.com/aispanda/B2B-Commerce/tree/main/DataModel) | Visual object relationships; project-specific examples are not universal. |

This file generalizes the sources: customer and competitor names, org URLs, record IDs, order numbers, sample prices, test results and internal operational observations were removed. Row references (`A:Req 57–77`, `B:Scn 9`) let an authorized reader trace back.

### 0.4 Writing client user stories

#### Story

As a **[specific role]**, I want **[functionality]** so that **[business outcome]**.

#### Evidence and decisions

- Cite supporting client evidence.
- Treat generic requirements as candidates.
- Validate generic rules with clients.
- Verify platform capabilities and configuration.
- Flag missing or conflicting facts.
- Seek decisions; identify decision owners.
- Never invent targets or policies.

#### Scope and sizing

- Prefer one story per functionality.
- Group configuration, design and implementation.
- Include relevant integrations and handovers.
- Team estimates using Fibonacci points.
- Split at 13 points or above.
- Re-estimate each testable split.

#### Acceptance criteria (Gherkin)

- Use Given, When, Then scenarios.
- Use each actor's business language.
- Include other roles and handovers.
- Check observable outcomes across systems.
- Cover relevant failures and exceptions.
- Use platform knowledge; avoid jargon.

#### Each story's open items

- Questions: owner and next step.
- Assumptions: validate with the client.
- Risks: impact and mitigation.
- Decisions: outcome, owner and date.
- Record story status and priority.

**Synthetic example**

As a knowledge author, I want to publish an approved article so that buyers can find current information.

Given a reviewer approves an article  
When the author publishes the article  
Then buyers can read the article

References: [Cucumber Gherkin](https://cucumber.io/docs/gherkin/reference/) · [Scrum Guide](https://scrumguides.org/scrum-guide.html) · [Splitting stories](https://www.scrum.org/resources/blog/slicing-splitting-user-stories).

---

## 1. Personas (candidate)

| ID | Persona | Job / goal | Needs and pain points to validate |
|---|---|---|---|
| P01 | Buyer / procurement user (clinic, hospital, lab, distributor buyer) | Find authorized products; buy and reorder for an organization. | Correct account, contract price, unit/package, PO, delivery; avoid duplicate or wrong-account orders. |
| P02 | Buyer administrator / approver | Manage buyers, access and approvals. | Who may act for which account; access-request and approval status. |
| P03 | Clinician / product evaluator | Evaluate specifications, compatibility, handling and safety notices. | Reliable, current, approved content; clinical decisions stay with qualified professionals. |
| P04 | Receiving / inventory / consignment operator | Receive, count, use and replenish location stock. | Accurate balances, lot/serial/expiry, discrepancy correction, no double reporting. |
| P05 | Customer service agent | Resolve order, return and service issues; hand off exceptions. | Current authoritative status, policy, safe actions, ownership, full context on handoff. |
| P06 | Fulfillment / returns operator | Allocate, ship, receive and inspect. | Split shipments, damage, RMA receipt/inspection, discrepancies. |
| P07 | Finance / accounts payable / receivable | Reconcile invoices, payments, credits, refunds, tax. | Authoritative records; credit ≠ refund; duplicate or held charges. |
| P08 | Equipment owner / service coordinator | Register equipment; request service, warranty, repair or replacement. | Asset/serial identification, coverage, quotes, appointment and repair status. |
| P09 | Visitor, patient or caregiver | Find information or the right route to help. | Accessibility, privacy, no clinical advice. **Do not assume these roles can buy in a B2B store.** |
| P10 | Merchandiser / commerce administrator | Maintain catalog, entitlements, pricing, promotions and content. | Accurate segmentation; changes that propagate safely. |
| P11 | Integration / operations owner | Connect ERP, WMS, tax, payment, carrier, EDI/punchout; recover exceptions. | Correlation IDs, traceability, idempotent retries, clear system ownership. |
| P12 | Distributor / partner / delegated buyer | Buy on behalf of represented customer accounts. | Verified delegated authority and represented account. |
| P13 | Quality / regulatory / safety contact (PROP) | Receive possible complaints, adverse-event signals and recall/field-action needs. | Complete, timely, minimal-data intake with product, lot/serial and order context. |

---

## 2. Journey catalog and candidate requirements

Format per journey: purpose → candidate requirement (REQ) → candidate agent jobs (AG) with source rows → main risks → candidate mappings (MAP). All entries are **candidates**; the workbook's mappings are not proof that an agent can perform them.

### J01 Access and account — `REQ-01` (A:Req 2–19; B:Scn 2, 2a)
- **Requirement:** Show the current and permitted buying account; support account switching, access requests, buyer administration, delegated/partner and caregiver access; enforce authorization on every account-specific read/write; guide recovery without collecting credentials.
- **AG-01.1** Sign-in route and recovery, password reset, locked account — guide to the verified route; never ask for passwords (rows 2–3, 14, 17).
- **AG-01.2** Which account am I buying/acting for; list and switch permitted accounts; explain verified effect on cart/pricing (4–5, 12, 16).
- **AG-01.3** Access denied — explain request path without disclosing other accounts (6).
- **AG-01.4** Account/profile details; update contact details after confirmation (7, 19).
- **AG-01.5** Organization access request, status, delay, approver; add/remove buyers with approvals (8–11, 15).
- **AG-01.6** Distributor/partner purchasing and caregiver help — verify delegated authority; route unclear cases (13, 18).
- **Risks:** wrong-account orders, privacy leaks, credential solicitation. **MAP:** SF-01 buyer access/entitlements; AF actions *Get Shopper Effective Accounts in Commerce*, *Verify Customer*, *Send Email with Verification Code*, *Reset Password*, *Update Customer Contact / Update Verified Contact*; subagents *Commerce Effective Accounts*, *Commerce User Verification*, *Account Management*.

### J02 Home, navigation, accessibility and agent disclosure — `REQ-02` (A:Req 20–28)
- **Requirement:** Accessible navigation; verified guest vs. signed-in capabilities; featured content and campaign eligibility; AI disclosure; route to humans.
- **AG-02.1** What can I do without signing in; patient/caregiver shopping — explain only verified access (20, 27).
- **AG-02.2** Categories, featured items, buying tools (lists, quick order) (21–22, 24).
- **AG-02.3** Different homepage after login — explain verified account differences only (23).
- **AG-02.4** Assistive technology — explain available support; **don't claim compliance** (25).
- **AG-02.5** "Am I talking to an AI?" — disclose, explain limits, offer human (26).
- **AG-02.6** Does a homepage offer apply to me — verified terms, dates, eligibility (28).
- **MAP:** SF-05 guest checkout (architecture-specific); *Answer Questions with Knowledge*; *Capability Summarization*.

### J03 Product discovery, content, compatibility and safety notices — `REQ-03` (A:Req 29–56; B:Scn 3–5)
- **Requirement:** Search by name/SKU/criteria within the entitled catalog; show approved specifications, variants, units/packages, documents, storage/handling, discontinuation/replacement and safety notices; show documented compatibility only; refer clinical suitability.
- **AG-03.1** Search, filter, sort, category browse, no-results help without revealing restricted items (29, 39–42).
- **AG-03.2** Specifications, comparison, documents, unit/package, variant/size (31–33, 38, 43–44, 47).
- **AG-03.3** Needs-based matching using non-sensitive purchasing criteria; refer suitability (30).
- **AG-03.4** Compatibility of device and supplies — documented only; route ambiguity to qualified product support (34, 54–55).
- **AG-03.5** Can I buy this for my account; why missing/unavailable — check visibility and stock separately (35–36).
- **AG-03.6** Discontinued/replaced; alternatives — documented replacement only; equivalence to qualified support (49, 53).
- **AG-03.7** Safety notice or recall lookup; storage/handling — approved content; route urgent concerns (50–51).
- **AG-03.8** Save for later to an authorized list (45).
- **Risks:** wrong variant/size, invented compatibility, clinical advice, stale recall content. **MAP:** SF-01; actions *Commerce Product Discovery Search*, *Get Commerce Product Details*, *Get Commerce Storefront Context*, *Answer Questions with Knowledge*; B2C product-FAQ/recommendation/concierge items are **B2C — B2B fit unverified**. See REQ-17 (restricted products) and REQ-18 (traceability).

### J04 Pricing, promotions and availability — `REQ-04` (A:Req 35–56, 64, 77, 100; B:Scn 1, 6, 6a, 11–12)
- **Requirement:** Show the applicable price for account, product, quantity, unit and currency from the authoritative source; tier thresholds; explain promotions only when eligibility/stacking are known; show inventory and verified estimates for the exact variant.
- **AG-04.1** How much / why different / why no contracted price — verify account, quantity, price source; route discrepancies (37, 46, 48).
- **AG-04.2** Volume/tier price and next threshold — no inferred discounts (56).
- **AG-04.3** Stock for the exact variant and availability estimate; say when unavailable (52).
- **AG-04.4** Promotion eligibility, stacking, coupon rejection — report returned error; never invent codes (64, 77, 100).
- **AG-04.5** Currency choice and effect on cart (B:Scn 6a).
- **MAP:** SF-01, SF-04 promotions; INV *Simplified Create Promotion* (admin); B2C coupon actions are **B2C — verify**.

### J05 Cart, lists, quick order and repeat buying — `REQ-05` (A:Req 57–77; B:Scn 6, 47)
- **Requirement:** Add, view, update, remove, delete cart items with confirmation; shopping lists; quick order and bulk SKU upload with row-level errors; shared carts; reorder with refreshed eligibility/price/availability; confirm uncertain updates.
- **AG-05.1** Add item; view cart; change quantity; remove line; delete cart (explicit confirmation) (57–61).
- **AG-05.2** Why did cart or price change; saved cart location (62–63).
- **AG-05.3** Reorder; items that can't be reordered; usual-supplies reorder or reminders (65, 74, 76).
- **AG-05.4** Quick order, bulk SKU upload with row-level validation; why item couldn't be added (66, 69–70).
- **AG-05.5** Shopping lists and list-to-cart with current price/availability (67–68).
- **AG-05.6** Shared cart access and permissions; moving products between buying accounts (recheck eligibility) (71–73).
- **AG-05.7** Did my cart update succeed — read before retry (75).
- **MAP:** SF-02 cart APIs; actions *Add Product To Cart*, *Get Cart Items*, *Update Cart Item*, *Delete Cart Item*, *Delete Cart*, *Reorder from Commerce Store*, *Get Recent Order List from Commerce*; subagents *Commerce Cart Management*, *Commerce Order*.

### J06 Procurement, PO, approval and quote — `REQ-06` (A:Req 79, 93, 97; B:Scn 8; inventory Quotes stage)
- **Requirement:** Capture and validate PO and references; show approval status where configured; define quote-to-order handoff. PO, approval and quote are **conditional**, not a mandatory sequence.
- **AG-06.1** Where to enter PO; resolve PO validation error (79, 93).
- **AG-06.2** Does order require approval — configured status or route to buyer admin (97).
- **AG-06.3** Quote review/acceptance before order (inventory Quotes stage; see also J12 replacement quotes).
- **MAP:** Unknown for approvals; quote-to-order depends on configured features (TR-02).

### J07 Checkout, delivery, tax and payment — `REQ-07` (A:Req 78–106; B:Scn 9–26, 10a, 10b, 17a, 19a, 19b, 20a)
- **Requirement:** Recalculate after cart/address/delivery changes; show current charges, labeled estimates and real errors; confirm address, delivery, payment and final review; handle pending results; reconcile uncertain submission before retry; validate card, PO/invoice/account-credit paths separately; never collect card data.
- **AG-07.1** How to check out; why can't I continue; expired checkout; site error (78, 86–87, 106).
- **AG-07.2** Address choice, change, missing address, billing address options (80–81, 99, 101).
- **AG-07.3** Shipping methods, charges, delivery-date requests; tax explanation (82–83, 94–95).
- **AG-07.4** Payment options, different method, card failure, invoice/account-credit unavailable (84–85, 92, 104).
- **AG-07.5** Final total; change cart during checkout; full review before placing (88–89, 98).
- **AG-07.6** Place order only after authority check and explicit confirmation (90).
- **AG-07.7** Did my order go through; rejection; charged-but-failed or duplicate charge — check order and payment records first (91, 96, 105).
- **AG-07.8** Insurance/benefits; prescription or provider information — verified requirements only; secure route for sensitive data (102–103).
- **MAP:** SF-02, SF-03, SF-06; INV checkout subflows (FLOW-30–44); INV *Generate Payment Link* (merchant-side, Payments); see REQ-17 for restricted-product checks at checkout.

### J08 External and multichannel orders (EDI, punchout, public procurement) — `REQ-08` (A:Req 107–115; B:Scn 50)
- **Requirement:** Correlate external and store identifiers; show transmission vs. order status separately; identify the system of record for changes; flag possible cross-channel duplicates; confirm each channel is in scope.
- **AG-08.1** Find external/EDI/punchout/public-procurement orders; why missing (107–111).
- **AG-08.2** Relationship of external and store order numbers; duplicate detection (112, 114).
- **AG-08.3** EDI failed/pending — no blind retries; which system owns changes (113, 115).
- **MAP:** INV *Create External Channel Process Exception* (no verified source); otherwise Unknown/integration.

### J09 Orders, history, invoices and tracking — `REQ-09` (A:Req 116–127; B:Scn 23, 27–28)
- **Requirement:** Results limited to authorized accounts; show item- and shipment-level status with source and update time; distinguish submitted, received and accepted; authoritative invoice and tracking links.
- **AG-09.1** Confirmation, history, find by reference or PO number, items and totals (116–118, 121, 126).
- **AG-09.2** Status and acceptance with source/time (119–120).
- **AG-09.3** Shipments incl. partial, tracking link, tracking unavailable (122–124).
- **AG-09.4** Invoice access or billing support (125).
- **AG-09.5** Personal/consumer orders only if a supported channel exists (127).
- **MAP:** actions *Look Up Order Summary for Commerce*, *Get Recent Order List from Commerce*, *Get Order By Order Number*, *Get Orders By Contact*; subagents *Commerce Order*, *Order Inquiries*; SF-11.

### J10 Fulfillment and shipping — `REQ-09` cont. (A:Req 128–136; B:Scn 27)
- **AG-10.1** Release-for-fulfillment state; line-level unfulfilled quantities; backorder status without promised dates (128, 134–135).
- **AG-10.2** Split shipment contents; shipment documents; delivered status (129–130, 133).
- **AG-10.3** Late, lost, damaged, missing item — capture details, route damage/safety (see GR-08) (131, 136).
- **AG-10.4** Delivery change after shipment — verified options or route (132).
- **MAP:** subagent *Delivery Issues*; actions *Get Delivery Time Slots*, *Finalize New Delivery Time* (verify B2B/service fit); fulfillment is often owned by WMS/carrier integrations.

### J11 Changes and cancellation — `REQ-10` (A:Req 137–146; B:Scn 29–33)
- **Requirement:** Check authority, fulfillment state, eligible quantity, fees and refund/tax effects; preview and confirm; report completion separately from submission; reconcile before retry; cancellations of external orders go to the owning channel.
- **AG-11.1** Can I cancel; cancel one item; cancel whole order; cancel only unshipped (137–139, 144).
- **AG-11.2** Fees; effect on shipment and refund (140, 145).
- **AG-11.3** Status of cancellation; timed-out request (141, 146).
- **AG-11.4** Change address or quantity after ordering; external-order cancellation (142–143).
- **MAP:** SF-10 Cancel Item; INV Cancel All Eligible Items, Ensure Refunds for Excess Funds, Record Tax Reversals; action *Cancel Order* (verify scope and safeguards).

### J12 Returns, RMA, exchange and reship — `REQ-11` (A:Req 147–159; B:Scn 34–45)
- **Requirement:** Capture reason and eligible quantity; choose **one** applicable path (blind return, RMA return, even exchange, exchange with RMA, reship); track receipt and inspection; report credit and refund separately; don't run alternatives as mandatory sequential steps. Screen damaged/defective reports for safety/complaint routing (REQ-16).
- **AG-12.1** Eligibility, required information, start a return or RMA (147–149).
- **AG-12.2** Return status, receipt, inspection, rejection reason; return instructions and labels (150, 154–155, 157).
- **AG-12.3** Refund timing, credit memo, refund vs. credit completion (151, 156, 158).
- **AG-12.4** Exchange options (152).
- **AG-12.5** Damaged item — capture non-sensitive details and route safety concerns (153).
- **AG-12.6** Timed-out return request — check before retry (159).
- **MAP:** SF-13–SF-18, SF-20; finance outcomes per TR-08/TR-09.

### J13 Assets, service, warranty, repair and replacement — `REQ-12` (A:Req 160–190)
- **Requirement:** Find authorized assets/serials and service history; check warranty coverage without inferring "no warranty" from missing data; create service cases with consent; quote review/acceptance with confirmation; appointment and repair status; replacement quote/order linkage; return-of-faulty-device instructions; route safety and decontamination/handling questions.
- **AG-13.1** List/register/find asset and serial (160, 166, 176).
- **AG-13.2** Warranty coverage, purchase/renew, expired, details unavailable, replacement eligibility (161, 167, 169–170, 179, 183).
- **AG-13.3** Request service; triage details; device not working; broken equipment (162, 168, 177, 181).
- **AG-13.4** Case status, repair status, appointment reschedule (163, 173, 178).
- **AG-13.5** Repair quote: request, review/negotiate, accept, unconfirmed acceptance, conversion to sales order (164, 171–172, 180, 189).
- **AG-13.6** Repair charges and service-invoice payment (174–175).
- **AG-13.7** Warranty replacement request; new-device sales quote; review/accept and order; trace quote/order from case (184–188).
- **AG-13.8** Return faulty device after replacement — verified instructions; route decontamination/handling (190).
- **AG-13.9** Product safety concern; safety notice for my device — prompt routing, minimal non-clinical details, emergencies to emergency services (165, 182).
- **MAP:** subagents *Case Management*, *Escalation*; actions *Create Case*, *Create Case with Enhanced Data*, *Get Case By (Verified) Case Number*, *Get Cases For Verified Contact*, *Add Case Comment*, *Close Case*; objects OBJ-12. Service entitlement ≠ commerce entitlement.

### J14 Consignment, consumption and replenishment — `REQ-13` (A:Req 191–205)
- **Requirement:** Define ownership and controls for location stock, barcode and bulk uploads, consumption reporting and correction, replenishment and resulting billing; lot/serial/expiry where needed; prevent double reporting and double billing.
- **AG-14.1** Balances at a location; items needing replenishment; expiring items (lot/expiry) (191, 193, 200).
- **AG-14.2** Request fill-up; track replenishment order (192, 199).
- **AG-14.3** Record consumption; barcode scan; bulk upload with row-level validation and failed-row correction (194–196, 202).
- **AG-14.4** Count discrepancy — compare and route; no stock change without approval (197).
- **AG-14.5** Consumption-driven invoice; usage history by date/location; already submitted/billed check (198, 204–205).
- **AG-14.6** Correct or reverse a duplicate consumption without duplicating financial actions (201, 203).
- **MAP:** Unknown — no standard template identified in the inventory; typically ERP/custom.

### J15 Support, safety, privacy and escalation — `REQ-14` (A:Req 206–224)
- **Requirement:** Verified human handoff with context; urgent medical concerns to emergency services; clinical questions to qualified professionals; privacy-safe routes; no unnecessary sensitive data; identity verification before sensitive access; case follow-up/update/close with confirmation; chat-memory transparency and controls.
- **AG-15.1** Talk to a person; contact channels and hours; question not answered; continue after disconnect (206–208, 219).
- **AG-15.2** Urgent medical help; treatment questions (209, 220).
- **AG-15.3** Someone acting for a buyer — verify delegated authority (210).
- **AG-15.4** Technical problem; cart/checkout technical issue — non-sensitive details, case with consent (211, 213).
- **AG-15.5** Follow up, update, close a case (212, 214–215).
- **AG-15.6** Handoff summary for the receiving representative (216).
- **AG-15.7** Not sharing patient information; what not to share; update healthcare-provider information via secure route (217–218, 221).
- **AG-15.8** Does the agent remember me; turn off memory (222–223).
- **AG-15.9** Verify identity before account assistance (224).
- **MAP:** subagents *Escalation*, *Customer Verification*, *Service Customer Verification*, *Case Management*; actions *Check Rep Availability for Routing*, *Raise Flag For Supervisor*, *Get/Update User Memory Preference*, *Manage User Memory*, *Verify Customer*.

### J16 Exception recovery, reconciliation and audit — `REQ-15` (B:Scn 48–51; A:Req 62, 75, 91, 96, 105, 141, 146, 159, 180, 203–205)
- **Requirement:** Correlate events and outcomes across systems; distinguish attempted, pending, failed and complete; define owner, idempotency, compensating actions and escalation before any retry; not every failure creates a process exception.
- **MAP:** SF-12 Create Process Exception; INV Subflow-Error, Create External Channel Process Exception; TR-13.

### J17–J19 Added proposals (PROP) — see §7: `REQ-16` complaints/safety signals and recalls, `REQ-17` restricted-product purchaser eligibility, `REQ-18` lot/serial/UDI/expiry traceability.

---

## 3. Business process journey (order-to-resolution)

Generalized from SRC-B Scenarios. Steps are **candidate process steps**; "INV" template names are leads, not proof of use or order of execution. Cancellation, return, RMA, exchange and reship paths are alternatives for a particular issue, not one mandatory sequence; more than one may apply to different items or events.

| ID | Stage | Candidate step | Type / trigger | Template lead (INV) | Proposed actor | Product / owner to verify |
|---|---|---|---|---|---|---|
| BP-01 | Promotion setup (optional) | Staff prepare approved promotions | Screen / staff | Simplified Create Promotion | Merchandiser | B2B Commerce |
| BP-02 | Account access | Buyer signs in and selects permitted account | — | none | Buyer | B2B Commerce / Experience Cloud |
| BP-02a | Guest path (optional) | Guest proceeds to checkout where enabled | — | none | Guest | Guest checkout (architecture-specific) |
| BP-03 | Discovery | Browse/search entitled catalog | — | none | Buyer | B2B Commerce |
| BP-04/05 | Discovery (optional bot) | Conversational product details / recommendations | Autolaunched | Concierge Bots for B2C templates | Shopper; bot | **B2C; B2B fit unverified** |
| BP-06 | Cart | Select products, quantities, account price | — | none | Buyer | B2B Commerce |
| BP-06a | Cart / currency | Choose supported currency; recheck items | — | none | Buyer | B2B Commerce; custom if needed |
| BP-07 | Assisted ordering | Staff build order on customer's behalf | Screen | Order on Behalf Of Flow | Service agent | OM (see SF-19 licensing) |
| BP-08 | Purchase approval | PO / approval / quote acceptance as required | — | none | Buyer; approver | Configuration-dependent |
| BP-09 | Checkout | Start checkout orchestration | Checkout flow | Checkout Flow Template | Buyer | B2B Commerce |
| BP-10 | Checkout | Start/resume checkout session | Checkout subflow | Subflow - Checkout Session | Checkout service | B2B Commerce |
| BP-10a | Checkout | Cart edits during checkout trigger recalculation | — | none | Buyer | Cart calculate API |
| BP-10b | Recovery | Expired session returns buyer to an active cart | — | none | Checkout; buyer | Storefront UX |
| BP-11 | Checkout | Confirm current prices | Checkout subflow | Subflow - Confirm Price | Pricing | B2B Commerce |
| BP-12 | Checkout | Check inventory/availability | Checkout subflow | Subflow - Inventory | Inventory source | Configured inventory |
| BP-13 | Checkout | Enter/validate shipping address | Checkout subflow | Subflow - Shipping Address | Buyer | Address validation if used |
| BP-14 | Checkout | Select delivery method | Checkout subflow | Subflow - Delivery Method | Buyer | Shipping service |
| BP-15 | Checkout | Calculate shipping cost | Checkout subflow | Subflow - Shipping Cost | Shipping | Shipping service |
| BP-16 | Checkout | Calculate tax (estimate, distinct from tax recording) | Checkout subflow | Subflow - Taxes | Tax | Tax service |
| BP-17 | Checkout | Billing address and permitted payment or terms (card, PO) | Checkout subflow | Subflow - Payment and Billing Address | Buyer; payment | Payments / gateway |
| BP-17a | Payment recovery | Cart change after billing may require re-entering payment | — | none | Buyer | Payments |
| BP-18 | Payment link (optional) | Merchant generates a payment link | Screen | Generate Payment Link | Authorized merchant | Salesforce Payments, if enabled |
| BP-19 | Checkout | Final order review | Checkout subflow | Subflow - Checkout Summary | Buyer | B2B Commerce |
| BP-19a | Checkout | Withhold final totals until calculations finish | — | none | Checkout | Async polling |
| BP-19b | Calculation failure | Stop and show a distinguishable failure | — | none | Checkout | Calculators |
| BP-20 | Submission | One authorized submission; reconcile uncertainty | — | none | Buyer | B2B Commerce |
| BP-20a | Submission | Show pending vs. confirmed outcome | — | none | Order service | Payments / order placement |
| BP-21 | Submission | Convert cart to order | Checkout subflow | Subflow - Cart To Order | Order service | B2B Commerce |
| BP-22 | Submission | Activate order when prerequisites met | Checkout subflow | Subflow - Activate Order | Order service | Activation automation |
| BP-23 | Order processing | Create order summary from activated order | Autolaunched | Create Order Summary Flow (SF-11) | OM | OM |
| BP-24 | Tax recording | Record external tax transaction | Autolaunched | Create Tax Transaction | Tax service | Tax provider |
| BP-25 | Confirmation | Show confirmation only for a real outcome | Checkout subflow | Subflow - Order Confirmation | Buyer | B2B Commerce |
| BP-26 | Checkout state | Update checkout state as processing progresses | Checkout subflow | Subflow - Update Checkout State | Checkout | B2B Commerce |
| BP-27 | Fulfillment | Allocate, release, fulfill, ship, track | — | none | Fulfillment ops | OM / WMS / carrier |
| BP-28 | Billing & settlement | Invoice and reconcile payment | — | none | Finance | ERP / payment provider |
| BP-29 | Cancellation | Request cancellation; verify authority and state | — | none | Buyer or agent | Commerce / OM / service |
| BP-30 | Cancellation | Select eligible items, reasons, fees; preview; confirm | Screen | Cancel Item Flow (SF-10) | Agent or buyer (verify) | OM |
| BP-31 | Cancellation (alt.) | Cancel all eligible items | Screen (supporting) | Cancel All Eligible Items Flow | Service flow | OM |
| BP-32 | Cancellation | Refund excess funds after cancellation | Autolaunched | Ensure Refunds for Excess Funds Flow | Refund service | OM / payments |
| BP-33 | Cancellation | Record tax reversal | Autolaunched | Record Tax Reversals | Tax | Tax provider |
| BP-34 | Exchange (alt.) | Pre-fulfillment even exchange | Screen | Even Exchange Flow (SF-17) | Service agent | OM Growth |
| BP-35 | Service intake | Identify order/item; route service and **quality/safety** requests | — | none | Service team | Service desk; quality process (REQ-16) |
| BP-36 | Returns | Check policy, returnable quantity, approval | — | none | Service team | OM / policy |
| BP-37 | Returns | Create managed RMA | Screen | RMA Return Items (SF-14) | Agent or buyer (verify) | OM |
| BP-38 | Returns | Receive and inspect returned items | — | none | Returns ops | OM / WMS |
| BP-39 | Returns | Close RMA → credit memo and refunds | Autolaunched | RMA Create Credit Memo and Ensure Refunds Flow (SF-15) | OM; finance | OM / payments |
| BP-40 | Returns (alt.) | Blind return (no physical return) | Screen | Return Item Flow (SF-13) | Service agent | OM |
| BP-41 | Exchange (alt.) | Exchange with RMA | Screen | Exchange with RMA Flow (SF-18) | Service agent | OM Growth |
| BP-42 | Returns | Record tax reversal | Autolaunched | Record Tax Reversals | Tax | Tax provider |
| BP-43 | Reship (alt.) | Reship eligible fulfilled items | Screen | Reship Order Flow (SF-20) | Agent; fulfillment | OM Growth |
| BP-44 | Price adjustment | Authorized staff discount on eligible lines | Screen | Discount Flow (SF-16) | Authorized agent | OM Growth |
| BP-45 | Financial resolution | Finance approves and reconciles credit/refund | — | none | Finance | ERP / payments |
| BP-46 | Service closure | Confirm remedy, notify buyer, close case | — | none | Service team | Service |
| BP-47 | Reordering | Reorder from history with refreshed entitlement, price, availability | — | none | Buyer | B2B Commerce |
| BP-48 | Exception recovery | Present/recover checkout errors | Checkout subflow | Subflow - Error | Checkout | B2B Commerce |
| BP-49 | Exception recovery | Create correlated process exception | Autolaunched | Create Process Exception Flow (SF-12) | Exception service | OM |
| BP-50 | Exception recovery | External-channel failure exception | Autolaunched | Create External Channel Process Exception | Integration | External channel (if used) |
| BP-51 | Exception recovery | Investigate, correct, retry/compensate, close | — | none | Operations | Affected systems |

---

## 4. Salesforce documented capabilities (SF)

Scope reminder: B2B Commerce, Order Management, Payments, Service and Agentforce are **different products with different licenses**; one does not imply another.

### 4.1 Commerce and checkout

| ID | Documented capability (SF) | Candidate use / limits (MAP) |
|---|---|---|
| SF-01 | [Buyer groups, entitlement policies and price books](https://help.salesforce.com/s/articleView?id=commerce.comm_buyergroup_entitlements_pricebooks.htm&type=5) tailor product visibility and pricing for buyer groups; [entitlement policies](https://help.salesforce.com/s/articleView?id=sf.comm_entitlement_policies_intro.htm&language=en_US&type=5) govern product and price visibility. | REQ-01, 03, 04. [Market setup](https://help.salesforce.com/s/articleView?id=commerce.comm_market_considerations.htm&language=en_US&type=5) can change which policies apply. **Entitlement controls visibility and price; it is not regulatory purchaser verification (REQ-17) or record-level authorization.** |
| SF-02 | [How standard B2B checkout works](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-how-standard-works.html): cart and checkout APIs, checkout session, calculators, delivery, payment and order placement. | REQ-05–07. Recheck the sequence, store architecture and payment handling for the target implementation. |
| SF-03 | [Checkout flow setup](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-setup-checkout-flow.html) and [checkout calculators](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-calculators.html) describe checkout orchestration and calculation extension points. | REQ-07. Subflow names in §5.3 are inventory leads; confirm architecture (LWR vs. Aura) and current support. |
| SF-04 | [Guided promotion creation](https://help.salesforce.com/s/articleView?id=commerce.comm_promotions_template.htm&language=en_US&type=5). | REQ-04. Admin tool; eligibility and impact require setup and testing. |
| SF-05 | [Guest checkout for headless stores](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-b2c-comm-set-up-guest-checkout-headless.html). | REQ-01, 02, 07. Business and configuration decision; don't assume enabled. |
| SF-06 | [Checkout status polling](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-poll-status.html) and [payment processing](https://developer.salesforce.com/docs/commerce/salesforce-commerce/guide/b2b-comm-checkout-process-payment.html). | REQ-07, 15. Treat asynchronous acceptance as pending until confirmed. |
| SF-07 | [Agentforce guided shopping for B2B](https://help.salesforce.com/s/articleView?id=commerce.comm_agent_guided_shopping_implement.htm&type=5). | REQ-03, 05, 09. Validate supported actions, store type and permissions. |
| SF-08 | [Pay Now payment links](https://help.salesforce.com/s/articleView?id=commerce.pay_now_generate_link.htm&language=en_US&type=5) (Salesforce Payments). | REQ-07. Merchant workflow; a buyer invoice-payment link needs separate access design. |
| SF-09 | [Commerce tax flows release note](https://help.salesforce.com/s/articleView?id=release-notes.rn_comm_taxflows.htm&language=en_US&release=252&type=5). | REQ-07, 10, 11. Tax transaction and reversal; release-specific — re-verify. |

### 4.2 Order Management flow templates — documented catalog

Source: [Salesforce Order Management Flows](https://help.salesforce.com/s/articleView?id=commerce.om_flows.htm&type=5) (older `sf.om_flows` links redirect here). Read 2026-11-15.

| ID | Template | Type | License group (SF) | Documented role (SF) | MAP / checks |
|---|---|---|---|---|---|
| SF-10 | Cancel Item Flow | Screen | OM Lite | Cancel an order item **before fulfillment**. [Detail](https://help.salesforce.com/s/articleView?id=sf.om_cancel_order_items.htm&language=en_US&type=5) | REQ-10. Eligibility, fees, refunds, permitted actor. |
| SF-11 | Create Order Summary Flow | Autolaunched | OM Lite | Creates an Order Summary when an Order is created/updated and its StatusCode is **Activated**. | REQ-09, 15. Identify actual summary producer; avoid duplicates. |
| SF-12 | Create Process Exception Flow | Autolaunched | OM Lite | Creates a process exception record when a Process Exception Event is created. | REQ-15. Investigation and retry remain operational. |
| SF-13 | Return Item Flow | Screen | OM Lite | **Blind return** after fulfillment — no physical return required for a refund. | REQ-11. Policy and financial controls are essential. |
| SF-14 | RMA Return Items | Screen | OM Lite | RMA return after fulfillment; item must be returned before refund. | REQ-11. Receipt, inspection, closure, authorization. |
| SF-15 | RMA Create Credit Memo and Ensure Refunds Flow | Autolaunched | OM Lite | Creates a credit memo and ensures refunds when a managed Return Order is updated and its StatusCategory is **Closed**. | REQ-11, 15. A credit memo is not proof of a paid refund. |
| SF-16 | Discount Flow | Screen | OM Growth | Apply a discount to an order item. | REQ-04/11. Staff only; buyer discounts should use promotions/pricing; audit credit/refund impact. |
| SF-17 | Even Exchange Flow | Screen | OM Growth | Exchange an item of **even value before fulfillment**. | REQ-11. Verify B2B support, inventory, failure handling. |
| SF-18 | Exchange with RMA Flow | Screen | OM Growth | Exchange items of **uneven value after fulfillment** using an RMA return. | REQ-11. Payment differences, product/edition support. |
| SF-19 | Order on Behalf Of Flow | Screen | OM Growth; also Connected Commerce and a standalone license | Create an order, add items, select shipping and process payment on behalf of a customer. | REQ-05–07. Staff access; existing-cart effects. |
| SF-20 | Reship Order Flow | Screen | OM Growth | Reship an order item after fulfillment. | REQ-11. Eligibility and fulfillment integration. |
| SF-21 | Distributed Order Management (DOM) flows | Various | OM Growth | Listed in the catalog; see Salesforce DOM documentation. | REQ-09 fulfillment routing; verify separately. |

**Documented considerations (SF, same page):** all Lite flows are included in Growth; flows can be customized or run as is; always set the flow type property when customizing; flows can't use localized labels (copy with hard-coded text per language); custom fields added to objects used in a flow require flow customization; **a change order is an Order record — adding a required custom field to Order requires updating service flows, or they fail**; flows using Omnichannel Inventory actions need API version 52.0 or later.

**Not in that catalog (INV only):** Cancel All Eligible Items, Ensure Refunds for Excess Funds, Generate Payment Link, Create/Record tax transaction and reversal, Create External Channel Process Exception and Concierge Bot templates. Use their own documentation where linked and verify availability, triggers and dependencies.

**General OM limits (inventory leads; verify):** some OM screen flows use components intended for internal service experiences. Buyer-facing use in an LWR store may require adaptation; verify compatibility, server-side account checks, trusted order context and financial isolation for each flow. A template's presence in a picker does not prove installation, activation or buyer authorization.

### 4.3 Agentforce

| ID | Source (SF) | Use |
|---|---|---|
| SF-30 | [Standard agent actions reference](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref.htm&type=5) | Action availability and inputs/outputs; check product scope (B2B vs. B2C vs. Service). |
| SF-31 | [Answer Questions with Knowledge](https://help.salesforce.com/s/articleView?id=sf.copilot_actions_ref_answer_questions_with_knowledge.htm&type=5) | Grounded answers from approved articles. |
| SF-32 | [Agent topics/subagents](https://help.salesforce.com/s/articleView?id=ai.agent_topics.htm&type=5); [topic strategy](https://help.salesforce.com/s/articleView?id=service.sp_topics_strategy.htm&type=5); [standard asset reference](https://help.salesforce.com/s/articleView?id=ai.copilot_ref.htm&type=5) | Subagent design. |
| SF-33 | [Data Library setup](https://help.salesforce.com/s/articleView?id=ai.data_library_setup.htm&type=5); [prepare data](https://help.salesforce.com/s/articleView?id=ai.data_library_prepare.htm&type=5); [field selection](https://help.salesforce.com/s/articleView?id=ai.data_library_select_fields.htm&type=5); [concepts](https://help.salesforce.com/s/articleView?id=data_library_concept.htm&language=en_US&type=5); [errors](https://developer.salesforce.com/docs/ai/agentforce/guide/error-ref-agentforce-data-library.html); [ground in data](https://help.salesforce.com/s/articleView?id=ai.agent_parent_data.htm&language=en_US&type=5); [RAG troubleshooting](https://help.salesforce.com/s/articleView?id=ai.generative_ai_rag_troubleshoot.htm&language=en_US&type=5); [search index and retriever](https://developer.salesforce.com/docs/ai/ground-agentforce-on-website/guide/aes-create-search-index-and-retriever.html) | Grounding and retrieval. |
| SF-34 | [Knowledge best practices](https://help.salesforce.com/s/articleView?id=service.sp_knowledge_practices.htm&type=5); [Knowledge topic info](https://help.salesforce.com/s/articleView?id=service.sp_knowledge_topic_information.htm&type=5); [user access](https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_user_access.htm&language=en_US&type=5); [set up](https://help.salesforce.com/s/articleView?id=knowledge_lightning_set_up.htm&type=5); [enable](https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_enable.htm&type=5); [publication API](https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-classes-knowledge-kbmanagement.html); [articles dev guide](https://developer.salesforce.com/docs/service/salesforce-knowledge-dev-guide/guide/knowledge-development-object-managing-articles.html) | Knowledge authoring and publication (§6). |
| SF-35 | [Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5); [Trailhead testing](https://trailhead.salesforce.com/content/learn/modules/agentforce-agent-testing); [DX test spec](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test-spec.html); [DX test run](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test-run.html) | Agent tests. |
| SF-36 | Agent Script patterns: [transitions](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-transitions.html), [router](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-topic-selector.html), [action chaining](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-action-chaining.html), [filtering](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html), [required flow](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-required-flow.html), [tools](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-tools.html), [actions](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-actions.html) | Deterministic gating (e.g., verify identity before order actions). |
| SF-37 | Samples/SDKs: [Help Agent Accelerator](https://github.com/salesforce/help-agent-accelerator), [Agent SDK](https://github.com/salesforce/agent-sdk), [Mobile SDK iOS](https://github.com/salesforce/AgentforceMobileSDK-iOS), [Mobile SDK React Native](https://github.com/salesforce/AgentforceMobileSDK-ReactNative) | Reference implementations; assess suitability. |

---

## 5. Candidate agent building blocks (MAP / INV)

### 5.1 Subagents / topics (candidate; all "verify")

| Group | Subagents named in SRC-A | Relevance |
|---|---|---|
| B2B Commerce | Commerce Effective Accounts; Commerce User Verification; Commerce Product Search Assistant; Commerce Product Details; Commerce Cart Management; Commerce Order | Relevant (Effective Accounts/User Verification conditional) |
| Service | Order Inquiries; Delivery Issues; Case Management; Escalation; Customer Verification; Service Customer Verification; Account Management; General FAQ | Relevant |
| Conditional | Employee Case Management; Search (vector search); Sales Record Creation | Conditional |
| B2C Commerce (**B2B fit unverified**) | Coupon Management; Product FAQs; Product and Cart Link; Update Cart; Cart Management; Product Search Assistant; Product Details; Product Recommendations; Site FAQs; Retriever FAQs; Search for B2C Order; Order Assistant; Product Cart Link | Conditional |

### 5.2 Actions (candidate; reference type in brackets)

- **Commerce (Standard):** Get Shopper Effective Accounts in Commerce; Get Commerce Storefront Context; Commerce Product Discovery Search; Get Commerce Product Details; Add Product To Cart; Get Cart Items; Update Cart Item; Delete Cart Item; Delete Cart; Get Recent Order List from Commerce; Look Up Order Summary for Commerce; Reorder from Commerce Store.
- **Order/service (Flow):** Identify Customer By Email; Get Order By Order Number; Get Orders By Contact; Cancel Order; Get Delivery Time Slots; Finalize New Delivery Time.
- **Verification and account (Flow):** Send Email with Verification Code; Verify Customer; Reset Password; Reset Secure Password; Update Customer Contact; Update Verified Contact.
- **Cases (Flow / Prompt Template):** Create Case; Create Case with Enhanced Data; Get Case By Case Number; Get Case By Verified Case Number; Get Cases For Verified Contact; Add Case Comment; Close Case; Draft Case Comment with Service Plan [Prompt Template].
- **Routing:** Check Rep Availability for Routing [Flow]; Raise Flag For Supervisor; Capability Summarization.
- **Knowledge:** Answer Questions with Knowledge; Answer Site FAQs; Answer Product FAQs; Answer Questions with Agentic Retriever; Answer Retriever FAQs; Knowledge Space Knowledge Search.
- **Memory and context:** Get User Memories; Get/Update User Memory Preference; Manage User Memory; Get User Profile Details; Personalization: Get Context (system).
- **Generic data (Conditional; high risk — restrict):** Query Records; Query Records with Aggregate; Get Record Details; Update Record; Select Record; Identify Record by Name; Summarize Record; Org Data Grounding; Extract Fields And Values From User Input; Lookup Filter Values; Discover Query Strategy; Render LiveCard By Name.
- **Other conditional:** Create Sales Lead Record; Create Sales Contact Record; Get/Finalize Reservation Time Slots.
- **B2C (B2B fit unverified):** Commerce B2C Add Item to Cart / Edit Cart / View Cart / Apply Coupon to Basket; Get B2C Product Details / Product By ID / Product Recommendations / Einstein Recommendations / Stores / Order Confirmation Details / Conversational Context Questions / User Access Token; Search B2C product store; Search for B2C Order.

**Rules:** an action name match is not a deployed, permissioned action chain. Validate inputs/outputs, account context, sharing, side effects and confirmation for each. Gate order, case and account actions behind identity and effective-account verification (SF-36). Generic query/update actions can bypass intended business rules — avoid exposing them to buyers.

### 5.3 Inventory flow templates (INV) and boundaries

| ID | Template | Category | Type / launch | Proposed exposure (INV) |
|---|---|---|---|---|
| FLOW-01 | Cancel All Eligible Items Flow ([doc](https://help.salesforce.com/s/articleView?id=commerce.om_flow_cancel_all.htm&language=en_US&type=5)) | OM | Screen / manual | Supporting subflow; fees may default on — review and confirm. |
| FLOW-02 | Cancel Item Flow (SF-10) | OM | Screen / manual | Buyer candidate only after LWR, authorization and policy checks. |
| FLOW-03 | Discount Flow (SF-16, [doc](https://help.salesforce.com/s/articleView?id=commerce.om_discount_order_items.htm&language=en_US&type=5)) | OM | Screen / manual | Staff only; never arbitrary buyer discounts. |
| FLOW-04 | Even Exchange Flow (SF-17, [doc](https://help.salesforce.com/s/articleView?id=commerce.om_exchange_order_items.htm&language=en_US&type=5)) | OM | Screen / manual | Verify B2B support, license, same-value and inventory rules. |
| FLOW-05 | Exchange with RMA (SF-18, [overview](https://help.salesforce.com/s/articleView?id=sf.om_exchanges_rma_overview.htm&language=en_US&type=5)) | OM | Screen / manual | Needs LWR adaptation, Growth licensing, cart/payment dependencies. |
| FLOW-06 | Generate Payment Link (SF-08) | Payments | Screen / manual | Merchant workflow. |
| FLOW-07 | Order on Behalf Of (SF-19, [doc](https://help.salesforce.com/s/articleView?id=commerce.om_add_service_flow_to_object_page.htm&language=en_US&type=5)) | OM | Screen / manual | Staff action; preserve buyer checkout. |
| FLOW-08 | Reship Order Flow (SF-20, [doc](https://help.salesforce.com/s/articleView?id=commerce.om_reship_order_items.htm&language=en_US&type=5)) | OM | Screen / manual | Service-led until buyer design exists. |
| FLOW-09 | Return Item Flow (SF-13) | OM | Screen / manual | Buyer use only with LWR, authorization and financial isolation. |
| FLOW-10 | RMA Return Items (SF-14) | OM | Screen / manual | Replace Aura screens; trusted order context; account checks. |
| FLOW-11 | Simplified Create Promotion (SF-04) | Commerce | Screen / manual | Admin only. |
| FLOW-12/13 | Concierge Bots for B2C: Get Conversational Product Details / Get Product Recommendations | B2C bot | Autolaunched | No verified source; B2B fit unverified. |
| FLOW-14 | Create External Channel Process Exception | External channel | Autolaunched | No verified source. |
| FLOW-15 | Create Order Summary Flow (SF-11) | OM | Autolaunched / system | Background. |
| FLOW-16 | Create Process Exception Flow (SF-12) | OM | Autolaunched / event | Background. |
| FLOW-17 | Create Tax Transaction (SF-09) | Commerce tax | Autolaunched | Candidate after order summary; verify trigger and provider. |
| FLOW-18 | Ensure Refunds for Excess Funds Flow | OM | Autolaunched | Candidate after cancellation; verify trigger and refund state. |
| FLOW-19 | Record Tax Reversals (SF-09) | Commerce tax | Autolaunched | Candidate after cancellation/return; verify trigger and provider. |
| FLOW-20 | RMA Create Credit Memo and Ensure Refunds (SF-15) | OM | Autolaunched | After managed return closure. |
| FLOW-30 | Checkout Flow Template (SF-03) | B2B checkout | Checkout flow | Buyer-facing orchestration. |
| FLOW-31–44 | Subflows: Checkout Session; Confirm Price; Inventory; Shipping Address; Delivery Method; Shipping Cost; Taxes; Payment and Billing Address; Checkout Summary; Cart To Order; Activate Order; Order Confirmation; Update Checkout State; Error | B2B checkout | Checkout subflow / system | Inventory leads; confirm the store uses them and their order. |

---

## 6. Candidate knowledge article plan (KA)

Candidate articles (body ≤ 60 words; fields: title, audience, summary, question/issue, answer/steps; owner and publication settings recorded in Salesforce). Verify policies, access and mapped capabilities before writing or publishing. Ground with SF-31/SF-33/SF-34.

| ID | Journey | Candidate titles |
|---|---|---|
| KA-01 | Access and account | Request storefront access; Sign in; Reset password; Resolve a sign-in problem; Unlock a locked account; Find or switch buying account; Manage buyer access and permissions; Check access request status; Buy for a customer as distributor/partner; Help someone else manage their account; Update contact details |
| KA-02 | Home and navigation | Navigate the home page; Featured products and promotions; Find help and contact support; What you can do without signing in; Use the storefront with assistive technology; Shopping as a patient or caregiver |
| KA-03 | Product discovery | Search; Filter and sort; Product details and packaging; Compare; Check availability; Documentation and compatibility; Help with product selection; Prices and contracted pricing; Discontinued or replacement products; Storage and handling |
| KA-04 | Cart and repeat buying | Add to cart; Change quantity or remove; Delete cart; Resolve a cart error; Shopping lists; Reorder; Quick order or upload a list; Share a cart; Reorder regular supplies |
| KA-05 | Checkout and payment | Review cart and totals; Apply a promotion code; Resolve a promotion code problem; Delivery address and shipping method; Payment methods and purchase orders; Declined or failed card payment; Submit and confirm an order; Check an uncertain submission before retrying; Tax and shipping charges; Does my order need approval; Insurance or benefits; Prescription or provider information; Duplicate or unexpected charge; PO or account payment problem; Checkout error or expired checkout |
| KA-06 | External orders | Orders from another channel; Missing external order; Punchout and electronic order visibility; EDI order status |
| KA-07 | Orders and tracking | Order history; Find an order and status; Order details and totals; Incorrect or missing order; Invoice or payment status |
| KA-08 | Fulfillment | Track a shipment; Partial and split shipments; Delayed or missing delivery; Report damaged or incorrect items; Request a delivery change; Shipping documents; Backordered item |
| KA-09 | Changes and cancellation | Request cancellation; Can my order be changed or canceled; Cancellation status; Cancellation fees |
| KA-10 | Returns and exchanges | Request a return or RMA; Return eligibility; Track a return or replacement; Refund or credit status; Request an exchange; Report a damaged or unsafe product |
| KA-11 | Assets and service | Find an asset or serial number; Warranty coverage; Request service or repair; Understand a repair quote; Request a replacement or sales quote; Service invoices and payments; Device problem; Warranty replacement; Purchase or renew warranty; Reschedule a service appointment |
| KA-12 | Consignment | Understand consignment inventory; View and update stock; Report consumption; Request replenishment; Consignment invoice; Items needing attention; Correct a consumption report |
| KA-13 | Support and escalation | Open a case; Check or update a case; Close a resolved case; Contact a representative; Prepare information for a request; Continue after a disconnected chat; Report a technical problem; Update healthcare provider information |
| KA-14 | Safety and clinical referral | Find a safety notice or recall; Get urgent medical help; Questions about treatment with a product; **(PROP)** Report a product problem or possible complaint |
| KA-15 | Privacy, verification, agent use | About the chat agent; Protect sensitive information in chat; Manage chat memory preferences; Verify your identity in chat |

---

## 7. Proposals added by this baseline (PROP — not Salesforce features, not legal advice)

### REQ-16 Possible complaints, safety signals and recalls (PROP)
- **Need:** A report of malfunction, injury, unexpected performance, damage, contamination or suspected defect may require handling under the seller's approved quality, complaint, vigilance or recall procedures. Treating it only as a return, refund or service ticket could lose required information or timing.
- **Candidate requirement:** In returns (J12), fulfillment damage (J10), service (J13) and support (J15), detect possible complaint/safety signals; capture minimal non-clinical facts (product, variant, lot/serial, order/shipment, quantity, date, contact route); avoid soliciting patient information; route to the owner named by the customer's approved procedure (P13); keep commercial remedy separate from the quality decision; never say whether something is or isn't reportable. Recalls/field-safety notices: show only approved notices; identify affected authorized accounts from traceability data (REQ-18) when a defined process exists.
- **Checks:** owner, intake channel, required fields, time expectations, escalation, audit trail and jurisdiction must come from the customer's regulatory/quality team. Salesforce capability: Unknown (case/Knowledge MAP only).

### REQ-17 Restricted-product purchaser eligibility (PROP)
- **Need:** Some products may be limited to licensed, credentialed or otherwise qualified purchasers, regions or channels.
- **Candidate requirement:** Verify eligibility against an approved source of truth before sale (display, cart, checkout, reorder, quote acceptance, order-on-behalf); revalidate when credentials expire or the account changes; explain blocks without exposing reasons from other accounts; route exceptions.
- **Boundary:** SF-01 entitlement controls visibility and price; it is **not** proof of regulatory eligibility. Whether entitlements, a checkout validation, an ERP check or a manual review enforces eligibility is a design decision. Salesforce capability for credential verification: Unknown.

### REQ-18 Lot, serial, UDI and expiry traceability (PROP)
- **Need:** Recall reach, return inspection, consignment, warranty and service depend on knowing which lot/serial/expiry reached which account and location.
- **Candidate requirement:** Define where lot, serial, unique device identifier and expiry are captured and owned (ERP, WMS, OM, asset records) from shipment through consumption, return, exchange, reship and service; expose them only to authorized users; reconcile mismatches.
- **Boundary:** Standard object fields for these attributes are **Unknown** in this baseline; verify target metadata and integrations (OBJ-06, OBJ-12).

### Other cross-cutting proposals
- **PROP-OM-1:** Treat buyer self-service use of OM screen flows as custom design work (LWR screens, trusted context, server-side authorization, idempotency) — not a configuration toggle.
- **PROP-OM-2:** When adding required custom fields to `Order`, regression-test every OM service flow that creates change orders (documented failure mode, §4.2).
- **PROP-FIN-1:** Report return receipt, credit memo, refund initiated and refund settled as distinct states (TR-09).

---

## 8. Object landmarks (OBJ)

Landmarks only — not a complete schema, and a listed object does not imply a direct relationship at each handoff. Verify fields, cardinality, sharing and licenses in the target metadata. References: [cart data model](https://developer.salesforce.com/docs/platform/data-models/guide/b2b-commerce-d2c-commerce-cart.html), [OM objects](https://help.salesforce.com/s/articleView?id=sf.om_objects_used_by_order_management.htm&type=5), [published object guide](https://github.com/aispanda/B2B-Commerce/tree/main/DataModel).

| ID | Stage | Representative objects | Boundary |
|---|---|---|---|
| OBJ-01 | Buyer access | `Account`, `BuyerAccount`, `BuyerGroup`, `BuyerGroupMember`, `WebStoreBuyerGroup`, `CommerceEntitlementPolicy`, `CommerceEntitlementBuyerGroup`, `CommerceEntitlementProduct` | Effective account, visibility and price are separate checks; sharing ≠ purchase rights; not regulatory eligibility. |
| OBJ-02 | Store, catalog, pricing | `WebStore`, `ProductCatalog`, `ProductCategory`, `Product2`, `Pricebook2`, `PricebookEntry`, `WebStorePricebook`, `BuyerGroupPricebook` | Price selection depends on store and buyer-group configuration; tiers optional. |
| OBJ-03 | Promotions | `Promotion`, `PromotionQualifier`, `PromotionTarget`, `PromotionMarketSegment`, `Coupon` | Optional; carry-over to orders must be verified. |
| OBJ-04 | Quotes | `Opportunity`, `Quote`, `QuoteLineItem` | Optional; quote-to-order is configuration-dependent. |
| OBJ-05 | Cart and checkout | `WebCart`, `CartItem`, `CartCheckoutSession`, `CartDeliveryGroup`, `CartDeliveryGroupMethod`, `CartItemPriceAdjustment`, `CartTax`, `CartValidationOutput`, `PaymentGroup`, `InventoryReservation` | Working state; cart → order is a process handoff. |
| OBJ-06 | Order capture and change | `Order`, `OrderItem`, `OrderDeliveryGroup`, `OrderSummary`, `OrderItemSummary`, `OrderDeliveryGroupSummary`, `OrderItemSummaryChange`, `OrderItemSummaryRelationship`, `OrderItemAdjustmentLineItem/Summary`, `SalesChannel` | Original and change orders are both `Order`; summary is the current managed view. |
| OBJ-07 | Fulfillment | `FulfillmentOrder`, `FulfillmentOrderLineItem`, `Shipment`, `ShipmentItem`, `Location`, `LocationGroup`, `LocationGroupAssignment` | May split; often owned/supplemented by WMS/carrier; shipment ≠ payment. |
| OBJ-08 | Returns and exchanges | `ReturnOrder`, `ReturnOrderLineItem`, `ReturnOrderItemAdjustment`, `ReturnOrderItemTax`, `OrderSummaryRelationship`, `OrderPaymentSummaryReference` | Blind return does not create a `ReturnOrder`; exchange linkage via relationship records. |
| OBJ-09 | Invoices and credits | `Invoice`, `InvoiceLine`, `CreditMemo`, `CreditMemoLine`, `CreditMemoInvApplication` | Posted credit ≠ refund. |
| OBJ-10 | Payments and refunds | `PaymentMethod`, `PaymentAuthorization`, `Payment`, `PaymentLineInvoice`, `OrderPaymentSummary`, `Refund`, `RefundLinePayment`, `PaymentGateway`, `PaymentGatewayLog`, `PaymentLink`, `PaymentCredit`, `MerchAccPaymentMethodSet` | Authorization ≠ capture; refund pending ≠ processed. |
| OBJ-11 | Tax | `OrderItemTaxLineItem`, `OrderItemTaxLineItemSummary`; external provider transactions/reversals | Provider reference is correlation, not a foreign key. |
| OBJ-12 | Service and warranty | `Case`, `Asset`, `WarrantyTerm`, `ProductWarrantyTerm`, `AssetWarranty`, `Entitlement`, `WorkOrder` | Case need not create a return; service entitlement ≠ commerce entitlement. |
| OBJ-13 | Operations | `ProcessException`; platform/change events; flow and gateway logs | Not every failure creates a process exception; events are messages, not business records. |

### Tracing guide (TR) — follow records to answer a question

| ID | Question | Follow | Check |
|---|---|---|---|
| TR-01 | Who can shop and see what? | Effective account / guest profile → `BuyerGroupMember` → `BuyerGroup` → store, price book, entitlement policy | Membership, store assignment, visibility, price entitlement. |
| TR-02 | What was quoted? | `Opportunity` → `Quote` ← `QuoteLineItem` (→ `Product2`, `PricebookEntry`) | Status, accepted terms; not every cart has a quote. |
| TR-03 | What was in the cart? | `WebCart` ← `CartItem`; checkout session, delivery groups/methods, adjustments, tax, validation outputs | Owner/effective account, amounts, errors. |
| TR-04 | What was ordered? | `Order` ← `OrderItem`; `OrderSummary` → original `Order`; `OrderItemSummary` → original `OrderItem` | Status, original vs. current quantities. |
| TR-05 | Where did it go? | `OrderSummary` ← `FulfillmentOrder` ← line items; ← `Shipment` ← `ShipmentItem` | Location, quantities, tracking. |
| TR-06 | What was returned (managed)? | `OrderSummary` ← `ReturnOrder` ← `ReturnOrderLineItem` → change `OrderItem`/`Order`; `OrderItemSummaryChange` | Expected/received/rejected quantities; closure → change order is a process sequence. |
| TR-07 | Cancellation or blind return? | `OrderItemSummary` → action → change `Order`; `OrderItemSummaryChange` | An unallocated fulfillment line alone isn't proof of cancellation. |
| TR-08 | Billed and paid? | `Invoice` ← `InvoiceLine`; `Invoice` ← `PaymentLineInvoice` → `Payment`; `OrderPaymentSummary`, `PaymentAuthorization` | Posted status, balance, capture vs. authorization. |
| TR-09 | Credit applied, funds returned? | `Invoice` ← `CreditMemoInvApplication` → `CreditMemo`; `Refund` ← `RefundLinePayment` → `Payment` | Credit posting vs. refund processed; gateway evidence. |
| TR-10 | Tax reversed? | `OrderItemTaxLineItemSummary` + provider transaction reference | Original and reversal references; refund and tax reversal are separate. |
| TR-11 | Covered and serviced? | `Product2` ← `ProductWarrantyTerm` → `WarrantyTerm`; `Asset` ← `AssetWarranty`; `Case`/`WorkOrder` | Asset creation and links depend on configuration. |
| TR-12 | Exchange order? | `OrderSummary` ← `OrderSummaryRelationship` → exchange `OrderSummary`; `OrderPaymentSummaryReference` | Feature/license support. |
| TR-13 | What failed? | Event/fault → `ProcessException` (when configured) + timestamps + gateway/provider logs | Attempted vs. pending vs. completed vs. failed. |

---

## 9. Adaptation checklist

1. Select relevant REQ/AG IDs and personas; record approved policy, scope, owners and measurable acceptance criteria in the customer's controlled workspace.
2. For each MAP, confirm in the cited source and target org: product (B2B Commerce vs. B2C vs. OM vs. Payments vs. Service), edition, license (OM Lite/Growth/Connected Commerce/standalone), release, storefront architecture (LWR/Aura/headless), installed and active assets, and permission model.
3. Trace data and action ownership across storefront, Commerce, OM, ERP, WMS, carrier, tax, payment, EDI/punchout and quality systems; define identities, effective-account access, failure states, idempotent retry and reconciliation.
4. Establish approved product, safety, recall and support content with publication owners; define clinical referral, emergency, complaint (REQ-16), restricted-product (REQ-17) and traceability (REQ-18) procedures with the customer's quality/regulatory owners.
5. For each acceptance test identify actor, trigger, permitted account, source of truth, preconditions, happy path, exception, outcome and owner. Test denied cross-account access, account switching, no results, stale prices, stock changes, pending/async results, duplicate submissions, timeouts, cancellations, each return/exchange path, finance outcomes, safety routing and human handoff.
6. Keep customer facts, patient data, credentials, org URLs, IDs and test evidence out of this public file. Refresh when Salesforce documentation changes; keep stable IDs; note source and date for material changes.
