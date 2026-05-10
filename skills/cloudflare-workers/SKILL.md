---
name: cloudflare-workers
description: Use when developing and deploying Cloudflare Workers, implementing edge computing logic, optimizing performance, and configuring global distribution. Includes Workers API, KV storage, Durable Objects, and performance optimization. Based on Cloudflare Certified Developer and edge computing best practices.
license: MIT
---

# Cloudflare Workers Skill — Edge Computing & Global Distribution

## Overview

This skill provides comprehensive guidance for developing and deploying Cloudflare Workers, implementing edge computing logic, optimizing performance, and configuring global distribution. It includes Workers API, KV storage, Durable Objects, and performance optimization. Based on Cloudflare Certified Developer and edge computing best practices.

## When to Use

**Use this skill when:**
- Developing Cloudflare Workers for edge computing
- Implementing edge computing logic (authentication, routing, caching)
- Optimizing performance and cold starts for Workers
- Configuring global distribution with Cloudflare's edge network
- Using KV storage for fast read operations
- Using Durable Objects for stateful operations
- Using D1 database for structured data
- Implementing authentication and JWT validation at edge
- Implementing rate limiting and bot protection
- Setting up edge caching strategies
- Creating middleware for request/response modification
- Implementing A/B testing and feature flags
- Using Cloudflare Analytics and monitoring
- Configuring Workers with Wrangler CLI
- Setting up local development environment
- Deploying Workers with Git integration
- Using Cloudflare Queues for async processing
- Implementing WebSockets at the edge
- Using R2 storage for edge data

**Do NOT use this skill when:**
- Writing application business logic (use **developer skill** or specific framework skill)
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Managing non-Cloudflare infrastructure (use **aws-serverless**, **azure-cloud**, or **gcp-cloud** skills)
- Performing security audits (use **security-auditor** skill)
- Setting up Kubernetes deployments (use **devops-pipeline** skill)
- Deploying to Cloudflare Pages (use **cloudflare-pages** skill - different use case)
- Deploying to Vercel (use **vercel-deployment** skill)

**Why avoid:** Cloudflare Workers is for full edge computing. For Pages deployment or other platforms, use targeted skills.

## Workers Architecture

### Basic Worker

```javascript
// worker.js
export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World!');
  },
};
```

### Edge Function

```typescript
// worker.ts
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // Route requests
    if (url.pathname === '/api/data') {
      return handleData(request, env);
    }
    
    return new Response('Not Found', { status: 404 });
  },
};

async function handleData(request: Request, env: Env): Promise<Response> {
  // Handle data request
  return new Response(JSON.stringify({ data: 'value' }));
}
```

## Performance Optimization

### Cold Start Optimization

```javascript
// ✅ GOOD: Cold start optimization
let cachedData = null;

export default {
  async fetch(request, env, ctx) {
    // Initialize expensive resources once
    if (!cachedData) {
      cachedData = await env.DB.prepare('SELECT * FROM data').all();
    }
    
    return new Response(JSON.stringify(cachedData));
  },
};
```

### Minimal Dependencies

```javascript
// ✅ GOOD: Minimal dependencies
export default {
  async fetch(request, env, ctx) {
    // No external dependencies
    const result = processRequest(request);
    return new Response(JSON.stringify(result));
  },
};

function processRequest(request) {
  // Simple, focused logic
  return { processed: true };
}
```

### Streaming

```javascript
// ✅ GOOD: Streaming for large data
export default {
  async fetch(request, env, ctx) {
    const stream = new ReadableStream({
      async start(controller) {
        // Stream data
        controller.enqueue('data');
        controller.close();
      },
    });
    
    return new Response(stream, {
      headers: { 'Content-Type': 'text/event-stream' },
    });
  },
};
```

## Storage Options

### KV Storage

```javascript
// ✅ GOOD: KV storage for fast reads
export default {
  async fetch(request, env, ctx) {
    const { KV } = env;
    
    // Fast read from KV
    const value = await KV.get('key');
    
    return new Response(value);
  },
};
```

### Durable Objects

```javascript
// ✅ GOOD: Durable Objects for stateful operations
export default {
  async fetch(request, env, ctx) {
    const { DO } = env;
    
    // Create durable object stub
    const id = env.DO.idFromName('my-object');
    const stub = env.DO.get(id);
    
    // Perform stateful operations
    const response = await stub.fetch(request);
    
    return response;
  },
};
```

### D1 Database

```javascript
// ✅ GOOD: D1 database for structured data
export default {
  async fetch(request, env, ctx) {
    const { D1 } = env;
    
    // Query D1 database
    const result = await D1.prepare('SELECT * FROM users').all();
    
    return new Response(JSON.stringify(result));
  },
};
```

## Authentication at Edge

