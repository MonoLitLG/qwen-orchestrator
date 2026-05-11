---
name: accessibility-implementation
description: Use when implementing accessible web content following WCAG 2.1 AA standards, semantic HTML, ARIA attributes, keyboard navigation, and screen reader support. Includes accessibility testing, compliance verification, and inclusive design practices. Based on CPACC certification and W3C WCAG standards.
license: MIT
---

# Accessibility Implementation Skill — Frontend Developer

## Overview

This skill provides comprehensive guidance for implementing accessible web content following WCAG 2.1 AA standards. It covers semantic HTML, ARIA attributes, keyboard navigation, screen reader support, and accessibility testing following CPACC certification standards.

## When to Use

**Use this skill when:**

- Implementing accessible web interfaces
- Ensuring WCAG 2.1 AA compliance
- Adding ARIA attributes to components
- Implementing keyboard navigation
- Testing with screen readers
- Creating accessible forms
- Implementing accessible tables
- Adding accessible color contrast
- Creating accessible navigation
- Implementing accessible modal dialogs
- Creating accessible charts and graphs
- Ensuring accessible error messages
- Implementing accessible focus management
- Creating accessible landing pages
- Testing with accessibility tools
- Conducting accessibility audits
- Implementing skip navigation links
- Creating accessible PDFs
- Ensuring accessible video content
- Implementing accessible print styles
- Creating accessible email templates
- Implementing accessible mobile interfaces
- Ensuring accessible dark mode

**Do NOT use this skill when:**

- Writing backend business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## WCAG 2.1 AA Principles

### Perceivable

```
┌─────────────────────────────────────────────────────────────┐
│              Perceivable Principles                         │
├─────────────────────────────────────────────────────────────┤
│  1.1 Text Alternatives - Provide text alternatives for      │
│      non-text content                                       │
│  1.2 Time-based Media - Provide alternatives for time-based │
│      media                                                  │
│  1.3 Adaptable - Create content that can be presented in    │
│      different ways without losing meaning                 │
│  1.4 Distinguishable - Make it easier for users to see and  │
│      hear content                                           │
└─────────────────────────────────────────────────────────────┘
```

### Operable

```
┌─────────────────────────────────────────────────────────────┐
│              Operable Principles                            │
├─────────────────────────────────────────────────────────────┤
│  2.1 Keyboard Accessible - Make all functionality available  │
│      from a keyboard                                        │
│  2.2 Enough Time - Provide users enough time to read and    │
│      use content                                            │
│  2.3 Seizures and Physical Reactions - Do not design content │
│      in a way that causes seizures                          │
│  2.4 Navigable - Make it easier for users to find content   │
│      and navigate                                           │
└─────────────────────────────────────────────────────────────┘
```

### Understandable

```
┌─────────────────────────────────────────────────────────────┐
│              Understandable Principles                      │
├─────────────────────────────────────────────────────────────┤
│  3.1 Readable - Make text readable and understandable       │
│  3.2 Predictable - Make Web pages appear and operate in     │
│      predictable ways                                       │
│  3.3 Input Assistance - Help users avoid and correct mistakes│
└─────────────────────────────────────────────────────────────┘
```

### Robust

```
┌─────────────────────────────────────────────────────────────┐
│              Robust Principles                              │
├─────────────────────────────────────────────────────────────┤
│  4.1 Compatible - Maximize compatibility with current and   │
│      future user tools                                      │
└─────────────────────────────────────────────────────────────┘
```

## Semantic HTML

### Basic Elements

```html
<!-- ✅ Good: Semantic elements -->
<header>Site navigation</header>
<main>Main content</main>
<nav>Navigation links</nav>
<article>Article content</article>
<section>Section content</section>
<aside>Sidebar content</aside>
<footer>Footer content</footer>

<!-- ❌ Bad: Non-semantic elements -->
<div class="header">Site navigation</div>
<div class="main">Main content</div>
<div class="nav">Navigation links</div>
<div class="article">Article content</div>
<div class="section">Section content</div>
<div class="aside">Sidebar content</div>
<div class="footer">Footer content</div>
```

### Interactive Elements

```html
<!-- ✅ Good: Native interactive elements -->
<button>Click me</button>
<a href="/page">Link text</a>
<input type="text" placeholder="Enter text" />
<select>
  <option>Option 1</option>
</select>

<!-- ❌ Bad: Non-interactive elements with click handlers -->
<div onclick="handleClick()">Click me</div>
<span onclick="handleClick()">Link text</span>
```

## ARIA Attributes

