---
name: microservices-architecture
description: Use when designing and implementing microservices architectures, domain-driven design, service boundaries, event-driven communication, and distributed systems patterns. Includes CQRS, sagas, service discovery, and API gateway patterns. Based on Certified Microservices Architect (CMA) certification and microservices best practices.
license: MIT
---

# Microservices Architecture Skill — Backend Developer

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

**Do NOT use this skill when:**
- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Microservices Principles

### The 12-Factor App

```
┌─────────────────────────────────────────────────────────────┐
│              The 12-Factor App Principles                   │
├─────────────────────────────────────────────────────────────┤
│  1. Codebase: One codebase tracked in revision control      │
│  2. Dependencies: Explicitly declare and isolate dependencies│
│  3. Config: Store config in the environment                 │
│  4.Backing services: Treat backing services as attached     │
│     resources                                               │
│  5. Build, release, run: Strictly separate build and run    │
│     stages                                                  │
│  6. Processes: Execute the app as one or more stateless     │
│     processes                                               │
│  7. Port binding: Export services via port binding          │
│  8. Concurrency: Scale out via the process model            │
│  9. Disposability: Maximize robustness with fast startup    │
│     and graceful shutdown                                   │
│  10. Dev/prod parity: Keep development, staging, production │
│      as similar as possible                                 │
│  11. Logs: Treat logs as event streams                      │
│  12. Admin processes: Run admin/management tasks as one-off │
│      processes                                              │
└─────────────────────────────────────────────────────────────┘
```

### Service Boundaries

```
┌─────────────────────────────────────────────────────────────┐
│              Service Boundary Guidelines                    │
├─────────────────────────────────────────────────────────────┤
│  1. Business capability: Service represents a business area │
│  2. Single responsibility: Service has one core function    │
│  3. Autonomous: Service can deploy independently            │
│  4. Isolated data: Service owns its data                    │
│  5. Loose coupling: Minimal dependencies between services   │
│  6. High cohesion: Related functionality together           │
│  7. Team ownership: One team owns one service               │
│  8. Technology agnostic: Service can use different tech     │
└─────────────────────────────────────────────────────────────┘
```

## Domain-Driven Design

### Bounded Context

```
┌─────────────────────────────────────────────────────────────┐
│              Bounded Context Example                        │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐│
│  │  Auth Context   │  │  Order Context  │  │ Inventory    ││
│  │                 │  │                 │  │ Context      ││
│  │ - Users         │  │ - Orders        │  │ - Products   ││
│  │ - Roles         │  │ - Cart          │  │ - Stock      ││
│  │ - Permissions   │  │ - Payment       │  │ - Suppliers  ││
│  └─────────────────┘  └─────────────────┘  └──────────────┘│
│         │                     │                    │        │
│         └─────────────────────┴────────────────────┘        │
│                              │                              │
│                      ┌───────▼───────┐                      │
│                      │  API Gateway  │                      │
│                      └───────────────┘                      │
└─────────────────────────────────────────────────────────────┘
```

### Domain Events

```typescript
// Domain Event
interface DomainEvent {
  id: string;
  aggregateId: string;
  timestamp: Date;
  version: number;
}

// OrderPlaced Event
interface OrderPlaced extends DomainEvent {
  type: 'OrderPlaced';
  orderId: string;
  customerId: string;
  items: OrderItem[];
  total: number;
}

// Event Handler
class OrderPlacedHandler {
  async handle(event: OrderPlaced) {
    // Send confirmation email
    await emailService.sendOrderConfirmation(
      event.customerId,
      event.orderId
    );
    
    // Update inventory
    await inventoryService.reserveStock(event.items);
    
    // Log for analytics
    await analyticsService.trackOrderPlaced(event);
  }
}
```

## Communication Patterns

### Synchronous Communication

```
┌─────────────────────────────────────────────────────────────┐
│              Synchronous Communication                      │
├─────────────────────────────────────────────────────────────┤
│  Client ──HTTP/REST──> API Gateway ──HTTP/REST──> Service   │
│                                                              │
│  Pros: Simple, easy to understand                           │
│  Cons: Tight coupling, failure propagation                  │
│  Use when: Low latency required, simple workflows           │
└─────────────────────────────────────────────────────────────┘
```

