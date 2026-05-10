# Security Code Review Skill

**Version:** 1.0.0
**Status:** Active
**License:** MIT

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

## What It Covers

### OWASP Top 10 Review
- **A01: Broken Access Control** - Authorization checks
- **A02: Cryptographic Failures** - Encryption and hashing
- **A03: Injection** - SQL, OS, LDAP injection
- **A04: Insecure Design** - Security requirements
- **A05: Security Misconfiguration** - Hardening
- **A06: Vulnerable Components** - Dependency security
- **A07: Auth Failures** - Authentication patterns
- **A08: Data Integrity Failures** - Supply chain
- **A09: Logging & Monitoring Failures** - Security logging
- **A10: SSRF** - Server-side request forgery

### Secure Coding Standards
- **Input Validation** - Validation patterns
- **Output Encoding** - XSS prevention
- **Password Security** - Hashing and storage
- **Session Management** - Secure sessions
- **JWT Security** - Token handling

### Security Controls
- **Security Headers** - HTTP security headers
- **Rate Limiting** - DDoS protection
- **CORS Configuration** - Cross-origin security
- **Error Handling** - Information disclosure prevention

## Quick Start

```bash
# Read the skill
cat SKILL.md

# Review examples
cat examples/*.md

# Check references
cat references/*.md
```

## Examples

See `examples/` for:
- OWASP Top 10 checklists
- Secure coding examples
- Vulnerability patterns
- Security header configurations

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)
- [CSSLP Certification](https://www.isc2.org/Certifications/CSSLP)
- [CISSP Certification](https://www.isc2.org/Certifications/CISSP)

## Related Skills

- **`security-auditor`** - For comprehensive security audits
- **`threat-modeling`** - For threat modeling integration
- **`devops-pipeline`** - For security CI/CD gates

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
