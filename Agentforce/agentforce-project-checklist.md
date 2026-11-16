# Agentforce project checklist

Use at project kickoff and again for each release. Mark items **done**, **not applicable**, or **blocked**, and link evidence. A checked item means verified in the target environment, not just configured. Tailor policies, metrics, channels, and risk controls to the project.

## Project agenda: derive the whole design from the journey

- [ ] Review the entire end-to-end journey, each persona and their goals, needs, pain points, jobs, activities, and process steps. Identify what people should accomplish themselves and what they want the agent to do.
- [ ] For **every in-scope requirement**, select a responsible subagent, the relevant action(s), and the approved Knowledge or other authoritative information needed to answer or act. One action can serve multiple subagents; document only meaningful mappings and explicit sequence/dependencies.
- [ ] Create a coverage matrix with source requirement, persona, journey step, scenario, subagent, actions, Knowledge source, and test evidence. Record each requirement as implemented and tested, planned, out of scope, or blocked; assign an owner to each gap. Coverage is complete only when every in-scope requirement has a disposition, not when every item has a nominal mapping.
- [ ] Review the flow inventory alongside the journey to find implementation opportunities and missing process detail. Verify whether each candidate is applicable, installed, callable, configured, and authorized; a flow or template is not automatically an action.
- [ ] Verify **Knowledge coverage** across the full in-scope journey: list questions and variants per article, intended audience, source and approved answer; identify missing, duplicate, stale, or unapproved content. Confirm applicable actions retrieve the correct approved content in real execution.
- [ ] Separate external buyer help from employee use cases. For employees, include eligible event-triggered and other automation alongside chat; document actor, trigger, authority, and decision or handoff for each.

### Lessons to carry into each project

- [ ] **Practical lesson:** the guest FAQ route was gated behind sign-in, so public questions were routed elsewhere. Verify public and private routes separately, not just the existence of a Knowledge article.
- [ ] **Practical lesson:** a draft reached General FAQ and called the public-only Knowledge action, but a password-reset query returned no answer although the article was published and a direct index search found a matching chunk. Check runtime identity, Data Space access, library/action binding and retrieval behavior as **hypotheses** until tested; the root cause remains unconfirmed.
- [ ] **Practical lesson:** a simulated private-order question prompted sign-in after a draft instruction change. This does not prove backend authorization or real buyer-channel identity; verify both independently.
- [ ] **Practical lesson:** a pilot summary update changed the top retrieved chunks; do not roll out summary changes merely because the index refreshed. Compare source accuracy and answer quality before expanding.

## 1. Outcomes, scope, and source of truth

- [ ] Name the business owner, target org and channel, audiences, use cases, measurable outcomes, exclusions, and escalation owner.
- [ ] Map journey → persona → need → request variants → intended outcome → subagent → action or Knowledge source. Include manual and automatically triggered workflows where applicable.
- [ ] Inventory existing standard and custom components, dependencies, licenses, availability, and limits; record their actual labels and API names. Avoid assuming that every standard feature is available in every org.
- [ ] Keep a current record of saved configuration, version, test evidence, known gaps, and links to authoritative source documents. Distinguish proposals from deployed settings.

## 2. Agent, subagent, and action design

- [ ] Define distinct subagent scopes and descriptions with examples and boundaries; test overlapping customer wording and multi-turn handoffs.
- [ ] Attach only relevant actions; document each action's purpose, inputs and source, output, permissions, dependencies, failure behavior, and any required confirmation. Reuse across topics where genuinely relevant.
- [ ] Set deterministic action/subagent availability rules when supported. For mandatory sequences, use supported required workflows; verify execution order in traces. Avoid relying on natural-language instructions alone for access control. [Filters](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html) · [Required workflows](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-required-flow.html) · [Action patterns](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns.html)
- [ ] Test chained actions when a prerequisite fails, and check for repeated calls or subagent transition loops. [Action chaining](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-action-chaining.html)
- [ ] Use trusted runtime identity and trusted, correctly scoped context; verify records belong to the caller at the action/backend layer. Test missing, stale, spoofed, and mismatched identity. A visible action filter is not a substitute for backend authorization.
- [ ] Agree which requests are public, which require sign-in, and any exceptions. Separate general policy help from customer-specific records and changes; require explicit confirmation for consequential actions as appropriate.
- [ ] Configure safe refusal, unavailable-service and human-handoff paths; specify who receives escalations and what happens when unavailable. Review urgent safety scenarios for the domain.

## 3. Knowledge and retrieval

