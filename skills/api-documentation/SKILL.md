---
name: api-documentation
description: Use when creating API documentation, implementing OpenAPI specifications, writing Swagger documentation, creating GraphQL schemas, and generating SDKs. Includes documentation best practices, API versioning, and API documentation automation. Based on CPTD and OpenAPI Specification certifications.
license: MIT
---

# API Documentation Skill — API Specialist

## Overview

This skill provides comprehensive guidance for creating comprehensive API documentation. It covers OpenAPI specifications, Swagger documentation, GraphQL schemas, SDK generation, and API documentation best practices following CPTD and OpenAPI Specification certifications.

## When to Use

**Use this skill when:**

- Creating API documentation
- Implementing OpenAPI specifications
- Writing Swagger documentation
- Creating GraphQL schemas
- Generating SDKs from API specs
- Documenting RESTful APIs
- Documenting GraphQL APIs
- Creating API documentation sites
- Implementing API versioning documentation
- Creating API examples
- Writing API tutorials
- Documenting API authentication
- Documenting API error handling
- Creating API changelogs
- Implementing API documentation automation
- Creating API documentation templates
- Documenting API best practices
- Creating API documentation style guides
- Implementing API documentation testing
- Creating API documentation metrics
- Documenting API security requirements
- Creating API documentation for developers
- Implementing API documentation updates

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## OpenAPI Specification

### OpenAPI Structure

```yaml
openapi: 3.1.0
info:
  title: API Title
  description: API description
  version: 1.0.0
  contact:
    name: API Support
    email: support@example.com
    url: https://example.com/support
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server
paths:
  /users:
    get:
      summary: List all users
      operationId: listUsers
      tags:
        - users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserList'
        '401':
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
    post:
      summary: Create a new user
      operationId: createUser
      tags:
        - users
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        '201':
          description: User created
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '400':
          description: Bad request
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
        email:
          type: string
          format: email
    UserList:
      type: object
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/User'
        pagination:
          $ref: '#/components/schemas/Pagination'
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
security:
  - BearerAuth: []
```

### OpenAPI Best Practices

```
┌─────────────────────────────────────────────────────────────┐
│              OpenAPI Best Practices                         │
├─────────────────────────────────────────────────────────────┤
│  Naming:                                                    │
│  - Use nouns for resource names                             │
│  - Use plural for collections                               │
│  - Use camelCase for properties                             │
│  - Use PascalCase for schemas                               │
│                                                              │
│  Versioning:                                                │
│  - Include version in URL path                              │
│  - Use Accept header for version                            │
│  - Document version changes                                 │
│                                                              │
│  Authentication:                                            │
│  - Document all authentication methods                      │
│  - Provide authentication examples                          │
│  - Document token lifecycle                                 │
│                                                              │
│  Error Handling:                                            │
│  - Document all error responses                             │
│  - Provide error codes and messages                         │
│  - Include error examples                                   │
│                                                              │
│  Pagination:                                                │
│  - Document pagination parameters                           │
│  - Include pagination metadata                              │
│  - Provide pagination examples                              │
│                                                              │
│  Filtering and Sorting:                                     │
│  - Document filtering parameters                            │
│  - Document sorting parameters                              │
│  - Provide filtering examples                               │
└─────────────────────────────────────────────────────────────┘
```

## GraphQL Schema Documentation

### GraphQL Schema Structure

```graphql
# Schema
type Query {
  user(id: ID!): User
  users(limit: Int, offset: Int): UserConnection
  me: User
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User
  deleteUser(id: ID!): Boolean!
}

type User {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  name: String
  email: String
  password: String
}

type UserConnection {
  nodes: [User!]!
  pageInfo: PageInfo!
  totalCount: Int!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

scalar DateTime
```

### GraphQL Best Practices

