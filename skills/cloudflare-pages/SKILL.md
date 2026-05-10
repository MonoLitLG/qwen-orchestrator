---
name: cloudflare-pages
description: Use when deploying applications to Cloudflare Pages, configuring edge functions, caching strategies, and optimizing performance on Cloudflare's global network. Includes Wrangler CLI, edge computing, and global distribution. Based on Cloudflare Certified Developer and edge computing best practices.
license: MIT
---

# Cloudflare Pages Skill — Edge Computing & Global Deployment

## Overview

This skill provides comprehensive guidance for deploying applications to Cloudflare Pages, configuring edge functions, caching strategies, and optimizing performance on Cloudflare's global network. It includes Wrangler CLI, edge computing, and global distribution. Based on Cloudflare Certified Developer and edge computing best practices.

## When to Use

**Use this skill when:**
- Deploying applications to Cloudflare Pages
- Configuring edge functions and middleware for Pages
- Setting up global distribution with Cloudflare's edge network
- Optimizing caching and performance at the edge
- Using Wrangler CLI for local development and deployment
- Configuring environment variables and secrets for Pages
- Setting up preview deployments for pull requests
- Configuring custom domains and SSL certificates
- Implementing edge routing and redirects
- Using Cloudflare Analytics and monitoring
- Deploying with Git integration (GitHub, GitLab, Bitbucket)
- Setting up automatic deployments on push
- Configuring build environment variables
- Using Cloudflare KV storage for edge data
- Implementing A/B testing and feature flags at edge
- Setting up Cloudflare Images optimization
- Using Cloudflare AI for edge processing

**Do NOT use this skill when:**
- Writing application business logic (use **developer skill** or specific framework skill)
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Managing non-Cloudflare infrastructure (use **aws-serverless**, **azure-cloud**, or **gcp-cloud** skills)
- Performing security audits (use **security-auditor** skill)
- Setting up Kubernetes deployments (use **devops-pipeline** skill)
- Developing Cloudflare Workers (use **cloudflare-workers** skill - different from Pages)
- Deploying to Vercel (use **vercel-deployment** skill)

**Why avoid:** Cloudflare Pages is for static sites and edge functions. For full Workers development or other platforms, use targeted skills.

## Deployment Methods

### Git Integration

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: my-app
          directory: ./dist
          buildCommand: npm run build
```

### Direct Upload

```bash
# Deploy with Wrangler
npx wrangler pages deploy ./dist --project-name=my-app

# Deploy with preview
npx wrangler pages deploy ./dist --project-name=my-app --branch=preview
```

### C3 CLI

```bash
# Create new project
npx create-cloudflare@latest

# Deploy project
npx wrangler pages deploy ./dist
```

## Edge Functions

### Basic Edge Function

```typescript
// functions/[...].ts
export async function onRequest(context) {
  const { request, env, execution } = context;
  
  // Modify request
  const url = new URL(request.url);
  
  // Add custom headers
  const response = await fetch(request);
  response.headers.set('X-Custom-Header', 'value');
  
  return response;
}
```

### Middleware

```typescript
// middleware.ts
export async function onRequest(context, next) {
  const { request, env } = context;
  
  // Authentication check
  const token = request.headers.get('Authorization');
  if (!token && request.url.includes('/api')) {
    return new Response('Unauthorized', { status: 401 });
  }
  
  // Continue to next handler
  return next();
}
```

### Routing

```typescript
// functions/api/users.ts
export async function onRequest(context) {
  const { request, env } = context;
  
  switch (request.method) {
    case 'GET':
      return getUsers(request, env);
    case 'POST':
      return createUser(request, env);
    default:
      return new Response('Method Not Allowed', { status: 405 });
  }
}

