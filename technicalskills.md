---
layout: page
title: Technical Stack
subtitle: Production Systems, Forensic Intelligence, and Compliance-Aware Infrastructure
---

## Core Philosophy

I do not treat technology as an identity.

I choose tools based on the problem: reliability, speed of iteration, data sensitivity, operational risk, and long-term maintainability. Some systems need boring infrastructure. Some need custom architecture. The point is not to look sophisticated. The point is to ship systems that work under pressure.

My strongest work sits at the intersection of:

- Distributed backend systems.
- High-throughput data pipelines.
- Forensic financial intelligence.
- Legal-tech workflows.
- AI-assisted document processing.
- Secure evidence handling.
- Compliance-aware automation.

---

## Primary Languages

### Python

Python is my main production language for backend systems, data processing, automation, and forensic intelligence.

I use it for:

- Django and FastAPI backends.
- AsyncIO-based orchestration.
- Celery worker pipelines.
- OCR and document processing workflows.
- Transaction normalization and financial tracing.
- PDF inspection and evidence extraction.
- Internal automation and operational tooling.

Relevant libraries and areas:

- Django, FastAPI, Flask.
- AsyncIO, Celery, Redis queues.
- Pandas, NumPy, pypdf, Pillow.
- OCR and document parsing pipelines.
- SQLAlchemy-style data modeling patterns.

### JavaScript / TypeScript / Node.js

I use JavaScript and TypeScript for async services, product interfaces, integrations, and workflow tooling.

I use them for:

- Node.js backend services.
- API integrations.
- Frontend and product surfaces.
- Real-time workflows.
- Automation dashboards.
- Internal tools.

### SQL

I use SQL heavily for financial data, audit trails, transaction history, reconciliation, reporting, and system state.

Core experience:

- PostgreSQL schema design.
- Relational modeling.
- Transactional workflows.
- Query optimization.
- Time-series-style financial analysis.
- Audit and reporting queries.

### Bash

I use Bash for deployment support, server automation, debugging, and operational workflows.

---

## Backend and Product Infrastructure

### Frameworks

- **Django:** Primary framework for full-stack backend systems, admin workflows, authentication, structured business logic, and production applications.
- **FastAPI:** Async APIs, service boundaries, and high-performance internal endpoints.
- **Flask:** Lightweight APIs, quick services, and focused internal tools.
- **Node.js:** Async I/O services, integrations, automation, and event-driven workflows.

### APIs and Integration

- REST API design.
- Webhooks.
- OAuth 2.0 and PKCE flows.
- Role-based access control.
- Internal service APIs.
- Third-party API integration.
- Secure file and document ingestion.

---

## Distributed Systems

I have built and operated systems where throughput, failure handling, and workload isolation mattered from day one.

Experience includes:

- Async worker orchestration.
- Queue-based task processing.
- Distributed rate limiting.
- Backpressure and retry design.
- Idempotent job processing.
- Worker health checks.
- Load distribution.
- Cache strategy.
- Failure isolation.
- Long-running document and data-processing jobs.

Tools and patterns:

- Redis.
- Celery.
- PostgreSQL.
- Docker.
- Kubernetes.
- NGINX.
- Message queues.
- Circuit breakers.
- Event-driven architecture.
- Structured logging.

---

## Forensic Intelligence and Legal-Tech Systems

My current focus is **Exit Protocol**, a forensic litigation intelligence platform for high-conflict divorce, asset tracing, and financial discovery.

Technical areas I work on:

- Bank statement ingestion.
- OCR-assisted financial record extraction.
- Transaction classification.
- Account timeline reconstruction.
- Lowest Intermediate Balance Rule (LIBR) tracing.
- Asset concealment signals.
- Attorney-reviewable workpaper generation.
- Evidence sealing and audit trails.
- Secure matter-level data isolation.
- AI-assisted case review and communication workflows.

The key design principle:

**AI helps turn messy documents into reviewable structure. Deterministic systems handle the legal math.**

---

## AI and Document Processing

I use AI where it improves speed and judgment without replacing deterministic proof.

Practical AI use cases:

