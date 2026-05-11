---
name: langgraph
description: Use when building stateful agents and workflows with LangGraph, implementing graph-based architectures, managing state persistence, human-in-the-loop capabilities, and multi-agent systems. Includes Python and JavaScript implementations. Based on LangChain/LangGraph official documentation and agent development best practices.
license: MIT
---

# LangGraph Skill — Stateful Agents & Graph Workflows

## Overview

This skill provides comprehensive guidance for building stateful agents and workflows with LangGraph, implementing graph-based architectures, managing state persistence, human-in-the-loop capabilities, and multi-agent systems. It includes Python and JavaScript implementations. Based on LangChain/LangGraph official documentation and agent development best practices.

## When to Use

**Use this skill when:**

- Building stateful agents with LangGraph
- Implementing graph-based architectures with StateGraph
- Managing state persistence and checkpoints
- Creating human-in-the-loop workflows with interrupts
- Building multi-agent systems with handoffs
- Implementing durable execution and memory
- Using checkpointer strategies (InMemory, SQLite, PostgreSQL)
- Implementing thread management and session persistence
- Building agent swarms with LangGraph Swarm
- Creating conditional edges and routing logic
- Implementing agent communication patterns
- Setting up LangGraph Studio for debugging
- Using LangSmith for tracing and monitoring
- Building agents with tool calling capabilities
- Implementing retry and error handling patterns
- Creating agents with streaming output
- Building agents with context window management
- Implementing agent memory with vector stores
- Creating agents with external knowledge sources
- Building agents with multi-step reasoning

**Do NOT use this skill when:**

- Building basic LLM applications without state (use **llm-integrations** skill)
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Writing simple prompt templates (use **langchain** skill for basic LLM operations)
- Implementing non-agent workflows (use **standard application development** skill)
- Building simple chat applications without complex state (use **qwen-agent** skill for Qwen-specific apps)
- Managing agent teams across multiple agents (use **agent-task-coordinator** skill)

**Why avoid:** LangGraph adds complexity with state management and checkpoints. For simple LLM apps, use lighter-weight solutions.

## Core Concepts

### State Management

```python
# Python
from typing import Annotated
from langgraph.graph import StateGraph
from langgraph.checkpoint.memory import InMemorySaver

class State(TypedDict):
    messages: Annotated[list, add_messages]
    current_agent: str

workflow = StateGraph(State)
checkpointer = InMemorySaver()
app = workflow.compile(checkpointer=checkpointer)
```

```typescript
// JavaScript
import { MemorySaver } from '@langchain/langgraph';
import { StateGraph } from '@langchain/langgraph';

const checkpointer = new MemorySaver();
const workflow = new StateGraph(State);
const app = workflow.compile({ checkpointer });
```

### Graph Patterns

```python
# Sequential Pattern
workflow = (
    StateGraph(State)
    .add_node("researcher", research_node)
    .add_node("writer", write_node)
    .add_edge("researcher", "writer")
    .set_entry_point("researcher")
    .set_finish_point("writer")
)

# Conditional Pattern
def route_message(state: State) -> str:
    if state["current_agent"] == "Alice":
        return "Bob"
    return "Alice"

workflow = (
    StateGraph(State)
    .add_node("Alice", alice_node)
    .add_node("Bob", bob_node)
    .add_conditional_edges("Alice", route_message, ["Bob"])
    .add_conditional_edges("Bob", route_message, ["Alice"])
)
```

## Multi-Agent Systems

### Basic Swarm

```python
from langgraph.checkpoint.memory import InMemorySaver
from langchain.agents import create_agent
from langgraph_swarm import create_swarm

def add(a: int, b: int) -> int:
    '''Add two numbers'''
    return a + b

alice = create_agent(
    "openai:gpt-4o",
    tools=[add],
    system_prompt="You are Alice, an addition expert.",
    name="Alice",
)

bob = create_agent(
    "openai:gpt-4o",
    system_prompt="You are Bob, you speak like a pirate.",
    name="Bob",
)

checkpointer = InMemorySaver()
workflow = create_swarm([alice, bob], default_active_agent="Alice")
app = workflow.compile(checkpointer=checkpointer)

config = {"configurable": {"thread_id": "1"}}
result = app.invoke({"messages": [{"role": "user", "content": "Hello"}]}, config)
```

### Agent Handoffs

```python
from langgraph_swarm import create_handoff_tool

alice = create_agent(
    "openai:gpt-4o",
    tools=[
        add,
        create_handoff_tool(
            agent_name="Bob",
            description="Transfer to Bob for pirate-related questions",
        ),
    ],
    system_prompt="You are Alice, an addition expert.",
    name="Alice",
)

bob = create_agent(
    "openai:gpt-4o",
    tools=[
        create_handoff_tool(
            agent_name="Alice",
            description="Transfer to Alice for math questions",
        ),
    ],
    system_prompt="You are Bob, you speak like a pirate.",
    name="Bob",
)
```

### Active Agent Router

```python
from langgraph_swarm import add_active_agent_router

workflow = (
    StateGraph(SwarmState)
    .add_node(alice, destinations=("Bob",))
    .add_node(bob, destinations=("Alice",))
)

workflow = add_active_agent_router(
    builder=workflow,
    route_to=["Alice", "Bob"],
    default_active_agent="Alice",
)

app = workflow.compile(checkpointer=checkpointer)
```

## State Persistence

### Checkpointers

