---
name: product-owner
description: Use when managing product backlog, writing user stories, defining acceptance criteria, sprint planning, and prioritizing features for agile product development. Includes Agile, Scrum, and Kanban methodologies.
license: MIT
---

# Product Owner Skill — Agile Product Management

## Overview

This skill provides comprehensive guidance for Product Owners in agile product development. It covers backlog management, user story creation, acceptance criteria definition, sprint planning, and feature prioritization using Agile, Scrum, and Kanban methodologies.

## When to Use

**Use this skill when:**
- Creating and maintaining product backlog
- Writing user stories with acceptance criteria
- Prioritizing features for sprint planning
- Facilitating backlog refinement sessions
- Defining product roadmap and vision
- Collaborating with stakeholders on requirements

**Do NOT use this skill when:**
- Writing code implementation
- Database schema design
- API endpoint specification
- Security audit tasks

## Agile Methodologies

### Scrum Framework

```
┌─────────────────────────────────────────────────────────────┐
│                    Scrum Cycle                              │
├─────────────────────────────────────────────────────────────┤
│  1. Product Backlog Creation → Product Owner                │
│  2. Sprint Planning → Team commits to sprint goals          │
│  3. Sprint Execution → Daily standups, development          │
│  4. Sprint Review → Demo completed work                     │
│  5. Sprint Retrospective → Identify improvements            │
└─────────────────────────────────────────────────────────────┘
```

### Kanban Methodology

```
┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐
│  Backlog  │  │  To Do    │  │ In Progress│  │  Done     │
└───────────┘  └───────────┘  └───────────┘  └───────────┘
      │             │             │             │
      └─────────────┴─────────────┴─────────────┘
                    │
           ┌────────▼────────┐
           │  WIP Limit: 3   │
           └─────────────────┘
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

### Example

```
As a registered user,
I want to reset my password
So that I can regain access if I forget my password.

Acceptance Criteria:
- User can request password reset via email
- Email contains time-limited reset link
- Reset link expires after 1 hour
- User can set new password with validation
- Password must be at least 8 characters

Estimate: 5
Priority: High
```

## Acceptance Criteria Guidelines

### INVEST Principle

| Criterion | Description |
|-----------|-------------|
| **I**ndependent | Story is self-contained |
| **N**egotiable | Details can be discussed |
| **V**aluable | Delivers business value |
| **E**stimable | Team can estimate effort |
| **S**mall | Can be completed in sprint |
| **T**estable | Acceptance criteria defined |

### Good Acceptance Criteria

- **Specific**: Clear and unambiguous
- **Testable**: Can be verified
- **Realistic**: Can be implemented
- **Complete**: All requirements covered

## Prioritization Techniques

### MoSCoW Method

| Priority | Meaning | Action |
|----------|---------|--------|
| **M**ust have | Critical for MVP | Must implement |
| **S**hould have | Important but not critical | Implement if time |
| **C**ould have | Nice to have | Implement if extra time |
| **W**on't have | Not in current scope | Defer to future |

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

## Sprint Planning

### Pre-Planning Checklist

- [ ] Product backlog is groomed
- [ ] User stories have acceptance criteria
- [ ] Stories are estimated
- [ ] Dependencies are identified
- [ ] Team capacity is known

### Planning Meeting Agenda

1. **Sprint Goal** (15 min)
   - Define clear, measurable goal
   - Align with product vision

2. **Story Selection** (30 min)
   - Review high-priority stories
   - Estimate effort
   - Commit to achievable amount

3. **Task Breakdown** (30 min)
   - Break stories into tasks
   - Assign task owners
   - Identify risks

## Backlog Grooming

### Regular Session Template

- **Frequency**: Weekly, 60-90 minutes
- **Attendees**: Product Owner, Tech Lead, Team
- **Agenda**:
  1. Review completed items (10 min)
  2. Prioritize new requests (20 min)
  3. Refine upcoming stories (30 min)
  4. Estimate new stories (20 min)
  5. Identify dependencies (10 min)

### Story Refinement Checklist

- [ ] User story follows template
- [ ] Acceptance criteria are clear
- [ ] Dependencies identified
- [ ] Story is sized appropriately
- [ ] Technical approach discussed
- [ ] Estimates updated

## Velocity Tracking

### Velocity Calculation

```
Velocity = Average of completed story points over last 3 sprints

Example:
Sprint 1: 24 points
Sprint 2: 28 points
Sprint 3: 22 points
Velocity: 25 points
```

### Capacity Planning

```
Team Capacity = Velocity × (1 - Buffer)

Where Buffer accounts for:
- Meetings and ceremonies (15%)
- Unplanned work (10%)
- Learning and research (5%)
```

## Common Mistakes

### ❌ Bad: Vague User Stories

```
As a user,
I want a better interface
So that I can use the app better.
```

**Problems:**
- "Better" is not measurable
- No specific features defined
- Cannot verify completion

### ✅ Good: Specific User Story

```
As a registered user,
I want to filter products by price range
So that I can find products within my budget.

Acceptance Criteria:
- User can set min and max price
- Filter applies to product list
- Price range is optional
- Results update in real-time
```

### ❌ Bad: Skipping Acceptance Criteria

```
Story: Implement login feature
Estimate: 3
Priority: High
```

**Problems:**
- No clear definition of done
- Team may implement different features
- Testing becomes guesswork

### ✅ Good: Complete Story

```
Story: Implement login feature

As a registered user,
I want to log in with email and password
So that I can access my account.

Acceptance Criteria:
- User can enter email and password
- Invalid credentials show error message
- Valid credentials redirect to dashboard
- Session persists across page reloads
- Logout clears session

Estimate: 5
Priority: High
```

## Real-World Impact

**Before this skill:**
- Backlog disorganized
- Unclear priorities
- Sprint planning reactive
- Features miss target

**After this skill:**
- Backlog groomed and prioritized
- Clear sprint goals
- Predictable delivery
- High-value features first

## Cross-References

- **`designing-architecture`** - For technical requirements gathering
- **`api-design`** - For API feature specifications
- **`analyzing-projects`** - For backlog analysis and assessment

## References

- [Agile Manifesto](https://agilemanifesto.org/)
- [Scrum Guide](https://scrumguides.org/)
- [User Story Mapping](https://userstorymapping.com/) - Jeff Patton
