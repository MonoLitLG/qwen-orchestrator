---
name: scrum-master
description: Use when facilitating Agile ceremonies, coaching teams, removing impediments, and promoting Scrum practices. Includes sprint planning, daily standups, sprint reviews, retrospectives, and team dynamics.
license: MIT
---

# Scrum Master Skill — Agile Team Facilitation

## Overview

This skill provides comprehensive guidance for Scrum Masters in facilitating Agile ceremonies, coaching teams, removing impediments, and promoting Scrum practices. It covers sprint planning, daily standups, sprint reviews, retrospectives, and team dynamics.

## When to Use

**Use this skill when:**
- Facilitating sprint planning meetings
- Conducting daily standups
- Leading sprint reviews and demos
- Facilitating sprint retrospectives
- Coaching team on Agile practices
- Removing team impediments
- Protecting team from distractions
- Improving team dynamics

**Do NOT use this skill when:**
- Writing user stories (Product Owner)
- Writing code implementation (Developer)
- Managing project budget (Project Manager)

## Agile Ceremonies

### Sprint Planning

**Duration**: 2-4 hours (depending on sprint length)

**Attendees**: Team, Product Owner, Scrum Master

**Objective**: Select backlog items and create sprint goal

```
┌─────────────────────────────────────────────────────────────┐
│                    Sprint Planning                          │
├─────────────────────────────────────────────────────────────┤
│  1. Sprint Goal Definition (15 min)                         │
│  2. Story Selection (30 min)                                │
│  3. Task Breakdown (30 min)                                 │
│  4. Commitment & Capacity (15 min)                          │
└─────────────────────────────────────────────────────────────┘
```

### Daily Standup

**Duration**: 15 minutes (daily)

**Attendees**: Development team, Scrum Master (optional)

**Objective**: Sync team, identify blockers

**Format**:
1. What did you do yesterday?
2. What will you do today?
3. Any blockers?

**Rules**:
- Stand up (physically or virtually)
- Timebox: 15 minutes max
- Focus on team, not individual
- Detailed discussions after meeting

### Sprint Review

**Duration**: 1-2 hours (depending on sprint length)

**Attendees**: Team, Product Owner, Stakeholders, Scrum Master

**Objective**: Demo completed work and gather feedback

```
┌─────────────────────────────────────────────────────────────┐
│                    Sprint Review                            │
├─────────────────────────────────────────────────────────────┤
│  1. Welcome & Agenda (5 min)                                │
│  2. Demo Completed Work (30 min)                            │
│  3. Stakeholder Feedback (20 min)                           │
│  4. Update Backlog (15 min)                                 │
│  5. Next Sprint Preview (10 min)                            │
└─────────────────────────────────────────────────────────────┘
```

### Sprint Retrospective

**Duration**: 60-90 minutes

**Attendees**: Team, Scrum Master (Product Owner optional)

**Objective**: Reflect and improve team processes

**Format**:
```
1. Set the Stage (5 min)
2. Gather Data (10 min)
3. Generate Insights (20 min)
4. Decide What to Do (20 min)
5. Close the Retrospective (5 min)
```

## Retrospective Formats

### 4Ls Format

```
┌─────────────────┐  ┌─────────────────┐
│     🟢Liked     │  │     🔴Liked     │
│   (What went   │  │   (What didn't │
│     well)       │  │    go well)    │
└─────────────────┘  └─────────────────┘
         │                   │
         ▼                   ▼
┌─────────────────┐  ┌─────────────────┐
│   🟡Learned     │  │   🔵Longing    │
│  (New insights) │  │ (What we want) │
└─────────────────┘  └─────────────────┘
```

### Start-Stop-Continue Format

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Start Doing   │  │  Stop Doing     │  │ Continue Doing  │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

### Sailboat Format

```
      🛳️
     /   \
    │  Team  │
     \   /
      ▼
  ┌──────────┐
  │  Wind    │ → What helped
  └──────────┘
      ▼
  ┌──────────┐
  │  Anchor  │ → What slowed us
  └──────────┘
      ▼
  ┌──────────┐
  │  Island  │ → Goal/destination
  └──────────┘
```

## Impediment Removal

### Impediment Categories

| Category | Examples | Scrum Master Action |
|----------|----------|---------------------|
| **Technical** | Build failures, flaky tests | Organize fix session |
| **Process** | Unclear requirements, slow reviews | Facilitate clarification |
| **Resource** | Missing tools, environment issues | Procure or escalate |
| **People** | Team conflicts, burnout | Mediate and support |
| **External** | Dependencies, stakeholder delays | Manage expectations |

### Impediment Tracking Template

