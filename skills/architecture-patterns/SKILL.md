---
name: architecture-patterns
description: Use when designing system architecture, selecting architectural patterns, making trade-off decisions, and implementing scalable, maintainable systems. Includes layered architecture, microservices, domain-driven design, and cloud architecture patterns. Based on software architecture certifications and industry-standard architecture patterns.
license: MIT
---

# Architecture Patterns Skill — System Design and Architecture

## Overview

This skill provides comprehensive guidance for designing system architecture, selecting architectural patterns, making trade-off decisions, and implementing scalable, maintainable systems. It includes layered architecture, microservices, domain-driven design, and cloud architecture patterns. Based on software architecture certifications and industry-standard architecture patterns.

## When to Use

**Use this skill when:**

- Designing new system architecture from scratch
- Selecting architectural patterns for specific requirements
- Making trade-off decisions between different approaches
- Refactoring legacy systems to improve architecture
- Scaling existing systems to handle growth
- Planning cloud infrastructure architecture
- Implementing layered architecture patterns
- Designing microservices architectures
- Creating domain-driven design bounded contexts
- Implementing event-driven architectures
- Setting up CQRS patterns
- Building feature-sliced design structures
- Creating architecture decision records (ADRs)
- Implementing clean architecture principles
- Designing serverless architectures
- Building distributed systems patterns
- Setting up API gateway patterns
- Implementing circuit breaker patterns
- Creating service mesh architectures
- Designing event sourcing patterns
- Building Saga patterns for distributed transactions
- Implementing repository patterns
- Creating domain models with entities and value objects

**Do NOT use this skill when:**

- Writing specific code implementation (use developer skill or specific framework skill)
- Database schema design (use database design skill)
- API endpoint specification (use api-design skill)
- Writing tests (use testing-strategy skill)
- Implementing features (use implementer agent)

## Architectural Patterns

### Layered Architecture

```
┌─────────────────────────────────────┐
│     Presentation Layer              │  Controllers, Views, DTOs
├─────────────────────────────────────┤
│     Application Layer               │  Use cases, Services
├─────────────────────────────────────┤
│     Domain Layer                    │  Entities, Value Objects
├─────────────────────────────────────┤
│     Infrastructure Layer            │  DB, APIs, External Services
└─────────────────────────────────────┘
    Dependencies point INWARD
```

**When to Use:**

- Enterprise applications with complex business logic
- Projects requiring clear module boundaries
- Teams needing explicit architecture guidance

**Pros:**

- Clear separation of concerns
- Easy to test each layer independently
- Dependencies point inward (stability)

**Cons:**

- Can become rigid for complex domains
- May lead to anemic domain models

### Domain-Driven Design (DDD)

```
┌─────────────────────────────────────────────────────────────┐
│                     DDD Layers                              │
├─────────────────────────────────────────────────────────────┤
│  Presentation Layer (Controllers, APIs)                     │
│  Application Layer (Use Cases, Services)                    │
│  Domain Layer (Entities, Value Objects, Domain Services)    │
│  Infrastructure Layer (Repositories, External APIs)         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  Bounded Contexts                           │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Sales     │  │ Inventory   │  │ Accounting  │         │
│  │  Context    │  │  Context    │  │  Context    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

**When to Use:**

- Complex business domains
- Multiple business units with distinct models
- Need for clear domain boundaries

**Key Concepts:**

- **Bounded Context**: Clear boundary around a domain model
- **Entities**: Objects with identity and continuity
- **Value Objects**: Objects defined by their values
- **Aggregates**: Cluster of objects treated as a unit
- **Repositories**: Abstraction over domain collections

### Microservices Pattern

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Inventory      │  │   Sales         │  │ Accounting      │
│  Service        │  │  Service        │  │  Service        │
└────────┬────────┘  └────────┬────────┘  └────────┬────────┘
         │                    │                    │
         └────────────────────┴────────────────────┘
                              │
                   ┌──────────▼──────────┐
                   │  API Gateway        │
                   │  (Authentication,   │
                   │   Rate Limiting)    │
                   └─────────────────────┘
```

