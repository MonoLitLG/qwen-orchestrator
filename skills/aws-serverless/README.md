# AWS Serverless Skill

**Version:** 1.0.0  
**Status:** Active  
**License:** MIT

## Overview

This skill provides comprehensive guidance for developing and deploying AWS serverless applications, configuring Lambda functions, API Gateway, SAM templates, and optimizing serverless performance. It includes Lambda best practices, API Gateway configuration, and serverless architecture patterns.

## When to Use

**Use this skill when:**

- Developing AWS Lambda functions
- Configuring API Gateway endpoints
- Using SAM for infrastructure as code
- Optimizing serverless performance
- Implementing serverless architecture patterns
- Configuring event-driven architectures

## What It Covers

### AWS SAM Template

- Basic SAM templates
- Advanced SAM templates

### Lambda Best Practices

- Cold start optimization
- Minimal dependencies
- Error handling
- Async handling

### API Gateway Configuration

- REST API
- HTTP API
- Authorization

### Event-Driven Architecture

- S3 Event
- SQS Event
- EventBridge Event

## Quick Start

```bash
# Build and deploy with SAM
sam build
sam deploy --guided

# Local development
sam local start-api
```

## Examples

See `examples/` for:

- SAM template examples
- Lambda function examples
- API Gateway examples
- Event-driven examples

## References

- [AWS SAM Documentation](https://docs.aws.amazon.com/serverless-application-model/)
- [Lambda Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [Serverless Framework](https://www.serverless.com/)

## Related Skills

- **`devops-pipeline`** - For CI/CD integration
- **`architecture-patterns`** - For serverless architecture design
- **`testing-strategy`** - For testing serverless functions

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details.

## License

MIT - See [LICENSE](LICENSE) for details.
