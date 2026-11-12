# Salesforce metadata documentation pilot

Draft 0.4, 12 November 2026. Reusable checklist for META-01. Use the existing SFDX Hardis capabilities first, with Salesforce APIs to check and supplement specific gaps. Each step has one executor. Resolve exact tool versions and executor assignments before dispatch. All build and live checks are NOT RUN.

| ID | Task | Depends on | Planned executor type | Evidence that closes the task |
|---|---|---|---|---|
| P01 | Verify access to the intended development org. Diagnose with MCP Servers and External Client App Manager as needed. Probe Headless 360, the separate Metadata MCP where available, and the Salesforce CLI. | Authorized org and identity | Automation, read-only probes. Human sign-in is a separate action if needed. | Headless 360 discover, describe and read-only dispatch succeed. CLI lists the org and a read matches the same org. Record API version, available Metadata MCP, and the access context privately. |
| P02 | Generate local project docs from an isolated copy of the [consignment Salesforce DX example](https://github.com/aispanda/B2B-Commerce/tree/1dc3bfcfc3767a48ac0517e325625c2fd8e954be/epics/e02-consignment/stories/consignment-consumption-demo/salesforce). Use `hardis:doc:project2markdown --excel --skipauth` after checking the pinned plugin's help. Use the standard documentation generator. | Authorized source snapshot and available Hardis/Zensical tooling. Runs independently of P01. | Open the generated site locally. Verify search, a standard or custom object page, the diagram for the known consignment relationship, and the Excel output. Record which views and interactions actually work. |
| P03 | Read the Case and OrderSummary baseline through documented Salesforce APIs. | P01 | Automation | Capture object class, fields and relationships, OWD, and applicable record-type picklists. Save results privately with scope and warnings. |
| P03A | Generate the Hardis live Excel data dictionary for the same objects. | P01 and available Hardis CLI | Automation | Save the report privately with the target scope, version, skipped reads and warnings. Can run in parallel with P03. |
| P04 | Compare coverage before any extra work. Map each requested workbook column, summary count and diagram edge to its source. | P02, P03 and P03A | Human, reviewer pending | List what Hardis supplies, what native MCP/CLI reads fill, and what stays unknown. Check requiredness semantics, picklist scope and caps, layout coverage and skipped reads. Identify conflicts and resolve them against the same org/API version where possible. |
| P05 | Deliver the local Hardis documentation and baseline Excel report. If the project maintains a separate Objects and Fields workbook, reconcile it with the observed metadata. | P04 | Automation for generation and supported merges | Open the site and workbook. Reconcile selected rows and relationships to their source. A second refresh preserves curated story IDs and notes. A diff surfaces new, removed and changed fields. New fields start unmapped. Missing or partial reads keep the previous valid snapshot intact. |
| P06 | Run repeatable checks across the documentation, diagrams and workbook. | P05 | Automation | Compare shared fields and relationships, scope any summary counts, test an incomplete input, and verify that restricted IDs or org data have no place in a publishable copy. |
| P07 | Independently review the local output and evidence. | P06 | Human, independent reviewer pending | Report what the installed version delivered and what remains unsupported. Record findings, changes and rechecks before any rollout. |

## Follow-on features

| Order | Capability | Prerequisite and first check |
|---|---|---|
| 1 | Source documentation for Apex, Flows, profiles, permission sets, Lightning pages, and their diagrams | Extend P02 to an authorized source snapshot. Trace one flow or class and its documented reference. Verify the generated content scope before sharing it. |
| 2 | Layout, profile, object and field permission reports, and profile comparison | Establish what the installed version exports. Compare configured grants and layout assignment against native metadata. Effective access requires separate evidence in the intended user context. |
| 3 | Component dependency and impact analysis | Run Hardis `hardis:doc:metadata-deps` where supported, then trace sample `Uses` and `Used by` results to source or API evidence. Distinguish deployed API results from local source. Dynamic or opaque references remain candidates. |
| 4 | Org summary, job status and code coverage | Check the relevant existing Hardis commands and native results. Use read-only inputs, scope counts and verify sample statuses and coverage against Salesforce. Code coverage describes the captured run. |
| 5 | Runtime process map and multi-org comparison | Consider only if an existing tool meets the need. Use a known log fixture for observed timing, error and limit signals. For org comparison, independently verify access to both orgs and treat missing data separately from removals. |

Profile-to-permission-set recommendations can be explored as reports. Applying changes or updating metadata belongs in a separate authorized story with preview, validation, recovery and audit evidence.

## Source selection

Use Hardis for its generated docs, diagrams, Excel exports and documented commands. Confirm org facts through Headless 360 first and the verified CLI or official APIs where needed. Use EntityDefinition for internal and external sharing, describe for fields and relationships, and UI API for applicable record-type picklists. A field's nillability, layout-required state and validation rules describe different things. Keep the provenance for each value and flag gaps and mismatches. For P04, use Salesforce Inspector Reloaded for a manual metadata ZIP or query-export spot-check if it is already available. Existing Field Dumper exports can cross-check field definitions. Existing Centric Metadata Accelerator and Metadata Explorer reports can cross-check layouts or component inventories where relevant. Reconcile discrepancies with Salesforce API evidence and record each tool's scope. The main workflow runs with SFDX Hardis, local documentation tooling, and the project's authorized Salesforce connection.

GitHub Pages is a possible later destination for reviewed, sanitized static output. Generate and inspect the documentation locally for the pilot.

## Run and verify

Check the installed plugin's command help and record its version before running generation. Keep evidence of command results and skipped reads with the project. The checklist records expected checks, with execution pending.

- [SFDX Hardis project documentation](https://sfdx-hardis.cloudity.com/salesforce-project-documentation/) and [project2markdown flags](https://sfdx-hardis.cloudity.com/hardis/doc/project2markdown/).
- [Data dictionary](https://sfdx-hardis.cloudity.com/hardis/doc/data-dictionary/), [metadata dependencies](https://sfdx-hardis.cloudity.com/hardis/doc/metadata-deps/), and [Hardis source and AGPL-3.0 license](https://github.com/hardisgroupcom/sfdx-hardis).
