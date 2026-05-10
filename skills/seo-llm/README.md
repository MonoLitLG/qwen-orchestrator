# SEO LLM — Search Engine Optimization for AI-Driven Search

## Quick Start

```bash
# Install required packages
pip install langchain langchain-openai faiss-cpu reranking

# Basic RAG optimization
python -m reranking
```

## When to Use

**Use this skill when:**
- Optimizing content for ChatGPT, Perplexity, Gemini, Claude, Bing AI, or Qwen search
- Implementing RAG optimization for AI search visibility
- Creating content that ranks in AI-powered search results
- Designing semantic SEO strategies for AI search
- Optimizing for ChatGPT SEO, Perplexity Authority, Gemini Rich Results, or Claude Source Attribution

**Do NOT use this skill when:**
- Optimizing for traditional search engines (Google, Bing, Yahoo) — use traditional SEO skills
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Implementing basic keyword targeting without AI context (use **traditional SEO** skill)
- Managing non-search-related content strategy (use **content-strategy** skill)

## Core Concepts

### AI Search Engine Landscape

| Search Engine | Key Optimization Factor | Best For |
|---------------|------------------------|----------|
| ChatGPT | Authority, recency, relevance | Conversational search, Q&A |
| Perplexity | Authority, citations, depth | Research, detailed answers |
| Gemini | Rich results, structured data | Visual search, multimodal |
| Claude | Source attribution, credibility | Trust-based search |
| Bing AI | Microsoft ecosystem integration | Enterprise search |
| Qwen | Alibaba ecosystem, Chinese market | Chinese language search |

### RAG Optimization

```python
from langchain_core.documents import Document
from reranking import RAGPipeline, rerank_documents

# Basic RAG
chunks = ["The capital of France is Paris.", "Paris is the capital of France."]

def basic_rag(query: str, docs: list) -> list:
    vectorstore = FAISS.from_documents(docs, embeddings)
    return vectorstore.similarity_search(query, k=3)

# Advanced RAG with reranking
def advanced_rag(query: str, docs: list) -> list:
    reranked = rerank_documents(query=query, docs=docs, top_n=3)
    return reranked
```

### Prompt Engineering for Search

```python
def create_search_optimized_prompt(topic: str, intent: str = "informational") -> str:
    prompts = {
        "informational": f"""
        You are an expert on {topic}. Provide a comprehensive, well-structured answer.
        
        Requirements:
        1. Start with a clear, direct answer
        2. Provide detailed explanations with examples
        3. Include relevant statistics and data
        4. Cite authoritative sources
        5. Use bullet points for key information
        6. End with a concise summary
        """,
        # ... other intents
    }
    return prompts.get(intent, prompts["informational"])
```

## Search Engine Patterns

### ChatGPT SEO

- **Authority signals**: Cite authoritative sources, show author credentials
- **Structure signals**: Clear Q&A format, conversational tone
- **Engagement signals**: 300-800 words, include examples
- **Optimization tips**: Use natural language, focus on user intent

### Perplexity Authority

- **Authority signals**: Cite multiple authoritative sources, include expert quotes
- **Depth signals**: 1000+ words, historical context, multiple perspectives
- **Citation signals**: Inline citations, source URLs, citation count
- **Optimization tips**: Create in-depth guides, cite primary sources

### Gemini Rich Results

- **Rich signals**: JSON-LD structured data, image captions, video schema
- **Multimodal signals**: High-quality images, alt text, video content
- **Visual signals**: Clear headings, infographics, comparison tables
- **Optimization tips**: Add JSON-LD, use semantic HTML, implement schema

### Claude Source Attribution

- **Credibility signals**: Cite peer-reviewed sources, show author credentials
- **Attribution signals**: Direct quotes with attribution, paraphrase with citation
- **Trust signals**: No promotional language, balanced views, cite multiple sources
- **Optimization tips**: Cite authoritative sources, show source credibility

## Best Practices

1. **Create Answer-Focused Content** — Direct answers in first paragraph
2. **Optimize for Semantic Search** — Use natural language queries
3. **Implement Schema Markup** — JSON-LD for AI search visibility
4. **Optimize for Voice Search** — Natural language phrases

## Common Anti-Patterns

- ❌ **Keyword Stuffing** — AI search penalizes over-optimization
- ❌ **No Answer Structure** — Missing clear answer format
- ❌ **Promotional Language** — Claude penalizes biased content

## Examples

See `SKILL.md` for comprehensive examples including:
- RAG optimization with reranking
- ChatGPT SEO optimization
- Perplexity Authority patterns
- Gemini Rich Results with JSON-LD
- Claude Source Attribution
- Semantic SEO for AI search
- Conversational search optimization

## Cross-References

- **`llm-integrations`** - For LLM provider configuration
- **`langchain`** - For LangChain RAG implementation
- **`langgraph`** - For stateful RAG workflows
- **`qwen-agent`** - For Qwen-specific search optimization

## References

- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [RAG Techniques](https://github.com/nirdiamant/rag_techniques)
- [ChatGPT SEO Best Practices](https://www.promptingguide.ai/readings)
- [Structured Data Markup](https://schema.org/)
- [Semantic SEO Guide](https://dair-ai.github.io/prompt-engineering-guide/)
