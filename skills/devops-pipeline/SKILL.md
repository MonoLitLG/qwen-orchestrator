---
name: devops-pipeline
description: Use when designing and implementing CI/CD pipelines, deployment strategies, infrastructure as code, monitoring setup, and DevOps best practices. Includes GitHub Actions, Docker, Kubernetes, and deployment patterns. Based on Azure DevOps, CODING DevOps, and DevOps certification standards.
license: MIT
---

# DevOps Pipeline Skill — CI/CD and Deployment Strategies

## Overview

This skill provides comprehensive guidance for designing and implementing CI/CD pipelines, deployment strategies, infrastructure as code, monitoring setup, and DevOps best practices. It includes GitHub Actions, Docker, Kubernetes, and deployment patterns. Based on Azure DevOps, CODING DevOps, and DevOps certification standards.

## When to Use

**Use this skill when:**
- Designing CI/CD pipelines for any project
- Setting up deployment strategies (blue-green, canary, rolling)
- Configuring infrastructure as code (Terraform, CloudFormation)
- Implementing monitoring and alerting (Prometheus, Grafana)
- Optimizing deployment processes
- Managing cloud infrastructure (AWS, Azure, GCP)
- Setting up GitHub Actions workflows
- Configuring Docker containers and images
- Implementing Kubernetes deployments
- Creating Helm charts for Kubernetes
- Setting up container registries
- Implementing container security scanning
- Configuring CI/CD pipeline caching
- Setting up pipeline secrets management
- Implementing pipeline as code
- Creating multi-stage pipeline strategies
- Setting up deployment environments
- Implementing rollback strategies
- Creating deployment documentation
- Building deployment monitoring dashboards
- Setting up deployment alerting
- Implementing deployment security gates
- Creating deployment automation scripts

**Do NOT use this skill when:**
- Writing application code (use developer skill or specific framework skill)
- Database schema design (use database design skill)
- UI/UX design (use frontend design skill)
- Writing specific test cases (use testing-strategy skill)
- Implementing business logic (use developer skill)

## CI/CD Pipeline Stages

```
┌─────────────────────────────────────────────────────────────┐
│                  CI/CD Pipeline                              │
├─────────────────────────────────────────────────────────────┤
│  1. Checkout                                                 │
│  2. Install Dependencies                                     │
│  3. Lint & Format Check                                      │
│  4. Type Checking                                            │
│  5. Unit Tests                                               │
│  6. Integration Tests                                        │
│  7. Build                                                    │
│  8. Security Scan                                            │
│  9. E2E Tests (optional)                                     │
│  10. Deploy (Staging)                                        │
│  11. E2E Tests (Staging)                                     │
│  12. Deploy (Production)                                     │
└─────────────────────────────────────────────────────────────┘
```

## GitHub Actions Pipeline

### Complete CI/CD Pipeline

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '18'
  NPM_VERSION: '9'

jobs:
  # Stage 1: Lint and Type Check
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck

  # Stage 2: Unit Tests
  test-unit:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run test:unit
      - uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

  # Stage 3: Integration Tests
  test-integration:
    runs-on: ubuntu-latest
    needs: test-unit
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run test:integration

  # Stage 4: Build
  build:
    runs-on: ubuntu-latest
    needs: test-integration
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: build-artifacts
          path: dist/

  # Stage 5: Deploy Staging
  deploy-staging:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/develop'
    environment: staging
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:staging

  # Stage 6: E2E Staging
  test-e2e-staging:
    runs-on: ubuntu-latest
    needs: deploy-staging
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run test:e2e -- --env=staging

  # Stage 7: Deploy Production
  deploy-production:
    runs-on: ubuntu-latest
    needs: test-e2e-staging
    if: github.ref == 'refs/heads/main'
    environment: production
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:production
```

## Deployment Strategies

### Blue-Green Deployment

```
┌─────────────────┐      ┌─────────────────┐
│  Blue (Current) │      │  Green (New)    │
│                 │      │                 │
│  v1.0.0         │─────►│  v1.1.0         │
│                 │      │                 │
└─────────────────┘      └─────────────────┘
      │                         │
      └──────────┬──────────────┘
                 │
           ┌─────▼─────┐
           │  Load     │
           │ Balancer  │
           └───────────┘
