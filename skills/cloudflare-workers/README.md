# Cloudflare Workers Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for developing and deploying Cloudflare Workers, implementing edge computing logic, optimizing performance, and configuring global distribution. It includes Workers API, KV storage, Durable Objects, and performance optimization.

## When to Use

**Use this skill when:**

- Developing Cloudflare Workers
- Implementing edge computing logic
- Optimizing performance and cold starts
- Configuring global distribution
- Using KV storage and Durable Objects
- Implementing authentication and routing at edge

## What It Covers

### Workers Architecture

- Basic Workers
- Edge Functions

### Performance Optimization

- Cold start optimization
- Minimal dependencies
- Streaming

### Storage Options

- KV Storage
- Durable Objects
- D1 Database

### Authentication at Edge

- JWT validation
- Session management

### Routing Strategies

- Path-based routing
- Method-based routing

## Quick Start

```bash
# Start local development
npx wrangler pages dev ./dist

# Deploy to production
npx wrangler pages deploy ./dist --project-name=my-app
```

## Examples

See `examples/` for:

- Worker examples
- Storage examples
- Authentication examples
- Routing examples

## References

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Workers API](https://developers.cloudflare.com/workers/runtime-apis/)
- [Workers KV](https://developers.cloudflare.com/workers/runtime-apis/kv/)
- [Workers Durable Objects](https://developers.cloudflare.com/workers/runtime-apis/durable-objects/)
- [Workers D1](https://developers.cloudflare.com/workers/runtime-apis/d1/)

## Related Skills

- **`cloudflare-pages`** - For Pages deployment
- **`devops-pipeline`** - For CI/CD integration
- **`testing-strategy`** - For testing edge functions

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
