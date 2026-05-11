---
name: user-story-mapping
description: Use when creating user story maps, breaking down epics into stories, organizing features by timeline, and visualizing product backlog. Includes story mapping workshops, epic decomposition, and feature prioritization techniques. Based on Jeff Patton's user story mapping methodology.
license: MIT
---

# User Story Mapping Skill — Product Owner

## Overview

This skill provides comprehensive guidance for user story mapping, including creating story maps, breaking down epics, organizing features by timeline, and visualizing product backlog. It covers story mapping workshops, epic decomposition, and feature prioritization following Jeff Patton's methodology.

## When to Use

**Use this skill when:**

- Creating user story maps for products
- Breaking down epics into user stories
- Organizing features by user workflow
- Creating product backlogs
- Facilitating story mapping workshops
- Prioritizing features for release planning
- Visualizing product roadmap
- Aligning stakeholders on features
- Decomposing complex features
- Creating user journey maps
- Mapping user flows
- Identifying minimum viable products
- Planning releases based on stories
- Creating sprint backlogs from story maps
- Aligning development team on features
- Creating acceptance criteria from stories
- Mapping user roles and personas
- Creating feature dependencies
- Identifying gaps in features
- Planning MVP scope
- Creating product vision
- Aligning on product goals

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## User Story Map Structure

### Basic Story Map

```
┌─────────────────────────────────────────────────────────────┐
│              User Story Map                                 │
├─────────────────────────────────────────────────────────────┤
│  User Goal / Activity                                      │
│  └── Task 1                                                │
│      ├── Story 1.1                                         │
│      ├── Story 1.2                                         │
│      └── Story 1.3                                         │
│  └── Task 2                                                │
│      ├── Story 2.1                                         │
│      ├── Story 2.2                                         │
│      └── Story 2.3                                         │
│  └── Task 3                                                │
│      ├── Story 3.1                                         │
│      ├── Story 3.2                                         │
│      └── Story 3.3                                         │
│                                                              │
│  Release 1: Story 1.1, Story 1.2, Story 2.1                │
│  Release 2: Story 1.3, Story 2.2, Story 3.1                │
│  Release 3: Story 2.3, Story 3.2, Story 3.3                │
└─────────────────────────────────────────────────────────────┘
```

### Story Map Template

```
┌─────────────────────────────────────────────────────────────┐
│              Story Map Template                             │
├─────────────────────────────────────────────────────────────┤
│  Top Row (Activities):                                      │
│  [High-level user activities]                               │
│                                                              │
│  Middle Row (Tasks):                                        │
│  [Specific tasks within each activity]                      │
│                                                              │
│  Bottom Row (Stories):                                      │
│  [User stories for each task]                               │
│                                                              │
│  Release Planning:                                          │
│  Release 1: [Stories for MVP]                               │
│  Release 2: [Stories for V1.1]                              │
│  Release 3: [Stories for V2.0]                              │
└─────────────────────────────────────────────────────────────┘
```

## Story Mapping Workshop

### Workshop Agenda

```
┌─────────────────────────────────────────────────────────────┐
│              Story Mapping Workshop                         │
├─────────────────────────────────────────────────────────────┤
│  Duration: 2-4 hours                                        │
│  Participants: Product Owner, Tech Lead, UX Designer, Team │
│                                                              │
│  1. Define User Goal (15 min)                               │
│     - Identify primary user goal                            │
│     - Define success criteria                               │
│                                                              │
│  2. Identify Activities (30 min)                            │
│     - List high-level activities                            │
│     - Order by user flow                                    │
│     - Add missing activities                                │
│                                                              │
│  3. Break Down Tasks (45 min)                               │
│     - Add tasks under each activity                         │
│     - Order by sequence                                     │
│     - Identify dependencies                                 │
│                                                              │
│  4. Create Stories (60 min)                                 │
│     - Write user stories for each task                      │
│     - Add acceptance criteria                               │
│     - Estimate effort                                       │
│                                                              │
│  5. Prioritize and Release Plan (30 min)                    │
│     - Identify must-have stories                            │
│     - Create release boundaries                             │
│     - Define MVP scope                                      │
└─────────────────────────────────────────────────────────────┘
```

### Workshop Materials

