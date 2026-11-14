# Commerce object model guide

[Open the live guide](https://aispanda.github.io/B2B-Commerce/DataModel/) · [Buyer access diagram](https://aispanda.github.io/B2B-Commerce/DataModel/buyer-access-erd.html)

## Purpose and accepted design

An interactive reference to the Salesforce Commerce objects present in the reviewed org: 185 Salesforce objects plus one external record, organized into 14 journey areas. The primary goal is an attractive, intuitive learning experience: a journey story and shaded connection explanation beside its categorized objects, with concise definitions, examples and source links. These counts describe the current snapshot, not a limit for future additions.

Preserve both **By journey** (one selected area) and **All objects** (all areas). Each object has one primary placement. Each journey includes an expandable ERD with linked APIs, pan/zoom and selection. Keep the diagrams within the guide. Main/Supporting appears in the inventory, not on ERD cards. Do not restore duplicate ALSO rows, evidence badges or technical-boundary sections. Keep the concise footer: “Experimental. Please refer to the original documentation.”

## Source and files

The [source workbook](https://docs.google.com/spreadsheets/d/1nXyqEq3NlDQK2LpGr0ly8qZCiu3MxmEpOkMoc2DyYOo/edit) is the content authority. `workbook-snapshot.json` captures its Journey stages, Journey objects, placements, Relevant org candidates and Object relationships tables. Relationships are captured metadata, not inferred from object names; diagrams show links only within a journey. Names, categories, definitions and placements have already been reviewed; a presentation change must not silently revise them.

| File | Purpose |
| --- | --- |
| `index.html`, `journey-page.js` | Existing page styling, navigation, search and narrative/object layout |
| `journey-data.json`, `journey-data.js` | Structured workbook-derived content and its browser equivalent |
| `erd.js`, `erd.css` | Shared interactive ERD renderer; Buyer access uses its refined fixed layout |
| `diagram-layouts.json`, `diagram-layouts.js` | Precomputed geometry for the other journeys |
| `journey-export.js` | Complete page/stage JSON and Markdown downloads |
| `buyer-access-erd.html` | Standalone sample of the same Buyer access ERD |
| `order-management-erd.html` | Earlier standalone Order Management diagram; not the current guide |
| `export_workbook.py` | Regenerates browser content from the captured workbook tables |
| `build-diagram-layouts.cjs`, `vendor/` | Optional layout regeneration using the already bundled ELK; no install required |
| `save_page_version.py` | Makes dated runnable backups before and after local edits |

## Maintain and preview

Read AGENTS.md. For a UI-only edit, change the existing HTML/CSS/JS directly; no regeneration, npm installation or build is required. Make a backup first. Run `python3 -m http.server 8774` in this folder and open `http://localhost:8774/`.

For a content change, update the workbook first and capture its tables in `workbook-snapshot.json`. Then run `python3 export_workbook.py`. If objects or relationships change, run `node build-diagram-layouts.cjs` too. Commit both JSON and browser JS counterparts. The exporter currently checks the snapshot counts; adjust those checks intentionally for an approved inventory change. Buyer access routing is hand-refined in `erd.js` and needs review if its membership changes. No Salesforce credentials or prior chat history are required to maintain the captured page.

Check both viewing modes, journey navigation, search (including no results), definitions/examples/source links, diagram selection/zoom, and full/stage JSON and Markdown downloads. Ensure every object appears once in the inventory, and exported data retains the stage narratives, classifications and relationships. Standard/custom and event classifications come from workbook values, not suffix inference. Screening probabilities and selection notes stay backstage in the snapshot; they are not learning-page content.

## Deploy

GitHub Pages uses **Deploy from a branch → main → / (root)**. Keep `.nojekyll` at the repository root. Commit and push changes under `DataModel/`; no workflow or package manager is needed. After GitHub finishes its Pages deployment, check the live guide and the changed interaction, then share its URL. For future independent interactive pages, prefer one zero-build HTML file and link to it; add files or dependencies only when the feature needs them.

Backups and review transcripts stay local. Git commits are the portable history. The approved style was restored and refined with one bounded Claude Opus 5.5 review on 2026-11-13; no AI service is required at runtime.
