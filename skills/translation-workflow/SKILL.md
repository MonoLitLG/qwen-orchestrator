---
name: translation-workflow
description: Use when implementing translation workflows, managing translation memory, integrating machine translation, handling translation quality, and coordinating with translators. Includes TMS setup, translation memory management, and localization best practices. Based on localization industry standards.
license: MIT
---

# Translation Workflow Skill — Localization Engineer

## Overview

This skill provides comprehensive guidance for implementing translation workflows and localization processes. It covers translation memory management, machine translation integration, translation quality, TMS setup, and localization best practices following localization industry standards.

## When to Use

**Use this skill when:**

- Implementing translation workflows
- Setting up translation management systems (TMS)
- Managing translation memory (TM)
- Integrating machine translation (MT)
- Ensuring translation quality
- Coordinating with translators
- Creating translation workflows
- Managing translation assets
- Implementing translation automation
- Creating translation glossaries
- Managing translation memory updates
- Implementing translation quality checks
- Coordinating translation projects
- Managing translation costs
- Implementing translation security
- Creating translation documentation
- Managing translation versioning
- Implementing translation caching
- Creating translation templates
- Managing translation workflows
- Implementing translation analytics
- Coordinating translation teams
- Managing translation localization
- Implementing translation testing

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## Translation Workflow

### Translation Process

```
┌─────────────────────────────────────────────────────────────┐
│              Translation Workflow                           │
├─────────────────────────────────────────────────────────────┤
│  1. Content Extraction                                      │
│     └── Extract translatable content from source files      │
│     └── Identify translatable strings                       │
│     └── Create translation packages                         │
│                                                              │
│  2. Translation Memory Analysis                             │
│     └── Check translation memory for matches                │
│     └── Identify fuzzy matches                              │
│     └── Calculate translation costs                         │
│                                                              │
│  3. Machine Translation (Optional)                          │
│     └── Apply machine translation                           │
│     └── Post-edit machine translation                       │
│     └── Quality assurance                                   │
│                                                              │
│  4. Human Translation                                       │
│     └── Assign to translator                                │
│     └── Monitor progress                                    │
│     └── Quality review                                      │
│                                                              │
│  5. Quality Assurance                                       │
│     └── Automated QA checks                                 │
│     └── Proofreading                                        │
│     └── Terminology verification                            │
│                                                              │
│  6. Content Integration                                     │
│     └── Import translated content                           │
│     └── Update translation memory                           │
│     └── Update glossary                                     │
│                                                              │
│  7. Testing                                                 │
│     └── Functional testing                                  │
│     └── UI testing                                          │
│     └── Linguistic testing                                  │
└─────────────────────────────────────────────────────────────┘
```

### Translation Memory

```
┌─────────────────────────────────────────────────────────────┐
│              Translation Memory                             │
├─────────────────────────────────────────────────────────────┤
│  Benefits:                                                  │
│  - Cost savings (repeat translations)                       │
│  - Consistency (same phrases translated same way)           │
│  - Time savings (no need to retranslate)                    │
│  - Quality (consistent terminology)                         │
│                                                              │
│  TM Formats:                                                │
│  - TMX (Translation Memory Exchange)                        │
│  - XLIFF (XML Localization Interchange File Format)         │
│  - SDL Trados TM                                            │
│  - MemoQ TM                                                 │
│                                                              │
│  TM Management:                                             │
│  - Regular updates                                          │
│  - Quality checks                                           │
│  - De-duplication                                           │
│  - Archiving                                                │
└─────────────────────────────────────────────────────────────┘
```

## Machine Translation

### MT Integration

```
┌─────────────────────────────────────────────────────────────┐
│              Machine Translation Options                    │
├─────────────────────────────────────────────────────────────┤
│  Google Cloud Translation:                                  │
│  - Neural MT models                                         │
│  - AutoML for custom models                                 │
│  - API-based integration                                    │
│  - Cost: Pay per character                                  │
│                                                              │
│  Amazon Translate:                                          │
│  - Neural MT models                                         │
│  - Custom terminology support                               │
│  - API-based integration                                    │
│  - Cost: Pay per million characters                         │
│                                                              │
│  DeepL:                                                     │
│  - High-quality neural MT                                   │
│  - API-based integration                                    │
│  - Cost: Pay per character                                  │
│                                                              │
│  Microsoft Translator:                                      │
│  - Neural MT models                                         │
│  - Custom models                                            │
│  - API-based integration                                    │
│  - Cost: Pay per million characters                         │
│                                                              │
│  Open-source MT:                                            │
│  - MarianNMT                                                │
│  - OpenNMT                                                  │
│  - Fairseq                                                  │
│  - Self-hosted                                              │
└─────────────────────────────────────────────────────────────┘
```

