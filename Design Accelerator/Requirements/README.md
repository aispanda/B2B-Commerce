# Medical-device and supply commerce grounding

Portable, customer-neutral design context for people and AI agents. Start here, then load only the files needed for the task. This is a design accelerator, not an approved customer policy, an implementation specification, or proof of a feature in a particular org.

## Find the right context

| Need | Read |
|---|---|
| Complete, searchable grounding in one file, including detailed jobs, business processes and flow inventory | [commerce-grounding.md](commerce-grounding.md) |
| Personas, journeys, goals, pain points, jobs and candidate requirements | [journeys-and-requirements.md](journeys-and-requirements.md) |
| Salesforce B2B Commerce, checkout, Order Management flows and object landmarks | [salesforce-capabilities.md](salesforce-capabilities.md) |
| Evidence labels, source links, verification and adaptation checklist | [sources-and-use.md](sources-and-use.md) |
| Visual object guide and detailed relationships | [DataModel](../DataModel/) |
| Agentforce source index | [Repository reference index](../../Agentforce/REFERENCE-INDEX.md) |

## Rules for an agent

1. Treat every `REQ` and persona as a **candidate**, even when it is useful for discovery. Confirm applicability, policy, owners and acceptance criteria for the customer.
2. `SF` denotes a capability documented by Salesforce, subject to the cited page's editions, products, licenses, release, configuration and limitations. It does not assert that a flow, integration, action or permission exists or is active in a target org.
3. `MAP` is a possible association between a requirement and a capability or object, not proof of end-to-end coverage. Unmapped work may require configuration, custom development, an integration, a different product, or a human process.
4. Authorize the person and effective buying account before exposing or changing account-specific data. Use actual approved policy and system outcomes; distinguish pending, accepted and completed. Never invent a price, availability, medical advice, refund, delivery promise or order result.
5. Keep customer facts, patient data, credentials and org evidence in an appropriately controlled customer workspace. Do not add them to this public reusable baseline. Linked source workbooks may require permission and may contain customer-specific information; consult them only when authorized and do not treat them as public grounding content.

Stable identifiers are search keys, not Salesforce API names. Sources checked 2026-11-15; recheck Salesforce documentation and the target org at implementation time.
