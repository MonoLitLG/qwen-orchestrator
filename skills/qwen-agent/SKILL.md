---
name: qwen-agent
description: Use when developing Qwen-specific agents, implementing Qwen model integrations, optimizing Qwen performance, and building agent workflows with Qwen models. Includes Qwen API, Qwen-Plus, Qwen-Turbo, and best practices. Based on Qwen official documentation and agent development best practices.
license: MIT
---

# Qwen Agent Skill — Qwen Model Integrations & Agent Development

## Overview

This skill provides comprehensive guidance for developing Qwen-specific agents, implementing Qwen model integrations, optimizing Qwen performance, and building agent workflows with Qwen models. It includes Qwen API, Qwen-Plus, Qwen-Turbo, and best practices. Based on Qwen official documentation and agent development best practices.

## When to Use

**Use this skill when:**
- Developing Qwen-specific agents
- Implementing Qwen model integrations (Qwen-Turbo, Qwen-Plus, Qwen-Max, Qwen-VL)
- Optimizing Qwen performance and cost management
- Building agent workflows with Qwen models
- Using Qwen API endpoints (DashScope API)
- Configuring Qwen model parameters (temperature, max_tokens, top_p)
- Implementing Qwen chat completions
- Setting up Qwen streaming responses
- Building agents with tools and capabilities
- Implementing Qwen memory and conversation history
- Creating Qwen agents with external knowledge sources
- Building multi-step reasoning with Qwen
- Using Qwen embeddings for semantic search
- Implementing Qwen agent tracing with LangSmith
- Building agents with context window management
- Creating agents with tool calling capabilities
- Implementing retry and error handling for Qwen API
- Setting up rate limiting for Qwen API calls
- Managing Qwen API costs and usage
- Building agents with multimodal capabilities (Qwen-VL)

**Do NOT use this skill when:**
- Building stateful workflows with complex state (use **langgraph** skill)
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Using other LLM providers (use **llm-integrations** skill)
- Managing agent teams and coordination (use **agent-task-coordinator** skill)
- Building LangChain-based agents (use **langchain** skill)
- Implementing complex multi-agent graph architectures (use **langgraph** skill)

**Why avoid:** Qwen Agent is specific to Qwen models. For multi-provider support or LangChain integration, use other skills.

## Qwen Model Options

### Model Selection

| Model | Speed | Intelligence | Use Case |
|-------|-------|--------------|----------|
| **Qwen-Turbo** | Fastest | Lower | Simple tasks, high volume |
| **Qwen-Plus** | Medium | Medium | Balanced tasks, moderate complexity |
| **Qwen-Max** | Slowest | Highest | Complex tasks, high intelligence |
| **Qwen-VL** | Medium | High | Vision tasks, image analysis |

### Model Configuration

```python
# Qwen-Turbo (fastest)
model = "qwen-turbo"
temperature = 0.7
max_tokens = 2048

# Qwen-Plus (balanced)
model = "qwen-plus"
temperature = 0.7
max_tokens = 4096

# Qwen-Max (most intelligent)
model = "qwen-max"
temperature = 0.7
max_tokens = 8192

# Qwen-VL (vision)
model = "qwen-vl-plus"
temperature = 0.7
max_tokens = 8192
```

## Qwen API Integration

### Basic API Call

```python
import dashscope

dashscope.api_key = "your-api-key"

def call_qwen(prompt: str, model: str = "qwen-plus") -> str:
    """Call Qwen API with the given prompt."""
    response = dashscope.Generation.call(
        model=model,
        prompt=prompt,
        temperature=0.7,
        max_tokens=2048,
        top_p=0.8,
        result_format="text"
    )
    
    if response.status_code == 200:
        return response.output.text
    else:
        raise Exception(f"API Error: {response.code} - {response.message}")
```

### Streaming Response

```python
def stream_qwen(prompt: str, model: str = "qwen-plus"):
    """Stream Qwen API response."""
    responses = dashscope.Generation.call(
        model=model,
        prompt=prompt,
        temperature=0.7,
        max_tokens=2048,
        stream=True
    )
    
    for response in responses:
        if response.status_code == 200:
            yield response.output.text
        else:
            raise Exception(f"API Error: {response.code} - {response.message}")
```

### Multiple Messages

