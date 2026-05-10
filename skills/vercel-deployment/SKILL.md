---
name: vercel-deployment
description: Use when deploying applications to Vercel, configuring serverless functions, edge computing, caching strategies, and optimizing Next.js deployments. Includes Vercel CLI, Edge Functions, and performance optimization. Based on Vercel Certified Developer and modern web deployment best practices.
license: MIT
---

# Vercel Deployment Skill — Serverless & Edge Computing

## Overview

This skill provides comprehensive guidance for deploying applications to Vercel, configuring serverless functions, edge computing, caching strategies, and optimizing Next.js deployments. It includes Vercel CLI, Edge Functions, and performance optimization. Based on Vercel Certified Developer and modern web deployment best practices.

## When to Use

**Use this skill when:**
- Deploying Next.js applications to Vercel
- Configuring serverless functions for Vercel Functions
- Setting up edge computing with Vercel Edge Functions
- Optimizing caching strategies (edge caching, static asset caching)
- Using Vercel CLI for development (vercel dev) and deployment
- Configuring environment variables and secrets in Vercel
- Setting up preview deployments for pull requests
- Configuring custom domains and SSL certificates
- Optimizing Next.js build configurations for Vercel
- Implementing middleware at the edge
- Using Vercel Analytics and monitoring
- Deploying with Git integration (GitHub, GitLab, Bitbucket)
- Setting up automatic deployments on push
- Configuring build environment variables

**Do NOT use this skill when:**
- Writing application business logic (use **developer skill** or specific framework skill)
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Managing non-Vercel cloud infrastructure (use **aws-serverless**, **azure-cloud**, or **gcp-cloud** skills)
- Performing security audits (use **security-auditor** skill)
- Setting up Kubernetes deployments (use **devops-pipeline** skill)
- Deploying to Cloudflare Pages (use **cloudflare-pages** skill)
- Developing Cloudflare Workers (use **cloudflare-workers** skill)

**Why avoid:** Vercel is specific to Next.js and Vercel infrastructure. For other platforms or infrastructure, use targeted skills.

## Deployment Targets

### Serverless Functions

```javascript
// next.config.js
module.exports = {
  target: 'serverless',
  // Other options are still valid
};
```

**Characteristics:**
- Minimal lambda size (~49KB)
- Optimized cold start performance
- No runtime dependencies
- Self-contained build output

### Edge Functions

```typescript
// middleware.ts
import { edgeFunction } from '@vercel/edge';

export default edgeFunction({
  deploymentTarget: 'v8-worker',
  entrypoint: 'middleware.js',
  environment: {
    FEATURE_FLAG: 'true',
  },
  regions: 'all', // or ['iad1', 'cdg1']
});
```

**Characteristics:**
- Runs on Cloudflare Workers runtime
- Global distribution
- Low latency
- No cold starts

## Vercel CLI Commands

### Development

```bash
# Start development server
vercel dev

# Deploy with preview
vercel --prod

# Deploy with production
vercel --prod --prod

# Deploy with environment variables
vercel --prod --env NODE_ENV=production
```

### Deployment

```bash
# Deploy to production
vercel --prod

# Deploy with custom domain
vercel --prod --prod-domain=example.com

# Deploy with build environment
vercel --prod --build-env NODE_ENV=production
```

### Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["sfo1", "iad1"],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-store"
        }
      ]
    }
  ]
}
```

## Performance Optimization

### Caching Strategies

```typescript
// API route with caching
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.status(200).json({ data: 'cached' });
}
```

### Image Optimization

```jsx
import Image from 'next/image';

export default function MyImage() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={200}
      height={100}
      priority
      loading="eager"
    />
  );
}
```

### Edge Caching

```typescript
// Edge function with caching
export default async function request(request: Request) {
  const url = new URL(request.url);
  
  if (url.pathname === '/api/data') {
    return new Response(JSON.stringify({ data: 'cached' }), {
      headers: {
        'Cache-Control': 'public, max-age=86400',
      },
    });
  }
  
  return new Response('Not Found', { status: 404 });
}
```

## Environment Variables

### Project Settings

```bash
# Set environment variable
vercel env add DATABASE_URL

# Set production environment variable
vercel env add DATABASE_URL production

# List environment variables
vercel env ls

# Remove environment variable
vercel env rm DATABASE_URL
```

### Vercel Dashboard

1. Navigate to project settings
2. Go to "Environment Variables"
3. Add variables for each environment
4. Set "Production", "Preview", or "Development" scope

## Deployment Strategies

### Preview Deployments

```bash
# Create preview deployment
vercel --prod

# Deploy with custom branch
vercel --prod --prod-branch=feature-branch
```

### Production Deployments

```bash
# Production deployment
vercel --prod

# Production deployment with custom domain
vercel --prod --prod-domain=example.com
```

## Edge Function Examples

### Authentication Edge Function

```typescript
// middleware.ts
import { edgeFunction } from '@vercel/edge';

export default edgeFunction({
  deploymentTarget: 'v8-worker',
  entrypoint: 'middleware.js',
});

// middleware.js
export default async function handler(request) {
  const url = new URL(request.url);
  
  // Skip static assets
  if (url.pathname.startsWith('/_next') || url.pathname.includes('.')) {
    return null;
  }
  
  // Check authentication
  const token = request.headers.get('Authorization');
  if (!token && url.pathname !== '/login') {
    return new Response('Unauthorized', { status: 401 });
  }
  
  return null; // Continue to next handler
}
```

### API Routing Edge Function

```typescript
// api/middleware.ts
export default async function handler(request) {
  const url = new URL(request.url);
  
  switch (url.pathname) {
    case '/api/users':
      return handleUsers(request);
    case '/api/products':
      return handleProducts(request);
    default:
      return new Response('Not Found', { status: 404 });
  }
}

async function handleUsers(request) {
  // Handle users API
  return new Response(JSON.stringify({ users: [] }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
```

## Common Anti-Patterns

### ❌ Bad: Large Lambda Functions

```javascript
// ❌ BAD: Large lambda with many dependencies
import { bigLibrary } from 'big-library';

export default async function handler(req, res) {
  // Heavy initialization
  const result = bigLibrary.process(req.body);
  res.json(result);
}
```

**Problems:**
- Slow cold starts
- High memory usage
- Expensive execution

### ✅ Good: Optimized Lambda

```javascript
// ✅ GOOD: Optimized lambda
export default async function handler(req, res) {
  // Lightweight processing
  const result = processRequest(req.body);
  res.json(result);
}

function processRequest(body) {
  // Simple, focused logic
  return { processed: true };
}
```

### ❌ Bad: No Caching

```typescript
// ❌ BAD: No caching on static assets
export default async function handler(request) {
  const file = await readFile('/public/image.png');
  return new Response(file, {
    headers: {
      'Content-Type': 'image/png',
      // Missing Cache-Control header
    },
  });
}
```

### ✅ Good: With Caching

```typescript
// ✅ GOOD: With caching
export default async function handler(request) {
  const file = await readFile('/public/image.png');
  return new Response(file, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
```

## Real-World Impact

**Before this skill:**
- Slow deployments
- Poor caching
- High latency
- Expensive Lambda functions

**After this skill:**
- Fast deployments
- Optimal caching
- Low latency
- Cost-effective functions

## Cross-References

- **`devops-pipeline`** - For CI/CD integration
- **`architecture-patterns`** - For serverless architecture design
- **`testing-strategy`** - For testing serverless functions

## References

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Edge Functions](https://vercel.com/docs/functions/edge-functions)
- [Serverless Functions](https://vercel.com/docs/functions/serverless-functions)