```
┌─────────────────────────────────────────────────────────────┐
│              Workshop Materials                             │
├─────────────────────────────────────────────────────────────┤
│  Physical:                                                  │
│  - Large whiteboard or wall                                 │
│  - Sticky notes (different colors)                          │
│  - Markers                                                  │
│  - Tape or sticky dots                                      │
│  - Index cards for stories                                  │
│                                                              │
│  Digital:                                                   │
│  - Miro or MURAL for virtual workshops                      │
│  - Jira for story mapping                                   │
│  - Trello for simple mapping                                │
│  - Aha! for product planning                                │
└─────────────────────────────────────────────────────────────┘
```

## Epic Decomposition

### Epic Breakdown Template

```
┌─────────────────────────────────────────────────────────────┐
│              Epic Breakdown                                 │
├─────────────────────────────────────────────────────────────┤
│  Epic: User Registration                                    │
│                                                              │
│  User Goal: Sign up and create an account                  │
│                                                              │
│  Activities:                                                │
│  1. Start Registration                                      │
│     - Visit registration page                               │
│     - Click registration link                               │
│                                                              │
│  2. Enter Information                                       │
│     - Enter email                                           │
│     - Enter password                                        │
│     - Confirm password                                      │
│                                                              │
│  3. Complete Registration                                   │
│     - Click register button                                 │
│     - Verify email                                          │
│     - Redirect to dashboard                                 │
│                                                              │
│  Stories:                                                   │
│  - As a user, I want to visit registration page             │
│  - As a user, I want to enter email                         │
│  - As a user, I want to enter password                      │
│  - As a user, I want to confirm password                    │
│  - As a user, I want to click register button               │
│  - As a user, I want to verify email                        │
│  - As a user, I want to be redirected to dashboard          │
└─────────────────────────────────────────────────────────────┘
```

### Story Breakdown

```
Epic: User Registration
  └── Activity: Start Registration
      ├── Task: Visit registration page
      │   └── Story: As a user, I want to visit registration page
      │       so that I can create an account.
      │       Acceptance Criteria:
      │       - Link appears in header
      │       - Page loads in < 2 seconds
      │       - Mobile responsive
      │
      └── Task: Click registration link
          └── Story: As a user, I want to click registration link
              so that I can start registration.
              Acceptance Criteria:
              - Link is clickable
              - Opens in new tab
              - Tracks click event
```

## Release Planning

### Release Boundaries

```
┌─────────────────────────────────────────────────────────────┐
│              Release Planning                               │
├─────────────────────────────────────────────────────────────┤
│  Release 1 (MVP):                                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Must Have Stories:                                  │   │
│  │  - Story 1.1: Visit registration page                │   │
│  │  - Story 1.2: Enter email                            │   │
│  │  - Story 1.3: Enter password                         │   │
│  │  - Story 2.1: Click register button                  │   │
│  │  - Story 2.2: Verify email                           │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Release 2 (V1.1):                                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Should Have Stories:                                │   │
│  │  - Story 1.4: Password strength indicator            │   │
│  │  - Story 2.3: Redirect to dashboard                  │   │
│  │  - Story 3.1: Login after registration               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Release 3 (V2.0):                                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Could Have Stories:                                 │   │
│  │  - Story 3.2: Social login                           │   │
│  │  - Story 3.3: Email preferences                      │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Story Prioritization

```
┌─────────────────────────────────────────────────────────────┐
│              Story Prioritization                           │
├─────────────────────────────────────────────────────────────┤
│  MoSCoW Method:                                             │
│  - Must Have: Critical for MVP                             │
│  - Should Have: Important but not critical                 │
│  - Could Have: Nice to have                                │
│  - Won't Have: Not in current scope                        │
│                                                              │
│  Value vs Effort:                                           │
│  High Value ──┐    ●    ●                                   │
│               │  ●                                          │
│               │                                             │
│  Low Value ──└───────────────► Low Effort                   │
│                                                              │
│  RICE Scoring:                                              │
│  Score = (Reach × Impact × Confidence) / Effort             │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- Disorganized backlog
- Unclear feature priorities
- No user workflow visualization
- Misaligned stakeholders

**After this skill:**

- Organized story map
- Clear feature priorities
- User workflow visualization
- Aligned stakeholders

## Cross-References

- **`product-owner`** - For backlog management and user stories
- **`requirements-engineering`** - For requirements gathering
- **`scrum-master`** - For sprint planning

## References

- [User Story Mapping by Jeff Patton](https://userstorymapping.com/)
- [Story Mapping Book](https://www.amazon.com/User-Story-Mapping-Discover-Product/dp/1491904909)
- [Agile User Stories by Mary Poppendieck](https://www.amazon.com/Agile-User-Stories-Adding-Value/dp/0321685884)
- [Story Mapping Workshops](https://www.jpattonassociates.com/workshops/)