- OCR cleanup.
- Statement parsing.
- Transaction categorization.
- Legal document summarization.
- Review note generation.
- Communication rewriting.
- Pattern detection across messy records.

I avoid using probabilistic models as the final source of truth for legal or financial conclusions. For those areas, the system needs explainable rules, traceable inputs, and repeatable outputs.

---

## Security, Privacy, and Evidence Integrity

Exit Protocol and similar systems operate on sensitive legal and financial data, so security is part of the architecture rather than an afterthought.

Relevant experience:

- AES-256 encryption concepts and secure storage design.
- SHA-256 evidence sealing.
- Tamper-evident report workflows.
- Audit logs.
- Access controls.
- Matter-level data isolation.
- Secure document handling.
- Bring-your-own-key deployment models.
- Containerized private deployments.
- Privacy-aware data processing.

I care about being able to answer two questions:

1. Who had access to the evidence?
2. Can we prove whether the evidence or report changed?

---

## Infrastructure and Deployment

Tools and platforms I have used in production or serious build environments:

- Docker.
- Kubernetes.
- Redis.
- Celery.
- PostgreSQL.
- MySQL.
- NGINX.
- Linux servers.
- AWS.
- GCP.
- DigitalOcean.
- Git and GitHub.
- CI/CD workflows.
- Environment-based secrets.
- Logging and monitoring pipelines.

Observability patterns:

- Structured application logs.
- Worker health monitoring.
- Queue visibility.
- Error tracking.
- Performance profiling.
- OpenTelemetry-style instrumentation.

---

## High-Throughput Systems Experience

My first major venture, Hydra / XLeadScraper, taught me how to design systems around throughput, isolation, queueing, and operational constraints.

That system reached roughly **$500k ARR in six months** and operated at millions of requests per day.

The important technical lessons were:

- Throughput is only one metric.
- Fast systems still fail if they ignore platform constraints.
- Isolation, rate control, observability, and compliance are architectural concerns.
- A durable product needs trust, not just speed.

That experience now informs how I build more defensible systems.

---

## Architecture Patterns I Use

- Event-driven workflows.
- Async worker pools.
- Queue-based processing.
- Idempotent tasks.
- Circuit breakers.
- Retry and dead-letter patterns.
- Rate limiting.
- Cache invalidation.
- Transactional boundaries.
- Audit logging.
- Deterministic state machines.
- Human-review checkpoints.
- Secure file ingestion.
- Versioned report generation.

---

## Current Learning

I am currently going deeper into:

- Rust for performance-critical systems.
- WebAssembly for portable compute.
- GraphQL for complex data access patterns.
- Advanced OCR and document intelligence.
- Cryptographic evidence workflows.
- Privacy-preserving deployment models.

---

## Production Systems Built

### Exit Protocol

Forensic litigation intelligence for high-conflict financial cases.

- Stack: Python, Django, PostgreSQL, Celery, Redis, Docker, OCR pipelines, AI-assisted review, cryptographic evidence sealing.
- Focus: LIBR tracing, document ingestion, transaction classification, secure evidence workflows, attorney-reviewable workpapers.
- Status: Active development, US beta.

### Hydra / XLeadScraper

High-throughput data infrastructure and automation product.

- Stack: Python, AsyncIO, Redis, PostgreSQL, distributed workers, TypeScript/Node.js, automation tooling.
- Scale: Millions of requests per day at peak.
- Outcome: Reached roughly $500k ARR in six months and produced the operating lessons that now shape my compliance-aware architecture.

### Infrastructure and Consulting Projects

Systems design and technical strategy work across distributed systems, automation, resilience, and high-throughput backend architecture.

---

## Bottom Line

I build systems that turn messy real-world problems into reliable software pipelines.

I am strongest when the work involves scale, sensitive data, high-pressure constraints, legal or financial consequences, and the need to ship something real instead of just talking about architecture.

**Learn what the problem demands. Use what is proven. Build what lasts.**

---

*Last Updated: May 2026*  
*Technologies listed here reflect tools I have used in real systems, not tutorial familiarity.*
