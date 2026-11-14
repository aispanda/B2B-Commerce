# Data Model maintenance

- Read README.md for the purpose, source, file map, update steps and deployment.
- Keep the existing static HTML/JS/CSS. No build step is needed to serve it.
- Prefer self-contained HTML or existing assets; add the minimum files required.
- Do not add boilerplate, dashboards, frameworks or dependencies without a concrete need.
- Preserve By journey and All objects, the narrative beside the grouped objects, and all 14 stages.
- Keep one primary placement per object; preserve definitions, examples and source links.
- The workbook is the content authority; workbook-snapshot.json is its captured source.
- Keep every ERD inside its journey, using the shared renderer; preserve JSON/Markdown exports.
- Do not restore evidence badges, duplicate ALSO rows or technical-boundary sections.
- Before page edits, run `python3 save_page_version.py <reason>`; save another snapshot after checking.
- Keep dated backups local and use Git commits for shared change history.
- Test the affected page and exports; preserve relative links for GitHub Pages subfolders.
- Deploy via `main` / repository root, retaining the root `.nojekyll`; no custom workflow.
- Verify the published page and return its shareable URL after deployment.
