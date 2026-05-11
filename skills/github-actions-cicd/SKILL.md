---
name: github-actions-cicd
description: Use when creating GitHub Actions workflows, implementing CI/CD pipelines, configuring runners, matrices, environments, secrets, artifacts, caching, concurrency, reusable workflows, composite actions, Docker/npm actions, marketplace integration, workflow optimization, security hardening, and production CI/CD best practices.
license: MIT
---

# GitHub Actions CI/CD Skill — Workflow Automation Best Practices

## Overview

This skill provides comprehensive guidance for **creating and optimizing GitHub Actions workflows**, including workflow triggers, job orchestration, runner management, matrix builds, environment protection, secret management, artifact handling, caching strategies, concurrency controls, reusable workflows, composite actions, Docker/npm action development, marketplace integration, workflow optimization, security hardening, and production CI/CD best practices. Based on GitHub official documentation and GitHub Certified: GitHub Actions standards.

## When to Use

**Use this skill when:**

- Creating GitHub Actions workflow files (.github/workflows/)
- Configuring workflow triggers (push, pull_request, schedule, workflow_dispatch, repository_dispatch)
- Defining jobs and steps with dependencies (needs)
- Selecting runners (ubuntu-latest, windows-latest, macos-latest, self-hosted)
- Implementing matrix builds for multiple Node.js, Python, or OS versions
- Configuring environments and protection rules
- Managing secrets and injecting them into workflows
- Uploading and downloading artifacts between jobs
- Caching dependencies (npm, pip, gradle, maven, pnpm, yarn)
- Setting concurrency controls and cancel-in-progress
- Creating reusable workflows for cross-repository sharing
- Building composite actions for step reuse
- Developing Docker container actions
- Publishing npm actions to GitHub Marketplace
- Discovering and integrating marketplace actions
- Implementing action composition patterns
- Optimizing workflow execution speed and cost
- Hardening workflow security (dependency review, code scanning, secret scanning)
- Configuring self-hosted runners
- Setting up permission scoping and least privilege
- Implementing production CI/CD best practices

**Do NOT use this skill when:**

- Containerizing applications with Docker (use docker-containerization skill)
- Deploying to Kubernetes (use kubernetes-orchestration skill)
- Setting up cloud infrastructure (use terraform-iac skill)
- Configuring monitoring and alerting (use monitoring skill)
- Writing application code (use backend-developer or frontend-developer skill)
- Managing database schema (use database-design skill)
- Implementing security policies (use security-auditor skill)
- Designing microservices architecture (use microservices-architecture skill)

**Why avoid:** GitHub Actions is for workflow automation and CI/CD, not application development, infrastructure provisioning, or runtime orchestration. Use the specialized skill for each domain.

## Core Concepts

### Workflow Trigger Types

| Trigger                 | Event                      | Use Case                       |
| ----------------------- | -------------------------- | ------------------------------ |
| **push**                | Code pushed to repository  | Build, test, deploy on commit  |
| **pull_request**        | PR opened/updated/synced   | CI checks before merge         |
| **schedule**            | Cron expression            | Scheduled maintenance, reports |
| **workflow_dispatch**   | Manual trigger             | On-demand deployments          |
| **repository_dispatch** | API-triggered              | External system integration    |
| **release**             | Release created/published  | Production deployment          |
| **workflow_run**        | Another workflow completes | Post-workflow actions          |
| **page_build**          | GitHub Pages build         | Documentation deployment       |

### Runner Types

| Runner             | OS                 | Use Case                          |
| ------------------ | ------------------ | --------------------------------- |
| **ubuntu-latest**  | Linux (Ubuntu)     | Default, most actions             |
| **windows-latest** | Windows            | .NET, Windows-specific builds     |
| **macos-latest**   | macOS              | iOS, Xcode builds                 |
| **self-hosted**    | Any                | Custom tools, GPU, cost reduction |
| **ubuntu-22.04**   | Linux (specific)   | Pinned OS version                 |
| **windows-2022**   | Windows (specific) | Pinned Windows version            |

### Job Dependency Patterns

