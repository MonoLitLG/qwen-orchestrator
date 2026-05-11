# Naming Conventions

## Overview

Consistent naming is critical for code readability and maintainability. This document defines naming conventions for files, folders, variables, functions, and other code elements.

## File Naming

### General Rules

- Use PascalCase for TypeScript/JavaScript files
- Use kebab-case for configuration files
- Use clear, descriptive names
- Include file type extension

### File Type Conventions

| File Type  | Convention           | Example                    |
| ---------- | -------------------- | -------------------------- |
| Class/Type | PascalCase.ts        | `InventoryManager.ts`      |
| Interface  | IPascalCase.ts       | `IRepository.ts`           |
| Enum       | PascalCase.ts        | `OrderStatus.ts`           |
| Test       | PascalCase.test.ts   | `InventoryManager.test.ts` |
| Config     | kebab-case.json/yaml | `tsconfig.json`            |
| Module     | kebab-case.ts        | `inventory-module.ts`      |

### Folder Naming

- Use kebab-case for all folder names
- Be descriptive but concise
- Avoid abbreviations unless standard

| Purpose         | Example                 |
| --------------- | ----------------------- |
| Business module | `inventory-management/` |
| Feature         | `order-processing/`     |
| Shared code     | `shared-utils/`         |
| Infrastructure  | `database-adapters/`    |

## Variable Naming

### General Rules

- Use camelCase for variables
- Be descriptive and specific
- Include type hints in name when helpful
- Use positive phrasing

### Variable Types

| Type      | Convention        | Example                           |
| --------- | ----------------- | --------------------------------- |
| Primitive | camelCase         | `userName`, `totalCount`          |
| Object    | camelCase         | `userProfile`, `orderDetails`     |
| Array     | plural camelCase  | `users`, `orderItems`             |
| Boolean   | is/can/has prefix | `isValid`, `canEdit`, `hasErrors` |
| Constant  | UPPER_SNAKE_CASE  | `MAX_RETRY_COUNT`                 |

### Boolean Naming

```typescript
// ✅ GOOD
const isValid = validateInput(input);
const canEdit = user.permissions.edit;
const hasErrors = errors.length > 0;

// ❌ BAD
const valid = validateInput(input); // Unclear
const editable = user.permissions.edit; // Ambiguous
const errors = errors.length > 0; // Not boolean
```

## Function Naming

### General Rules

- Use camelCase for functions
- Start with verb for actions
- Include return type in name when helpful
- Be specific about what the function does

### Function Types

| Type          | Convention         | Example                           |
| ------------- | ------------------ | --------------------------------- |
| Action        | verbNoun           | `getUser()`, `saveOrder()`        |
| Query         | get/set/add/remove | `getById()`, `setActive()`        |
| Validation    | is/can/has         | `isValid()`, `canDelete()`        |
| Event handler | handleEvent        | `handleSubmit()`, `handleError()` |

### Naming Examples

```typescript
// ✅ GOOD
function getUserById(id: string): Promise<User> {}
function saveOrder(order: Order): Promise<void> {}
function isValidEmail(email: string): boolean {}
function handleFormSubmit(event: SubmitEvent): void {}

// ❌ BAD
function get(id: string): Promise<User> {} // Unclear what is being got
function save(data: Order): Promise<void> {} // Unclear what is being saved
function valid(email: string): boolean {} // Not clear what is being validated
```

## Class Naming

### General Rules

- Use PascalCase for classes
- Use nouns or noun phrases
- Be specific about what the class represents

### Class Types

| Type       | Convention        | Example                             |
| ---------- | ----------------- | ----------------------------------- |
| Entity     | singular noun     | `User`, `Order`, `Product`          |
| Service    | noun + Service    | `OrderService`, `EmailService`      |
| Controller | noun + Controller | `UserController`, `OrderController` |
| Repository | noun + Repository | `UserRepository`, `OrderRepository` |
| DTO        | noun + DTO        | `UserDto`, `OrderDto`               |

### Naming Examples