```python
from langgraph.checkpoint.memory import InMemorySaver
from langgraph.checkpoint.sqlite import SqliteSaver
from langgraph.checkpoint.postgres import PostgresSaver

# In-memory (development)
checkpointer = InMemorySaver()

# SQLite (production)
checkpointer = SqliteSaver.from_conn_string(":memory:")

# PostgreSQL (production)
checkpointer = PostgresSaver.from_conn_string("postgresql://user:pass@localhost/db")
```

### Thread Management

```python
config = {"configurable": {"thread_id": "user-123"}}

# First invocation
result = app.invoke({"messages": [{"role": "user", "content": "Hello"}]}, config)

# Subsequent invocation (state preserved)
result = app.invoke({"messages": [{"role": "user", "content": "Continue"}]}, config)

# Stream results
for chunk in app.stream({"messages": [{"role": "user", "content": "Stream"}]}, config):
    print(chunk)
```

## Human-in-the-Loop

### Interrupts

```python
from langgraph.func import entrypoint, task
from langgraph.types import interrupt

@task
def compose_essay(topic: str) -> str:
    return f"An essay about {topic}"

@entrypoint(checkpointer=InMemorySaver())
def review_workflow(topic: str) -> dict:
    essay_future = compose_essay(topic)
    essay = essay_future.result()

    # Human review
    human_review = interrupt({
        "question": "Please provide a review",
        "essay": essay
    })

    return {
        "essay": essay,
        "review": human_review,
    }

# Resume with human input
config = {"configurable": {"thread_id": "review-1"}}
human_review = "This essay is great."
result = app.invoke(Command(resume=human_review), config)
```

### Checkpointing

```python
# Get checkpoint history
config = {"configurable": {"thread_id": "user-123"}}
history = list(app.get_state_history(config))

# Resume from specific checkpoint
for state in history:
    if state.next == ["review_node"]:
        # Resume from this checkpoint
        app.update_state(state.config, {"review": "approved"})
```

## Best Practices

### 1. Use Checkpointers for State Persistence

```python
# ✅ GOOD: With checkpointing
checkpointer = InMemorySaver()
app = workflow.compile(checkpointer=checkpointer)

# ❌ BAD: Without checkpointing
app = workflow.compile()  # No state persistence
```

### 2. Design Graphs with Clear Boundaries

```python
# ✅ GOOD: Clear node boundaries
workflow = (
    StateGraph(State)
    .add_node("input_validation", validate_input)
    .add_node("llm_processing", process_with_llm)
    .add_node("output_formatting", format_output)
    .add_edge("input_validation", "llm_processing")
    .add_edge("llm_processing", "output_formatting")
)

# ❌ BAD: Unclear boundaries
workflow = StateGraph(State)
# All logic in one node - hard to test and maintain
```

### 3. Use Type Hints for State

```python
# ✅ GOOD: Typed state
from typing import TypedDict

class State(TypedDict):
    messages: list
    current_agent: str
    user_context: dict

# ❌ BAD: Untyped state
class State:
    messages = []
    current_agent = ""
    user_context = {}
```

### 4. Implement Error Handling

```python
# ✅ GOOD: Error handling in nodes
def process_with_llm(state: State) -> State:
    try:
        result = llm.invoke(state["messages"])
        return {**state, "response": result}
    except Exception as e:
        return {**state, "error": str(e)}

# ❌ BAD: No error handling
def process_with_llm(state: State) -> State:
    result = llm.invoke(state["messages"])  # Can crash
    return {**state, "response": result}
```

## Common Anti-Patterns

### ❌ Bad: No State Management

```python
# ❌ BAD: No state management
def process(state: State) -> State:
    # No persistence, no checkpointing
    result = llm.invoke(state["messages"])
    return {"response": result}
```

**Problems:**

- No state persistence
- Cannot resume workflows
- No human-in-the-loop support

### ✅ Good: With State Management

```python
# ✅ GOOD: With state management
class State(TypedDict):
    messages: list
    response: Optional[str]

def process(state: State) -> State:
    result = llm.invoke(state["messages"])
    return {**state, "response": result}

checkpointer = InMemorySaver()
app = workflow.compile(checkpointer=checkpointer)
```

### ❌ Bad: Complex Graphs

```python
# ❌ BAD: Complex graph with many edges
workflow = (
    StateGraph(State)
    .add_node("a", node_a)
    .add_node("b", node_b)
    .add_node("c", node_c)
    .add_node("d", node_d)
    # Many conditional edges - hard to understand
)
```

**Problems:**

- Hard to understand
- Difficult to debug
- Maintenance challenges

### ✅ Good: Simple Graphs

```python
# ✅ GOOD: Simple graph
workflow = (
    StateGraph(State)
    .add_node("input", validate_input)
    .add_node("process", process_with_llm)
    .add_node("output", format_output)
    .add_edge("input", "process")
    .add_edge("process", "output")
)
```

## Real-World Impact

**Before this skill:**

- No state persistence
- Difficult multi-agent systems
- No human-in-the-loop
- Complex state management

**After this skill:**

- State persistence with checkpoints
- Easy multi-agent systems
- Human-in-the-loop support
- Clean state management

## Cross-References

- **`langchain`** - For LLM integration
- **`qwen-agent`** - For Qwen-specific agents
- **`llm-integrations`** - For LLM provider configuration

## References

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LangGraph Python](https://reference.langchain.com/python/langgraph/)
- [LangGraph Swarm](https://reference.langchain.com/python/langgraph-swarm/)
- [State Management](https://langchain-ai.github.io/langgraph/how-tos/state/)