```
┌─────────────────────────────────────────────────────────────┐
│              GraphQL Best Practices                         │
├─────────────────────────────────────────────────────────────┤
│  Naming:                                                    │
│  - Use camelCase for field names                            │
│  - Use PascalCase for types                                 │
│  - Use verbs for mutations                                  │
│                                                              │
│  Pagination:                                                │
│  - Use cursor-based pagination                              │
│  - Implement Relay connection pattern                       │
│  - Document pagination fields                               │
│                                                              │
│  Authentication:                                            │
│  - Document authentication requirements                     │
│  - Document authorization requirements                      │
│  - Document token requirements                              │
│                                                              │
│  Error Handling:                                            │
│  - Document error types                                     │
│  - Document error codes                                     │
│  - Document error examples                                  │
│                                                              │
│  Input Validation:                                          │
│  - Document input validation rules                          │
│  - Document required fields                                 │
│  - Document field constraints                               │
└─────────────────────────────────────────────────────────────┘
```

## API Documentation Tools

### Popular Tools

```
┌─────────────────────────────────────────────────────────────┐
│              API Documentation Tools                        │
├─────────────────────────────────────────────────────────────┤
│  Swagger UI:                                                │
│  - Interactive API documentation                            │
│  - OpenAPI support                                          │
│  - Customizable                                             │
│  - Self-hosted                                              │
│                                                              │
│  Redoc:                                                     │
│  - Beautiful documentation                                  │
│  - OpenAPI support                                          │
│  - Custom themes                                            │
│  - CLI integration                                          │
│                                                              │
│  Postman Documentation:                                     │
│  - Collection documentation                                 │
│  - Interactive examples                                     │
│  - Team collaboration                                       │
│  - API monitoring                                           │
│                                                              │
│  Slate:                                                     │
│  - Markdown-based                                           │
│  - Easy to customize                                        │
│  - Static site generation                                   │
│  - Multiple languages                                       │
│                                                              │
│  Stoplight:                                                 │
│  - OpenAPI editor                                           │
│  - Documentation generation                                 │
│  - Mock servers                                             │
│  - Testing tools                                            │
└─────────────────────────────────────────────────────────────┘
```

## API Documentation Checklist

### Documentation Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              API Documentation Checklist                    │
├─────────────────────────────────────────────────────────────┤
│  General:                                                   │
│  [ ] API overview and purpose                               │
│  [ ] Authentication requirements                            │
│  [ ] API versioning information                             │
│  [ ] Base URL information                                   │
│                                                              │
│  Endpoints:                                                 │
│  [ ] All endpoints documented                               │
│  [ ] HTTP methods documented                                │
│  [ ] Request parameters documented                          │
│  [ ] Request body documented                                │
│  [ ] Response examples provided                             │
│  [ ] Error responses documented                             │
│                                                              │
│  Examples:                                                  │
│  [ ] Request examples                                       │
│  [ ] Response examples                                      │
│  [ ] Error examples                                         │
│  [ ] Code examples                                          │
│                                                              │
│  Security:                                                  │
│  [ ] Authentication documented                              │
│  [ ] Authorization documented                               │
│  [ ] Rate limiting documented                               │
│  [ ] Security headers documented                            │
│                                                              │
│  Advanced Features:                                         │
│  [ ] Pagination documented                                  │
│  [ ] Filtering documented                                   │
│  [ ] Sorting documented                                     │
│  [ ] Including related resources documented                 │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- Incomplete API documentation
- Missing examples
- Poor API discoverability
- Developer frustration
- Support overhead

**After this skill:**

- Comprehensive API documentation
- Clear examples
- Easy API discoverability
- Developer satisfaction
- Reduced support overhead

## Cross-References

- **`api-design`** - For API design and specifications
- **`documentation-best-practices`** - For documentation standards
- **`context7-docs`** - For up-to-date documentation

## References

- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0)
- [Swagger UI](https://swagger.io/tools/swagger-ui/)
- [GraphQL Specification](https://spec.graphql.org/)
- [CPTD Certification](https://www.softwaretestinghelp.com/)
- [API Documentation Best Practices](https://www.apigee.com/)
