# GraphQL API Design Skill

Comprehensive guidance for designing and implementing GraphQL APIs with schema-first or code-first approaches, resolver implementation, DataLoader patterns, subscriptions, Apollo Federation, error handling, authentication, authorization, pagination, and production best practices.

## Overview

This skill covers all aspects of GraphQL API implementation including:

- **Schema Design**: SDL patterns, type definitions (Object, Input, Interface, Union, Enum, Scalar), code-first vs schema-first approaches
- **Resolver Implementation**: Object resolvers, field resolvers, class-based resolvers, custom scalar resolvers
- **Data Loading**: DataLoader pattern for N+1 query prevention, batch loading, caching strategies
- **Error Handling**: GraphQLError, custom error classes, formatted errors, validation errors
- **Authentication**: JWT authentication, context-based auth, schema directives for authorization
- **Pagination**: Relay cursor-based pagination, offset-based pagination, filtering and sorting
- **Subscriptions**: WebSocket subscriptions, Server-Sent Events, PubSub patterns
- **Performance**: Query complexity analysis, depth limiting, persisted queries, response caching
- **Federation**: Apollo Federation for microservices, schema stitching for legacy integration
- **Server Setup**: Apollo Server, GraphQL Yoga, Express GraphQL, GraphQL Mesh configurations

## When to Use

Use this skill when working with GraphQL for:

- Designing GraphQL schemas with SDL
- Implementing queries, mutations, and subscriptions
- Preventing N+1 queries with DataLoader
- Setting up Apollo Federation for microservices
- Configuring authentication and authorization
- Implementing Relay-compliant pagination
- Optimizing query performance
- Setting up production-ready GraphQL servers

## Quick Reference

### Schema Design Approaches

| Approach               | Best For                               | Tools                               |
| ---------------------- | -------------------------------------- | ----------------------------------- |
| **Schema-First (SDL)** | Team collaboration, API contracts      | GraphQL Code Generator, graphql-tag |
| **Code-First**         | Rapid prototyping, TypeScript projects | type-graphql, Nexus, GraphQL Tools  |
| **Federation**         | Microservices, distributed teams       | Apollo Gateway, Apollo Router       |
| **Schema Stitching**   | Legacy integration, gradual migration  | Apollo Schema Stitching             |

### Server Framework Selection

| Framework           | Language | Key Features                                     |
| ------------------- | -------- | ------------------------------------------------ |
| **Apollo Server**   | Node.js  | Federation, caching, tracing, production-ready   |
| **GraphQL Yoga**    | Node.js  | Built-in subscriptions, PWA support, lightweight |
| **Express GraphQL** | Node.js  | Minimal, Express middleware integration          |
| **GraphQL Mesh**    | Node.js  | REST/GraphQL federation, multi-source            |
| **Strawberry**      | Python   | Python-native, async support, type inference     |
| **Graphene**        | Python   | Django/Flask integration, schema-first           |

### Pagination Pattern Selection

| Scenario                 | Pattern                                  |
| ------------------------ | ---------------------------------------- |
| Relay-compliant clients  | **Cursor-based pagination**              |
| Simple offset needs      | **Offset-based pagination**              |
| Infinite scroll          | **Cursor-based with forward pagination** |
| Traditional paginated UI | **Offset-based with page numbers**       |

### Performance Optimization Checklist

| Optimization          | Tool/Pattern                        |
| --------------------- | ----------------------------------- |
| N+1 prevention        | **DataLoader**                      |
| Query complexity      | **graphql-query-complexity**        |
| Query depth limiting  | **graphql-depth-limit**             |
| Response caching      | **Apollo response cache plugin**    |
| Persisted queries     | **Apollo persisted queries**        |
| Introspection control | **Environment-based configuration** |

## License

MIT
