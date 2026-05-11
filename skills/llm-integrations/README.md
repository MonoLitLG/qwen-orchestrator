# LLM Integrations Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for integrating LLM providers (OpenAI, DeepSeek, OpenRouter, Anthropic, Google), configuring API keys, optimizing costs, implementing rate limiting, and managing LLM usage across projects. It includes best practices for cost optimization and API management.

## When to Use

**Use this skill when:**

- Integrating LLM providers (OpenAI, DeepSeek, OpenRouter, Anthropic, Google)
- Configuring API keys and authentication
- Optimizing LLM costs
- Implementing rate limiting
- Managing LLM usage across projects
- Choosing the right model for specific tasks

## What It Covers

### Provider Integration

- OpenAI (GPT-4, GPT-3.5)
- DeepSeek (cost-effective)
- OpenRouter (multi-provider)
- Anthropic (Claude)
- Google Gemini

### Cost Optimization

- Model selection matrix
- Cost tracking
- Cost-saving strategies

### API Key Management

- Environment variables
- Secret management
- Fallback strategy

### Rate Limiting

- Rate limiter implementation
- Request throttling

## Quick Start

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4o",
    temperature=0.7,
    max_tokens=2048,
    api_key="your-api-key"
)
```

## Examples

See `examples/` for:

- Provider integration examples
- Cost tracking examples
- Rate limiting examples
- API key management examples

## References

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [DeepSeek API Documentation](https://api-docs.deepseek.com/)
- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Anthropic API Documentation](https://docs.anthropic.com/)
- [Google Gemini API Documentation](https://ai.google.dev/docs)

## Related Skills

- **`qwen-agent`** - For Qwen-specific integrations
- **`langchain`** - For LangChain integration
- **`langgraph`** - For stateful workflows

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