- [ ] Inventory Knowledge articles against the journey and topics; confirm the content is accurate, current, approved, concise, and suitable for its audience. Use clear titles, direct answers, and representative customer wording without inventing policies.
- [ ] Verify record type, publication status, channel visibility, categories and permissions for each intended audience. Only publish material approved for public release. [Knowledge troubleshooting](https://help.salesforce.com/s/articleView?id=004333412&language=en_US&type=1)
- [ ] Complete Data 360 setup when required; verify library source, indexed fields, audience restrictions, data space, retriever readiness, and the exact library binding used by each Knowledge action. Keep public-only sources separated where needed. [Agentforce Data Library](https://help.salesforce.com/s/articleView?id=ai.data_library_parent.htm&language=en_US&type=5)
- [ ] Confirm object and indexed-field access and Data Space scope for the actual runtime identity; authenticated messaging may run under an external user. Check the execution model for the target channel. [Experience-site retrieval access](https://help.salesforce.com/s/articleView?id=005232913&language=en_US&type=1)
- [ ] Test each stage separately: source published and visible → index contains current content → retriever returns relevant chunks → actual action returns the right source → agent answers accurately. A READY status or successful direct index query alone does not prove end-to-end retrieval.
- [ ] When retrieval fails, compare source and index records, publication filters, and runtime access. Record the exact error, trace ID and time for troubleshooting or Salesforce Support.
- [ ] Test several phrasings, synonyms, no-match and conflicting content, as well as nonpublic articles; inspect returned source IDs and snippets. Prove private content does not leak. Verify links are actually reachable by the intended audience.
- [ ] Before bulk updates, compare a small baseline and candidate using the same questions and article versions. Retest ranking and answer quality after indexing; do not assume adding summaries or metadata improves search unless those fields are indexed and tested.

## 4. Testing and correction

- [ ] Build a traceable test set for each supported journey and persona: expected access state, utterance(s), preconditions, expected subagent/action/order, expected source and response, and explicit forbidden actions or disclosures.
- [ ] Include guest and authenticated sessions, public-help versus account-specific pairs, account isolation, authorization failures, missing context, unexpected errors, ambiguous wording, prompt injection, and handoff failures.
- [ ] Run automated batch tests in Testing Center or Agentforce DX; retain expected vs actual, pass/fail/inconclusive, version, timestamp, and trace link. Review false failures and incorrect expected answers rather than treating the score as ground truth. [Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5) · [Agent DX testing](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test.html)
- [ ] Use simulation to test selection and safe previews with real read-only actions to verify real retrieval. Treat synthetic context as simulated: separately test real channel sign-in, identity propagation, permissions and end-to-end storefront behavior.
- [ ] Use a safe test environment and controlled data: batch and live-action tests can create or modify records; verify effects and cleanup.
- [ ] For each failure, identify the layer using traces (routing, action binding, access, retrieval, content, response, or evaluation); make the smallest supported fix, rerun the case, and run relevant regression cases. Do not infer full coverage from a few successful samples.

## 5. Release and operations

- [ ] Validate the exact candidate, review changes and dependencies, verify permissions and audience isolation, and complete applicable live-action and end-to-end tests using safe data. Record unresolved gaps and their owners.
- [ ] Publish and activate the approved tested version; verify the intended channel points to it, run a storefront smoke test, and retain a known-good rollback route. Publishing alone may not activate a version.
- [ ] Monitor routing, action success, grounded-answer quality, access denials, no-answer cases, latency, cost, feedback and escalation. Assign owners and retest after changes to content, index, permissions, instructions, actions, or releases.

## Useful references

- [Knowledge action and retrieval troubleshooting](https://help.salesforce.com/s/articleView?id=004333412&language=en_US&type=1)
- [Agent Script filtering](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html)
- [Agent Script reference](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-reference.html)
- [Agentforce Data Libraries](https://help.salesforce.com/s/articleView?id=ai.data_library_parent.htm&language=en_US&type=5)
- [Agentforce Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5)


## Reference library

Consult only the sources relevant to the current task; verify feature availability in the target org.

### Routing, subagents and actions

- [Salesforce standard agent actions](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref.htm&type=5)
- [Salesforce subagents](https://help.salesforce.com/s/articleView?id=ai.agent_topics.htm&type=5)
- [Salesforce topic strategy](https://help.salesforce.com/s/articleView?id=service.sp_topics_strategy.htm&type=5)
- [B2B guided shopping agent](https://help.salesforce.com/s/articleView?id=commerce.comm_agent_guided_shopping_implement.htm&type=5)
- [Subagent transitions and deterministic routing](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-transitions.html)
- [Agent router strategies](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-topic-selector.html)

### Knowledge and grounding

- [Knowledge topic information](https://help.salesforce.com/s/articleView?id=service.sp_knowledge_topic_information.htm&type=5)
- [Agentforce Data Library setup](https://help.salesforce.com/s/articleView?id=ai.data_library_setup.htm&type=5)
- [Answer Questions with Knowledge](https://help.salesforce.com/s/articleView?id=sf.copilot_actions_ref_answer_questions_with_knowledge.htm&type=5)
- [Knowledge best practices](https://help.salesforce.com/s/articleView?id=service.sp_knowledge_practices.htm&type=5)
- [Ground Agentforce in Data](https://help.salesforce.com/s/articleView?id=ai.agent_parent_data.htm&language=en_US&type=5)
- [Troubleshoot missing Knowledge answers](https://help.salesforce.com/s/articleView?id=005317459&language=en_US&type=1)
- [Troubleshoot Knowledge retrieval](https://help.salesforce.com/s/articleView?id=ai.generative_ai_rag_troubleshoot.htm&language=en_US&type=5)
- [Data library concepts](https://help.salesforce.com/s/articleView?id=data_library_concept.htm&language=en_US&type=5)
- [Configure search index and retriever](https://developer.salesforce.com/docs/ai/ground-agentforce-on-website/guide/aes-create-search-index-and-retriever.html)
- [Lightning Knowledge user access](https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_user_access.htm&language=en_US&type=5)
- [Prepare data for Agentforce Data Library](https://help.salesforce.com/s/articleView?id=ai.data_library_prepare.htm&type=5)
- [Set up and configure Lightning Knowledge](https://help.salesforce.com/s/articleView?id=knowledge_lightning_set_up.htm&type=5)
- [Enable Lightning Knowledge](https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_enable.htm&type=5)
- [Salesforce Knowledge article publication API](https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-classes-knowledge-kbmanagement.html)
- [Troubleshoot Agentforce Data Libraries](https://help.salesforce.com/s/articleView?id=004333412&type=1)
- [Agentforce Data Library errors](https://developer.salesforce.com/docs/ai/agentforce/guide/error-ref-agentforce-data-library.html)
- [Salesforce Knowledge data categories and APIs](https://developer.salesforce.com/docs/service/salesforce-knowledge-dev-guide/guide/knowledge-development-object-managing-articles.html)

### Testing and evaluation

- [Agentforce Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5)
- [Testing Center Trailhead module](https://trailhead.salesforce.com/content/learn/modules/agentforce-agent-testing)
- [Run Agentforce DX tests (legacy)](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test-run.html)
- [Generate an Agentforce DX test spec](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test-spec.html)

### Salesforce repositories

- [Help Agent Accelerator](https://github.com/salesforce/help-agent-accelerator)
- [Help Agent Accelerator README](https://github.com/salesforce/help-agent-accelerator/blob/main/README.md)
- [Help Agent agent definition](https://github.com/salesforce/help-agent-accelerator/blob/main/force-app/main/default/aiAuthoringBundles/haaHelpAgent/haaHelpAgent.agent)
- [Agentforce Mobile SDK for React Native](https://github.com/salesforce/AgentforceMobileSDK-ReactNative)
- [Agentforce Mobile SDK for iOS](https://github.com/salesforce/AgentforceMobileSDK-iOS)
- [Salesforce Agent SDK](https://github.com/salesforce/agent-sdk)

### Other Salesforce references

- [Salesforce standard asset reference](https://help.salesforce.com/s/articleView?id=ai.copilot_ref.htm&type=5)

### Routing, action and retrieval controls

- [Knowledge field selection](https://help.salesforce.com/s/articleView?id=ai.data_library_select_fields.htm&type=5)
- [Action chaining and dependencies](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-action-chaining.html)
- [Conditional availability filtering](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html)
- [Required subagent workflows](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-required-flow.html)
- [Reasoning actions and tools](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-tools.html)
- [Agent action definitions](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-actions.html)

### Salesforce product guidance and walkthroughs

- [Agentforce AI agent testing overview](https://www.salesforce.com/agentforce/ai-agents/testing/)
- [Agentforce Builder and Ask Piper](https://www.salesforce.com/agentforce/agent-builder/)
- [Agent application and headless development guide](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/products/platform/forms/SFC_The-Guide-to-Agent-Application-and-Headless-Development-on-Salesforce.pdf)
- [Salesforce Support Testing Center walkthrough](https://youtu.be/4SHUvBwtueM)

### Access and audience controls

- [Agent user and runtime access](https://help.salesforce.com/s/articleView?id=ai.agent_user.htm&type=5)
- [Prevent internal content exposure](https://help.salesforce.com/s/articleView?id=005460254&type=1)
