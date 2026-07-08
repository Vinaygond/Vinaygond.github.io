---
layout: page
title: Projects
subtitle: Forensic Intelligence, Distributed Systems, and Compliance-Aware Architecture
---

<div style="text-align: center; margin-bottom: 32px;">
  <span style="background: #f0f9ff; color: #0369a1; padding: 6px 14px; border-radius: 9999px; font-weight: 600; font-size: 0.85em; border: 1px solid #bae6fd;">Founder · Exit Protocol · Open for senior backend / platform roles</span>
</div>

Selected work across forensic litigation intelligence, high-throughput distributed infrastructure, public engineering postmortems, and security research. Every project below ships or documents real systems — not concept decks.

**Quick navigation:** [Exit Protocol](#exit-protocol) · [Hydra / XLeadScraper](#hydra--xleadscraper) · [$500K C&D Report](#the-500k-cease-and-desist-report) · [Forensic Accounting Research](#algorithmic-forensic-accounting-research) · [Content Security Research](#content-leakage-vectors-in-subscription-media) · [ZeroTrace](#zerotrace-security-research)

---

## Exit Protocol

**Forensic Litigation Intelligence · Active Development (US Beta)**

| | |
|---|---|
| **Role** | Founder & systems architect |
| **Site** | [exitprotocols.com](https://exitprotocols.com) |
| **Focus** | Single-claim LIBR tracing workpapers, evidence integrity, attorney-reviewable outputs |

**Problem:** High-conflict divorce and asset disputes depend on tracing where money moved — but manual forensic accounting is slow, expensive, and hard to audit. Bank statements arrive as messy PDFs; commingled accounts require strict mathematical tracing.

**What it does:** Exit Protocol converts financial records into structured, reviewable evidence. AI assists document ingestion and classification; **deterministic engines** handle LIBR tracing, ledger consistency, and workpaper generation. Outputs are structured review material for counsel and retained experts — not legal advice, expert opinion, or court filings.

**Core systems:**

- **LIBR Tracing Engine** — Deterministic Lowest Intermediate Balance Rule state-machine; visible strategy, ledger agreement, source provenance on the workpaper face.
- **Document Ingestion** — OCR-assisted extraction from PDF statements and discovery packets; normalized transaction timelines.
- **Evidence Integrity** — SHA-256 snapshot sealing, exact file-hash verification, processing history.
- **Shadow Report** — PDF metadata, ghost text, redaction artifact, and structure inspection.
- **Sovereign Deployment** — Containerized private deployments for sensitive legal and financial data.
- **B.I.F.F. Suite** — AI-assisted communication rewriting for high-conflict correspondence (review aid, not legal advice).

**Stack:** `Python` `Django` `PostgreSQL` `Celery` `Redis` `Docker` `OCR` `Mistral/Gemini` `AES-256` `SHA-256`

[Product](https://exitprotocols.com) · [Architect profile](https://exitprotocols.com/architect/) · [LIBR demo](https://github.com/Vinaygond/libr-state-machine-demo) · [Case study post](/2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/) · [Research](/research/)

<br/>

## Hydra / XLeadScraper

**High-Throughput Data Infrastructure · V2 Live**

| | |
|---|---|
| **Period** | 2023 – present (V1 → V2 pivot Nov 2024) |
| **Peak scale** | ~2M requests/day |
| **Commercial** | ~$500k ARR in ~6 months (V1) |
| **Site** | [xleadscraper.com](https://xleadscraper.com) |

**What it was:** Distributed request orchestration — queue-driven workers, endpoint routing, token pools, enrichment pipelines, and NLP intent scoring that turned public social signals into structured lead data.

**What it taught:** Throughput is not architecture. V1 passed technical limits while failing platform policy, behavioral detection, and blast-radius isolation. 30+ customer accounts were caught when shared infrastructure correlated at the network layer.

**V2 pivot:** Official API paths, single-user OAuth, no shared proxy pools, human-pattern timing, per-user isolation, qualified leads over raw volume (~10k profiles/day per user vs ~2M/day network peak).

**Stack:** `Python` `AsyncIO` `Redis` `PostgreSQL` `Celery` `TypeScript` `Node.js`

[Product](https://xleadscraper.com) · [$500K C&D Report](https://github.com/Vinaygond/The-500K-C-D-Report) · [Postmortem](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/) · [Detection layers](/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/)

<br/>

## The $500K Cease-and-Desist Report

**Public Engineering Postmortem · Educational Artifact**

| | |
|---|---|
| **Format** | GitHub repo + interactive HTML site |
| **Audience** | Backend engineers, founders, platform-risk teams |
| **Lesson** | Constraints are architecture inputs, not obstacles |

Structured case study of how Hydra / XLeadScraper scaled commercially and failed architecturally — and what the V2 compliance reset looks like in system design.

**What's inside:**

| Document | Content |
|---|---|
| `REPORT.md` | Full narrative and architecture analysis |
| `docs/detection-layers.md` | Four-layer platform enforcement model |
| `docs/v1-vs-v2.md` | Architecture comparison and pivot checklist |
| `docs/lessons-for-builders.md` | Decision framework for high-stakes systems |
| `docs/timeline.md` | Founder arc timeline |
| `docs/faq.md` | Common questions |
| `index.html` | Interactive charts, layer tabs, V1/V2 comparison |

**Portable to Exit Protocol:** blast-radius control, deterministic outputs, reviewable artifacts, SHA-256 integrity, AI/determinism boundaries.

[GitHub](https://github.com/Vinaygond/The-500K-C-D-Report) · [Blog summary](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/) · [Technical deep-dive](/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/) · [Author page (report site)](https://github.com/Vinaygond/The-500K-C-D-Report/blob/main/founder.html)

<br/>

## Algorithmic Forensic Accounting Research

**Deterministic Asset Tracing & Evidence Integrity**

Research on rebuilding forensic accounting as a software pipeline: OCR-assisted ingestion, LIBR state-machine tracing, Zone of Truth simulations for ambiguous transaction ordering, and cryptographic chain-of-custody.

**Key ideas:**

- Manual tracing bottlenecks ($50k+ cases, spreadsheet fragility, weak reproducibility)
- LIBR as deterministic state machine — not LLM guesswork
- Replenishment fallacy and why math must stay explainable
- SHA-256 evidence sealing and auditable processing history
- Matter-level isolation and private deployment for sensitive litigation

[Read on Research page](/research/) · [Full paper PDF](https://vinaygond.github.io/Exit%20Protocol_%20Forensic%20Accounting%20Analysis.pdf) · [Technical stack](/technicalskills/)

<br/>

## Content Leakage Vectors in Subscription Media

**Access Control, Watermarking & Platform Incentives**

Research treating creator content leakage as a distributed systems and incentive-design problem — not only a moderation problem.

**Proposed shift:** static archive access → dynamic, traceable, atomic content access with encrypted storage, short-lived delivery tokens, forensic watermarking, and audit logs.

[Read on Research page](/research/#case-study-content-leakage-vectors-in-subscription-media)

<br/>

## ZeroTrace (Security Research)

**Identity-Locked Ephemeral Messaging · Internal Prototype**

Weekend security experiment: can cryptographic identity binding + burn-after-reading delivery create a high-signal contact channel when public inboxes are unusable?

Not a product. Not a "bypass DMs" tool. A research prototype exploring friction, OAuth identity verification, Fernet encryption, and honest server-trust boundaries.

[Read post](/2025-12-04-building-zerotrace/) · [Technical stack](/technicalskills/)

<br/>

---

### How these projects connect

```
Hydra V1 (throughput-first)
    → C&D + blast-radius lesson
        → V2 (compliance-first) + public C&D Report
            → Exit Protocol (determinism + evidence integrity)
```

**Philosophy across all work:** Use AI where it accelerates judgment. Use deterministic systems where proof requires precision. Treat constraints as architecture.

---

**Contact:** [vinay@exitprotocols.com](mailto:vinay@exitprotocols.com) · [LinkedIn](https://linkedin.com/in/vinaygo) · [GitHub](https://github.com/Vinaygond) · [Technical stack](/technicalskills/) · [Research](/research/)

*Last updated: July 2026*