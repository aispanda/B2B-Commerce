# META-01: Export and explore the Salesforce data model

Guide: [Create new work](https://github.com/aispanda/Reusable-Delivery/blob/fa771b9e1de0a1bdb6003d72d345b9a8bd5557db/new/DELIVERY.md) at `fa771b9e1de0a1bdb6003d72d345b9a8bd5557db`, route NEW.  
Revision/status/as-of: Draft 0.5, 12 November 2026. Reusable experiment. Hardis generation and live checks NOT RUN.  
Origin: B2B Commerce delivery conversation, workbook and explorer discussion.  
Accountable owner: Pending assignment.  
Working branch: `docs/meta-01-free-tool-pilot`.

## Current state

The [consignment Salesforce DX example](https://github.com/aispanda/B2B-Commerce/tree/1dc3bfcfc3767a48ac0517e325625c2fd8e954be/epics/e02-consignment/stories/consignment-consumption-demo/salesforce) is a starting source snapshot for the local documentation experiment. Use an authorized development org for live checks. Confirm tool versions and access in the environment running the pilot. Independent verification is NOT RUN. Human acceptance policy and decision are pending.

## Outcome and scope

As a B2B Commerce delivery team member, I want to refresh an Excel inventory and explore the same Salesforce objects and relationships visually, so I can identify the configuration a story relies on and reuse it across epics.

The experiment uses SFDX Hardis to generate local Excel and browsable project docs with object diagrams from the existing consignment source. Live metadata for `Case` and `OrderSummary` will verify the coverage and supplement specific workbook gaps. Preserve story mappings and source evidence. The pilot uses Hardis's supported views and interactions as delivered.

Follow-on candidates are Apex and Flow dependencies, permissions and audit reports, and org comparison. Generate and inspect the pilot output locally from a read-only source. SFDX Hardis and its local documentation tooling handle generation. Salesforce MCP and CLI handle verification against the intended org.

## Acceptance criteria

All criteria are proposed for the experiment.

| ID | Criterion | Check/evidence | Result |
|---|---|---|---|
| AC-01 | One read-only run populates object and field definitions for the selected scope. It includes standard/custom classification, internal/external sharing defaults, field types and relationship targets, and applicable picklist values by record type. | Compare selected rows with live API results. Record the API version and scope of each source. Mark missing or unsupported values explicitly. Distinguish schema-required fields from layout or validation requirements. | NOT RUN |
| AC-02 | A second refresh preserves story IDs and manually curated notes and produces the same metadata rows when the source is unchanged. | Compare normalized rows from two runs and check story mappings by object and field API name. Simulate a failed read and confirm the prior valid workbook is recoverable. | NOT RUN |
| AC-03 | The generated local documentation is searchable and includes a supported Hardis object diagram. | Locate an object and verify one diagram connection against the corresponding field in the source or live describe result. Record the interactions available in the installed version and any gaps. | NOT RUN |

## Solution

Generate the baseline with Hardis first. Compare generated documentation and workbook rows to their source, then use native Salesforce reads to supplement only material gaps. Preserve story mappings by object and field API name and record each input's scope and provenance. Keep org-specific exports and identifiers in restricted storage.

- [Salesforce Object Describe](https://developer.salesforce.com/docs/platform/api-rest/guide/dome-sobject-describe.html) documents fields and relationships. [EntityDefinition](https://developer.salesforce.com/docs/platform/api-tooling/references/tooling-objects/tooling-entitydefinition.html) documents internal and external sharing models. [UI API picklist values](https://developer.salesforce.com/docs/platform/lwc/guide/reference-wire-adapters-picklist-values-record) documents record-type scope for supported objects.
- [Salesforce Dependency API](https://developer.salesforce.com/docs/platform/api-tooling/references/tooling-objects/tooling-metadatacomponentdependency.html) is a beta with coverage limits. A future dependency explorer can combine supported API evidence with static references and label runtime observations separately.

## Execution

The [dependency checklist](roadmap.md) puts access verification first for live work and allows the local Hardis source check to proceed independently. It lists coverage checks and evidence for follow-on features.

| Step | Action / AC IDs | Dependencies | One executor; planned model/tool | State / result link |
|---|---|---|---|---|
| S-00 | Prepare the story branch and verify that restricted inputs and generated output are ignored | Dedicated story branch; local Git checkout | Automation, Git | Branch and ignore rules published; verify the executor's checkout before work |
| S-01 | Verify platform access to the intended development org | S-00; org and authorized identity; Headless 360 and CLI access | Automation, Headless 360 and Salesforce CLI. Operator pending. | Pending |
| S-02 | Capture baseline metadata for `Case` and `OrderSummary`; check API coverage, AC-01 | S-01 | Automation, read-only Salesforce API runner. Identity/version pending. | Pending |
| S-03 | Generate and verify the local Hardis docs and workbook. Reconcile supported gaps, AC-01–03 | S-00 for local generation; S-02 for live reconciliation. | Automation, SFDX Hardis and local report tooling. Versions pending. | Pending |
| S-04 | Run the repeatable checks for API reconciliation, refresh, failure recovery and graph consistency, AC-01–03 | S-03 | Automation, project check command pending | Pending |
| S-05 | Independently review the draft implementation and check evidence, AC-01–03 | S-04; reviewed revision and evidence | Human, independent reviewer pending | Pending |

### Branch, commits, and private files

- Check out `docs/meta-01-free-tool-pilot` before development. Commit each meaningful change to code, docs, tests or configuration on this branch. Include `META-01` in commit messages and record relevant commit links and check results in the checklist. Keep `main` for reviewed changes.
- Put org or client inputs, raw metadata exports, evidence, and local tool workspaces in this story’s ignored `private/` folder or approved restricted storage outside the checkout. Put generated workbooks and sites in ignored `generated/` until reviewed. Commit only sanitized source, synthetic fixtures, examples, and evidence summaries.
- Use [the story’s `.gitignore`](.gitignore). Before the first change, verify with `git check-ignore` on sample paths. Before each commit, inspect the staged files and diff for client or org details. Ignore rules do not remove already tracked files. If you find one, stop publication and record the issue without copying its contents.

### First live step: S-01

- **Owner and executor:** Accountable owner and operator pending. Planned tools are Headless 360 and Salesforce CLI. Verify the executing tool versions.
- **Inputs:** Intended development org, authorized identity and the current platform-access instructions in the pinned guide.
- **Operation and output:** Discover, describe and make a minimal read-only MCP request. Check CLI authentication and run a read-only probe for the same org. Record results and any errors with identifiers and credentials excluded.
- **Check:** Both probes target the intended org and return the expected response. Retain restricted evidence and record a concise result in the story.
- **Authority and boundary:** Read-only experiment. Org writes, package installs and security configuration changes require separate authority.
- **Limits and recovery:** Use one probe per tool. If either fails, record the exact sanitized error and the smallest remediation. Recheck after access is restored.
- **Actual:** NOT RUN for this story. If a probe fails, use only the matching recovery guide linked from the pinned NEW guide.

## Review and decisions

| Finding or decision | Reviewer and scope | Disposition | Recheck |
|---|---|---|---|
| Hardis-first execution and coverage | Project decision. Independent verification pending. | Generate supported reports and site locally. Verify gaps with documented Salesforce APIs. | AC-01–03, NOT RUN |

## Blockers and history

- Live metadata checks depend on verified access to the intended development org. The local source-based generation step can proceed independently once its tools are available.
- 12 November 2026. Prepared the reusable story and checklist using the pinned NEW template.
- 12 November 2026. Added the branch, commit, and private-file checks. Updated the guide pin to include the platform recovery links.

## Alternative routes and benchmarks

| Route | What it gives us | Role in this experiment |
|---|---|---|
| Headless 360, Metadata MCP where available, and Salesforce CLI | Repeatable reads through Salesforce APIs. We own the inventory and preserve the project’s story mappings. | Authoritative org reads for verification and gaps. |
| [SFDX Hardis](https://github.com/hardisgroupcom/sfdx-hardis) | Open-source CLI plugin. Generates Excel and a searchable documentation site with object diagrams. | Primary generator for the pilot. [Live data dictionary](https://sfdx-hardis.cloudity.com/hardis/doc/data-dictionary/) and [project documentation](https://sfdx-hardis.cloudity.com/salesforce-project-documentation/). |
| [Salesforce Inspector Reloaded](https://tprouvot.github.io/Salesforce-Inspector-reloaded/download-metadata/) | Browser-based metadata ZIP and query-result export. Supports a scoped manifest. | Optional metadata ZIP or CSV spot-check in P04 when already available. |
| [Field Dumper](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000EJg2hUAD) | Field definitions for selected standard and custom objects, one sheet per object, with optional picklist values. | Optional field export cross-check in P04 when already available. Use Salesforce API evidence for sharing defaults and record-type values. |
| [Centric Metadata Accelerator](https://appexchange.salesforce.com/appxListingDetail?listingId=810b8846-1929-4dfe-9b63-754d04cff796) | Excel reports and broader metadata views including layouts, validation rules and triggers. The vendor setup requires an org client app and credentials. | Optional layout, validation or trigger cross-check when already configured. |
| [Metadata Explorer](https://appexchange.salesforce.com/appxListingDetail?listingId=d011486b-88ac-4000-9bb7-37a5f6c7f945) | Managed package for searching and exporting metadata lists. | Optional component-list cross-check when already available. |