```python
def call_qwen_chat(messages: list, model: str = "qwen-plus") -> str:
    """Call Qwen API with chat-style messages."""
    response = dashscope.Generation.call(
        model=model,
        messages=messages,
        temperature=0.7,
        max_tokens=2048,
        top_p=0.8,
        result_format="text"
    )
    
    if response.status_code == 200:
        return response.output.text
    else:
        raise Exception(f"API Error: {response.code} - {response.message}")

# Usage
messages = [
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi there! How can I help you?"},
    {"role": "user", "content": "What's the weather in Paris?"}
]

result = call_qwen_chat(messages)
```

## Agent Development

### Basic Agent

```python
class QwenAgent:
    def __init__(self, model: str = "qwen-plus"):
        self.model = model
        self.api_key = "your-api-key"
        self.conversation_history = []
    
    def invoke(self, user_input: str) -> str:
        """Invoke the agent with user input."""
        self.conversation_history.append({"role": "user", "content": user_input})
        
        response = call_qwen_chat(
            self.conversation_history,
            self.model
        )
        
        self.conversation_history.append({"role": "assistant", "content": response})
        return response
    
    def reset(self):
        """Reset conversation history."""
        self.conversation_history = []
```

### Agent with Tools

```python
class QwenAgentWithTools:
    def __init__(self, model: str = "qwen-plus"):
        self.model = model
        self.api_key = "your-api-key"
        self.conversation_history = []
        self.tools = {
            "search": self.search,
            "calculate": self.calculate,
            "translate": self.translate
        }
    
    def search(self, query: str) -> str:
        """Search the web for information."""
        # Your search implementation
        return f"Search results for: {query}"
    
    def calculate(self, expression: str) -> str:
        """Calculate a mathematical expression."""
        try:
            result = eval(expression)
            return f"The result is: {result}"
        except Exception as e:
            return f"Error: {str(e)}"
    
    def translate(self, text: str, target_lang: str) -> str:
        """Translate text to target language."""
        # Your translation implementation
        return f"Translation to {target_lang}: {text}"
    
    def invoke(self, user_input: str) -> str:
        """Invoke the agent with user input."""
        self.conversation_history.append({"role": "user", "content": user_input})
        
        # Check if user wants to use a tool
        if user_input.startswith("/search"):
            query = user_input[7:].strip()
            response = self.tools["search"](query)
        elif user_input.startswith("/calculate"):
            expression = user_input[10:].strip()
            response = self.tools["calculate"](expression)
        elif user_input.startswith("/translate"):
            parts = user_input[10:].strip().split(":", 1)
            target_lang = parts[0].strip()
            text = parts[1].strip() if len(parts) > 1 else ""
            response = self.tools["translate"](text, target_lang)
        else:
            response = call_qwen_chat(
                self.conversation_history,
                self.model
            )
        
        self.conversation_history.append({"role": "assistant", "content": response})
        return response
```

### Agent with Memory

```python
from langchain.memory import ConversationBufferMemory

class QwenAgentWithMemory:
    def __init__(self, model: str = "qwen-plus"):
        self.model = model
        self.api_key = "your-api-key"
        self.memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
    
    def invoke(self, user_input: str) -> str:
        """Invoke the agent with user input."""
        # Get memory
        memory_context = self.memory.load_memory_variables({})
        
        # Build prompt with memory
        prompt = f"""
        You are a helpful assistant.
        
        Previous conversation:
        {memory_context['chat_history']}
        
        User: {user_input}
        Assistant:
        """
        
        response = call_qwen(prompt, self.model)
        
        # Save to memory
        self.memory.save_context({"input": user_input}, {"output": response})
        
        return response
```

## Performance Optimization

### Caching

```python
from functools import lru_cache

@lru_cache(maxsize=100)
def cached_qwen_call(prompt: str, model: str = "qwen-plus") -> str:
    """Cached Qwen API call."""
    return call_qwen(prompt, model)

def invoke_with_cache(user_input: str, model: str = "qwen-plus") -> str:
    """Invoke Qwen with caching."""
    return cached_qwen_call(user_input, model)
```

### Batching

```python
def batch_qwen_calls(prompts: list, model: str = "qwen-plus") -> list:
    """Batch Qwen API calls."""
    results = []
    for prompt in prompts:
        try:
            result = call_qwen(prompt, model)
            results.append(result)
        except Exception as e:
            results.append(f"Error: {str(e)}")
    return results

# Usage
prompts = [
    "What is the capital of France?",
    "What is the capital of Germany?",
    "What is the capital of Spain?"
]

results = batch_qwen_calls(prompts)
```

### Rate Limiting

