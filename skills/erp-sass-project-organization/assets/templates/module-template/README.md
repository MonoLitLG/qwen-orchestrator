# Module Name

**Version:** 1.0.0  
**Domain:** business-domain  
**Bounded Context:** context-name

## Overview

Brief description of the module's purpose and business value.

## Module Structure

```
module-name/
├── src/
│   ├── domain/         # Core business logic
│   ├── application/    # Use cases
│   └── infrastructure/ # Technical details
├── tests/
│   ├── unit/
│   └── integration/
├── module.json         # Module metadata
└── README.md           # This file
```

## Domain Model

Key entities, value objects, and domain services.

## Application Layer

Use cases and services that orchestrate domain logic.

## Infrastructure Layer

Database adapters, external API integrations, and technical details.

## API Contract

### Inputs

- `InputType1` - Description
- `InputType2` - Description

### Outputs

- `OutputType1` - Description
- `OutputType2` - Description

## Dependencies

- `module-a` - Purpose
- `module-b` - Purpose

## Testing Strategy

- Unit tests: Core domain logic
- Integration tests: Use cases and adapters
- E2E tests: Full workflows (if applicable)

## Documentation

- `API.md` - Complete API documentation
- `DECISIONS.md` - Architecture decision records
- `TESTING.md` - Testing approach and coverage

## Version History

- **1.0.0** - Initial release
