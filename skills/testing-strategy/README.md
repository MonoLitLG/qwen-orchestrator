# Testing Strategy Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for designing and implementing testing strategies for software projects. It covers the testing pyramid, coverage thresholds, CI/CD integration, and test automation best practices.

## When to Use

**Use this skill when:**
- Designing test strategy for new projects
- Setting up CI/CD quality gates
- Defining test coverage requirements
- Implementing unit, integration, and E2E tests
- Optimizing test execution time
- Improving test reliability

## What It Covers

### Testing Pyramid
- **Unit Tests** - 60-75% of tests, fast and isolated
- **Integration Tests** - 20-30% of tests, module interactions
- **E2E Tests** - 5-10% of tests, comprehensive workflows

### Coverage Requirements
- **Minimum Thresholds** - 80% unit, 70% integration, 60% E2E
- **Coverage by Component** - Business logic, API, UI, utilities

### Test Categories
- **Unit Tests** - Individual functions/classes
- **Integration Tests** - Component interactions
- **E2E Tests** - Complete user workflows

### CI/CD Integration
- **Quality Gates Pipeline** - Automated testing in CI
- **Coverage Gate Example** - Enforcing coverage thresholds

### Test Organization
- **File Structure** - Organized by test type
- **Naming Convention** - What_Condition_ExpectedResult
- **Test Data Management** - Factories and scenarios

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
- Test file structures
- Test naming conventions
- CI/CD pipeline examples
- Coverage configuration

## References

- [Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Clean Architecture Testing](https://blog.cleancoder.com/uncle-bob/2014/05/10/Testing.html)
- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

## Related Skills

- **`devops-pipeline`** - For CI/CD pipeline setup
- **`security-auditor`** - For security testing
- **`architecture-patterns`** - For testable architecture design

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