| Pattern            | Configuration                                    | Use Case                                  |
| ------------------ | ------------------------------------------------ | ----------------------------------------- |
| **Sequential**     | `needs: [previous_job]`                          | Build → Test → Deploy                     |
| **Parallel**       | No `needs`                                       | Lint + Test + Security                    |
| **Conditional**    | `if: success() && needs.job.result == 'success'` | Deploy only if tests pass                 |
| **Matrix**         | `strategy.matrix`                                | Multi-version testing                     |
| **Fan-out/Fan-in** | Multiple jobs depend on one                      | Build → [Test A, Test B, Test C] → Deploy |

## Workflow Examples

### Complete CI/CD Pipeline

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

# ============================================
# Workflow Triggers
# ============================================
on:
  push:
    branches: [main, develop]
    paths:
      - 'src/**'
      - 'package.json'
      - 'package-lock.json'
      - '.github/workflows/**'
  pull_request:
    branches: [main, develop]
  workflow_dispatch:
    inputs:
      environment:
        description: 'Deployment environment'
        required: true
        default: 'staging'
        type: choice
        options:
          - staging
          - production
      skip_tests:
        description: 'Skip test suite'
        required: false
        default: false
        type: boolean

# ============================================
# Concurrency Control
# ============================================
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

# ============================================
# Workflow-level Permissions (Least Privilege)
# ============================================
permissions:
  contents: read
  security-events: write
  actions: read

# ============================================
# Environment Variables
# ============================================
env:
  NODE_VERSION: '20'
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  # ============================================
  # Job 1: Security Scanning (runs in parallel)
  # ============================================
  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    permissions:
      contents: read
      security-events: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Dependency Review
        uses: actions/dependency-review-action@v4
        if: github.event_name == 'pull_request'

      - name: Secret Scanning
        uses: gitleaks/gitleaks-action@v2

      - name: CodeQL Analysis
        uses: github/codeql-action/init@v3
        with:
          languages: javascript

      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3

  # ============================================
  # Job 2: Linting (runs in parallel)
  # ============================================
  lint:
    name: Lint & Type Check
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Run Type Check
        run: npm run typecheck

  # ============================================
  # Job 3: Unit Tests with Matrix
  # ============================================
  test:
    name: Test (Node ${{ matrix.node }}, ${{ matrix.os }})
    runs-on: ${{ matrix.os }}
    needs: [lint]
    strategy:
      fail-fast: false
      matrix:
        node: ['18', '20', '22']
        os: [ubuntu-latest, windows-latest, macos-latest]
        exclude:
          - node: '18'
            os: windows-latest
          - node: '18'
            os: macos-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js ${{ matrix.node }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
        env:
          CI: true

      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          files: ./coverage/lcov.info
          flags: unittests
          name: codecov-umbrella

  # ============================================
  # Job 4: Build with Caching
  # ============================================
  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: [test, security-scan]
    outputs:
      version: ${{ steps.version.outputs.version }}
      image_tag: ${{ steps.image_tag.outputs.tag }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Generate version
        id: version
        run: |
          VERSION=$(node -p "require('./package.json').version")
          echo "version=$VERSION" >> $GITHUB_OUTPUT

      - name: Build application
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build-output
          path: dist/
          retention-days: 7
          if-no-files-found: error

      - name: Set image tag
        id: image_tag
        run: echo "tag=${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ steps.version.outputs.version }}" >> $GITHUB_OUTPUT

  # ============================================
  # Job 5: Docker Build and Push
  # ============================================
  docker:
    name: Build and Push Docker Image
    runs-on: ubuntu-latest
    needs: [build]
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
          tags: |
            type=semver,pattern={{version}}
            type=sha,prefix=
            type=raw,value=latest,enable=${{ github.ref == 'refs/heads/main' }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # ============================================
  # Job 6: Deploy to Staging
  # ============================================
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: [docker]
    if: github.ref == 'refs/heads/main'
    environment:
      name: staging
      url: https://staging.example.com
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-output
          path: dist/

      - name: Deploy to staging
        run: |
          echo "Deploying to staging environment"
          # Add deployment commands here
        env:
          DEPLOY_TOKEN: ${{ secrets.STAGING_DEPLOY_TOKEN }}

      - name: Verify deployment
        run: |
          echo "Verifying staging deployment"
          # Add health check commands here

  # ============================================
  # Job 7: Deploy to Production
  # ============================================
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [deploy-staging]
    if: github.event_name == 'workflow_dispatch'
    environment:
      name: production
      url: https://example.com
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-output
          path: dist/

      - name: Deploy to production
        run: |
          echo "Deploying to production environment"
          # Add deployment commands here
        env:
          DEPLOY_TOKEN: ${{ secrets.PRODUCTION_DEPLOY_TOKEN }}

      - name: Notify deployment
        if: always()
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "Production deployment ${{ job.status }}",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Production Deployment* - ${{ job.status }}"
                  }
                }
              ]
            }
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