```
Date Identified: [date]
Description: [clear description]
Category: [technical/process/resource/people/external]
Severity: [low/medium/high/critical]
Owner: [person responsible]
Target Resolution: [date]
Status: [open/in-progress/resolved]
Resolution: [description]
```

## Team Coaching

### Agile Mindset Principles

1. **Inspect and Adapt**
   - Regularly check progress
   - Adjust course as needed

2. **Empirical Process Control**
   - Transparency: All aspects visible
   - Inspection: Regular checks
   - Adaptation: Adjust based on findings

3. **Self-Organizing Teams**
   - Team decides how to work
   - No micromanagement
   - Ownership and accountability

### Coaching Techniques

#### Socratic Questioning

```
Question: "What do you think caused the delay?"
→ Probe for root cause

Question: "What could you try differently?"
→ Encourage problem-solving

Question: "How will you know if it works?"
→ Focus on measurable outcomes
```

#### Active Listening

- **Paraphrase**: "So you're saying..."
- **Clarify**: "What do you mean by..."
- **Summarize**: "Let me check my understanding..."
- **Reflect Feelings**: "It sounds like you're frustrated..."

## Agile Metrics

### Velocity

```
Velocity = Average story points completed per sprint

Target: Stable, predictable velocity
Action: Adjust sprint planning based on velocity
```

### Cycle Time

```
Cycle Time = Time from start to completion

Target: Consistent, short cycle time
Action: Identify and reduce bottlenecks
```

### Burndown Chart

```
┌─────────────────────────────────────────────┐
│  Stories Remaining                          │
│  20 ┤    ╱                                  │
│  15 ┤   ╱                                   │
│  10 ┤  ╱                                    │
│   5 ┤ ╱                                     │
│   0 └───────────────────────────────────────┘
│     Day 1  Day 5  Day 10  Day 15  Day 20
└─────────────────────────────────────────────┘
```

## Common Anti-Patterns

### ❌ Bad: Sprint Goal Missing

```
Sprint: Sprint 42

Backlog Items:
- Fix login bug
- Update dashboard
- Add user export

Problem: No unifying goal, items unrelated
```

### ✅ Good: Clear Sprint Goal

```
Sprint: Sprint 42
Sprint Goal: Enable users to export data for analysis

Backlog Items:
- Add export button to dashboard
- Implement CSV export functionality
- Add export history view
- Update documentation

Benefit: Unified focus, coherent deliverable
```

### ❌ Bad: Standup as Status Report

```
Team Member 1: "I worked on feature X, talked to Bob..."
(Taking 10 minutes)

Problem: Not timeboxed, not team-focused
```

### ✅ Good: Quick Sync

```
Team Member 1: "Yesterday: Login fix. Today: Dashboard. Blockers: None."
Team Member 2: "Yesterday: Dashboard mockups. Today: Implementation. Blockers: Waiting on API."
Team Member 3: "Yesterday: Testing setup. Today: Test cases. Blockers: None."

Time: 5 minutes
Benefit: Quick sync, blockers identified
```

### ❌ Bad: Retrospective Without Action Items

```
Retrospective Discussion:
- "We had scope creep"
- "Requirements changed"
- "Testing was rushed"

Problem: No concrete actions, same issues repeat
```

### ✅ Good: Action-Oriented Retrospective

```
Retrospective Discussion:
- "We had scope creep" → Action: Define sprint goal with clear scope
- "Requirements changed" → Action: Add requirement freeze 48h before sprint end
- "Testing was rushed" → Action: Integrate testing throughout sprint

Actions:
1. Define sprint goal with clear scope (Owner: PO)
2. Add requirement freeze 48h before sprint end (Owner: PO)
3. Integrate testing throughout sprint (Owner: Team)
4. Review actions in 2 sprints (Owner: Scrum Master)
```

## Real-World Impact

**Before this skill:**
- Meetings run too long
- Impediments pile up
- Team morale low
- No process improvement

**After this skill:**
- Efficient ceremonies (timeboxed)
- Impediments removed quickly
- Team continuously improves
- High team morale

## Cross-References

- **`product-owner`** - For backlog management and user stories
- **`testing-strategy`** - For testing practices and quality
- **`devops-pipeline`** - For CI/CD and automation

## References

- [Scrum Guide](https://scrumguides.org/)
- [Agile Retrospectives](https://www.amazon.com/Agile-Retrospectives-Making-Success-Team/dp/0977616641)
- [Scrum.org](https://www.scrum.org/)

## When NOT to Use

**Do NOT use this skill when:**
- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint implementations (use api-design skill)
- Reviewing code for quality issues (use code-review skill)
- Performing security audits (use security-auditor skill)
- Analyzing deployment configurations (use deployment skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