### MT Post-Editing

```
┌─────────────────────────────────────────────────────────────┐
│              MT Post-Editing Levels                         │
├─────────────────────────────────────────────────────────────┤
│  Light Post-Editing:                                        │
│  - Fix critical errors                                      │
│  - Maintain MT output structure                             │
│  - Fast, lower cost                                         │
│  - Good for: Internal communication, drafts                 │
│                                                              │
│  Full Post-Editing:                                         │
│  - Ensure quality equivalent to human translation           │
│  - Maintain style and tone                                  │
│  - Thorough review                                          │
│  - Good for: Public communication, marketing                │
│                                                              │
│  Quality Assurance:                                         │
│  - Automated checks                                         │
│  - Human review                                             │
│  - Terminology verification                                 │
│  - Consistency checks                                       │
└─────────────────────────────────────────────────────────────┘
```

## Translation Quality

### Quality Assurance Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              Translation QA Checklist                       │
├─────────────────────────────────────────────────────────────┤
│  Accuracy:                                                  │
│  [ ] Correct meaning                                        │
│  [ ] Correct terminology                                    │
│  [ ] Correct grammar                                        │
│  [ ] Correct punctuation                                    │
│                                                              │
│  Consistency:                                               │
│  [ ] Terminology consistent                                 │
│  [ ] Style consistent                                       │
│  [ ] Tone consistent                                        │
│  [ ] Formatting consistent                                  │
│                                                              │
│  Completeness:                                              │
│  [ ] All content translated                                 │
│  [ ] All placeholders preserved                             │
│  [ ] All formatting preserved                               │
│  [ ] All links preserved                                    │
│                                                              │
│  Localization:                                              │
│  [ ] Culturally appropriate                                 │
│  [ ] Local conventions followed                             │
│  [ ] Local examples used                                    │
│  [ ] Local regulations followed                             │
└─────────────────────────────────────────────────────────────┘
```

### Translation Metrics

```
┌─────────────────────────────────────────────────────────────┐
│              Translation Metrics                            │
├─────────────────────────────────────────────────────────────┤
│  Translation Memory Match:                                  │
│  - 100% matches (exact matches)                             │
│  - 95-99% matches (fuzzy matches)                           │
│  - 85-94% matches (fuzzy matches)                           │
│  - 0-84% matches (new content)                              │
│                                                              │
│  Quality Metrics:                                           │
│  - Translation quality score                                │
│  - Post-editing effort                                      │
│  - Error rate                                               │
│  - Review time                                              │
│                                                              │
│  Cost Metrics:                                              │
│  - Cost per word                                            │
│  - Cost per character (MT)                                  │
│  - Total project cost                                       │
│  - Cost savings from TM                                     │
└─────────────────────────────────────────────────────────────┘
```

## Translation Tools

### Popular Tools

```
┌─────────────────────────────────────────────────────────────┐
│              Translation Tools                              │
├─────────────────────────────────────────────────────────────┤
│  Trados Studio:                                             │
│  - Industry standard TMS                                    │
│  - Comprehensive TM features                                │
│  - Integration with other tools                             │
│  - Cost: Premium pricing                                    │
│                                                              │
│  MemoQ:                                                     │
│  - Popular TMS                                              │
│  - Cloud and on-premise                                     │
│  - Good collaboration features                              │
│  - Cost: Mid-range pricing                                  │
│                                                              │
│  Wordbee:                                                   │
│  - Cloud-based TMS                                          │
│  - Collaborative features                                   │
│  - API integration                                          │
│  - Cost: Subscription pricing                               │
│                                                              │
│  Matecat:                                                   │
│  - Web-based CAT tool                                       │
│  - Free and premium versions                                │
│  - Good for freelance translators                           │
│  - Cost: Freemium model                                     │
│                                                              │
│  Crowdin:                                                   │
│  - Cloud-based TMS                                          │
│  - Developer-focused                                        │
│  - Integration with development tools                       │
│  - Cost: Freemium model                                     │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- Ad-hoc translation processes
- Inconsistent translations
- High costs
- Poor quality
- No translation memory

**After this skill:**

- Streamlined translation workflows
- Consistent translations
- Cost savings
- High quality
- Effective translation memory

## Cross-References

- **`documentation-best-practices`** - For documentation translation
- **`api-documentation`** - For API documentation translation
- **`technical-seo`** - For localized SEO

## References

- [Localization Industry Standards](https://www.lisa.org/)
- [TMX Specification](https://www.gala-global.org/)
- [XLIFF Specification](https://docs.oasis-open.org/xliff/)
- [Localization Best Practices](https://www.translations.com/)
- [Translation Memory Management](https://www SDL.com/)