async function getUsers(request, env) {
  // Get users from database
  const users = await env.DB.prepare('SELECT * FROM users').all();
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

## Caching Strategies

### Cache Control Headers

```typescript
// Cache static assets
export async function onRequest(context) {
  const response = await fetch(context.request);
  
  // Cache for 1 year (immutable)
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  return response;
}
```

### Edge Caching

```typescript
// Cache API responses at edge
export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  if (url.pathname === '/api/data') {
    // Cache for 1 hour
    const cacheControl = 'public, max-age=3600';
    
    // Try to serve from cache
    const cached = await caches.default.match(context.request);
    if (cached) {
      return cached;
    }
    
    // Fetch and cache
    const response = await fetch(context.request);
    response.headers.set('Cache-Control', cacheControl);
    
    context.waitUntil(
      caches.default.put(context.request, response.clone())
    );
    
    return response;
  }
  
  return fetch(context.request);
}
```

## Wrangler CLI Commands

### Development

```bash
# Start local development
npx wrangler pages dev ./dist

# Start with environment variables
npx wrangler pages dev ./dist --env=development

# Start with custom port
npx wrangler pages dev ./dist --port=3000
```

### Deployment

```bash
# Deploy to production
npx wrangler pages deploy ./dist --project-name=my-app

# Deploy with preview
npx wrangler pages deploy ./dist --project-name=my-app --branch=preview

# Deploy with environment variables
npx wrangler pages deploy ./dist --project-name=my-app --env=production
```

### Configuration

```toml
# wrangler.toml
name = "my-app"
compatibility_date = "2024-01-01"

[[pages_functions]]
path = "functions"

[[routes]]
path = "/*"
handler = "functions/[...].ts"
```

## Environment Variables

### Project Settings

```bash
# Set environment variable
npx wrangler pages environment set VARIABLE_NAME value

# Set production environment variable
npx wrangler pages environment set VARIABLE_NAME value --environment=production

# List environment variables
npx wrangler pages environment list

# Remove environment variable
npx wrangler pages environment delete VARIABLE_NAME
```

### Cloudflare Dashboard

1. Navigate to Pages project
2. Go to "Settings" → "Environment Variables"
3. Add variables for each environment
4. Set "Production", "Preview", or "Build & Development" scope

## Global Distribution

### Region Configuration

```typescript
// Edge function with region-specific logic
export async function onRequest(context) {
  const { cf } = context.request;
  
  // Get client country
  const country = cf.country;
  
  // Serve region-specific content
  if (country === 'US') {
    return new Response('US Content');
  } else if (country === 'EU') {
    return new Response('EU Content');
  }
  
  return new Response('Global Content');
}
```

### Multi-Region Deployment

```bash
# Deploy to specific regions
npx wrangler pages deploy ./dist \
  --project-name=my-app \
  --region=iad1 \
  --region=sfo1
```

## Performance Optimization

### Edge Caching

- **Static Assets**: Cache for 1 year with immutable
- **API Responses**: Cache for 1 hour with revalidation
- **Dynamic Content**: No caching or short TTL

### Image Optimization

```typescript
// Image optimization at edge
export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  if (url.pathname.startsWith('/images/')) {
    // Optimize image at edge
    const optimized = await optimizeImage(url.pathname);
    return new Response(optimized, {
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }
  
  return fetch(context.request);
}
```

## Common Anti-Patterns

### ❌ Bad: No Edge Functions

```typescript
// ❌ BAD: All logic in origin server
export async function onRequest(context) {
  // All processing happens at origin
  const data = await db.query('SELECT * FROM users');
  return new Response(JSON.stringify(data));
}
```

**Problems:**
- High latency
- Origin server load
- No global distribution

### ✅ Good: Edge Processing

```typescript
// ✅ GOOD: Edge processing
export async function onRequest(context) {
  // Cache at edge
  const cached = await caches.default.match(context.request);
  if (cached) {
    return cached;
  }
  
  // Fetch from origin
  const response = await fetch(context.request);
  
  // Cache at edge
  context.waitUntil(
    caches.default.put(context.request, response.clone())
  );
  
  return response;
}
```

### ❌ Bad: Large Edge Functions

```typescript
// ❌ BAD: Large edge function with heavy dependencies
import { bigLibrary } from 'big-library';

export async function onRequest(context) {
  // Heavy initialization
  const result = bigLibrary.process(context.request);
  return new Response(JSON.stringify(result));
}
```

**Problems:**
- Slow cold starts
- High memory usage
- Expensive execution

### ✅ Good: Optimized Edge Function

```typescript
// ✅ GOOD: Optimized edge function
export async function onRequest(context) {
  // Lightweight processing
  const result = processRequest(context.request);
  return new Response(JSON.stringify(result));
}

function processRequest(request) {
  // Simple, focused logic
  return { processed: true };
}
```

## Real-World Impact

**Before this skill:**
- High latency
- Origin server load
- No global distribution
- Poor caching

**After this skill:**
- Low latency
- Edge processing
- Global distribution
- Optimal caching

## Cross-References

- **`devops-pipeline`** - For CI/CD integration
- **`architecture-patterns`** - For edge architecture design
- **`testing-strategy`** - For testing edge functions

## References

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Edge Computing](https://developers.cloudflare.com/edge-functions/)