### Landmark Roles

```html
<!-- ✅ Good: Semantic landmarks -->
<header role="banner">...</header>
<nav role="navigation">...</nav>
<main role="main">...</main>
<aside role="complementary">...</aside>
<footer role="contentinfo">...</footer>

<!-- Or explicit ARIA -->
<div role="banner">...</div>
<div role="navigation">...</div>
```

### Live Regions

```html
<!-- ✅ Good: Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true">
  <!-- Dynamic content updates here -->
</div>

<div aria-live="assertive" aria-atomic="true">
  <!-- Urgent updates here -->
</div>

<!-- ❌ Bad: No live region for dynamic content -->
<div id="status">...</div>
<!-- Updates not announced -->
```

### Form Accessibility

```html
<!-- ✅ Good: Accessible forms -->
<label for="email">Email address</label>
<input type="email" id="email" name="email" aria-describedby="email-hint" />
<span id="email-hint">We'll never share your email</span>

<!-- Error message with aria-live -->
<div role="alert" aria-live="assertive" id="error-message">
  Please enter a valid email address
</div>

<!-- ❌ Bad: Missing labels -->
<input type="email" placeholder="Email" />
<!-- No label -->
```

## Keyboard Navigation

### Focus Management

```javascript
// ✅ Good: Proper focus management
function openModal() {
  modal.style.display = 'block';
  modal.querySelector('input').focus();
}

function closeModal() {
  modal.style.display = 'none';
  openButton.focus();
}

// Trap focus in modal
function trapFocus(event) {
  if (event.key === 'Tab') {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
```

### Skip Links

```html
<!-- ✅ Good: Skip link for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<nav>
  <ul>
    <li><a href="#main-content">Skip to main content</a></li>
    <li><a href="#footer">Skip to footer</a></li>
  </ul>
</nav>

<main id="main-content">...</main>
<footer id="footer">...</footer>
```

## Color Contrast

### WCAG Contrast Requirements

```
┌─────────────────────────────────────────────────────────────┐
│              Color Contrast Requirements                    │
├─────────────────────────────────────────────────────────────┤
│  Normal Text (14pt/18px bold): 4.5:1 ratio                 │
│  Large Text (18pt/24px or 14pt/18px bold): 3:1 ratio       │
│  UI Components: 3:1 ratio                                   │
│  Graphics: No minimum (but distinguishable)                 │
└─────────────────────────────────────────────────────────────┘
```

### Contrast Checker

```css
/* ✅ Good: Sufficient contrast */
.text-primary {
  color: #1a1a1a;
  background-color: #ffffff; /* 16.11:1 ratio */
}

.text-secondary {
  color: #333333;
  background-color: #f5f5f5; /* 12.63:1 ratio */
}

/* ❌ Bad: Insufficient contrast */
.text-muted {
  color: #888888;
  background-color: #ffffff; /* 3.99:1 ratio - fails AA */
}
```

## Testing Tools

### Automated Testing

```
┌─────────────────────────────────────────────────────────────┐
│              Accessibility Testing Tools                    │
├─────────────────────────────────────────────────────────────┤
│  axe-core:      Automated accessibility testing             │
│  WAVE:          Web Accessibility Evaluation Tool           │
│  Lighthouse:    Chrome DevTools accessibility audit         │
│  Accessibility Insights: Microsoft tool for Windows         │
│  Screen Readers: NVDA, JAWS, VoiceOver, TalkBack           │
└─────────────────────────────────────────────────────────────┘
```

### Manual Testing Checklist

```
[ ] All interactive elements are keyboard accessible
[ ] Focus is visible and logical
[ ] Screen reader announces content correctly
[ ] Color contrast meets AA requirements
[ ] Form labels are associated with inputs
[ ] Error messages are announced
[ ] Skip links work correctly
[ ] Tab order is logical
[ ] Hover effects don't rely on hover alone
[ ] Animations can be paused
```

## Real-World Impact

**Before this skill:**

- Inaccessible web content
- Keyboard users can't navigate
- Screen reader users miss content
- Color contrast issues
- Form accessibility problems

**After this skill:**

- Fully accessible web content
- Keyboard navigation works
- Screen readers announce correctly
- Sufficient color contrast
- Accessible forms and error messages

## Cross-References

- **`design-system`** - For accessible design patterns
- **`frontend-philosophy`** - For inclusive design principles
- **`testing-strategy`** - For accessibility testing

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [W3C Accessibility Standards](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [CPACC Certification](https://accessibilityassociation.org/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