**When to Use:**

- Large organizations with multiple teams
- Need for independent scaling
- Different technology requirements per module

**Pros:**

- Independent deployment
- Technology diversity per service
- Team autonomy

**Cons:**

- Operational complexity
- Network latency
- Distributed transaction challenges

### Event-Driven Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Order      │────>│  Event      │────>│  Inventory  │
│  Service    │     │  Bus        │     │  Service    │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                           ├────>┌─────────────┐
                           │     │  Notification│
                           │     │  Service    │
                           │     └─────────────┘
                           │
                           ├────>┌─────────────┐
                           │     │  Analytics  │
                           │     │  Service    │
                           │     └─────────────┘
                           │
                           └────>┌─────────────┐
                                 │  Reporting  │
                                 │  Service    │
                                 └─────────────┘
```

**When to Use:**

- High-throughput systems
- Decoupled services
- Real-time processing needs

**Pros:**

- High scalability
- Loose coupling
- Resilience to failures

**Cons:**

- Complex debugging
- Eventual consistency
- Operational overhead

### CQRS (Command Query Responsibility Segregation)

```
┌─────────────────┐
│   Commands      │    Write Model    ┌───────────┐
│   (POST, PUT)   │─────────────────►│  Database │
└─────────────────┘                  └───────────┘

┌─────────────────┐
│   Queries       │    Read Model     ┌───────────┐
│   (GET)         │─────────────────►│  Read DB  │
└─────────────────┘                  └───────────┘
```

**When to Use:**

- High-read, high-write systems
- Complex business rules
- Need for event sourcing

**Pros:**

- Optimized read and write models
- Better performance for complex domains
- Clear separation of concerns

**Cons:**

- Increased complexity
- Eventual consistency
- Additional infrastructure

### Feature-Sliced Design

```
features/
├── inventory/
│   ├── ui/              # UI components
│   ├── lib/             # Business logic
│   ├── api/             # API calls
│   └── config/          # Feature config
├── sales/
│   └── ...
shared/
└── core/                # Cross-cutting concerns
```

**When to Use:**

- Large frontend applications
- Multiple features managed by different teams
- Need for feature-level testing

**Pros:**

- Feature-level independence
- Easier to find related code
- Clear feature boundaries

**Cons:**

- Can lead to duplication
- Shared state challenges

## Architecture Decision Making

### Decision Framework

```
┌─────────────────────────────────────────────────────────────┐
│              Architecture Decision Flow                     │
├─────────────────────────────────────────────────────────────┤
│  1. Identify Requirements                                   │
│     ├─ Functional requirements                              │
│     ├─ Non-functional requirements                          │
│     └─ Constraints                                          │
│                                                             │
│  2. Generate Alternatives                                   │
│     ├─ Brainstorm solutions                                 │
│     ├─ Consider trade-offs                                  │
│     └─ Evaluate against requirements                        │
│                                                             │
│  3. Evaluate Alternatives                                   │
│     ├─ Performance                                          │
│     ├─ Scalability                                          │
│     ├─ Maintainability                                      │
│     ├─ Cost                                                 │
│     └─ Team expertise                                       │
│                                                             │
│  4. Make Decision                                           │
│     ├─ Select best option                                   │
│     ├─ Document rationale                                   │
│     └─ Define success criteria                              │
│                                                             │
│  5. Implement & Monitor                                     │
│     ├─ Build solution                                       │
│     ├─ Monitor metrics                                      │
│     └─ Iterate as needed                                    │
└─────────────────────────────────────────────────────────────┘
```

### Trade-Off Analysis

| Factor         | Option A | Option B | Decision                  |
| -------------- | -------- | -------- | ------------------------- |
| Performance    | High     | Medium   | A if performance critical |
| Scalability    | Medium   | High     | B if scaling needed       |
| Complexity     | Low      | High     | A if team small           |
| Cost           | High     | Low      | B if budget limited       |
| Team Expertise | High     | Low      | A if team knows A         |

## Cloud Architecture Patterns

### Serverless Web Pattern

```
┌─────────────┐     ┌─────────────┐
│  Cloud CDN  │────▶│   Global    │
│   (CDN)     │     │  Load Bal.  │
└─────────────┘     └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  Cloud Run  │
                    │  (or MIG)   │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
 ┌──────▼──────┐    ┌──────▼──────┐    ┌──────▼──────┐
 │  Cloud SQL  │    │ Memorystore │    │   Cloud     │
 │ (Database)  │    │   (Redis)   │    │  Storage    │
 └─────────────┘    └─────────────┘    └─────────────┘
