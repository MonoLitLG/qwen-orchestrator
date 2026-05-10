---
name: aws-serverless
description: Use when developing and deploying AWS serverless applications, configuring Lambda functions, API Gateway, SAM templates, and optimizing serverless performance. Includes Lambda best practices, API Gateway configuration, and serverless architecture patterns. Based on AWS Certified Solutions Architect and AWS Certified Developer certifications.
license: MIT
---

# AWS Serverless Skill — Lambda, API Gateway & SAM

## Overview

This skill provides comprehensive guidance for developing and deploying AWS serverless applications, configuring Lambda functions, API Gateway, SAM templates, and optimizing serverless performance. It includes Lambda best practices, API Gateway configuration, and serverless architecture patterns. Based on AWS Certified Solutions Architect and AWS Certified Developer certifications.

## When to Use

**Use this skill when:**
- Developing AWS Lambda functions for event-driven architectures
- Configuring API Gateway endpoints with proper authorization and integration
- Using SAM for infrastructure as code and serverless deployments
- Optimizing serverless performance (cold starts, memory, execution time)
- Implementing serverless architecture patterns (CQRS, Event Sourcing, Saga)
- Configuring event-driven architectures (S3, SQS, EventBridge, Kinesis)
- Deploying with AWS Well-Architected Framework principles
- Implementing CI/CD for serverless applications
- Managing serverless costs and resource optimization

**Do NOT use this skill when:**
- Writing application business logic (use **developer skill**)
- Designing database schema (use **database-design** skill)
- Creating UI components (use **frontend-design** skill)
- Managing non-AWS cloud infrastructure (use **vercel-deployment**, **cloudflare-pages**, **cloudflare-workers**, **azure-cloud**, or **gcp-cloud** skills)
- Performing security audits (use **security-auditor** skill)
- Setting up Kubernetes deployments (use **devops-pipeline** skill)

**Why avoid:** AWS Serverless is specific to AWS Lambda and SAM. For other cloud platforms or infrastructure, use targeted skills.

## AWS SAM Template

### Basic SAM Template

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: Simple serverless application

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: index.handler
      Runtime: nodejs18.x
      CodeUri: src/
      Events:
        HelloWorld:
          Type: Api
          Properties:
            Path: /hello
            Method: get

Outputs:
  ApiUrl:
    Description: API Gateway endpoint URL
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/hello"
```

### Advanced SAM Template

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: Advanced serverless application

Globals:
  Function:
    Timeout: 10
    MemorySize: 512
    Runtime: nodejs18.x
    Environment:
      Variables:
        NODE_ENV: production

Resources:
  UsersFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: users.handler
      CodeUri: src/users/
      Events:
        GetUsers:
          Type: Api
          Properties:
            Path: /users
            Method: get
        CreateUser:
          Type: Api
          Properties:
            Path: /users
            Method: post
      Environment:
        Variables:
          DB_TABLE: !Ref UsersTable
      Policies:
        - DynamoDBReadPolicy:
            TableName: !Ref UsersTable
        - DynamoDBWritePolicy:
            TableName: !Ref UsersTable

  UsersTable:
    Type: AWS::Serverless::SimpleTable
    Properties:
      PrimaryKey:
        Name: userId
        Type: String

  EventsFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: events.handler
      CodeUri: src/events/
      Events:
        S3Event:
          Type: S3
          Properties:
            Bucket: !Ref UploadBucket
            Events: s3:ObjectCreated:*
      Environment:
        Variables:
          NOTIFICATION_QUEUE: !Ref NotificationQueue

  UploadBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub "${AWS::StackName}-uploads"

  NotificationQueue:
    Type: AWS::SQS::Queue

Outputs:
  UsersApiUrl:
    Description: Users API endpoint URL
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/users"
```

## Lambda Best Practices

### Cold Start Optimization

```javascript
// ✅ GOOD: Cold start optimization
let cachedData = null;

exports.handler = async (event) => {
  // Initialize expensive resources once (outside handler)
  if (!cachedData) {
    cachedData = await initializeExpensiveResource();
  }
  
  // Handler logic
  return {
    statusCode: 200,
    body: JSON.stringify({ data: cachedData }),
  };
};

async function initializeExpensiveResource() {
  // Initialize expensive resource
  return { initialized: true };
}
```

### Minimal Dependencies

```javascript
// ✅ GOOD: Minimal dependencies
exports.handler = async (event) => {
  // Lightweight processing
  const result = processRequest(event);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

function processRequest(event) {
  // Simple, focused logic
  return { processed: true };
}
```

### Error Handling

```javascript
// ✅ GOOD: Error handling
exports.handler = async (event) => {
  try {
    const result = await processRequest(event);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
```

### Async Handling

```javascript
// ✅ GOOD: Async handling
exports.handler = async (event) => {
  // Use async/await for clarity
  const data = await fetchData();
  const processed = await processData(data);
  
  return {
    statusCode: 200,
    body: JSON.stringify(processed),
  };
};

async function fetchData() {
  // Fetch data
  return { data: 'value' };
}

async function processData(data) {
  // Process data
  return { processed: true };
}
```

## API Gateway Configuration

### REST API

