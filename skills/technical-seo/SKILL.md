---
name: technical-seo
description: Use when implementing technical SEO strategies, optimizing site speed, mobile optimization, structured data implementation, XML sitemaps, and crawlability. Includes SEO audits, performance optimization, and SEO best practices. Based on Google Analytics Certified and SEO industry standards.
license: MIT
---

# Technical SEO Skill — SEO Specialist

## Overview

This skill provides comprehensive guidance for implementing technical SEO strategies. It covers site speed optimization, mobile optimization, structured data implementation, XML sitemaps, crawlability, and SEO best practices following Google Analytics Certified standards and SEO industry best practices.

## When to Use

**Use this skill when:**

- Conducting technical SEO audits
- Optimizing site speed and performance
- Implementing mobile-first design
- Adding structured data (JSON-LD)
- Creating XML sitemaps
- Ensuring crawlability
- Implementing canonical URLs
- Setting up 301 redirects
- Creating robots.txt files
- Implementing hreflang tags
- Optimizing for Core Web Vitals
- Implementing schema markup
- Creating SEO-friendly URLs
- Setting up SSL certificates
- Implementing mobile optimization
- Optimizing images for SEO
- Creating SEO-friendly content structure
- Implementing breadcrumb navigation
- Setting up SEO analytics
- Implementing SEO monitoring
- Creating SEO documentation
- Optimizing for featured snippets
- Implementing SEO testing

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing security audits (use security-auditor skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## SEO Core Principles

### Google's SEO Starter Guide

```
┌─────────────────────────────────────────────────────────────┐
│              Google SEO Principles                          │
├─────────────────────────────────────────────────────────────┤
│  1. Make Your Site Useful                                         │
│     - Focus on user needs                                   │
│     - Provide valuable content                             │
│     - Solve user problems                                   │
│                                                              │
│  2. Create Useful, Reliable, and Authoritative Content        │
│     - E-E-A-T principles                                    │
│     - Expertise, Experience, Authoritativeness, Trustworthiness│
│     - Original content                                      │
│                                                              │
│  3. Make Sure Your Pages Are Easy to Find                     │
│     - Clear navigation                                      │
│     - Internal linking                                      │
│     - XML sitemaps                                          │
│                                                              │
│  4. Make Pages Easy to Navigate                               │
│     - Intuitive navigation                                  │
│     - Breadcrumb navigation                                 │
│     - Search functionality                                  │
└─────────────────────────────────────────────────────────────┘
```

### Core Web Vitals

```
┌─────────────────────────────────────────────────────────────┐
│              Core Web Vitals                                │
├─────────────────────────────────────────────────────────────┤
│  LCP (Largest Contentful Paint):                            │
│  - Target: < 2.5 seconds                                    │
│  - Measures loading performance                             │
│  - Optimizations: Image optimization, caching               │
│                                                              │
│  FID (First Input Delay):                                   │
│  - Target: < 100 milliseconds                               │
│  - Measures interactivity                                   │
│  - Optimizations: Reduce JS, defer non-critical JS          │
│                                                              │
│  CLS (Cumulative Layout Shift):                             │
│  - Target: < 0.1                                            │
│  - Measures visual stability                                │
│  - Optimizations: Image dimensions, font loading            │
└─────────────────────────────────────────────────────────────┘
```

## Site Speed Optimization

### Page Speed Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              Page Speed Checklist                           │
├─────────────────────────────────────────────────────────────┤
│  Image Optimization:                                        │
│  - Compress images (WebP, AVIF)                             │
│  - Use appropriate image sizes                              │
│  - Implement lazy loading                                   │
│  - Add image dimensions                                     │
│                                                              │
│  Code Optimization:                                         │
│  - Minify CSS and JavaScript                                │
│  - Defer non-critical JavaScript                            │
│  - Remove unused CSS                                        │
│  - Use efficient CSS selectors                              │
│                                                              │
│  Caching:                                                   │
│  - Set up browser caching                                   │
│  - Use CDN for static assets                                │
│  - Implement service workers                                │
│  - Optimize cache headers                                   │
│                                                              │
│  Server:                                                    │
│  - Enable gzip/Brotli compression                           │
│  - Use HTTP/2 or HTTP/3                                     │
│  - Optimize database queries                                │
│  - Implement caching layers                                 │
└─────────────────────────────────────────────────────────────┘
```

### Performance Metrics

```
┌─────────────────────────────────────────────────────────────┐
│              Performance Metrics                            │
├─────────────────────────────────────────────────────────────┤
│  Load Time:                                                 │
│  - First Contentful Paint (FCP): < 1.8s                     │
│  - Largest Contentful Paint (LCP): < 2.5s                   │
│  - Time to Interactive (TTI): < 3.8s                        │
│                                                              │
│  Interactivity:                                             │
│  - First Input Delay (FID): < 100ms                         │
│  - Total Blocking Time (TBT): < 200ms                       │
│                                                              │
│  Visual Stability:                                          │
│  - Cumulative Layout Shift (CLS): < 0.1                     │
│  - Layout Shift Elements: Minimize                          │
└─────────────────────────────────────────────────────────────┘
```

## Mobile Optimization

### Mobile-First Checklist

```
┌─────────────────────────────────────────────────────────────┐
│              Mobile-First Checklist                         │
├─────────────────────────────────────────────────────────────┤
│  Responsive Design:                                         │
│  - Use responsive meta tag                                  │
│  - Implement responsive CSS                                 │
│  - Test on multiple devices                                 │
│  - Use flexible images                                      │
│                                                              │
│  Touch Targets:                                             │
│  - Minimum 48x48 pixels                                     │
│  - Adequate spacing between targets                         │
│  - Avoid hover-only interactions                            │
│                                                              │
│  Mobile Usability:                                          │
│  - Avoid interstitials on mobile                            │
│  - Use legible font sizes                                   │
│  - Avoid flash content                                      │
│  - Optimize tap targets                                     │
│                                                              │
│  Mobile Performance:                                        │
│  - Minimize HTTP requests                                   │
│  - Use efficient images                                     │
│  - Optimize for slow connections                            │
│  - Implement progressive loading                            │
└─────────────────────────────────────────────────────────────┘
```

## Structured Data

### Schema Markup

```html
<!-- ✅ Good: JSON-LD structured data -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Article Title",
    "description": "Article description",
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-16",
    "author": {
      "@type": "Person",
      "name": "Author Name"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Site Name",
      "logo": {
        "@type": "ImageObject",
        "url": "https://example.com/logo.png"
      }
    }
  }