### Reusable Workflow

```yaml
# .github/workflows/reusable-deploy.yml
name: Reusable Deploy

on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
      image_tag:
        required: true
        type: string
      config_file:
        required: false
        type: string
        default: 'deploy-config.yml'
    secrets:
      DEPLOY_TOKEN:
        required: true
      DATABASE_URL:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: ${{ inputs.environment }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy to ${{ inputs.environment }}
        run: |
          echo "Deploying ${{ inputs.image_tag }} to ${{ inputs.environment }}"
          echo "Using config: ${{ inputs.config_file }}"
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

### Using Reusable Workflow

```yaml
# .github/workflows/call-deploy.yml
name: Call Deploy

on:
  workflow_dispatch:
    inputs:
      environment:
        required: true
        type: choice
        options:
          - staging
          - production

jobs:
  call-deploy:
    uses: ./.github/workflows/reusable-deploy.yml
    with:
      environment: ${{ github.event.inputs.environment }}
      image_tag: latest
    secrets:
      DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
      DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

## Composite Action

### Creating a Composite Action

```yaml
# .github/actions/setup-node-project/action.yml
name: 'Setup Node.js Project'
description: 'Complete Node.js project setup with caching'

inputs:
  node-version:
    description: 'Node.js version'
    required: false
    default: '20'
  cache:
    description: 'Enable npm caching'
    required: false
    default: 'true'

runs:
  using: 'composite'
  steps:
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ inputs.node-version }}
        cache: ${{ inputs.cache }}

    - name: Install dependencies
      shell: bash
      run: npm ci

    - name: Cache node_modules
      if: inputs.cache == 'true'
      uses: actions/cache@v4
      with:
        path: node_modules
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-
```

### Using Composite Action

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ./.github/actions/setup-node-project
        with:
          node-version: '20'
          cache: 'true'
      - run: npm run build
```

## Docker Action

### Creating a Docker Action

```dockerfile
# action.dockerfile
FROM node:20-alpine

WORKDIR /app

COPY action.yml .
COPY index.js .
COPY package.json .
COPY package-lock.json .

RUN npm ci --production

ENTRYPOINT ["node", "/app/index.js"]
```

```yaml
# action.yml
name: 'My Docker Action'
description: 'Custom Docker-based action'

inputs:
  input1:
    description: 'First input'
    required: true
  input2:
    description: 'Second input'
    required: false
    default: 'default-value'

outputs:
  output1:
    description: 'Output value'
    value: ${{ steps.run.outputs.output1 }}

runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.input1 }}
    - ${{ inputs.input2 }}
```

```javascript
// index.js
const core = require('@actions/core');
const { exec } = require('child_process_process');

