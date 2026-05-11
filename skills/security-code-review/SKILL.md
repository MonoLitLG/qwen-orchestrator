---
name: security-code-review
description: Use when reviewing code for security vulnerabilities, OWASP Top 10 compliance, secure coding standards, authentication/authorization patterns, and vulnerability remediation. Includes static analysis, threat modeling integration, and security testing guidance. Based on CSSLP, CISSP certifications and OWASP standards.
license: MIT
---

# Security Code Review Skill — Reviewer & Quality Gatekeeper

## Overview

This skill provides comprehensive guidance for security code reviews following OWASP Top 10 standards. It covers vulnerability detection, secure coding standards, authentication/authorization patterns, and vulnerability remediation following CSSLP and CISSP certification standards.

## When to Use

**Use this skill when:**

- Performing security code reviews
- Reviewing code for OWASP Top 10 vulnerabilities
- Checking authentication and authorization implementations
- Reviewing API security implementations
- Analyzing input validation and sanitization
- Checking cryptographic implementations
- Reviewing session management
- Analyzing error handling for information disclosure
- Checking for security misconfigurations
- Reviewing dependency security
- Analyzing logging and monitoring for security events
- Checking for injection vulnerabilities
- Reviewing file upload and access controls
- Analyzing business logic vulnerabilities
- Checking for insecure direct object references
- Reviewing cross-site scripting (XSS) vulnerabilities
- Analyzing cross-site request forgery (CSRF) protections
- Checking for sensitive data exposure
- Reviewing security headers and CSP
- Analyzing rate limiting and DDoS protections
- Checking for insecure deserialization
- Reviewing security configuration management
- Analyzing mobile app security patterns

**Do NOT use this skill when:**

- Writing application business logic (use domain-driven skill)
- Designing database schemas (use database-design skill)
- Writing API endpoint specifications (use api-design skill)
- Performing general code review (use code-review skill)
- Writing SQL queries (use sql-best-practices skill)
- Designing multi-page website layouts (use design-system skill)
- Analyzing deployment configurations (use deployment skill)
- Writing documentation (use documentation-best-practices skill)

## OWASP Top 10 (2025) Checklist

### A01: Broken Access Control

```
[ ] Direct object references protected
[ ] Role-based access enforced at every endpoint
[ ] Admin functions require admin privileges
[ ] API endpoints validate ownership of resources
[ ] CORS properly configured
[ ] Authorization checks on all endpoints
[ ] Role hierarchy properly enforced
[ ] Permission inheritance correct
[ ] Default permissions secure
[ ] Session-based access controls
```

### A02: Cryptographic Failures

```
[ ] Passwords hashed with bcrypt/scrypt/argon2
[ ] TLS used for all data in transit
[ ] Sensitive data encrypted at rest
[ ] No hardcoded secrets or keys
[ ] Strong key management practices
[ ] Secure random number generation
[ ] Proper cipher modes (GCM, CCM)
[ ] Key rotation implemented
[ ] Certificate validation enforced
[ ] No self-signed certificates in production
```

### A03: Injection

```
[ ] Parameterized queries for all database access
[ ] Input validation on all user-supplied data
[ ] Output encoding for all rendered content
[ ] Command execution sanitized
[ ] File path traversal prevented
[ ] LDAP injection prevented
[ ] XML injection prevented
[ ] SMTP injection prevented
[ ] OS command injection prevented
[ ] Template injection prevented
```

### A04: Insecure Design

```
[ ] Threat modeling performed
[ ] Security requirements defined
[ ] Rate limiting implemented
[ ] Secure defaults used
[ ] Defense in depth applied
[ ] Secure by design principles followed
[ ] Security requirements traceable
[ ] Threat models updated with changes
[ ] Security architecture documented
[ ] Security design patterns used
```

### A05: Security Misconfiguration

```
[ ] Default credentials changed
[ ] Unnecessary features disabled
[ ] Error messages don't leak info
[ ] Security headers present (CSP, HSTS, X-Frame)
[ ] Debug mode disabled in production
[ ] Server version hidden
[ ] Directory listing disabled
[ ] Security headers on all responses
[ ] Configuration management system
[ ] Environment-specific configs
```

### A06: Vulnerable Components