```yaml
Resources:
  UsersApi:
    Type: AWS::Serverless::Api
    Properties:
      Name: Users API
      StageName: prod
      EndpointConfiguration:
        Type: REGIONAL
      MetricsEnabled: true
      LoggingLevel: INFO
      TracingEnabled: true
      CorsConfiguration:
        AllowOrigins:
          - https://example.com
        AllowMethods:
          - GET
          - POST
          - PUT
          - DELETE
        AllowHeaders:
          - Content-Type
          - Authorization

  UsersFunction:
    Type: AWS::Serverless::Function
    Properties:
      Events:
        UsersApi:
          Type: Api
          Properties:
            RestApiId: !Ref UsersApi
            Path: /users
            Method: get
```

### HTTP API

```yaml
Resources:
  UsersHttpApi:
    Type: AWS::Serverless::HttpApi
    Properties:
      Name: Users HTTP API
      StageName: prod
      AccessLogSettings:
        DestinationArn: !GetAtt AccessLogQueue.Arn
        Format: '{"requestId":"$context.requestId","ip":"$context.identity.sourceIp","requestTime":"$context.requestTime","httpMethod":"$context.httpMethod","routeKey":"$context.routeKey","status":$context.status,"responseLength":$context.responseLength}'
      CorsConfiguration:
        AllowOrigins:
          - https://example.com
        AllowMethods:
          - GET
          - POST
          - PUT
          - DELETE

  UsersFunction:
    Type: AWS::Serverless::Function
    Properties:
      Events:
        UsersHttpApi:
          Type: HttpApi
          Properties:
            HttpApiId: !Ref UsersHttpApi
            Path: /users
            Method: get
```

### Authorization

```yaml
Resources:
  UsersFunction:
    Type: AWS::Serverless::Function
    Properties:
      Events:
        UsersApi:
          Type: Api
          Properties:
            Path: /users
            Method: get
            Auth:
              Authorizer: MyAuthorizer

  MyAuthorizer:
    Type: AWS::Serverless::Function
    Properties:
      Handler: authorizer.handler
      Runtime: nodejs18.x
      CodeUri: src/authorizer/
      Events:
        Authorizer:
          Type: Authorizer
          Properties:
            ApiId: !Ref UsersApi
            Name: MyAuthorizer
            AuthorizerUri: !Sub "arn:aws:apigateway:${AWS::Region}:lambda:path/2015-03-31/functions/${MyAuthorizer.Arn}/invocations"
            IdentitySource: method.request.header.Authorization
```

## Event-Driven Architecture

### S3 Event

```yaml
Resources:
  UploadBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub "${AWS::StackName}-uploads"

  ProcessUploadFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: process.handler
      Runtime: nodejs18.x
      CodeUri: src/process/
      Events:
        S3Event:
          Type: S3
          Properties:
            Bucket: !Ref UploadBucket
            Events: s3:ObjectCreated:*
            Filter:
              S3Key:
                S3KeyRule:
                  Rules:
                    - prefix: uploads/
                    - suffix: .json
```

### SQS Event

```yaml
Resources:
  ProcessingQueue:
    Type: AWS::SQS::Queue
    Properties:
      VisibilityTimeout: 300
      MessageRetentionPeriod: 1209600

  ProcessQueueFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: process.handler
      Runtime: nodejs18.x
      CodeUri: src/process/
      Events:
        SQSEvent:
          Type: SQS
          Properties:
            Queue: !GetAtt ProcessingQueue.Arn
            BatchSize: 10
            MaximumBatchingWindowInSeconds: 5
```

### EventBridge Event

```yaml
Resources:
  ProcessScheduledFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: scheduled.handler
      Runtime: nodejs18.x
      CodeUri: src/scheduled/
      Events:
        ScheduledEvent:
          Type: Schedule
          Properties:
            Schedule: rate(1 hour)
            Enabled: true
```

## Common Anti-Patterns

### ❌ Bad: Large Lambda Functions

```javascript
// ❌ BAD: Large lambda with many dependencies
import { bigLibrary } from 'big-library';

exports.handler = async (event) => {
  // Heavy initialization
  const result = bigLibrary.process(event);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
```

**Problems:**
- Slow cold starts
- High memory usage
- Expensive execution

### ✅ Good: Optimized Lambda

```javascript
// ✅ GOOD: Optimized lambda
exports.handler = async (event) => {
  // Lightweight processing
  const result = processRequest(event);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

function processRequest(event) {
  // Simple, focused logic
  return { processed: true };
}
```

### ❌ Bad: No Error Handling

```javascript
// ❌ BAD: No error handling
exports.handler = async (event) => {
  // No error handling
  const result = await processRequest(event);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
```

### ✅ Good: With Error Handling

```javascript
// ✅ GOOD: With error handling
exports.handler = async (event) => {
  try {
    const result = await processRequest(event);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error('Error processing request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
```

## Real-World Impact

**Before this skill:**
- Slow cold starts
- High latency
- Poor error handling
- Expensive execution

**After this skill:**
- Fast cold starts
- Low latency
- Robust error handling
- Cost-effective functions

## Cross-References

- **`devops-pipeline`** - For CI/CD integration
- **`architecture-patterns`** - For serverless architecture design
- **`testing-strategy`** - For testing serverless functions

## References

- [AWS SAM Documentation](https://docs.aws.amazon.com/serverless-application-model/)
- [Lambda Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [Serverless Framework](https://www.serverless.com/)
