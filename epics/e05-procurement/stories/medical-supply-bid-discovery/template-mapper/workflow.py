"""Run the BID-01 mapping and review routes locally."""
import argparse
import json
from pathlib import Path
from typing import TypedDict

from langgraph.errors import GraphRecursionError
from langgraph.graph import END, START, StateGraph
from langsmith import tracing_context

from mapper import map_document


class PreviewState(TypedDict, total=False):
    document: dict
    templates: list[dict]
    mapping: dict
    route: str


def map_fields(state: PreviewState):
    return {"mapping": map_document(state["document"], state["templates"])}


def pick_route(state: PreviewState):
    return "draft" if state["mapping"]["status"] == "matched" else "review"


def draft_preview(_state: PreviewState):
    return {"route": "draft-preview"}


def review_preview(_state: PreviewState):
    return {"route": "review"}


GRAPH = (
    StateGraph(PreviewState)
    .add_node("map_fields", map_fields)
    .add_node("draft", draft_preview)
    .add_node("review", review_preview)
    .add_edge(START, "map_fields")
    .add_conditional_edges("map_fields", pick_route, {"draft": "draft", "review": "review"})
    .add_edge("draft", END)
    .add_edge("review", END)
    .compile()
)


def run_preview(document, templates, *, step_limit=4):
    """Return the final preview or a blocked outcome when the step cap is reached."""
    try:
        with tracing_context(enabled=False):
            result = GRAPH.invoke({"document": document, "templates": templates},
                                  {"recursion_limit": step_limit})
    except GraphRecursionError:
        return {"route": "blocked", "reason": "step-limit"}
    return {"route": result["route"], "mapping": result["mapping"]}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("document", type=Path)
    parser.add_argument("templates", nargs="+", type=Path)
    args = parser.parse_args()
    document = json.loads(args.document.read_text(encoding="utf-8"))
    templates = [json.loads(path.read_text(encoding="utf-8")) for path in args.templates]
    print(json.dumps(run_preview(document, templates), indent=2))


if __name__ == "__main__":
    main()
