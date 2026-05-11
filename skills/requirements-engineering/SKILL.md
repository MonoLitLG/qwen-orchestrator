---
name: requirements-engineering
description: Use when gathering requirements, creating use cases, writing user stories, defining acceptance criteria, and conducting requirements analysis. Includes requirements elicitation techniques, specification methods, and validation approaches. Based on CPRE, CSBA certifications and IEEE standards.
license: MIT
---

# Requirements Engineering Skill — Planner & Research & Architecture

## Overview

This skill provides comprehensive guidance for requirements engineering, including requirements gathering, analysis, specification, validation, and management. It covers use cases, user stories, acceptance criteria, and requirements traceability following CPRE and CSBA methodologies.

## When to Use

**Use this skill when:**

- Gathering requirements from stakeholders
- Creating use cases and user stories
- Defining acceptance criteria for features
- Conducting requirements analysis and validation
- Managing requirements traceability
- Performing requirements prioritization
- Creating requirements documentation
- Facilitating requirements workshops
- Conducting stakeholder interviews
- Performing gap analysis
- Creating functional specifications
- Defining non-functional requirements
- Managing requirements changes
- Performing requirements validation
- Creating requirements baseline
- Conducting requirements review
- Managing requirements versioning
- Performing requirements impact analysis
- Creating requirements matrix
- Managing requirements dependencies
- Performing requirements verification
- Creating requirements traceability matrix
- Managing requirements in agile environments

**Do NOT use this skill when:**

