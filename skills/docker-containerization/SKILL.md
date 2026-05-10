---
name: docker-containerization
description: Use when containerizing applications with Docker, implementing multi-stage builds, security hardening, image optimization, Docker Compose orchestration, and container best practices. Includes Dockerfile patterns, layer caching, and production-ready configurations.
license: MIT
---

# Docker Containerization Skill — Container Best Practices

## Overview

This skill provides comprehensive guidance for **containerizing applications with Docker**, including multi-stage builds, security hardening, image optimization, and Docker Compose orchestration. Based on Docker official documentation and production best practices.

## When to Use

**Use this skill when:**
- Containerizing Node.js, Python, PHP, Go, Java, or Rust applications
- Implementing multi-stage builds for minimal image size
- Securing Docker containers with non-root users
- Optimizing Docker image layers and caching
- Creating Docker Compose configurations for local development
- Implementing Docker health checks
- Setting up Docker volumes and data persistence
- Configuring Docker networks for multi-container apps
- Building production-ready Docker images
- Implementing Docker security best practices
- Optimizing Dockerfile for build cache efficiency
- Setting up Docker multi-container orchestration
- Implementing Docker logging and monitoring
- Creating Docker images for CI/CD pipelines
- Configuring Docker resource limits

**Do NOT use this skill when:**
- Deploying to Kubernetes (use kubernetes-orchestration skill)
- Setting up cloud infrastructure (use terraform-iac skill)
- Configuring CI/CD pipelines (use devops-pipeline skill)
- Building serverless functions (use aws-serverless or cloudflare-workers skill)
- Managing database schema (use database-design skill)
- Implementing application code (use backend-developer or frontend-developer skill)
- Setting up monitoring and alerting (use monitoring skill)

**Why avoid:** Docker is for containerization, not orchestration or infrastructure. Use the right tool for the job.

## Core Concepts

### Multi-Stage Build Patterns

| Pattern | Use Case | Benefits |
|---------|----------|----------|
| **Build → Runtime** | Compile languages (Go, Java, Rust) | Minimal runtime image |
| **Dependencies → Build → Runtime** | Node.js, Python, PHP | Layer caching optimization |
| **Build → Test → Runtime** | Applications with build-time tests | Test isolation |
| **Base → Builder → Runner** | Complex applications | Maximum flexibility |

### Image Size Targets

| Language/Framework | Target Size | Base Image |
|-------------------|-------------|------------|
| Node.js | < 200MB | node:alpine or distroless |
| Python | < 150MB | python:slim |
| Go | < 20MB | scratch or distroless |
| Java | < 300MB | eclipse-temurin:jre-alpine |
| PHP | < 100MB | php:fpm-alpine |
| Rust | < 15MB | scratch or distroless |

## Multi-Stage Build Examples

### Node.js Application

```dockerfile
# ============================================
# Stage 1: Dependencies Installation
# ============================================
FROM node:20-alpine AS dependencies

WORKDIR /app

# Copy package files first for layer caching
COPY package.json package-lock.json* ./

# Install production dependencies only
RUN npm ci --only=production --ignore-scripts

# ============================================
# Stage 2: Build Application
# ============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies from previous stage
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Build the application
ENV NODE_ENV=production
RUN npm run build

# ============================================
# Stage 3: Production Runtime
# ============================================
FROM node:20-alpine AS runner

WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser

# Copy built artifacts from builder
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=dependencies --chown=appuser:appgroup /app/node_modules ./node_modules

# Use non-root user
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node healthcheck.js || exit 1

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "dist/main.js"]
```

### Python Application (FastAPI)

```dockerfile
# ============================================
# Stage 1: Dependencies
# ============================================
FROM python:3.12-slim AS dependencies

WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for layer caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# ============================================
# Stage 2: Production Runtime
# ============================================
FROM python:3.12-slim AS runner

WORKDIR /app

# Create non-root user
RUN groupadd --gid 1001 appgroup && \
    useradd --uid 1001 --gid appgroup --shell /bin/bash appuser

# Copy Python dependencies from previous stage
COPY --from=dependencies /install /usr/local

# Copy application code
COPY --chown=appuser:appgroup . .

# Use non-root user
USER appuser

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD python -c "import requests; requests.get('http://localhost:8000/health')" || exit 1

# Expose port
EXPOSE 8000

# Start application with uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Go Application

```dockerfile
# ============================================
# Stage 1: Build
# ============================================
FROM golang:1.22-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache git

