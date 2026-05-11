# LangGraph Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for building stateful agents and workflows with LangGraph, implementing graph-based architectures, managing state persistence, human-in-the-loop capabilities, and multi-agent systems. It includes Python and JavaScript implementations.

## When to Use

**Use this skill when:**

- Building stateful agents with LangGraph
- Implementing graph-based architectures
- Managing state persistence and checkpoints
- Creating human-in-the-loop workflows
- Building multi-agent systems with handoffs
- Implementing durable execution and memory

## What It Covers

### State Management

- State types and TypedDict
- Checkpointers (InMemorySaver, SqliteSaver, PostgresSaver)
- Thread management

### Graph Patterns

- Sequential patterns
- Conditional patterns
- Multi-agent patterns

### Multi-Agent Systems

- Basic swarm
- Agent handoffs
- Active agent router

### State Persistence

- Checkpointing
- Human-in-the-loop
- Thread management

## Quick Start

```python
from langgraph.graph import StateGraph
from langgraph.checkpoint.memory import InMemorySaver

workflow = StateGraph(State)
checkpointer = InMemorySaver()
app = workflow.compile(checkpointer=checkpointer)
```

## Examples

See `examples/` for:

- Graph pattern examples
- Multi-agent examples
- State persistence examples
- Human-in-the-loop examples

## References

- [LangGraph Documentation](https://langchain-ai.github.io/langgraph/)
- [LangGraph Python](https://reference.langchain.com/python/langgraph/)
- [LangGraph Swarm](https://reference.langchain.com/python/langgraph-swarm/)
- [State Management](https://langchain-ai.github.io/langgraph/how-tos/state/)

## Related Skills

- **`langchain`** - For LLM integration
- **`qwen-agent`** - For Qwen-specific agents
- **`llm-integrations`** - For LLM provider configuration

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
