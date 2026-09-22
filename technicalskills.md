---
layout: page
title: Skills, with context
subtitle: What I use, where it appears, and what I can walk through.
permalink: /technicalskills/
eyebrow: Skills
---

## Core implementation stack

| Area | Tools | Concrete application |
|---|---|---|
| Backend | Python, Django | Case-scoped workflows, review state, validation and application services |
| Data | PostgreSQL, SQL, Python Decimal | Account records, transactional updates, reconciliation and exact-cent calculations |
| Background work | Celery, Redis | Asynchronous processing and worker integration |
| Interfaces | JavaScript, HTML, CSS, Django templates | Document review, account/period navigation and source inspection |
| Delivery | Docker, Git, GitHub Actions | Repeatable environments, regression checks and controlled releases |
| Testing | unittest, Django tests, Playwright | Calculation fixtures, permissions, concurrency coverage and browser workflows |

## Engineering capabilities

### Model the workflow before automating it

Separate source records, software proposals, reviewer decisions and analytical outputs. Define what each object can establish—and what it cannot.

### Make numerical behavior reproducible

Use explicit inputs, Decimal arithmetic, named ordering rules and preserved snapshots. The [public LIBR demo](https://github.com/Vinaygond/libr-state-machine-demo) provides a small inspectable example.

### Handle documents without overstating extraction

Preserve source identity and page references, expose unresolved records, and measure correction effort. Current native-text organization is not a claim of universal scanned-document OCR.

### Integrate with explicit authorization

Work with OAuth-based integrations, selected-document access, credential protection and failure states. Clio integration work is a technical implementation, not a partnership or certification.

### Test consequential changes

Exercise permission boundaries, stale review state, reconciliation differences and exact-file verification. PostgreSQL concurrency checks and browser checks cover different failure modes; neither replaces the other.

## Historical experience and research

The [Hydra retrospective](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/) discusses async orchestration and platform-dependency failures. It is not a verified scale benchmark or evidence of platform permission.

I explore document intelligence and assisted data preparation, but do not present every framework mentioned in an older experiment as production expertise.

## What I would bring to a team

- Ownership across backend services, data models and the interface people actually use.
- Turning ambiguous product requirements into explicit states and testable behavior.
- Willingness to surface limitations, revise a design, and remove features that do not help the user.

[Inspect the projects](/projects/) · [Download the résumé](/Resume.pdf)
