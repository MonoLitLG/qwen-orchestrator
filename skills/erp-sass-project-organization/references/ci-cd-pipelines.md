# CI/CD Pipeline Organization

## Overview

CI/CD pipelines for ERP/SaaS systems must balance speed, reliability, and comprehensive testing. This document outlines pipeline patterns and best practices.

## Pipeline Stages

```
┌─────────────────────────────────────────────────────────────┐
│                    CI/CD Pipeline                            │
├─────────────────────────────────────────────────────────────┤
│  1. Checkout                                                 │
│  2. Install Dependencies                                     │
│  3. Lint & Format Check                                      │
│  4. Type Checking                                            │
│  5. Unit Tests                                               │
│  6. Integration Tests                                        │
│  7. Build                                                    │
│  8. E2E Tests (optional)                                     │
│  9. Deploy (Staging)                                         │
│  10. E2E Tests (Staging)                                     │
│  11. Deploy (Production)                                     │
└─────────────────────────────────────────────────────────────┘
```

## Pipeline Configuration

### GitHub Actions Template

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '18'
  NPM_VERSION: '9'

jobs:
  # Stage 1: Lint and Type Check
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck

  # Stage 2: Unit Tests
  test-unit:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run test:unit

  # Stage 3: Integration Tests
  test-integration:
    runs-on: ubuntu-latest
    needs: test-unit
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run test:integration

  # Stage 4: Build
  build:
    runs-on: ubuntu-latest
    needs: test-integration
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run build

  # Stage 5: Deploy Staging
  deploy-staging:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/develop'
    environment: staging
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:staging

  # Stage 6: E2E Staging
  test-e2e-staging:
    runs-on: ubuntu-latest
    needs: deploy-staging
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run test:e2e -- --env=staging

  # Stage 7: Deploy Production
  deploy-production:
    runs-on: ubuntu-latest
    needs: test-e2e-staging
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:production
```

### GitLab CI Template

```yaml
# .gitlab-ci.yml
stages:
  - lint
  - test
  - build
  - deploy

variables:
  NODE_VERSION: "18"
  NPM_VERSION: "9"

lint:
  stage: lint
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run lint
    - npm run typecheck

test-unit:
  stage: test
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run test:unit
  coverage: '/Lines : \d+\.\d+/'

test-integration:
  stage: test
  image: node:${NODE_VERSION}
  services:
    - postgres:15
  variables:
    DATABASE_URL: "postgresql://postgres:test@postgres:5432/test"
  script:
    - npm ci
    - npm run test:integration

build:
  stage: build
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

deploy-staging:
  stage: deploy
  image: node:${NODE_VERSION}
  environment:
    name: staging
  only:
    - develop
  script:
    - npm ci
    - npm run build
    - npm run deploy:staging

deploy-production:
  stage: deploy
  image: node:${NODE_VERSION}
  environment:
    name: production
  only:
    - main
  script:
    - npm ci
    - npm run build
    - npm run deploy:production
  when: manual
```

## Environment Configuration

### Environment Structure

```
config/
├── base.ts           # Base configuration
├── development.ts    # Development settings
├── staging.ts        # Staging settings
├── production.ts     # Production settings
└── test.ts           # Test settings
```

### Configuration Pattern

```typescript
// config/base.ts
export const baseConfig = {
  appName: process.env.APP_NAME || 'ERP System',
  version: process.env.npm_package_version || '1.0.0',
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
  },
};

// config/development.ts
import { baseConfig } from './base';

export const developmentConfig = {
  ...baseConfig,
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
  },
  api: {
    debug: true,
  },
};

// config/production.ts
import { baseConfig } from './base';

