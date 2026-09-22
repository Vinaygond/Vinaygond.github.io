---
layout: page
title: Selected work
subtitle: The problem, the implementation, and the boundaries—not just a list of frameworks.
permalink: /projects/
eyebrow: Work
---

## Exit Protocol
{: #exit-protocol }

**Role:** Founder & builder · **Period:** 2025–present · **Status:** Active development and pilot evaluation

Forensic accountants need to identify what is in a financial production before they can analyze it. Exit Protocol is an evidence-linked, reviewer-controlled platform for that preparation and subsequent financial review.

### What I built

- **Document production workflow:** source-file and page accounting, proposed document boundaries, account/period metadata, and explicit review decisions.
- **Financial Record Workspace:** account-by-period orientation, source inspection, recorded account activity, statement reconciliation, and visible unresolved records.
- **Review-state boundaries:** transfer proposals remain separate from reviewer-confirmed relationships; movement views do not silently create financial or analytical state.
- **Deterministic calculations:** Decimal-based controls and a bounded, single-claim, one-account LIBR workpaper path.
- **Reproducibility:** preserved calculation inputs, source references, and exact-file SHA-256 comparison for registered exports.
- **Engineering checks:** Django regression coverage, PostgreSQL concurrency tests for sensitive operations, desktop browser checks, and CI release gates.

### The decisions worth discussing

**Make uncertainty visible.** Proposed classifications can be wrong. Image-only pages remain unresolved in the current native-text organization workflow rather than being presented as successful OCR.

**Separate the data model from the conclusion.** A reviewed transfer records a professional's decision about a relationship. It does not establish ownership, intent or a legal finding.

**Preserve the original boundary.** A source hash identifies registered bytes. It does not establish authenticity or admissibility.

**Build around the practitioner's next action.** Document organization is the current pilot focus; sophisticated tracing does not remove the need to get the record into usable shape.

**Stack:** Python, Django, PostgreSQL, Celery, Redis, JavaScript, HTML/CSS, Docker, GitHub Actions, Playwright.

[Product](https://exitprotocols.com/) · [Engineering case study](/2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/) · [Public calculation demo](https://github.com/Vinaygond/libr-state-machine-demo)

The full application is private. Public descriptions are not a claim of independent security certification, demonstrated customer savings, or professional validation. Workpapers require professional review.

---

## LIBR state-machine demo
{: #libr-demo }

**Role:** Author · **Status:** Public reference implementation, not the full product

A small Python artifact for inspecting a financial calculation without access to the private platform.

- Standard-library implementation and an explicit chronological state transition.
- Synthetic CSV fixtures, JSON output, and golden expected results.
- Tests for balance changes and ordering-sensitive behavior.
- Documented assumptions and limitations.

**Why it is here:** a hiring engineer can read the model, run the tests, and challenge the assumptions.

[Source and tests](https://github.com/Vinaygond/libr-state-machine-demo) · [Validation notes](https://github.com/Vinaygond/libr-state-machine-demo/blob/main/VALIDATION.md)

---

## Hydra / XLeadScraper: platform-risk postmortem
{: #hydra }

**Role:** Founder & builder · **Status:** Historical project and retrospective

I built a commercial data-automation product and documented the consequences of optimizing throughput without adequately accounting for platform authorization and shared-infrastructure risk.

The engineering discussion covers request orchestration, credential boundaries, correlated failures, and designing a permitted workload instead of treating restrictions as something to evade.

### What the screenshots actually support

The published correspondence is dated November 10, 2024. It alleges unauthorized activity and refers to **at least $500,000 in alleged profits**. That is an allegation in correspondence—not audited revenue, annual recurring revenue, a court finding, or proof of a compliant successor product.

The retrospective's throughput figures are founder-reported, not independently benchmarked here. I do not use them as verified résumé metrics.

[Case study and screenshots](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/) · [External retrospective](https://xleadscraper.com/)

---

## Earlier experiments

[ZeroTrace](/2025-12-04-building-zerotrace/) is a historical messaging prototype exploring recipient identity and server trust. It is not an independently security-reviewed product. Earlier learning projects remain in the [writing archive](/research/#archive), separated from current engineering work.

## Discuss the work

I am interested in backend and full-stack product roles where document workflows, data correctness and integration boundaries matter.

[Email me](mailto:vinay@exitprotocols.com) · [Read the résumé](/resume/)
