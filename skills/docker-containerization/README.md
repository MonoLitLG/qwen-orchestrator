# Docker Containerization Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

Comprehensive guide for containerizing applications with Docker, implementing multi-stage builds, security hardening, image optimization, Docker Compose orchestration, and container best practices.

**Certification Reference:** Docker Certified Associate (DCA)

## When to Use

- Containerizing Node.js, Python, PHP, Go, Java, or Rust applications
- Implementing multi-stage builds for minimal image size
- Securing Docker containers with non-root users
- Optimizing Docker image layers and caching
- Creating Docker Compose configurations for local development
- Setting up production-ready Docker environments

## What It Covers

| Section | Topics |
|---------|--------|
| Multi-Stage Builds | Build → Runtime, Dependencies → Build → Runtime patterns |
| Security | Non-root users, minimal base images, health checks, .dockerignore |
| Image Optimization | Layer caching, build cache mounts, image size targets |
| Docker Compose | Development and production environment configurations |
| Production | Resource limits, logging, monitoring, deployment checklist |

## Quick Start

```dockerfile
# Node.js multi-stage build
FROM node:20-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 appgroup && adduser --system --uid 1001 appuser
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
USER appuser
HEALTHCHECK --interval=30s --timeout=3s CMD node healthcheck.js || exit 1
EXPOSE 3000
CMD ["node", "dist/main.js"]
```

## Examples

- **Node.js Application** - Multi-stage build with production optimization
- **Python FastAPI** - Dependencies → Runtime with health checks
- **Go Application** - Minimal scratch image with static binary
- **Docker Compose Dev** - Multi-container development environment
- **Docker Compose Prod** - Production deployment with resource limits

## References

- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Docker Security](https://docs.docker.com/engine/security/)
- [Docker Compose](https://docs.docker.com/compose/)

## Related Skills

- [kubernetes-orchestration](../kubernetes-orchestration/SKILL.md) - For deploying containers to Kubernetes
- [devops-pipeline](../devops-pipeline/SKILL.md) - For CI/CD with Docker
- [aws-serverless](../aws-serverless/SKILL.md) - For AWS ECS/EKS deployment
- [terraform-iac](../terraform-iac/SKILL.md) - For infrastructure provisioning

---

**Contributing:** Open an issue or PR for improvements  
**License:** MIT License