```
[ ] Dependencies audited for CVEs
[ ] Packages updated to latest stable
[ ] Unused dependencies removed
[ ] Lock file integrity verified
[ ] Dependency scanning in CI/CD
[ ] Known vulnerable versions identified
[ ] Security patches applied quickly
[ ] Dependency tree analyzed
[ ] Transitive dependencies checked
[ ] Supply chain security verified
```

### A07: Auth Failures

```
[ ] Multi-factor authentication available
[ ] Account lockout after failed attempts
[ ] Session management secure
[ ] Password policy enforced
[ ] Token expiration reasonable
[ ] Session fixation prevented
[ ] Token binding implemented
[ ] Password strength requirements
[ ] Password reset secure
[ ] Brute force protection
```

### A08: Data Integrity Failures

```
[ ] Deserialization validated
[ ] Digital signatures verified
[ ] CI/CD pipeline secured
[ ] Supply chain verified
[ ] Code signing implemented
[ ] Artifact integrity verified
[ ] Build process secure
[ ] Dependency integrity checked
[ ] Container image signing
[ ] Software supply chain security
```

### A09: Logging & Monitoring Failures

```
[ ] Security events logged
[ ] Logs don't contain sensitive data
[ ] Alerting configured for anomalies
[ ] Incident response plan exists
[ ] Log integrity protected
[ ] Log retention policy
[ ] Real-time monitoring
[ ] SIEM integration
[ ] Alert thresholds set
[ ] Log analysis automated
```

### A10: Server-Side Request Forgery

```
[ ] URL validation on server-side requests
[ ] Allowlist for external domains
[ ] Network segmentation enforced
[ ] Response filtering applied
[ ] DNS rebinding protection
[ ] SSRF protection implemented
[ ] Internal network access blocked
[ ] User-supplied URLs validated
[ ] HTTP client security configured
[ ] Proxy configuration secure
```

## Secure Coding Standards

### Input Validation

```typescript
// ✅ Good: Input validation
const schema = z.object({
  email: z.string().email().max(254),
  password: z.string().min(12).max(128),
  name: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z\s'-]+$/),
  age: z.number().int().min(0).max(150),
});

// ❌ Bad: No validation
const user = req.body; // Unvalidated input
```

### Output Encoding

```typescript
// ✅ Good: Output encoding
const safeHtml = escapeHtml(userInput);
const safeJson = JSON.stringify(data);

// ❌ Bad: No encoding
res.send(`<div>${userInput}</div>`); // XSS vulnerability
```

### Password Security

```typescript
// ✅ Good: Secure password handling
const hashedPassword = await bcrypt.hash(password, 12);

// ❌ Bad: Plain text or weak hashing
const hashed = md5(password); // Weak hashing
```

## Severity Classification

| Level    | CVSS    | Example               | Response Time |
| -------- | ------- | --------------------- | ------------- |
| Critical | 9.0+    | SQL Injection, RCE    | Immediate     |
| High     | 7.0-8.9 | Auth bypass, XSS      | < 24 hours    |
| Medium   | 4.0-6.9 | Info disclosure, CSRF | < 1 week      |
| Low      | 0.1-3.9 | Missing headers       | Next release  |

## Security Headers Checklist

```
Content-Security-Policy: default-src 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
```

## Authentication Patterns

### JWT Best Practices

```typescript
// ✅ Good: Secure JWT handling
const token = jwt.sign(
  { userId: user.id, roles: user.roles },
  process.env.JWT_SECRET,
  {
    expiresIn: '15m',
    algorithm: 'RS256',
  }
);

// ❌ Bad: Insecure JWT
const token = jwt.sign({ userId: user.id }, 'secret'); // Weak secret
```

### Session Management

```typescript
// ✅ Good: Secure session handling
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 3600000,
    },
  })
);
```

## Real-World Impact

**Before this skill:**

- Security vulnerabilities in code
- OWASP Top 10 vulnerabilities present
- Authentication/authorization issues
- Sensitive data exposure
- Injection vulnerabilities

**After this skill:**

- Secure code following best practices
- OWASP Top 10 vulnerabilities addressed
- Proper authentication/authorization
- Data protected in transit and at rest
- Secure input validation and output encoding

## Cross-References

- **`security-auditor`** - For comprehensive security audits
- **`threat-modeling`** - For threat modeling integration
- **`devops-pipeline`** - For security CI/CD gates

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)
- [CSSLP Certification](https://www.isc2.org/Certifications/CSSLP)
- [CISSP Certification](https://www.isc2.org/Certifications/CISSP)