```typescript
// ✅ GOOD
class OrderProcessor {}
class InventoryRepository {}
class EmailNotificationService {}
class CreateUserDto {}

// ❌ BAD
class OrderProcessorClass {} // Redundant suffix
class UserClass {} // Redundant suffix
class Data {} // Too generic
```

## Interface Naming

### General Rules

- Use PascalCase for interfaces
- Prefix with `I` (optional, but consistent)
- Describe capabilities or contracts

### Interface Types

| Type          | Convention    | Example                   |
| ------------- | ------------- | ------------------------- |
| Contract      | I + noun      | `IRepository`, `IService` |
| Configuration | noun + Config | `DatabaseConfig`          |
| Event         | noun + Event  | `OrderCreatedEvent`       |
| Result        | noun + Result | `QueryResult`             |

### Naming Examples

```typescript
// ✅ GOOD
interface IRepository<T> {}
interface IAuthService {}
interface DatabaseConfig {}
interface OrderCreatedEvent {}

// ❌ BAD
interface Repository<T> {} // Missing I prefix (if using convention)
interface Data {} // Too generic
interface Handler {} // Too generic
```

## Enum Naming

### General Rules

- Use PascalCase for enums
- Use singular or plural based on context
- Be descriptive about what the enum represents

### Naming Examples

```typescript
// ✅ GOOD
enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

enum UserRole {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

// ❌ BAD
enum order_status {} // Wrong case
enum Status {} // Too generic
enum E {} // Non-descriptive
```

## API Endpoint Naming

### General Rules

- Use kebab-case for URL paths
- Use plural nouns for resources
- Use HTTP methods for actions

### Endpoint Patterns

| Action         | Method | Path          |
| -------------- | ------ | ------------- |
| List           | GET    | `/users`      |
| Get by ID      | GET    | `/users/{id}` |
| Create         | POST   | `/users`      |
| Update         | PUT    | `/users/{id}` |
| Partial update | PATCH  | `/users/{id}` |
| Delete         | DELETE | `/users/{id}` |

### Naming Examples

```typescript
// ✅ GOOD
GET / api / v1 / users;
GET / api / v1 / users / { id };
POST / api / v1 / users;
PUT / api / v1 / users / { id };
DELETE / api / v1 / users / { id };

// ❌ BAD
GET / api / v1 / get - user;
POST / api / v1 / createUser;
PUT / api / v1 / update_user;
```

## Database Object Naming

### Table Naming

- Use plural nouns
- Use snake_case
- Be descriptive

| Example       |
| ------------- |
| `users`       |
| `orders`      |
| `order_items` |

### Column Naming

- Use snake_case
- Be descriptive
- Include type hints when helpful

| Example      |
| ------------ |
| `user_id`    |
| `order_date` |
| `is_active`  |

### Index Naming

- Use table name + column name
- Be descriptive

| Example              |
| -------------------- |
| `idx_users_email`    |
| `idx_orders_user_id` |

## Configuration Naming

### Environment Variables

- Use UPPER_SNAKE_CASE
- Be descriptive
- Use prefix for module-specific

| Example             |
| ------------------- |
| `APP_NAME`          |
| `DATABASE_HOST`     |
| `INVENTORY_API_URL` |

### Configuration Files

- Use kebab-case
- Be descriptive

| Example                |
| ---------------------- |
| `tsconfig.json`        |
| `eslint.config.js`     |
| `database.config.yaml` |

## Common Abbreviations

| Full Word     | Abbreviation |
| ------------- | ------------ |
| configuration | config       |
| database      | db           |
| information   | info         |
| number        | num          |
| temporary     | temp         |
| identifier    | id           |

## Anti-Patterns

### Too Short

```typescript
// ❌ BAD
const a = 1;
const b = 2;
function x() {}
```

### Too Long

```typescript
// ❌ BAD
const thisIsTheLongestVariableNameYouCanImaginForClarityPurposes = 1;
```

### Inconsistent

```typescript
// ❌ BAD
const user_name = 'John';
const userAge = 30;
const UserEmail = 'john@example.com';
```

### Non-Descriptive

```typescript
// ❌ BAD
const data = ...;
const handle = ...;
const temp = ...;
```

## References

- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Microsoft Naming Guidelines](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/naming-guidelines)
