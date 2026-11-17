# Agentforce project checklist

Use at project kickoff and again for each release. Mark items **done**, **not applicable**, or **blocked**, and link evidence. A checked item means verified in the target environment, not just configured. Tailor policies, metrics, channels, and risk controls to the project.

## Project agenda: derive the whole design from the journey

- [ ] Review the entire end-to-end journey, each persona and their goals, needs, pain points, jobs, activities, and process steps. Identify what people should accomplish themselves and what they want the agent to do.
- [ ] For **every in-scope requirement**, select a responsible subagent, the relevant action(s), and the approved Knowledge or other authoritative information needed to answer or act. One action can serve multiple subagents; document only meaningful mappings and explicit sequence/dependencies.
- [ ] Create a coverage matrix with source requirement, persona, journey step, scenario, subagent, actions, Knowledge source, and test evidence. Record each requirement as implemented and tested, planned, out of scope, or blocked; assign an owner to each gap. Coverage is complete only when every in-scope requirement has a disposition, not when every item has a nominal mapping.
- [ ] Review the flow inventory alongside the journey to find implementation opportunities and missing process detail. Verify whether each candidate is applicable, installed, callable, configured, and authorized; a flow or template is not automatically an action.
- [ ] Verify **Knowledge coverage** across the full in-scope journey: list questions and variants per article, intended audience, source and approved answer; identify missing, duplicate, stale, or unapproved content. Confirm applicable actions retrieve the correct approved content in real execution.
- [ ] Check planning workbook quality before mapping requirements. Flag repeated placeholder questions, inconsistent or obsolete subagent and action names, values in the wrong columns, and duplicate or outdated article links or version IDs. Use the labels and API names from the target org.
- [ ] Review the actual article body and governing policy. Ask a reviewer outside the drafting team to check sensitive or high-risk articles where appropriate. Record the article number and version, fields reviewed, policy source, and review outcome.
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
- [ ] Where urgent-help guidance is in scope, verify that legitimate requests direct the user to local emergency services immediately, including as a guest and when sign-in or Knowledge context is unavailable. Trace the refused utterance with its preceding turns. If a built-in classification intercepts a legitimate request, preserve safety protections and use Salesforce's description-only method for a narrowly scoped exception. Retest legitimate and disallowed requests. If the refusal persists, retain the session IDs for Salesforce Support. [Agentforce safety classifications](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-safety-protections.html)

## 3. Knowledge and retrieval

