# GitHub Actions CI/CD Skill

Comprehensive guidance for creating and optimizing GitHub Actions workflows, including workflow triggers, job orchestration, runner management, matrix builds, environment protection, secret management, artifact handling, caching strategies, concurrency controls, reusable workflows, composite actions, Docker/npm action development, marketplace integration, workflow optimization, security hardening, and production CI/CD best practices.

## Overview

This skill provides production-ready patterns for GitHub Actions CI/CD based on GitHub official documentation and GitHub Certified: GitHub Actions standards. It covers everything from basic workflow creation to advanced action composition and security hardening.

## What's Included

### Workflow Fundamentals

- **Triggers**: push, pull_request, schedule, workflow_dispatch, repository_dispatch, release, workflow_run
- **Jobs and Steps**: Sequential, parallel, conditional execution with `needs` dependencies
- **Runners**: ubuntu-latest, windows-latest, macos-latest, self-hosted with version pinning
- **Matrix Builds**: Multi-version testing across Node.js, Python, OS combinations

### Advanced Features

- **Environments**: Protection rules, required reviewers, wait timers, deployment URLs
- **Secrets**: Scoped injection, rotation patterns, environment-specific secrets
- **Artifacts**: Upload/download between jobs with retention policies
- **Caching**: npm, pip, gradle, maven dependency caching with hash-based keys
- **Concurrency**: Group-based controls with cancel-in-progress for duplicate prevention

### Action Development

- **Composite Actions**: Step reuse within repositories with input/output passing
- **Docker Actions**: Container-based actions with Dockerfile and action.yml configuration
- **npm Actions**: JavaScript/TypeScript actions published to npm registry
- **Marketplace**: Discovery, evaluation, and integration of community actions

### Security and Optimization

- **Security Hardening**: Dependency review, CodeQL analysis, secret scanning
- **Permission Scoping**: Least privilege principle with workflow and job-level permissions
- **Workflow Optimization**: Parallel execution, path filtering, conditional runs
- **Self-Hosted Runners**: Setup, registration, labeling, and isolation patterns

## When to Use

Use this skill when working with GitHub Actions workflows, CI/CD pipeline configuration, action development, or workflow optimization. See SKILL.md for detailed use cases and anti-patterns.

## Quick Start

### Basic CI Workflow

```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm test
```

### Complete CI/CD Pipeline

See SKILL.md for comprehensive examples including:

- Multi-stage CI/CD with security scanning
- Matrix builds across multiple environments
- Docker image building and registry pushing
- Environment-protected deployments
- Reusable workflow composition

## Key Concepts

| Concept         | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| **Workflow**    | YAML file defining the complete CI/CD pipeline              |
| **Job**         | A set of steps executed on the same runner                  |
| **Step**        | Individual command or action within a job                   |
| **Runner**      | Machine that executes jobs (GitHub-hosted or self-hosted)   |
| **Action**      | Reusable unit of work (Docker, npm, or composite)           |
| **Artifact**    | File(s) persisted between jobs or after workflow completion |
| **Cache**       | Cached dependencies to speed up subsequent runs             |
| **Environment** | Named deployment target with protection rules               |
| **Secret**      | Encrypted variable accessible to workflows                  |
| **Matrix**      | Strategy to run jobs across multiple parameter combinations |

## File Structure

```
github-actions-cicd/
├── SKILL.md      # Complete skill documentation with examples
└── README.md     # This file
```

## Cross-References

- **`docker-containerization`** - Docker action development and containerization
- **`kubernetes-orchestration`** - Kubernetes deployment workflows
- **`devops-pipeline`** - Broader CI/CD pipeline design patterns
- **`security-auditor`** - Security scanning integration
- **`testing-strategy`** - Test automation in workflows

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Certification](https://resources.github.com/learn/certifications/)
- [GitHub Marketplace Actions](https://github.com/marketplace?type=actions)
- [GitHub Actions Security](https://docs.github.com/en/actions/security-guides)
- [GitHub Actions Best Practices](https://docs.github.com/en/actions/learn-github-actions/best-practices-for-github-actions)

## License

MIT