```python
import time
from threading import Lock

class RateLimitedQwen:
    def __init__(self, max_requests: int = 10, time_window: float = 60.0):
        self.max_requests = max_requests
        self.time_window = time_window
        self.requests = []
        self.lock = Lock()
    
    def _check_rate_limit(self) -> bool:
        """Check if rate limit is exceeded."""
        with self.lock:
            current_time = time.time()
            self.requests = [req_time for req_time in self.requests 
                           if current_time - req_time < self.time_window]
            return len(self.requests) < self.max_requests
    
    def _record_request(self):
        """Record a request."""
        with self.lock:
            self.requests.append(time.time())
    
    def call(self, prompt: str, model: str = "qwen-plus") -> str:
        """Call Qwen with rate limiting."""
        while not self._check_rate_limit():
            time.sleep(1)  # Wait before retrying
        
        self._record_request()
        return call_qwen(prompt, model)

# Usage
rate_limited_qwen = RateLimitedQwen(max_requests=10, time_window=60)
result = rate_limited_qwen.call("Hello")
```

## Best Practices

### 1. Choose the Right Model

```python
# ✅ GOOD: Choose right model
# Simple tasks
result = call_qwen("What's 2+2?", "qwen-turbo")

# Complex tasks
result = call_qwen("Write a detailed analysis of...", "qwen-max")

# ❌ BAD: Using wrong model
# Complex task with qwen-turbo
result = call_qwen("Write a detailed analysis of...", "qwen-turbo")  # Poor quality
```

### 2. Use Appropriate Parameters

```python
# ✅ GOOD: Appropriate parameters
response = dashscope.Generation.call(
    model="qwen-plus",
    prompt=prompt,
    temperature=0.7,  # Balance creativity and control
    max_tokens=2048,  # Sufficient for most tasks
    top_p=0.8  # Reasonable diversity
)

# ❌ BAD: Inappropriate parameters
response = dashscope.Generation.call(
    model="qwen-plus",
    prompt=prompt,
    temperature=1.5,  # Too high - unpredictable
    max_tokens=100,   # Too low - truncated
    top_p=0.1         # Too low - repetitive
)
```

### 3. Error Handling

```python
# ✅ GOOD: Error handling
try:
    response = call_qwen(prompt, model)
except Exception as e:
    logger.error(f"Qwen API Error: {e}")
    response = "An error occurred. Please try again."
```

### 4. Prompt Engineering

```python
# ✅ GOOD: Specific prompts
prompt = """
You are a Python expert. Explain the following concept clearly and concisely.

Requirements:
- 200-300 words
- Include code examples
- Use bullet points for key concepts

Concept: {concept}
"""

# ❌ BAD: Vague prompts
prompt = "Explain {concept}"
```

## Common Anti-Patterns

### ❌ Bad: No Error Handling

```python
# ❌ BAD: No error handling
response = dashscope.Generation.call(model="qwen-plus", prompt=prompt)
result = response.output.text  # Can crash
```

**Problems:**
- Unhandled exceptions
- Poor user experience
- Difficult debugging

### ✅ Good: With Error Handling

```python
# ✅ GOOD: With error handling
try:
    response = dashscope.Generation.call(model="qwen-plus", prompt=prompt)
    if response.status_code == 200:
        result = response.output.text
    else:
        logger.error(f"API Error: {response.code} - {response.message}")
        result = "An error occurred. Please try again."
except Exception as e:
    logger.error(f"Unexpected error: {e}")
    result = "An error occurred. Please try again."
```

### ❌ Bad: No Model Selection

```python
# ❌ BAD: No model selection
def call_qwen(prompt: str) -> str:
    # Always uses default model
    response = dashscope.Generation.call(prompt=prompt)
    return response.output.text
```

### ✅ Good: With Model Selection

```python
# ✅ GOOD: With model selection
def call_qwen(prompt: str, model: str = "qwen-plus") -> str:
    response = dashscope.Generation.call(
        model=model,
        prompt=prompt
    )
    return response.output.text
```

## Real-World Impact

**Before this skill:**
- Poor model selection
- No error handling
- Inefficient API usage
- Unoptimized performance

**After this skill:**
- Optimal model selection
- Robust error handling
- Efficient API usage
- Optimized performance

## Cross-References

- **`langchain`** - For LangChain integration
- **`langgraph`** - For stateful workflows
- **`llm-integrations`** - For LLM provider configuration

## References

- [Qwen Documentation](https://help.aliyun.com/zh/qwen/)
- [DashScope API](https://help.aliyun.com/zh/dashscope/)
- [Qwen API Reference](https://help.aliyun.com/zh/qwen/developer-reference/)
- [Qwen Model Cards](https://help.aliyun.com/zh/qwen/developer-reference/model-introduction)
