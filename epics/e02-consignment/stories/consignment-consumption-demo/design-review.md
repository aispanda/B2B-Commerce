# Bounded review of the consignment demo

12 November 2026 · Reviewers received only a fictional scenario and the proposed object design.

| Reviewer | Specific feedback | Change applied |
|---|---|---|
| TypeSafe Jev 1.14.0 | In the clarity choice, selected a visual showing ten boxes and three used (0.94 probability). It identified supplier usage posting as the inventory change, and $72 as the demo value for three used boxes. | Start with ten labeled boxes or cards. Move three to Used in care, and show seven still on the shelf. Follow that by showing 10 last confirmed and 3 awaiting posting in Salesforce. |
| Claude Opus 5.5 | Use the sequence 0 shipped, 10 received, 3 pending, 7 posted, $72 ready to bill. Keep two custom objects. Remove the duplicate Movement Type field if roll-up filters can distinguish the two posting events. Use native roll-ups, formulas and validation rules. Check Location and Shipment Item relationship support in the org. | Use the Receipt and Consumption record types, and distinct Posted Receipt and Posted Usage values. Filter roll-ups on posting status. Keep a verified Shipment Item ID as the fallback if lookup support is unavailable. |

Model feedback reviewed wording and configuration choices. The local fixture verifier checks arithmetic and transitions. Live execution and independent acceptance are pending.
