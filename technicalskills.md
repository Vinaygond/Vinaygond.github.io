---
layout: page
title: Technical Stack
subtitle: Production Systems, Forensic Intelligence, and Compliance-Aware Infrastructure
---

<div style="text-align: center; margin-bottom: 32px;">
  <span style="background: #ecfdf5; color: #047857; padding: 6px 14px; border-radius: 9999px; font-weight: 600; font-size: 0.85em; border: 1px solid #a7f3d0;">Distributed Systems Architect · Founder, Exit Protocol</span>
</div>

I choose tools based on the problem — reliability, data sensitivity, operational risk, and long-term maintainability. This page reflects **production experience**, not tutorial familiarity.

**Related:** [Projects](/projects/) · [Research](/research/) · [Resume](/resume/) · [$500K C&D Report](https://github.com/Vinaygond/The-500K-C-D-Report)

---

## Proof points (bounded)

| Area | Evidence |
|---|---|
| Commercial scale | ~$500k ARR in ~6 months (Hydra / XLeadScraper V1) |
| Throughput | ~2M requests/day peak; queue-driven worker orchestration |
| Compliance pivot | V1 → V2 rebuild after Nov 2024 platform reset; public postmortem |
| Forensic systems | LIBR tracing engine, SHA-256 integrity, attorney-reviewable workpapers |
| Stack depth | Python/Django production apps, Celery/Redis, Docker, PostgreSQL at scale |

---

## Core philosophy

> **AI accelerates messy document work. Deterministic systems handle proof. Constraints are architecture inputs.**

I am strongest where scale, sensitive data, legal or financial consequences, and shipping pressure intersect — not where the goal is framework novelty.

**Intersection of my work:**

- Distributed backend systems and async orchestration
- High-throughput data pipelines with isolation boundaries
- Forensic financial intelligence and legal-tech workflows
- AI-assisted document processing with hard determinism boundaries
- Secure evidence handling and cryptographic audit trails
- Compliance-aware automation and platform-risk engineering

---

## Primary languages

### Python *(production default)*

Backend systems, forensic pipelines, automation, OCR workflows, PDF processing, transaction normalization.

- **Frameworks:** Django (primary), FastAPI, Flask
- **Async & workers:** AsyncIO, Celery, Redis queues
- **Data & docs:** Pandas, NumPy, pypdf, Pillow, OCR pipelines
- **Patterns:** State machines, idempotent tasks, matter-scoped data models

### JavaScript / TypeScript / Node.js

Async services, API integrations, product surfaces, automation dashboards, internal tooling.

### SQL

Financial data, audit trails, reconciliation, reporting, transactional workflows.

- PostgreSQL schema design, query optimization, time-series-style financial analysis

### Bash

Deployment automation, server debugging, operational scripts.

---

## Backend & integration

| Capability | Experience |
|---|---|
| API design | REST, webhooks, internal service boundaries |
| Auth | OAuth 2.0 / PKCE, session management, RBAC |
| Ingestion | Secure file upload, document parsing, webhook-driven pipelines |
| Third-party APIs | Rate-aware integration, backoff, credential isolation |

**Frameworks:** Django · FastAPI · Flask · Node.js

---

## Distributed systems

Built and operated systems where throughput, failure handling, and **workload isolation** mattered from day one.

**Patterns:**

- Async worker orchestration and queue-based processing
- Distributed rate limiting, backpressure, retry/dead-letter design
- Idempotent job processing and circuit breakers
- Failure isolation and blast-radius control
- Cache strategy, load distribution, worker health checks
- Structured logging and queue visibility

**Tools:** Redis · Celery · PostgreSQL · Docker · Kubernetes · NGINX · OpenTelemetry-style instrumentation

**Hard lesson (documented publicly):** A system can sustain millions of requests per day and still fail when shared infrastructure creates correlated platform risk. See [The $500K C&D Report](https://github.com/Vinaygond/The-500K-C-D-Report).

---

## Platform detection & compliance-aware architecture

From the Hydra / XLeadScraper postmortem — applicable to any third-party platform dependency:

```
Layer 1  Per-endpoint rate limits
Layer 2  Per-IP / per-token scoring
Layer 3  Behavioral anomaly detection
Layer 4  Network-wide pattern correlation
```

**Design checklist I now apply:**

1. What throughput does the customer actually consume?
2. Can one tenant's behavior correlate with another's?
3. Are credentials shared across users?
4. Does timing look human under ML inspection?
5. What dies if one node is flagged?
6. Can trust be rebuilt after a policy event?
7. Can every system action be explained afterward?

[Full framework](https://github.com/Vinaygond/The-500K-C-D-Report/blob/main/docs/lessons-for-builders.md)

---

## Forensic intelligence & legal-tech

Current focus: **Exit Protocol** — forensic litigation intelligence for high-conflict asset disputes.

**V1 product scope:** Single-claim LIBR tracing workpapers (default export path). Multi-claim pro-rata workpapers require separate review.

**Technical areas:**

- Bank statement and discovery PDF ingestion
- OCR-assisted extraction and transaction classification
- Account timeline reconstruction
- LIBR deterministic tracing (state-machine, not LLM math)
- Attorney-reviewable workpaper generation with visible strategy
- SHA-256 snapshot sealing and exact file-hash verification
- Source provenance links to selected records
- Matter-level data isolation and secure deployment options

**Boundary:** Outputs are structured review material for counsel and retained experts — not legal advice, expert opinion, or court filings.

[Research deep-dive](/research/) · [LIBR demo](https://github.com/Vinaygond/libr-state-machine-demo) · [Projects](/projects/)

---

## AI & document processing

AI where it improves speed and judgment **without** replacing deterministic proof:

| AI-assisted | Deterministic (never delegated to LLM) |
|---|---|
| OCR cleanup, layout parsing | LIBR tracing math |
| Transaction categorization drafts | Ledger totals and strategy disclosure |
| Review note generation | SHA-256 integrity records |
| Communication rewriting (B.I.F.F.) | Workpaper export scope guards |

Probabilistic models do not serve as the final source of truth for legal or financial conclusions.

---

## Security, privacy & evidence integrity

Sensitive legal and financial data requires security as an **architecture input**.

- AES-256 encryption at rest (design-level)
- SHA-256 evidence sealing and tamper-evident workflows
- Audit logs, access controls, matter-level isolation
- Bring-your-own-key and containerized private deployments
- Local-first patterns where appropriate (honest trust boundaries — not marketing claims)

**Two questions every forensic system must answer:**

1. Who had access to the evidence?
2. Can we prove whether the evidence or report changed?

---

## Infrastructure & deployment

**Production experience:** Docker · Kubernetes · Redis · Celery · PostgreSQL · MySQL · NGINX · Linux · AWS · GCP · DigitalOcean · Git/GitHub · CI/CD · secrets management

**Observability:** Structured logs · worker health · queue depth · error tracking · performance profiling

---

## Architecture patterns (recurring)

- Event-driven workflows and async worker pools
- Deterministic state machines with human-review checkpoints
- Idempotent tasks, circuit breakers, dead-letter queues
- Transactional boundaries and versioned report generation
- Rate limiting and cache invalidation
- Audit logging and secure file ingestion
- Per-tenant / per-matter isolation

---

## Production systems

### Exit Protocol *(2025 – present)*
Forensic litigation intelligence · Django, PostgreSQL, Celery, Redis, Docker, OCR, SHA-256 integrity · [exitprotocols.com](https://exitprotocols.com)

### Hydra / XLeadScraper *(2023 – present)*
High-throughput data infrastructure · ~2M req/day peak, ~$500k ARR V1 · compliance pivot documented publicly · [xleadscraper.com](https://xleadscraper.com)

### ZeroTrace *(2025, research prototype)*
Identity-locked ephemeral messaging experiment · Django, Fernet, OAuth · [post](/2025-12-04-building-zerotrace/)

### Consulting *(ongoing)*
Backend architecture, high-throughput pipelines, technical due diligence, resilient automation under operational and legal pressure.

---

## Currently learning

- Rust for performance-critical components
- Advanced OCR and document intelligence
- Cryptographic evidence workflows
- Privacy-preserving deployment models
- WebAssembly for portable compute

---

## Bottom line

**Learn what the problem demands. Use what is proven. Build what lasts.**

I turn messy real-world problems into reliable software pipelines — with bounded claims, explainable outputs, and architecture that survives platform, legal, and operational pressure.

[View projects](/projects/) · [Read research](/research/) · [Email me](mailto:vinay@exitprotocols.com)

*Last updated: July 2026*