export const productionConfig = {
  ...baseConfig,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
  },
  api: {
    debug: false,
  },
};
```

## Deployment Strategies

### Blue-Green Deployment

```
┌─────────────────┐      ┌─────────────────┐
│  Blue (Current) │      │  Green (New)    │
│                 │      │                 │
│  v1.0.0         │─────►│  v1.1.0         │
│                 │      │                 │
└─────────────────┘      └─────────────────┘
      │                         │
      └──────────┬──────────────┘
                 │
           ┌─────▼─────┐
           │  Load     │
           │ Balancer  │
           └───────────┘
```

### Canary Deployment

```
┌─────────────────┐
│  Main Service   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌───▼───┐
│ Blue  │ │Green  │
│ (90%) │ │(10%)  │
└───────┘ └───────┘
```

### Rollback Strategy

```yaml
# .github/workflows/rollback.yml
name: Rollback Deployment

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Version to rollback to'
        required: true

jobs:
  rollback:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run rollback -- --version=${{ github.event.inputs.version }}
```

## Testing Gates

### Pre-deployment Checks

```bash
#!/bin/bash
# scripts/pre-deploy-checks.sh

echo "Running pre-deployment checks..."

# Run linting
npm run lint || exit 1

# Run type checking
npm run typecheck || exit 1

# Run tests
npm run test || exit 1

# Build application
npm run build || exit 1

echo "All checks passed!"
```

### Post-deployment Verification

```bash
#!/bin/bash
# scripts/post-deploy-verify.sh

echo "Verifying deployment..."

# Check health endpoint
curl -f http://localhost:3000/health || exit 1

# Check database connection
npm run db:check || exit 1

# Run smoke tests
npm run test:smoke || exit 1

echo "Deployment verified!"
```

## Monitoring and Alerts

### Health Checks

```typescript
// src/health/health.controller.ts
@Controller('health')
export class HealthController {
  @Get()
  checkHealth(): HealthCheck {
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: this.databaseService.check(),
        cache: this.cacheService.check(),
        externalApi: this.apiService.check(),
      },
    };
  }
}
```

### Alerting Pipeline

```yaml
# .github/workflows/alerting.yml
name: Deployment Alerts

on:
  workflow_run:
    workflows: ["CI/CD Pipeline"]
    types:
      - completed

jobs:
  notify:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - uses: actions/checkout@v3
      - run: npm run notify:slack -- --status=failure
      - run: npm run notify:email -- --status=failure
```

## Performance Considerations

### Pipeline Optimization

```yaml
# Use caching
jobs:
  build:
    steps:
      - uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

# Parallelize tests
jobs:
  test:
    strategy:
      matrix:
        node-version: [16, 18, 20]
```

### Build Optimization

```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          utils: ['lodash', 'date-fns'],
        },
      },
    },
  },
});
```

## Common Anti-Patterns

### Too Many Parallel Jobs

```yaml
# ❌ BAD: Over-parallelization
jobs:
  test-1: ...
  test-2: ...
  # ... 50 more test jobs

# ✅ GOOD: Grouped tests
jobs:
  test:
    strategy:
      matrix:
        suite: ['unit', 'integration', 'e2e']
```

### No Caching

```yaml
# ❌ BAD: No caching
jobs:
  build:
    steps:
      - run: npm ci  # Always downloads

# ✅ GOOD: With caching
jobs:
  build:
    steps:
      - uses: actions/cache@v3
        with:
          path: ~/.npm
          key: npm-${{ hashFiles('package-lock.json') }}
      - run: npm ci
```

### No Rollback

```yaml
# ❌ BAD: No rollback option
jobs:
  deploy:
    steps:
      - run: npm run deploy

# ✅ GOOD: With rollback
jobs:
  deploy:
    steps:
      - run: npm run deploy
      - run: npm run verify
      - run: npm run rollback -- --version=prev
        if: failure()
```

## References

- [GitHub Actions Best Practices](https://docs.github.com/en/actions/learn-github-actions/best-practices-for-workflows)
- [GitLab CI/CD Best Practices](https://docs.gitlab.com/ee/ci/best_practices.html)
- [DevOps Pipeline Patterns](https://martinfowler.com/articles/pipeline.html)