# Copy go.mod and go.sum first for layer caching
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY . .

# Build with static linking
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# ============================================
# Stage 2: Production Runtime
# ============================================
FROM scratch AS runner

# Copy binary from builder
COPY --from=builder /app/main /app/main

# Copy any necessary files (config, static assets)
# COPY --from=builder /app/config /app/config

# Expose port
EXPOSE 8080

# Start application
CMD ["/app/main"]
```

## Docker Compose Examples

### Development Environment

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@db:5432/app
    volumes:
      - ./src:/app/src
      - /app/node_modules
    depends_on:
      - db
      - redis
    command: npm run dev

  db:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=app
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  mailpit:
    image: axllent/mailpit
    ports:
      - "8025:8025"
      - "1025:1025"

volumes:
  postgres_data:
  redis_data:
```

### Production Environment

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
    networks:
      - app-network
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
    networks:
      - app-network

networks:
  app-network:
    driver: bridge

volumes:
  postgres_data:
  redis_data:
```

## Security Best Practices

### Dockerfile Security Checklist

```dockerfile
# ✅ GOOD: Non-root user
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser
USER appuser

# ✅ GOOD: Minimal base image
FROM node:20-alpine
# or
FROM node:20-distroless

# ✅ GOOD: No secrets in Dockerfile
# Use build secrets or runtime environment variables
RUN --mount=type=secret,id=mysecret cat /run/secrets/mysecret

# ✅ GOOD: Multi-stage builds
FROM node:20-alpine AS builder
# ... build steps ...
FROM node:20-alpine AS runner
COPY --from=builder /app/dist ./dist

# ✅ GOOD: Health checks
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node healthcheck.js || exit 1

# ✅ GOOD: Specific image tags
FROM node:20.11.0-alpine
# Not: FROM node:latest

# ✅ GOOD: .dockerignore
# node_modules
# .git
# .env
# *.md
# Dockerfile
# docker-compose.yml
```

### Security Anti-Patterns

```dockerfile
# ❌ BAD: Running as root
# No USER directive

# ❌ BAD: Using latest tag
FROM node:latest

# ❌ BAD: Hardcoded secrets
ENV DATABASE_PASSWORD=mysecretpassword

# ❌ BAD: Installing unnecessary packages
RUN apt-get update && apt-get install -y vim curl wget git build-essential

# ❌ BAD: Copying everything
COPY . .

# ❌ BAD: No health check
# Missing HEALTHCHECK directive
```

## Image Optimization

### Layer Caching Strategy

```dockerfile
# ✅ GOOD: Copy dependency files first
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .

# ❌ BAD: Copy everything before installing dependencies
COPY . .
RUN npm ci
```

### Build Cache Optimization

```dockerfile
# Use --mount=type=cache for build caches
RUN --mount=type=cache,target=/root/.npm \
    npm ci

RUN --mount=type=cache,target=/root/.cache/pip \
    pip install -r requirements.txt

RUN --mount=type=cache,target=/root/.gradle \
    ./gradlew build
```

## Production Checklist

Before deploying to production:

- [ ] Multi-stage build implemented
- [ ] Non-root user configured
- [ ] Health check added
- [ ] Specific image tags (not latest)
- [ ] .dockerignore configured
- [ ] No secrets in Dockerfile
- [ ] Minimal base image (alpine/distroless)
- [ ] Resource limits set
- [ ] Logging configured
- [ ] Environment variables documented
- [ ] Image size < target
- [ ] Security scan passed (trivy, grype)
- [ ] Docker Compose for local development
- [ ] Docker Compose for production

## Real-World Impact

**Before this skill:**
- Large Docker images (1GB+)
- Running as root
- No health checks
- Slow builds due to poor caching
- Security vulnerabilities

**After this skill:**
- Optimized images (< 200MB for Node.js)
- Non-root user for security
- Health checks for reliability
- Fast builds with layer caching
- Security best practices implemented

## Cross-References

- **`kubernetes-orchestration`** - For deploying containers to Kubernetes
- **`devops-pipeline`** - For CI/CD with Docker
- **`aws-serverless`** - For AWS ECS/EKS deployment
- **`terraform-iac`** - For infrastructure provisioning

## References

- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Docker Security](https://docs.docker.com/engine/security/)
- [Docker Compose](https://docs.docker.com/compose/)