### JWT Validation

```javascript
// ✅ GOOD: JWT validation at edge
export default {
  async fetch(request, env, ctx) {
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    const token = authHeader.replace('Bearer ', '');
    
    try {
      // Validate JWT at edge
      const payload = await validateJWT(token, env.JWT_SECRET);
      
      // Add user info to request
      request.headers.set('X-User-ID', payload.userId);
      
      // Continue to next handler
      return fetch(request);
    } catch (error) {
      return new Response('Unauthorized', { status: 401 });
    }
  },
};

async function validateJWT(token, secret) {
  // Validate JWT at edge
  // Return payload
}
```

### Session Management

```javascript
// ✅ GOOD: Session management at edge
export default {
  async fetch(request, env, ctx) {
    const session = await getSession(request, env);
    
    if (!session && request.url.includes('/api')) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    // Continue to next handler
    return fetch(request);
  },
};

async function getSession(request, env) {
  // Get session from KV
  const cookie = request.headers.get('Cookie');
  const sessionId = parseCookie(cookie, 'session_id');
  
  if (!sessionId) {
    return null;
  }
  
  return await env.KV.get(`session:${sessionId}`);
}
```

## Routing Strategies

### Path-based Routing

```javascript
// ✅ GOOD: Path-based routing
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    switch (url.pathname) {
      case '/api/users':
        return handleUsers(request, env);
      case '/api/products':
        return handleProducts(request, env);
      case '/api/orders':
        return handleOrders(request, env);
      default:
        return new Response('Not Found', { status: 404 });
    }
  },
};

async function handleUsers(request, env) {
  // Handle users API
}

async function handleProducts(request, env) {
  // Handle products API
}

async function handleOrders(request, env) {
  // Handle orders API
}
```

### Method-based Routing

```javascript
// ✅ GOOD: Method-based routing
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/api/data') {
      switch (request.method) {
        case 'GET':
          return getData(request, env);
        case 'POST':
          return createData(request, env);
        case 'PUT':
          return updateData(request, env);
        case 'DELETE':
          return deleteData(request, env);
        default:
          return new Response('Method Not Allowed', { status: 405 });
      }
    }
    
    return new Response('Not Found', { status: 404 });
  },
};

async function getData(request, env) {
  // Handle GET request
}

async function createData(request, env) {
  // Handle POST request
}

async function updateData(request, env) {
  // Handle PUT request
}

async function deleteData(request, env) {
  // Handle DELETE request
}
```

## Common Anti-Patterns

### ❌ Bad: Large Dependencies

```javascript
// ❌ BAD: Large dependencies
import { bigLibrary } from 'big-library';

export default {
  async fetch(request, env, ctx) {
    // Heavy initialization
    const result = bigLibrary.process(request);
    return new Response(JSON.stringify(result));
  },
};
```

**Problems:**
- Slow cold starts
- High memory usage
- Expensive execution

### ✅ Good: Minimal Dependencies

```javascript
// ✅ GOOD: Minimal dependencies
export default {
  async fetch(request, env, ctx) {
    // Lightweight processing
    const result = processRequest(request);
    return new Response(JSON.stringify(result));
  },
};

function processRequest(request) {
  // Simple, focused logic
  return { processed: true };
}
```

### ❌ Bad: No Caching

```javascript
// ❌ BAD: No caching
export default {
  async fetch(request, env, ctx) {
    // Always fetch from origin
    const response = await fetch(request);
    return response;
  },
};
```

**Problems:**
- High latency
- Origin server load
- No global distribution

### ✅ Good: With Caching

```javascript
// ✅ GOOD: With caching
export default {
  async fetch(request, env, ctx) {
    // Try to serve from cache
    const cached = await caches.default.match(request);
    if (cached) {
      return cached;
    }
    
    // Fetch from origin
    const response = await fetch(request);
    
    // Cache at edge
    ctx.waitUntil(
      caches.default.put(request, response.clone())
    );
    
    return response;
  },
};
```

## Real-World Impact

**Before this skill:**
- Slow cold starts
- High latency
- Origin server load
- No global distribution

**After this skill:**
- Fast cold starts
- Low latency
- Edge processing
- Global distribution

## Cross-References

- **`cloudflare-pages`** - For Pages deployment
- **`devops-pipeline`** - For CI/CD integration
- **`testing-strategy`** - For testing edge functions

## References

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Workers API](https://developers.cloudflare.com/workers/runtime-apis/)
- [Workers KV](https://developers.cloudflare.com/workers/runtime-apis/kv/)
- [Workers Durable Objects](https://developers.cloudflare.com/workers/runtime-apis/durable-objects/)
- [Workers D1](https://developers.cloudflare.com/workers/runtime-apis/d1/)
