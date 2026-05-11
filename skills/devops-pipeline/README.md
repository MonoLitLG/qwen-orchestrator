# DevOps Pipeline Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for designing and implementing CI/CD pipelines, deployment strategies, infrastructure as code, monitoring setup, and DevOps best practices. It includes GitHub Actions, Docker, Kubernetes, and deployment patterns.

## When to Use

**Use this skill when:**

- Designing CI/CD pipelines
- Setting up deployment strategies
- Configuring infrastructure as code
- Implementing monitoring and alerting
- Optimizing deployment processes
- Managing cloud infrastructure

## What It Covers

### CI/CD Pipeline Stages

- **Checkout** - Get source code
- **Install Dependencies** - npm ci, pip install, etc.
- **Lint & Format Check** - Code quality checks
- **Type Checking** - Static type analysis
- **Unit Tests** - Fast, isolated tests
- **Integration Tests** - Module interactions
- **Build** - Compile and package
- **Security Scan** - Vulnerability scanning
- **E2E Tests** - Complete workflows
- **Deploy** - Release to environment

### Deployment Strategies

- **Blue-Green** - Zero-downtime deployments
- **Canary** - Gradual rollout
- **Rolling Update** - Incremental updates

### Infrastructure as Code

- **Terraform** - Declarative IaC
- **AWS CloudFormation** - AWS resource management

### Monitoring and Alerting

- **Prometheus** - Metrics collection
- **Alert Rules** - Automated alerts

### Docker Best Practices

- **Multi-Stage Builds** - Smaller images
- **Docker Compose** - Local development

### Kubernetes Resources

- **Deployment** - Pod management
- **Service** - Network exposure

## Quick Start

```bash
# Read the skill
cat SKILL.md

# Review examples
cat examples/*.md

# Check references
cat references/*.md
```

## Examples

See `examples/` for:

- Complete CI/CD pipelines
- Deployment strategy examples
- Infrastructure as code templates
- Monitoring configurations

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Best Practices](https://docs.docker.com/develop/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [DevOps Best Practices](https://cloud.google.com/architecture/devops/devops-best-practices)

## Related Skills

- **`testing-strategy`** - For test coverage and quality gates
- **`security-auditor`** - For security scans in pipeline
- **`architecture-patterns`** - For scalable infrastructure design

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
