# CRUD Completeness Skill

**Version:** 1.0.0
**Status:** Active
**License:** MIT

## Overview

This skill provides comprehensive guidance for implementing complete CRUD (Create, Read, Update, Delete) operations. It covers validation, error handling, soft delete, restore, bulk operations, and CRUD best practices following enterprise application patterns and API design standards.

## When to Use

**Use this skill when:**

- Implementing complete CRUD operations for resources
- Designing Create, Read, Update, Delete endpoints
- Adding validation to CRUD operations
- Implementing error handling for CRUD
- Designing soft delete patterns
- Implementing restore functionality
- Creating bulk CRUD operations
- Adding optimistic concurrency control
- Implementing CRUD permissions
- Designing CRUD API documentation
- Adding audit logging to CRUD
- Implementing CRUD caching strategies
- Creating CRUD validation schemas
- Designing CRUD response formats
- Implementing CRUD rate limiting
- Adding CRUD metrics and monitoring
- Designing CRUD security controls
- Implementing CRUD data validation
- Creating CRUD input validation
- Adding CRUD output formatting
- Designing CRUD pagination
- Implementing CRUD filtering
- Adding CRUD sorting

## What It Covers

### CRUD Operations

- **Create** - POST with validation
- **Read** - GET with filtering, sorting, pagination
- **Update** - PATCH and PUT with concurrency
- **Delete** - Soft delete and hard delete
- **Restore** - Recover soft-deleted resources

### Validation

- **Input validation** - Schema validation
- **Business validation** - Domain rules
- **Error responses** - Standardized errors

### Advanced Patterns

- **Soft delete** - Recoverable deletion
- **Bulk operations** - Batch processing
- **Optimistic concurrency** - Version control
- **Audit logging** - Change tracking

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

- CRUD endpoint patterns
- Validation schemas
- Soft delete implementations
- Bulk operation examples

## References

- [RESTful API Design Best Practices](https://restfulapi.net/)
- [API Security Checklist](https://owasp.org/www-project-api-security/)
- [Soft Delete Pattern](https://martinfowler.com/eaaCatalog/softDelete.html)
- [Optimistic Concurrency](https://martinfowler.com/eaaCatalog/optimisticOfflineLock.html)

## Related Skills

- **`api-design`** - For API endpoint specifications
- **`database-design`** - For database schema design
- **`security-auditor`** - For CRUD security review

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