### Asynchronous Communication

```
┌─────────────────────────────────────────────────────────────┐
│              Asynchronous Communication                     │
├─────────────────────────────────────────────────────────────┤
│  Publisher ──Message Queue──> Subscriber 1                  │
│                             └─> Subscriber 2                │
│                             └─> Subscriber 3                │
│                                                              │
│  Pros: Loose coupling, scalability, resilience              │
│  Cons: Complexity, eventual consistency                     │
│  Use when: Decoupling needed, high volume, complex workflows│
└─────────────────────────────────────────────────────────────┘
```

## CQRS Pattern

```
┌─────────────────────────────────────────────────────────────┐
│              CQRS Pattern                                   │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐          ┌─────────────────┐              │
│  │   Command    │─────────>│  Write Model    │              │
│  │   Handlers   │          │  (Aggregate)    │              │
│  └──────────────┘          └─────────────────┘              │
│                                     │                        │
│                                     ▼                        │
│                             ┌──────────────┐                │
│                             │  Event Store │                │
│                             └──────────────┘                │
│                                     │                        │
│                                     ▼                        │
│  ┌──────────────┐          ┌─────────────────┐              │
│  │   Query      │─────────>│  Read Model     │              │
│  │   Handlers   │          │  (Projections)  │              │
│  └──────────────┘          └─────────────────┘              │
│                                     │                        │
│                                     ▼                        │
│                             ┌──────────────┐                │
│                             │  Read Store  │                │
│                             │  (Optimized) │                │
│                             └──────────────┘                │
└─────────────────────────────────────────────────────────────┘
```

## Saga Pattern

### Saga with Compensation

```
┌─────────────────────────────────────────────────────────────┐
│              Saga with Compensation                         │
├─────────────────────────────────────────────────────────────┤
│  1. Create Order ──> 2. Reserve Inventory                   │
│     │                      │                                │
│     │                      ▼                                │
│     │              3a. Inventory Reserved                   │
│     │                      │                                │
│     │                      ▼                                │
│     │              4. Process Payment                       │
│     │                      │                                │
│     │                      ▼                                │
│     │              5. Payment Processed                     │
│     │                      │                                │
│     │                      ▼                                │
│     └──────────────> 6. Order Confirmed                     │
│                                                              │
│  On Failure:                                                 │
│  - Cancel Payment (compensation)                            │
│  - Release Inventory (compensation)                         │
│  - Cancel Order (compensation)                              │
└─────────────────────────────────────────────────────────────┘
```

## Circuit Breaker Pattern

```typescript
class CircuitBreaker {
  private state: 'closed' | 'open' | 'half-open' = 'closed';
  private failureCount = 0;
  private successCount = 0;
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      throw new Error('Circuit breaker is open');
    }
    
    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  private onSuccess() {
    this.failureCount = 0;
    this.successCount++;
    
    if (this.state === 'half-open') {
      this.state = 'closed';
    }
  }
  
  private onFailure() {
    this.failureCount++;
    
    if (this.failureCount >= this.threshold) {
      this.state = 'open';
      setTimeout(() => {
        this.state = 'half-open';
      }, this.timeout);
    }
  }
}
```

## Real-World Impact

**Before this skill:**
- Monolithic architecture
- Tight coupling between components
- Deployment bottlenecks
- Single point of failure
- Scaling challenges

**After this skill:**
- Well-designed microservices
- Loose coupling and high cohesion
- Independent deployments
- Fault isolation
- Scalable and resilient systems

## Cross-References

- **`domain-driven`** - For domain model design
- **`api-design`** - For microservice API specifications
- **`devops-pipeline`** - For CI/CD of microservices

## References

- [Microservices by Martin Fowler](https://martinfowler.com/articles/microservices.html)
- [Domain-Driven Design by Eric Evans](https://www.domainlanguage.com/ddd/)
- [CMA Certification](https://microservices.io/)
- [The Twelve-Factor App](https://12factor.net/)