async function run() {
  try {
    const input1 = core.getInput('input1');
    const input2 = core.getInput('input2');

    // Your action logic here
    const result = `Processed: ${input1} with ${input2}`;

    core.setOutput('output1', result);
    core.info(result);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
```

## Caching Strategies

### npm Cache

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-npm-
```

### pip Cache

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.cache/pip
    key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
    restore-keys: |
      ${{ runner.os }}-pip-
```

### Gradle Cache

```yaml
- uses: actions/cache@v4
  with:
    path: |
      ~/.gradle/caches
      ~/.gradle/wrapper
    key: ${{ runner.os }}-gradle-${{ hashFiles('**/*.gradle*', '**/gradle-wrapper.properties') }}
    restore-keys: |
      ${{ runner.os }}-gradle-
```

### Maven Cache

```yaml
- uses: actions/cache@v4
  with:
    path: ~/.m2/repository
    key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
    restore-keys: |
      ${{ runner.os }}-maven-
```

## Environment Protection Rules

```yaml
environment:
  name: production
  url: https://example.com
  protection_rules:
    required_reviewers: 2
    wait_timer: 5 # minutes
    bypass_actors:
      - type: Team
        name: platform-team
```

## Self-Hosted Runner Setup

### Runner Registration Script

```bash
#!/bin/bash
# Install self-hosted runner

# Download runner
curl -o actions-runner-linux-x64-2.315.0.tar.gz \
  -L https://github.com/actions/runner/releases/download/v2.315.0/actions-runner-linux-x64-2.315.0.tar.gz

# Extract
tar xzf actions-runner-linux-x64-2.315.0.tar.gz

# Configure
./config.sh --url https://github.com/OWNER/REPO \
  --token $RUNNER_TOKEN \
  --unattended \
  --replace \
  --work _work \
  --labels self-hosted

# Run as service
sudo ./svc.sh install
sudo ./svc.sh start
```

### Using Self-Hosted Runner

```yaml
jobs:
  build:
    runs-on: [self-hosted, linux, x64]
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
```

## Security Hardening

### Dependency Review

```yaml
- name: Dependency Review
  uses: actions/dependency-review-action@v4
  with:
    fail-on-severity: high
    deny-licenses: GPL-3.0, AGPL-3.0
    comment-summary-in-pr: always
```

### Code Scanning with CodeQL

```yaml
- name: Initialize CodeQL
  uses: github/codeql-action/init@v3
  with:
    languages: javascript, python
    queries: security-extended

- name: Perform CodeQL Analysis
  uses: github/codeql-action/analyze@v3
```

### Secret Scanning

```yaml
- name: Secret Scanning
  uses: gitleaks/gitleaks-action@v2
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Workflow Optimization

### Parallel Execution

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps: [...]

  test-unit:
    runs-on: ubuntu-latest
    steps: [...]

  test-integration:
    runs-on: ubuntu-latest
    steps: [...]

  build:
    runs-on: ubuntu-latest
    needs: [lint, test-unit, test-integration]
    steps: [...]
```

### Conditional Execution

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    if: |
      github.ref == 'refs/heads/main' &&
      github.event_name == 'push' &&
      success()
    steps: [...]
```

### Path Filtering

```yaml
on:
  push:
    paths:
      - 'src/**'
      - 'package.json'
      - '.github/workflows/**'
```

## Production Checklist

Before deploying workflows to production:

- [ ] Workflow triggers are specific (not `*`)
- [ ] Concurrency controls prevent duplicate runs
- [ ] Permissions follow least privilege principle
- [ ] Secrets are properly scoped and rotated
- [ ] Caching is configured for dependencies
- [ ] Artifacts have retention policies
- [ ] Environment protection rules are set
- [ ] Security scanning is enabled
- [ ] Workflow notifications are configured
- [ ] Retry logic for flaky steps
- [ ] Timeout limits on long-running jobs
- [ ] Self-hosted runners are isolated
- [ ] Composite actions are versioned
- [ ] Reusable workflows have input validation
- [ ] Docker actions use pinned base images
- [ ] npm actions are published to registry
- [ ] Marketplace actions are from trusted sources
- [ ] Workflow optimization reduces execution time
- [ ] Security hardening is comprehensive
- [ ] Production best practices are followed

## Real-World Impact

**Before this skill:**

- Manual deployment processes
- Inconsistent CI/CD pipelines
- No security scanning
- Slow workflow execution
- Poor artifact management

**After this skill:**

- Automated CI/CD pipelines
- Consistent workflow patterns
- Comprehensive security scanning
- Optimized workflow execution
- Efficient artifact management

## Cross-References

- **`docker-containerization`** - For Docker action development
- **`kubernetes-orchestration`** - For Kubernetes deployment workflows
- **`devops-pipeline`** - For broader CI/CD pipeline design
- **`security-auditor`** - For security scanning integration
- **`testing-strategy`** - For test automation in workflows

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Certification](https://resources.github.com/learn/certifications/)
- [GitHub Marketplace Actions](https://github.com/marketplace?type=actions)
- [GitHub Actions Security](https://docs.github.com/en/actions/security-guides)
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/learn-github-actions/best-practices-for-github-actions)
