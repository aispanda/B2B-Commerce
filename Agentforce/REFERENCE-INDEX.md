# ABCMed Agentforce reference index

Use this index to load only the sources needed for the task. The References tab is the source inventory; update both together. Candidate mappings are not proof of runtime configuration.

## Quick routes

- **Choose, build or route subagents:** read Agent router strategies, transitions, and Salesforce subagents; then use `agentforce-generate` or `agentforce-architecture-analyze`.
- **Author or ground Knowledge:** read Knowledge best practices, data preparation, data library setup and retrieval troubleshooting; use `platform-docs-get` for precise documentation.
- **Map actions and flows:** read standard agent actions and asset reference; inspect the org before changing metadata.
- **Test and debug:** read Testing Center, retrieval troubleshooting, and DX testing; use `agentforce-test`.
- **Salesforce access or reconnect:** follow the current Reusable Delivery references: https://github.com/aispanda/Reusable-Delivery/tree/main/references.

## Project sources

- [B2B Commerce repository](https://github.com/aispanda/B2B-Commerce) — project source and delivery materials.

## Routing, subagents and actions

- [Salesforce standard agent actions](https://help.salesforce.com/s/articleView?id=ai.copilot_actions_ref.htm&type=5)
- [Salesforce subagents](https://help.salesforce.com/s/articleView?id=ai.agent_topics.htm&type=5)
- [Salesforce topic strategy](https://help.salesforce.com/s/articleView?id=service.sp_topics_strategy.htm&type=5)
- [B2B guided shopping agent](https://help.salesforce.com/s/articleView?id=commerce.comm_agent_guided_shopping_implement.htm&type=5)
- [Subagent transitions and deterministic routing](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-transitions.html)
- [Agent router strategies](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-topic-selector.html)

## Knowledge and grounding

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

## Testing and evaluation

- [Agentforce Testing Center](https://help.salesforce.com/s/articleView?id=ai.agent_testing_center.htm&type=5)
- [Testing Center Trailhead module](https://trailhead.salesforce.com/content/learn/modules/agentforce-agent-testing)
- [Run Agentforce DX tests (legacy)](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test-run.html)
- [Generate an Agentforce DX test spec](https://developer.salesforce.com/docs/ai/agentforce/guide/agent-dx-test-spec.html)

## Salesforce repositories

- [Help Agent Accelerator](https://github.com/salesforce/help-agent-accelerator)
- [Help Agent Accelerator README](https://github.com/salesforce/help-agent-accelerator/blob/main/README.md)
- [Help Agent agent definition](https://github.com/salesforce/help-agent-accelerator/blob/main/force-app/main/default/aiAuthoringBundles/haaHelpAgent/haaHelpAgent.agent)
- [Agentforce Mobile SDK for React Native](https://github.com/salesforce/AgentforceMobileSDK-ReactNative)
- [Agentforce Mobile SDK for iOS](https://github.com/salesforce/AgentforceMobileSDK-iOS)
- [Salesforce Agent SDK](https://github.com/salesforce/agent-sdk)

## Other Salesforce references

- [Salesforce standard asset reference](https://help.salesforce.com/s/articleView?id=ai.copilot_ref.htm&type=5)

## Local skill lookup

Skills reside under `$CODEX_HOME/skills` (commonly `~/.codex/skills`); read the relevant `SKILL.md` before using it.

| Job | Skill |
|---|---|
| Agent architecture | `agentforce-architecture-analyze` |
| Agent Script or builder design | `agentforce-generate` |
| Agent persona and guardrails | `agentforce-persona-generate` |
| Routing evaluation | `agentforce-hyperclassifier-configure` |
| Agent testing | `agentforce-test` |
| Salesforce documentation | `platform-docs-get` |
| Inspect existing Salesforce metadata | `platform-metadata-discovery-get` |
| Salesforce org operations | `dx-org-manage` |
| Data and records | `platform-data-manage` |
| Permission assignment | `dx-org-permission-set-assign` |
| Deploy or retrieve metadata | `platform-metadata-deploy`, `platform-metadata-retrieve` |
| TypeSafe Jev review | `typesafe-ai` |

When the local skill catalog differs, use the current session catalog and discovered skill location. Never store credentials or tokens in this index.


## Routing, action and retrieval controls

- [Knowledge field selection](https://help.salesforce.com/s/articleView?id=ai.data_library_select_fields.htm&type=5)
- [Action chaining and dependencies](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-action-chaining.html)
- [Conditional availability filtering](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-filtering.html)
- [Required subagent workflows](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-patterns-required-flow.html)
- [Reasoning actions and tools](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-tools.html)
- [Agent action definitions](https://developer.salesforce.com/docs/ai/agentforce/guide/ascript-ref-actions.html)
