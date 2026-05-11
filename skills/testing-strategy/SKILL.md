---
name: testing-strategy
description: Use when designing comprehensive testing strategies, implementing test coverage, setting up CI/CD quality gates, and defining unit, integration, and E2E test approaches. Includes testing pyramid, coverage thresholds, and test automation best practices. Based on software testing certification standards and industry best practices.
license: MIT
---

# Testing Strategy Skill — Comprehensive Test Coverage

## Overview

This skill provides comprehensive guidance for designing and implementing testing strategies for software projects. It covers the testing pyramid, coverage thresholds, CI/CD integration, and test automation best practices. Based on software testing certification standards and industry best practices.

## When to Use

**Use this skill when:**

- Designing test strategy for new projects
- Setting up CI/CD quality gates
- Defining test coverage requirements
- Implementing unit, integration, and E2E tests
- Optimizing test execution time
- Improving test reliability
- Creating testing pyramid architecture
- Setting coverage thresholds for different layers
- Implementing test data management strategies
- Building test automation frameworks
- Creating test reporting and dashboards
- Implementing flaky test detection
- Setting up parallel test execution
- Building test environment management
- Implementing test coverage reporting
- Creating test quality gates
- Setting up test performance baselines
- Implementing test result analysis
- Building test maintenance strategies
- Creating test documentation standards
- Implementing test security scanning
- Setting up test monitoring and alerting
- Building test optimization strategies
- Creating test team structure and roles

**Do NOT use this skill when:**

- Writing specific test cases (use TDD workflow skill)
- Debugging specific test failures (use debugging skill)
- Writing production code (use implementer agent or specific framework skill)
- Designing database schema (use database design skill)

## Testing Pyramid

```
    ┌─────────────────┐
    │     E2E Tests   │  ~5-10% of tests
    │ (Integration)   │  Slow, comprehensive
    ├─────────────────┤
    │ Integration     │  ~20-30% of tests
    │   Tests         │  Medium, module interactions
    ├─────────────────┤
    │   Unit Tests    │  ~60-75% of tests
    │                 │  Fast, isolated logic
    └─────────────────┘
```

### Rationale

| Layer       | Speed  | Cost   | Coverage | Reliability |
| ----------- | ------ | ------ | -------- | ----------- |
| Unit        | Fast   | Low    | High     | High        |
| Integration | Medium | Medium | Medium   | Medium      |
| E2E         | Slow   | High   | Low      | Low         |

## Coverage Requirements

### Minimum Thresholds

| Layer       | Minimum Coverage | Critical Paths |
| ----------- | ---------------- | -------------- |
| Unit        | 80%              | 90%+           |
| Integration | 70%              | 85%+           |
| E2E         | 60%              | 80%+           |

### Coverage by Component

| Component Type | Coverage Target | Rationale          |
| -------------- | --------------- | ------------------ |
| Business Logic | 90%+            | Critical path      |
| API Layer      | 85%+            | Integration points |
| UI Components  | 70%+            | Visual regression  |
| Utilities      | 80%+            | Reusable logic     |

## Test Categories

### Unit Tests

**Purpose**: Test individual functions/classes in isolation

**Characteristics**:

- Fast execution (ms to seconds)
- No external dependencies
- Mock all external calls
- High coverage target

**Example Structure**:

```typescript
describe('UserService', () => {
  let service: UserService;
  let repository: jest.Mocked<UserRepository>;

  beforeEach(() => {
    repository = createMockRepository();
    service = new UserService(repository);
  });

  it('should create user successfully', async () => {
    // Arrange
    const userInput = { name: 'John', email: 'john@example.com' };
    const expectedUser = { id: '1', ...userInput };

    repository.create.mockResolvedValue(expectedUser);

    // Act
    const result = await service.createUser(userInput);

    // Assert
    expect(result).toEqual(expectedUser);
    expect(repository.create).toHaveBeenCalledWith(userInput);
  });

  it('should reject duplicate email', async () => {
    // Arrange
    const userInput = { name: 'John', email: 'duplicate@example.com' };
    repository.create.mockRejectedValue(new Error('Email exists'));

    // Act & Assert
    await expect(service.createUser(userInput)).rejects.toThrow('Email exists');
  });
});
```

### Integration Tests

**Purpose**: Test interactions between components

**Characteristics**:

- Medium execution time (seconds)
- May use real dependencies
- Test module boundaries
- Clean up after tests

**Example Structure**:

```typescript
describe('User API Integration', () => {
  let app: INestApplication;
  let db: DatabaseService;

  beforeAll(async () => {
    app = await createTestApp();
    db = app.get(DatabaseService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create and retrieve user', async () => {
    const userData = { name: 'Jane', email: 'jane@example.com' };

    const response = await request(app.getHttpServer())
      .post('/api/v1/users')
      .send(userData)
      .expect(201);

    expect(response.body.email).toBe(userData.email);

    const getResponse = await request(app.getHttpServer())
      .get(`/api/v1/users/${response.body.id}`)
      .expect(200);

    expect(getResponse.body.email).toBe(userData.email);
  });
});
```

### E2E Tests

**Purpose**: Test complete user workflows

**Characteristics**:

- Slow execution (minutes)
- Real external dependencies
- Test user journeys
- High maintenance cost

**Example Structure**:

