# Microservices Architecture Skill

**Version:** 1.0.0
**Status:** Active
**License:** MIT

## Overview

This skill provides comprehensive guidance for designing and implementing microservices architectures. It covers domain-driven design, service boundaries, event-driven communication, CQRS, sagas, service discovery, and distributed systems patterns following CMA certification standards.

## When to Use

**Use this skill when:**
- Designing microservices architecture
- Defining service boundaries and domains
- Implementing domain-driven design patterns
- Creating event-driven communication systems
- Implementing CQRS pattern
- Designing sagas for distributed transactions
- Setting up service discovery
- Implementing API gateway patterns
- Designing distributed caching strategies
- Implementing circuit breakers
- Setting up distributed tracing
- Designing service mesh architectures
- Implementing event sourcing patterns
- Creating resilient distributed systems
- Setting up container orchestration (Kubernetes)
- Implementing API versioning strategies
- Designing database per service pattern
- Implementing sidecar patterns
- Setting up service mesh (Istio, Linkerd)
- Designing observability for microservices
- Implementing distributed logging
- Setting up distributed tracing (Jaeger, Zipkin)
- Designing fault tolerance patterns

## What It Covers

### Microservices Principles
- **12-Factor App** - Cloud-native application principles
- **Service Boundaries** - Defining domains and boundaries
- **Domain-Driven Design** - Bounded contexts, aggregates, events
- **Communication Patterns** - Synchronous and asynchronous

### Architecture Patterns
- **CQRS** - Command and Query Responsibility Segregation
- **Saga Pattern** - Distributed transaction management
- **Circuit Breaker** - Fault tolerance
- **Sidecar** - Sidecar pattern for cross-cutting concerns

### Infrastructure
- **Service Discovery** - Dynamic service discovery
- **API Gateway** - Centralized entry point
- **Service Mesh** - Service-to-service communication
- **Container Orchestration** - Kubernetes management

### Resilience
- **Circuit Breakers** - Fail fast, recover
- **Retry Patterns** - Automatic retries
- **Bulkheads** - Isolate failures
- **Timeouts** - Prevent hanging calls

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
- Service boundary examples
- Domain event patterns
- CQRS implementation
- Saga patterns

## References

- [Microservices by Martin Fowler](https://martinfowler.com/articles/microservices.html)
- [Domain-Driven Design by Eric Evans](https://www.domainlanguage.com/ddd/)
- [CMA Certification](https://microservices.io/)
- [The Twelve-Factor App](https://12factor.net/)

## Related Skills

- **`domain-driven`** - For domain model design
- **`api-design`** - For microservice API specifications
- **`devops-pipeline`** - For CI/CD of microservices

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