- [ ] Inventory Knowledge articles against the journey and topics. Review the article body and governing policy before marking it accurate, approved, and suitable for its audience. Record which fields a reviewer saw. Check that the persona and subagent mapping match the intended question. For priority intents, start with three to five natural phrasings for each relevant persona.
- [ ] Verify record type, publication status, channel visibility, categories and permissions for each intended audience. Only publish material approved for public release. [Knowledge troubleshooting](https://help.salesforce.com/s/articleView?id=004333412&language=en_US&type=1)
- [ ] Complete Data 360 setup when required; verify library source, indexed fields, audience restrictions, data space, retriever readiness, and the exact library binding used by each Knowledge action. Keep public-only sources separated where needed. [Agentforce Data Library](https://help.salesforce.com/s/articleView?id=ai.data_library_parent.htm&language=en_US&type=5)
- [ ] Use concise, supported text identifying fields such as title and summary or question for matching. Use approved answer or detail fields for grounding. Verify each field is actually selected in the target library, stays within supported limits, and appears as expected in indexed chunks. [Knowledge field selection](https://help.salesforce.com/s/articleView?id=sf.data_library_select_fields.htm&language=en_US&type=5)
- [ ] Confirm Knowledge object and indexed-field access, Allow View Knowledge, Data Space scope, and effective visibility for each assigned category group under the actual execution identity. Resolve the identity separately for preview, batch testing, guest storefront and signed-in messaging. Before changing access, compare a known-good and failing article under the same identity and review who shares the profile or permission set. [Data category visibility](https://help.salesforce.com/s/articleView?id=sf.category_visibility_whatis.htm&language=en_US&type=5) · [Experience-site retrieval access](https://help.salesforce.com/s/articleView?id=005232913&language=en_US&type=1)
- [ ] Verify the current published article version is present in the data stream and the index's chunk records after a content, category, or publication change. Check the retriever's ranked chunks and `SourceRecordId` for the exact query, then verify that the routed live action returns the current approved source and the reply reflects it. Treat READY status, direct admin retrieval, and action execution success as individual checks. An empty or wrong source fails a grounded-answer test. [Retriever troubleshooting](https://help.salesforce.com/s/articleView?id=005317459&language=en_US&type=1)
- [ ] In Retriever Playground, where available, test the original utterance and the exact action query against the configured retriever. Record ranked chunks and source version IDs. If comparing vector and hybrid ranking, use the same queries and filters. [Retriever Playground](https://help.salesforce.com/s/articleView?id=data.c360_a_ai_retriever_test.htm&language=en_US&type=5)
- [ ] If the expected chunks are missing or misplaced, compare the user's utterance with the actual action query, check library and retriever filters, and inspect indexed fields and ranking. If current chunks rank correctly, investigate action binding, access and answer generation before editing articles. Record the exact error, timestamp, trace, action query, returned source IDs, and version for retesting or Salesforce Support. [Knowledge retrieval diagnostics](https://help.salesforce.com/s/articleView?id=ai.generative_ai_rag_troubleshoot.htm&language=en_US&type=5)
- [ ] Test several phrasings, synonyms, no-match and conflicting content. Use a known nonpublic test article to verify both the public retriever and the guest storefront omit the source and content. A turn that skips the action only tests agent behavior. Open cited links as the intended audience.
- [ ] Salesforce documents promoted terms for traditional Knowledge search. Their effect on Agentforce Data Library retrieval remains unverified. If testing them, use comparable queries and track source rankings before relying on them. [Promoted search terms](https://help.salesforce.com/s/articleView?id=service.promoted_search_terms.htm&language=en_US&type=5)
- [ ] Before bulk updates, use identical questions and stable article IDs to compare a small baseline and candidate. Record the version IDs used on each run. If editing summaries, aliases, or metadata, verify the relevant fields are indexed, wait for current-version chunks, and compare ranking and answer accuracy before rolling out. [Knowledge field selection](https://help.salesforce.com/s/articleView?id=ai.data_library_select_fields.htm&type=5)

## 4. Testing and correction

- [ ] Build a traceable test set for each supported journey and persona. Record expected access state, natural utterances, preconditions, subagent and action order, approved source, required facts, and forbidden actions or disclosures. Check whether returned sources are relevant and whether each substantive claim follows from those sources.
- [ ] Include guest and authenticated sessions, public-help versus account-specific pairs, account isolation, authorization failures, missing context, unexpected errors, ambiguous wording, prompt injection, and handoff failures.
- [ ] Run automated batch tests in Testing Center or Agentforce DX. Retain expected and actual behavior, pass/fail/inconclusive outcome, version, timestamp, and trace link. Require the intended outcome in each test: a general sign-in or no-answer fallback fails a public article lookup when an approved answer exists. Track retired tests separately and use the same eligible cases when comparing pass rates. [Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5) · [Agent DX testing](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test.html)
- [ ] Use simulation to test selection and safe previews with real read-only actions to verify real retrieval. Treat synthetic context as simulated: separately test real channel sign-in, identity propagation, permissions and end-to-end storefront behavior.
- [ ] Where supported, use Enhanced Event Logs or session traces to check what the live agent received, which action ran, and what content it retrieved. Compare with Retriever Playground to identify whether ranking, access, or the live action differs. Record which layer remains unverified if evidence is unavailable. [Enhanced Event Logs](https://help.salesforce.com/s/articleView?id=copilot_setup_enhanced_event_logs.htm&language=en_US&type=5)
- [ ] Use a safe test environment and controlled data: batch and live-action tests can create or modify records; verify effects and cleanup.
- [ ] For each failure, record its baseline, trace, suspected layer, and smallest testable change. Rerun the same case in a fresh session against the candidate, then run relevant controls and record whether to keep, revert, or investigate the change. Keep platform classification, routing, action binding, access, retrieval, content, response, and evaluation failures distinct.

## 5. Release and operations

- [ ] Validate the exact candidate, review changes and dependencies, verify permissions and audience isolation, and complete applicable live-action and end-to-end tests using safe data. Record unresolved gaps and their owners.
- [ ] Publish and activate the approved tested version; verify the intended channel points to it, run a storefront smoke test, and retain a known-good rollback route. Publishing alone may not activate a version.
- [ ] Check chat-button visibility and conversation startup for guests and signed-in users. User verification can hide the guest button; check iframe trust and CORS for loading failures. Preserve verified identity for private actions. [Messaging setup](https://help.salesforce.com/s/articleView?id=experience.rss_embedded_messaging.htm&language=en_US&type=5) · [Loading diagnostics](https://help.salesforce.com/s/articleView?id=005314057&language=en_US&type=1)
- [ ] Monitor routing, action success, grounded-answer quality, access denials, no-answer cases, latency, cost, feedback and escalation. Assign owners and retest after changes to content, index, permissions, instructions, actions, or releases.

## Useful references

- [Knowledge action and retrieval troubleshooting](https://help.salesforce.com/s/articleView?id=004333412&language=en_US&type=1)
- [Agent Script filtering](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html)
- [Agent Script reference](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-reference.html)
- [Agentforce Data Libraries](https://help.salesforce.com/s/articleView?id=ai.data_library_parent.htm&language=en_US&type=5)
- [Agentforce Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5) — Run and review batch tests.


## Reference library

Consult only the sources relevant to the current task; verify feature availability in the target org.

### Routing, subagents and actions

- [Salesforce standard agent actions](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref.htm&type=5) — Find available prebuilt actions.
- [Salesforce subagents](https://help.salesforce.com/s/articleView?id=ai.agent_topics.htm&type=5) — Define topic scope and routing.
- [Salesforce topic strategy](https://help.salesforce.com/s/articleView?id=service.sp_topics_strategy.htm&type=5) — Plan clear, distinct topic boundaries.
- [B2B guided shopping agent](https://help.salesforce.com/s/articleView?id=commerce.comm_agent_guided_shopping_implement.htm&type=5)
- [Subagent transitions and deterministic routing](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-transitions.html) — Control when transitions can occur.
- [Agent router strategies](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-topic-selector.html) — Choose an appropriate routing pattern.

### Knowledge and grounding

- [Knowledge topic information](https://help.salesforce.com/s/articleView?id=service.sp_knowledge_topic_information.htm&type=5)
- [Agentforce Data Library setup](https://help.salesforce.com/s/articleView?id=ai.data_library_setup.htm&type=5)
- [Answer Questions with Knowledge](https://help.salesforce.com/s/articleView?id=sf.copilot_actions_ref_answer_questions_with_knowledge.htm&type=5) — Configure the standard Knowledge action.
- [Knowledge best practices](https://help.salesforce.com/s/articleView?id=service.sp_knowledge_practices.htm&type=5) — Improve article quality and findability.
- [Ground Agentforce in Data](https://help.salesforce.com/s/articleView?id=ai.agent_parent_data.htm&language=en_US&type=5)
- [Troubleshoot missing Knowledge answers](https://help.salesforce.com/s/articleView?id=005317459&language=en_US&type=1) — Investigate empty grounded answers.
- [Troubleshoot Knowledge retrieval](https://help.salesforce.com/s/articleView?id=ai.generative_ai_rag_troubleshoot.htm&language=en_US&type=5) — Diagnose indexing and retrieval failures.
- [Data library concepts](https://help.salesforce.com/s/articleView?id=data_library_concept.htm&language=en_US&type=5)
- [Configure search index and retriever](https://developer.salesforce.com/docs/ai/ground-agentforce-on-website/guide/aes-create-search-index-and-retriever.html) — Set up searchable grounded data.
- [Lightning Knowledge user access](https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_user_access.htm&language=en_US&type=5)
- [Prepare data for Agentforce Data Library](https://help.salesforce.com/s/articleView?id=ai.data_library_prepare.htm&type=5)
- [Set up and configure Lightning Knowledge](https://help.salesforce.com/s/articleView?id=knowledge_lightning_set_up.htm&type=5)
- [Enable Lightning Knowledge](https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_enable.htm&type=5)
- [Salesforce Knowledge article publication API](https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-classes-knowledge-kbmanagement.html)
- [Troubleshoot Agentforce Data Libraries](https://help.salesforce.com/s/articleView?id=004333412&type=1)
- [Agentforce Data Library errors](https://developer.salesforce.com/docs/ai/agentforce/guide/error-ref-agentforce-data-library.html)
- [Salesforce Knowledge data categories and APIs](https://developer.salesforce.com/docs/service/salesforce-knowledge-dev-guide/guide/knowledge-development-object-managing-articles.html)

### Testing and evaluation

- [Agentforce Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5) — Run and review batch tests.
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

- [Knowledge field selection](https://help.salesforce.com/s/articleView?id=ai.data_library_select_fields.htm&type=5) — Choose fields for Knowledge indexing.
- [Action chaining and dependencies](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-action-chaining.html) — Sequence actions using verified outputs.
- [Conditional availability filtering](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html) — Limit visible actions and transitions.
- [Required subagent workflows](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-required-flow.html) — Enforce mandatory workflow steps.
- [Reasoning actions and tools](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-tools.html)
- [Agent action definitions](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-actions.html)

### Salesforce product guidance and walkthroughs

- [Agentforce AI agent testing overview](https://www.salesforce.com/agentforce/ai-agents/testing/)
- [Agentforce Builder and Ask Piper](https://www.salesforce.com/agentforce/agent-builder/) — Ask Salesforce about Agentforce configuration.
- [Agent application and headless development guide](https://www.salesforce.com/en-us/wp-content/uploads/sites/4/products/platform/forms/SFC_The-Guide-to-Agent-Application-and-Headless-Development-on-Salesforce.pdf)
- [Salesforce Support Testing Center walkthrough](https://youtu.be/4SHUvBwtueM)

### Access and audience controls

- [Agent user and runtime access](https://help.salesforce.com/s/articleView?id=ai.agent_user.htm&type=5) — Identify permissions for execution identity.
- [Prevent internal content exposure](https://help.salesforce.com/s/articleView?id=005460254&type=1) — Check customer-facing data isolation.
