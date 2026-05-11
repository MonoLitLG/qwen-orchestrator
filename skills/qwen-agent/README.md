# Qwen Agent Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for developing Qwen-specific agents, implementing Qwen model integrations, optimizing Qwen performance, and building agent workflows with Qwen models. It includes Qwen API, Qwen-Plus, Qwen-Turbo, and best practices.

## When to Use

**Use this skill when:**

- Developing Qwen-specific agents
- Implementing Qwen model integrations
- Optimizing Qwen performance
- Building agent workflows with Qwen models
- Using Qwen API endpoints
- Configuring Qwen model parameters

## What It Covers

### Qwen Model Options

- Qwen-Turbo (fastest)
- Qwen-Plus (balanced)
- Qwen-Max (most intelligent)
- Qwen-VL (vision)

### Qwen API Integration

- Basic API call
- Streaming response
- Multiple messages

### Agent Development

- Basic agent
- Agent with tools
- Agent with memory

### Performance Optimization

- Caching
- Batching
- Rate limiting

## Quick Start

```python
import dashscope

dashscope.api_key = "your-api-key"

response = dashscope.Generation.call(
    model="qwen-plus",
    prompt="Hello",
    temperature=0.7,
    max_tokens=2048,
    result_format="text"
)

print(response.output.text)
```

## Examples

See `examples/` for:

- API integration examples
- Agent examples
- Performance optimization examples

## References

- [Qwen Documentation](https://help.aliyun.com/zh/qwen/)
- [DashScope API](https://help.aliyun.com/zh/dashscope/)
- [Qwen API Reference](https://help.aliyun.com/zh/qwen/developer-reference/)
- [Qwen Model Cards](https://help.aliyun.com/zh/qwen/developer-reference/model-introduction)

## Related Skills

- **`langchain`** - For LangChain integration
- **`langgraph`** - For stateful workflows
- **`llm-integrations`** - For LLM provider configuration

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