</script>
```

### Schema Types

```
┌─────────────────────────────────────────────────────────────┐
│              Schema Types                                   │
├─────────────────────────────────────────────────────────────┤
│  Article:                                                   │
│  - NewsArticle, BlogPosting, Op-ed                          │
│                                                              │
│  Product:                                                   │
│  - Product, Offer, Review                                   │
│                                                              │
│  Local Business:                                            │
│  - Restaurant, Store, Service                               │
│                                                              │
│  Event:                                                     │
│  - Event, Performance, SportsEvent                          │
│                                                              │
│  Video:                                                     │
│  - VideoObject, VideoGame                                   │
│                                                              │
│  Breadcrumbs:                                               │
│  - BreadcrumbList                                           │
└─────────────────────────────────────────────────────────────┘
```

## SEO Tools

### SEO Audit Tools

```
┌─────────────────────────────────────────────────────────────┐
│              SEO Audit Tools                                │
├─────────────────────────────────────────────────────────────┤
│  Automated Tools:                                           │
│  - Google Search Console                                    │
│  - Google Analytics                                         │
│  - Screaming Frog SEO Spider                                │
│  - Ahrefs Site Audit                                        │
│  - SEMrush Audit Tools                                      │
│                                                              │
│  Performance Tools:                                         │
│  - Google PageSpeed Insights                                │
│  - Lighthouse (Chrome DevTools)                             │
│  - WebPageTest                                              │
│  - GTmetrix                                                 │
│                                                              │
│  Mobile Tools:                                              │
│  - Mobile-Friendly Test                                     │
│  - Google Mobile Usability Report                           │
│  - Responsive Design Checker                                │
└─────────────────────────────────────────────────────────────┘
```

## Real-World Impact

**Before this skill:**

- Poor site speed
- Not mobile-friendly
- Missing structured data
- Crawlability issues
- Low search rankings

**After this skill:**

- Fast site performance
- Fully mobile-optimized
- Proper structured data
- Easy crawlability
- High search rankings

## Cross-References

- **`website-redesign`** - For SEO-focused redesigns
- **`frontend-philosophy`** - For user experience optimization
- **`performance`** - For performance optimization

## References

- [Google Search Central](https://developers.google.com/search)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Google Analytics Certified](https://analytics.google.com/)
