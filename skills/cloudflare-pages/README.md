# Cloudflare Pages Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for deploying applications to Cloudflare Pages, configuring edge functions, caching strategies, and optimizing performance on Cloudflare's global network. It includes Wrangler CLI, edge computing, and global distribution.

## When to Use

**Use this skill when:**

- Deploying applications to Cloudflare Pages
- Configuring edge functions and middleware
- Setting up global distribution
- Optimizing caching and performance
- Using Wrangler CLI for development and deployment
- Configuring environment variables and secrets

## What It Covers

### Deployment Methods

- **Git Integration** - Automated deployments
- **Direct Upload** - Manual deployments
- **C3 CLI** - Create and deploy

### Edge Functions

- Basic edge functions
- Middleware
- Routing

### Caching Strategies

- Cache control headers
- Edge caching

### Wrangler CLI

- Development commands
- Deployment commands
- Configuration

## Quick Start

```bash
# Deploy with Wrangler
npx wrangler pages deploy ./dist --project-name=my-app

# Deploy with preview
npx wrangler pages deploy ./dist --project-name=my-app --branch=preview
```

## Examples

See `examples/` for:

- Edge function examples
- Caching strategies
- Wrangler CLI commands
- Environment variable configuration

## References

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Edge Computing](https://developers.cloudflare.com/edge-functions/)

## Related Skills

- **`devops-pipeline`** - For CI/CD integration
- **`architecture-patterns`** - For edge architecture design
- **`testing-strategy`** - For testing edge functions

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