- Writing implementation code (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Requirements Elicitation Techniques

### Interview Framework

```
┌─────────────────────────────────────────────────────────────┐
│              Requirements Interview Process                 │
├─────────────────────────────────────────────────────────────┤
│  1. Prepare (Objectives, questions, stakeholders)           │
│  2. Conduct (Active listening, probing, note-taking)        │
│  3. Document (Transcribe, summarize, validate)              │
│  4. Analyze (Identify gaps, conflicts, inconsistencies)     │
│  5. Validate (Review with stakeholders)                     │
└─────────────────────────────────────────────────────────────┘
```

### Question Types

```
┌─────────────────────────────────────────────────────────────┐
│              Question Types                                 │
├─────────────────────────────────────────────────────────────┤
│  Open-ended:     "What are your main challenges?"           │
│  Closed:         "Do you use X feature daily?"              │
│  Probing:        "Can you tell me more about that?"         │
│  Clarifying:     "So you mean X when you say Y?"            │
│  Leading:        "Don't you think X is important?"          │
│  Hypothetical:   "What would you do if X happened?"         │
└─────────────────────────────────────────────────────────────┘
```

## Use Case Specification

### Use Case Template

```
Use Case Name: [Name]
Actor: [Primary actor]
Preconditions: [Conditions before execution]
Postconditions: [Conditions after successful execution]
Main Success Scenario:
  1. [Actor action]
  2. [System response]
  3. [Actor action]
  ...
Alternate Scenarios:
  1a. [Alternative path]
  2a. [Alternative path]
Exceptions:
  1. [Exception scenario]
  2. [Exception scenario]
Non-functional Requirements:
  - Performance: [Requirements]
  - Security: [Requirements]
  - Usability: [Requirements]
```

### Use Case Example

```
Use Case Name: User Login
Actor: Registered User
Preconditions: User has valid account credentials
Postconditions: User is authenticated and session is created
Main Success Scenario:
  1. User navigates to login page
  2. System displays login form
  3. User enters email and password
  4. System validates credentials
  5. System creates authentication session
  6. System redirects to dashboard
Alternate Scenarios:
  3a. User enters invalid credentials
      - System displays error message
      - User re-enters credentials
  3b. User clicks "Forgot Password"
      - System redirects to password reset page
Exceptions:
  1. User account is locked
     - System displays account lock message
     - User contacts support
Non-functional Requirements:
  - Performance: Login completes in < 2 seconds
  - Security: Passwords encrypted in transit and storage
  - Usability: Clear error messages for all failure cases
```

## User Story Format

### Standard Template

```
As a [type of user],
I want [some goal]
So that [some reason].

Acceptance Criteria:
- [Criterion 1]
- [Criterion 2]
- [Criterion 3]

Estimate: [Story Points]
Priority: [High/Medium/Low]
```

### INVEST Principle

| Criterion       | Description                 |
| --------------- | --------------------------- |
| **I**ndependent | Story is self-contained     |
| **N**egotiable  | Details can be discussed    |
| **V**aluable    | Delivers business value     |
| **E**stimable   | Team can estimate effort    |
| **S**mall       | Can be completed in sprint  |
| **T**estable    | Acceptance criteria defined |

## Acceptance Criteria Guidelines

### Good Acceptance Criteria

- **Specific**: Clear and unambiguous
- **Testable**: Can be verified
- **Realistic**: Can be implemented
- **Complete**: All requirements covered
- **Atomic**: Single, focused requirement

### Acceptance Criteria Examples

```
Feature: User Registration

Acceptance Criteria:
- User can register with email and password
- Email must be valid format
- Password must be at least 8 characters
- System sends confirmation email
- User receives confirmation message
- User cannot register with duplicate email
- Invalid email format shows error message
- Password strength indicator shown
```

## Requirements Traceability

### Traceability Matrix

```
┌─────────────────────────────────────────────────────────────┐
│              Requirements Traceability Matrix               │
├─────────────────────────────────────────────────────────────┤
│  Req ID  │  Description  │  Test Case  │  Component  │ Status │
│  ────────┼───────────────┼─────────────┼─────────────┼────────│
│  REQ-001 │ User Login    │ TC-001      │ AuthModule  │  Done  │
│  REQ-002 │ User Register │ TC-002      │ AuthModule  │  Done  │
│  REQ-003 │ Password Reset│ TC-003      │ AuthModule  │Testing │
└─────────────────────────────────────────────────────────────┘
```

### Traceability Types

```
┌─────────────────────────────────────────────────────────────┐
│              Traceability Types                             │
├─────────────────────────────────────────────────────────────┤
│  Forward Traceability: Requirements → Design → Code → Test │
│  Backward Traceability: Test → Code → Design → Requirements│
│  Horizontal: Between related requirements                   │
│  Vertical: Between different levels (business → system)    │
└─────────────────────────────────────────────────────────────┘
```

## Requirements Prioritization

### MoSCoW Method

| Priority        | Meaning                    | Action                  |
| --------------- | -------------------------- | ----------------------- |
| **M**ust have   | Critical for MVP           | Must implement          |
| **S**hould have | Important but not critical | Implement if time       |
| **C**ould have  | Nice to have               | Implement if extra time |
| **W**on't have  | Not in current scope       | Defer to future         |

### Value vs Effort Matrix

```
High Value
    │    ●    ●
    │  ●
    │
    └───────────────► Low Effort
```

### RICE Scoring

```
RICE Score = (Reach × Impact × Confidence) / Effort

Where:
- Reach: Number of people affected
- Impact: Effect on users (1-3)
- Confidence: Estimate certainty (0-100%)
- Effort: Person-months required
```

## Requirements Validation

### Checklist

```
[ ] Requirements are clear and unambiguous
[ ] Requirements are complete and consistent
[ ] Requirements are feasible and achievable
[ ] Requirements are testable
[ ] Requirements are traceable
[ ] Requirements are prioritized
[ ] Requirements are approved by stakeholders
[ ] Requirements are versioned and controlled
```

### Validation Techniques

```
┌─────────────────────────────────────────────────────────────┐
│              Validation Techniques                          │
├─────────────────────────────────────────────────────────────┤
│  Review:        Peer review, walkthrough, inspection        │
│  Demonstration: Prototype, mockup, simulation               │
│  Analysis:      Formal analysis, modeling                   │
│  Testing:       Requirements-based testing                  │
│  Workshop:      Facilitated session with stakeholders       │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- Requirements gathered ad-hoc
- Incomplete or inconsistent specifications
- Changes cause rework
- Stakeholders dissatisfied
- Testing misses requirements

**After this skill:**

- Complete, consistent requirements
- Clear acceptance criteria
- Traceable requirements
- Stakeholders aligned
- Testing covers all requirements

## Cross-References

- **`product-owner`** - For backlog management and user stories
- **`api-design`** - For API feature specifications
- **`analyzing-projects`** - For requirements analysis and assessment

## References

- [IEEE Standard for System and Software Requirements Specifications](https://ieeexplore.ieee.org/document/4043)
- [CPRE Certification Body](https://www.ireb.org/)
- [CSBA Certification Body](https://www.iiba.org/)
- [Requirements Engineering Fundamentals by K. R. Jackson](https://www.pearson.com/)
