---
layout: page
title: Projects
subtitle: Forensic Intelligence, Distributed Systems, and Security Architecture
---

A selection of projects and research work focused on high-stakes software systems: forensic financial intelligence, distributed infrastructure, secure evidence workflows, and compliance-aware automation.

---

## Exit Protocol

**Forensic Litigation Intelligence for High-Conflict Financial Cases**

**Mission:** Make financial truth faster to uncover, easier to verify, and harder to manipulate in divorce and complex litigation.

Exit Protocol converts messy bank statements, transaction histories, and discovery documents into structured, reviewable evidence. The platform combines AI-assisted document processing with deterministic financial tracing and cryptographic evidence sealing.

**Core Systems:**

- **LIBR Tracing Engine:** Applies deterministic Lowest Intermediate Balance Rule logic for commingled asset analysis.
- **Financial Document Ingestion:** Converts PDFs, statements, and exports into structured transaction records.
- **AI Audit Express:** Uses AI to accelerate classification, review notes, and case summaries while keeping legal proof deterministic.
- **Evidence Integrity Layer:** Seals data snapshots and report artifacts with SHA-256 hash records.
- **Sovereign Deployment Model:** Supports private, containerized deployments for sensitive legal and financial data.
- **Shadow Report:** Inspects PDFs for metadata, ghost text, redaction artifacts, and document-structure anomalies.

**Tech Stack:** `Python` `Django` `PostgreSQL` `Celery` `Redis` `Docker` `OCR` `AI APIs` `AES-256` `SHA-256`

[View Project](https://exitprotocols.com) | [Architect Profile](https://exitprotocols.com/architect/) | [LIBR Demo](https://github.com/Vinaygond/libr-state-machine-demo) | [Case Study](/2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/) | [Research](/research/)

<br/>

## Hydra / XLeadScraper

**High-Throughput Data Infrastructure**

**Mission:** Build a data infrastructure product that could turn large-scale public signals into qualified business leads.

Hydra was my first major venture and reached roughly **$500k ARR in six months**. Technically, it was a distributed data-processing system built around async workers, queues, rate control, operational isolation, and enrichment pipelines.

It also became an important architectural lesson: throughput is not the same as durability. A system can be fast and profitable while still being fragile if compliance, platform constraints, observability, and user trust are not built into the core design.

**Core Systems:**

- **Distributed Worker Orchestration:** Coordinated high-volume processing across async workers and queues.
- **Rate and Workload Control:** Managed throughput, retries, backpressure, and failure isolation.
- **Lead Qualification Pipeline:** Filtered and enriched public signals into structured lead data.
- **Operational Monitoring:** Tracked worker behavior, queue health, and processing failures.
- **V2 Philosophy:** Rebuilt around slower, more sustainable, compliance-aware workflows.

**Tech Stack:** `Python` `AsyncIO` `Redis` `PostgreSQL` `Celery` `TypeScript` `Node.js`

[View Project](https://xleadscraper.com) | [$500K C&D Report](https://github.com/Vinaygond/The-500K-C-D-Report) | [Technical Postmortem](/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/)

<br/>

## Algorithmic Forensic Accounting Research

**Deterministic Asset Tracing and Evidence Integrity**

This research explores how financial tracing can be rebuilt as a software pipeline rather than a manual spreadsheet exercise.

The work focuses on OCR-assisted ingestion, deterministic state-machine tracing, Zone of Truth simulations for ambiguous transaction ordering, and cryptographic chain-of-custody records.

**Core Topics:**

- Manual forensic accounting bottlenecks.
- LIBR tracing as a deterministic state-machine problem.
- OCR and document intelligence for messy financial records.
- Cryptographic evidence sealing.
- Privacy-sensitive deployment models for legal teams.

[Read Research](/research/) | [Read Full Paper](https://vinaygond.github.io/Exit%20Protocol_%20Forensic%20Accounting%20Analysis.pdf)

<br/>

## Content Leakage Vectors in Subscription Media

**Access Control, Watermarking, and Platform Incentives**

This research analyzes content leakage as a distributed systems and incentive-design problem, not only a moderation problem.

It proposes a shift from static archive access toward dynamic, traceable, atomic content access using short-lived delivery tokens, encrypted storage, forensic watermarking, and audit logs.

**Core Topics:**

- Static vs dynamic content access.
- Short-lived authorization.
- Per-user watermarking.
- Creator protection and enforcement workflows.
- Market incentives for safer subscription media platforms.

[Read Research](/research/)