```typescript
describe('User Registration Flow', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should complete registration', async () => {
    // Navigate to registration
    await page.click('a[href="/register"]');

    // Fill form
    await page.type('#name', 'Test User');
    await page.type('#email', `test${Date.now()}@example.com`);
    await page.type('#password', 'Password123!');

    // Submit
    await page.click('button[type="submit"]');

    // Verify success
    await page.waitForSelector('.success-message');
    const successText = await page.$eval(
      '.success-message',
      (el) => el.textContent
    );
    expect(successText).toContain('Welcome');
  });
});
```

## CI/CD Integration

### Quality Gates Pipeline

```yaml
name: Quality Gates

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci

      # Unit tests with coverage
      - run: npm run test:unit -- --coverage
      - uses: codecov/codecov-action@v4
        with:
          files: coverage/lcov.info
          fail_ci_if_error: true

      # Integration tests
      - run: npm run test:integration

      # E2E tests (optional)
      - run: npm run test:e2e
```

### Coverage Gate Example

```yaml
# Check coverage threshold
- name: Check coverage
  run: |
    coverage=$(jq '.total.lines.pct' coverage/coverage-summary.json)
    if (( $(echo "$coverage < 80" | bc -l) )); then
      echo "Coverage $coverage% is below 80% threshold"
      exit 1
    fi

# Check test count
- name: Check test count
  run: |
    tests=$(jq '.numTotalTests' reports/test-results.json)
    if [ "$tests" -lt 100 ]; then
      echo "Test count $tests is below minimum of 100"
      exit 1
    fi
```

## Test Organization

### File Structure

```
tests/
├── unit/                    # Unit tests
│   ├── services/
│   │   ├── user.service.spec.ts
│   │   └── order.service.spec.ts
│   ├── repositories/
│   │   └── user.repository.spec.ts
│   └── utils/
│       └── validation.spec.ts
├── integration/            # Integration tests
│   ├── api/
│   │   ├── user.api.spec.ts
│   │   └── order.api.spec.ts
│   └── database/
│       └── database.spec.ts
└── e2e/                    # End-to-end tests
    ├── user-flow.spec.ts
    └── order-flow.spec.ts
```

### Test Naming Convention

```
[What]_[Condition]_[ExpectedResult].spec.ts

Examples:
- UserService_createUser_success.spec.ts
- UserService_createUser_duplicateEmail_throws.spec.ts
- UserController_createUser_returns201.spec.ts
```

## Test Data Management

### Factories

```typescript
// factories/user-factory.ts
export const createUser = (overrides = {}): User => {
  return {
    id: uuid(),
    name: fake().person.fullName(),
    email: fake().internet.email(),
    isActive: true,
    createdAt: new Date(),
    ...overrides,
  };
};

// Usage
const user = createUser({ name: 'Custom Name' });
```

### Test Scenarios

```typescript
// test-data/user-scenarios.ts
export const userScenarios = {
  valid: { name: 'John', email: 'john@example.com' },
  invalidEmail: { name: 'John', email: 'invalid' },
  missingName: { email: 'john@example.com' },
  existingEmail: { name: 'John', email: 'existing@example.com' },
};
```

## Mocking Strategy

### What to Mock

- External APIs
- Database connections
- File system
- Time (date/time functions)
- Random values

### What NOT to Mock

- Pure functions
- Business logic
- Domain models

### Mocking Tools

| Tool           | Purpose           |
| -------------- | ----------------- |
| Vitest         | Testing framework |
| ts-mockito     | Object mocking    |
| nock           | HTTP mocking      |
| jest-date-mock | Time mocking      |

## Common Anti-Patterns

### ❌ Bad: Testing Implementation Details

```typescript
// ❌ BAD: Testing implementation
it('should call service method', () => {
  const spy = vi.spyOn(service, 'execute');
  component.ngOnInit();
  expect(spy).toHaveBeenCalled();
});

// ✅ GOOD: Testing behavior
it('should process order', () => {
  const result = component.processOrder(order);
  expect(result.status).toBe('processed');
});
```

### ❌ Bad: Flaky Tests

```typescript
// ❌ BAD: Non-deterministic
it('should process quickly', () => {
  const start = Date.now();
  process();
  expect(Date.now() - start).toBeLessThan(1000);
});

// ✅ GOOD: Deterministic
it('should process order', () => {
  const result = process(order);
  expect(result.status).toBe('processed');
});
```

### ❌ Bad: Test Interdependence

```typescript
// ❌ BAD: Tests depend on each other
it('should create user', () => {
  /* ... */
});
it('should update user', () => {
  /* uses user from prev test */
});

// ✅ GOOD: Independent tests
it('should create user', () => {
  /* ... */
});
it('should update user', () => {
  /* ... */
});
```

## Real-World Impact

**Before this skill:**

- No test coverage targets
- Flaky tests in CI
- Slow test execution
- Low confidence in deployments

**After this skill:**

- Clear coverage targets (80%+)
- Fast, reliable tests
- CI/CD quality gates
- High deployment confidence

## Cross-References

- **`tdd-workflow`** - For test-driven development process
- **`devops-pipeline`** - For CI/CD pipeline setup
- **`security-auditor`** - For security testing

## References

- [Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Clean Architecture Testing](https://blog.cleancoder.com/uncle-bob/2014/05/10/Testing.html)
- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