```

**Components:**

- Cloud CDN: Static asset delivery
- Load Balancer: Traffic distribution
- Cloud Run: Serverless containers
- Cloud SQL: Managed relational DB
- Memorystore: Managed Redis
- Cloud Storage: Object storage

### Event-Driven Microservices

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Order     │────>│  Event      │────>│  Inventory  │
│  Service    │     │  Bus        │     │  Service    │
└─────────────┘     └──────┬──────┘     └─────────────┘
                           │
                           ├────>┌─────────────┐
                           │     │  Notification│
                           │     │  Service    │
                           │     └─────────────┘
                           │
                           └────>┌─────────────┐
                                 │  Analytics  │
                                 │  Service    │
                                 └─────────────┘
```

## Common Anti-Patterns

### ❌ Bad: Big Ball of Mud

```
┌─────────────────────────────────────────────────────────────┐
│                    Big Ball of Mud                         │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │  All components directly coupled to each other       │   │
│  │  ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐             │   │
│  │  │ A  ├──┤ B  ├──┤ C  ├──┤ D  ├──┤ E  │             │   │
│  │  └────┘  └────┘  └────┘  └────┘  └────┘             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Problems:**

- No clear boundaries
- Difficult to maintain
- Changes ripple through system

### ✅ Good: Clean Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Clean Architecture                       │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Presentation Layer (UI, APIs)           │   │
│  └──────────────────────────────────────────────────────┘   │
│                    ↓ (depends on)                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Application Layer (Use Cases)           │   │
│  └──────────────────────────────────────────────────────┘   │
│                    ↓ (depends on)                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                Domain Layer (Entities)               │   │
│  └──────────────────────────────────────────────────────┘   │
│                    ↓ (depends on)                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          Infrastructure Layer (DB, APIs)             │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Benefits:**

- Testable business logic
- Framework independent
- Maintainable structure

### ❌ Bad: Distributed Monolith

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Service A  │  │  Service B  │  │  Service C  │
│  (Monolith) │  │  (Monolith) │  │  (Monolith) │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       └────────────────┴────────────────┘
                    │
           ┌────────▼────────┐
           │  API Gateway    │
           └─────────────────┘
```

**Problems:**

- Still a monolith at core
- No independent deployment
- Operational complexity without benefits

### ✅ Good: Microservices

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Service A  │  │  Service B  │  │  Service C  │
│  (Service)  │  │  (Service)  │  │  (Service)  │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Benefits:**

- Independent deployment
- Technology diversity
- Team autonomy

## Real-World Impact

**Before this skill:**

- No clear architecture
- Tight coupling
- Difficult to scale
- High maintenance cost

**After this skill:**

- Clear architecture
- Loose coupling
- Scalable systems
- Maintainable codebase

## Cross-References

- **`designing-architecture`** - For architectural design process
- **`analyzing-projects`** - For architecture assessment
- **`devops-pipeline`** - For infrastructure deployment

## References

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - Robert C. Martin
- [Domain-Driven Design](https://martinfowler.com/books/ddd.html) - Eric Evans
- [Microservices Patterns](https://www.manning.com/books/microservices-patterns) - Chris Richardson
- [Patterns of Enterprise Application Architecture](https://martinfowler.com/books/eaa.html) - Martin Fowler
