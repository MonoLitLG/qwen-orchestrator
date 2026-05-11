# LangChain Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for building LLM applications with LangChain, implementing chains, agents, tools, memory, prompts, and retrieval systems. It includes best practices for prompt engineering, tool integration, and agent development.

## When to Use

**Use this skill when:**

- Building LLM applications with LangChain
- Implementing chains and agents
- Integrating tools and external APIs
- Managing memory and conversation history
- Creating prompts and templates
- Building retrieval-augmented generation (RAG) systems

## What It Covers

### LLM Integration

- OpenAI
- Google Gemini
- Custom providers

### Chains

- LLMChain
- SequentialChain
- RouterChain

### Agents

- create_agent
- ConversationalAgent
- Tools integration

### Memory

- ConversationBufferMemory
- ConversationSummaryMemory
- VectorStoreRetrieverMemory

### Prompts & Templates

- PromptTemplate
- FewShotPromptTemplate
- ChatPromptTemplate

## Quick Start

```python
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

prompt = PromptTemplate.from_template("What is the capital of {country}?")
chain = LLMChain(llm=llm, prompt=prompt)
result = chain.run("France")
```

## Examples

See `examples/` for:

- Chain examples
- Agent examples
- Prompt examples
- Memory examples

## References

- [LangChain Documentation](https://docs.langchain.com/)
- [LangChain OSS](https://docs.langchain.com/oss/)
- [LangChain Python](https://reference.langchain.com/python/langchain/)
- [LangChain JavaScript](https://reference.langchain.com/javascript/langchain/)

## Related Skills

- **`langgraph`** - For stateful workflows
- **`qwen-agent`** - For Qwen-specific agents
- **`llm-integrations`** - For LLM provider configuration

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