```

### Canary Deployment

```
┌─────────────────┐
│  Main Service   │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌───▼───┐
│ Blue  │ │Green  │
│ (90%) │ │(10%)  │
└───────┘ └───────┘
```

### Rolling Update

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 10
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2
      maxUnavailable: 1
  template:
    spec:
      containers:
      - name: app
        image: myapp:2.0.0
```

## Infrastructure as Code

### Terraform Example

```hcl
# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# VPC
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "main-vpc"
    Environment = var.environment
  }
}

# EC2 Instance
resource "aws_instance" "app" {
  ami           = data.aws_ami.amazon_linux.id
  instance_type = var.instance_type

  vpc_security_group_ids = [aws_security_group.app.id]
  subnet_id              = aws_subnet.public.id

  tags = {
    Name        = "app-server"
    Environment = var.environment
  }
}
```

### AWS CloudFormation Example

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Description: 'Simple EC2 instance with security group'

Resources:
  EC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c55b159cbfafe1f0
      InstanceType: t2.micro
      SecurityGroupIds:
        - !Ref InstanceSecurityGroup
      Tags:
        - Key: Name
          Value: !Sub ${AWS::StackName}-instance

  InstanceSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Enable SSH access
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0
```

## Monitoring and Alerting

### Prometheus Configuration

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']

rule_files:
  - /etc/prometheus/rules/*.yml

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'app'
    static_configs:
      - targets: ['app:8080']
```

### Alert Rules

```yaml
# rules/alerts.yml
groups:
  - name: application-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is above 5% for the last 5 minutes"

      - alert: HighLatency
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 1
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "High latency detected"
          description: "95th percentile latency is above 1 second"
```

## Docker Best Practices

### Multi-Stage Build

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["node", "dist/main.js"]
```

### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/app
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=app
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

## Kubernetes Resources

### Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp
          image: myapp:1.0.0
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "128Mi"
              cpu: "100m"
            limits:
              memory: "256Mi"
              cpu: "500m"
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /ready
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 5
```

### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
```

## Common Anti-Patterns

### ❌ Bad: No Pipeline Stages

```yaml
# ❌ BAD: All in one job
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm run deploy
```

**Problems:**
- No parallelization
- Hard to debug
- No quality gates

### ✅ Good: Separate Stages

```yaml
# ✅ GOOD: Separate stages
jobs:
  lint:
    runs-on: ubuntu-latest
    steps: [...]

  test:
    runs-on: ubuntu-latest
    needs: lint
    steps: [...]

  build:
    runs-on: ubuntu-latest
    needs: test
    steps: [...]

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps: [...]
```

### ❌ Bad: No Caching

```yaml
# ❌ BAD: No caching
jobs:
  build:
    steps:
      - uses: actions/checkout@v3
      - run: npm ci  # Always downloads
      - run: npm run build
```

### ✅ Good: With Caching

```yaml
# ✅ GOOD: With caching
jobs:
  build:
    steps:
      - uses: actions/checkout@v3
      - uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - run: npm ci
      - run: npm run build
```

## Real-World Impact

**Before this skill:**
- Manual deployments
- Frequent failures
- No testing gates
- Difficult rollbacks

**After this skill:**
- Automated CI/CD pipelines
- Reliable deployments
- Quality gates
- Easy rollbacks

## Cross-References

- **`testing-strategy`** - For test coverage and quality gates
- **`security-auditor`** - For security scans in pipeline
- **`architecture-patterns`** - For scalable infrastructure design

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Best Practices](https://docs.docker.com/develop/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [DevOps Best Practices](https://cloud.google.com/architecture/devops/devops-best-practices)
