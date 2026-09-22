---
layout: post
title: "Exit Protocol: building a reviewer-controlled financial record"
subtitle: "Document organization, explicit review state and reproducible calculations."
date: 2025-12-28
permalink: /2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/
tags: [django, financial-records, engineering]
---

**Updated September 22, 2026.** This replaces an earlier product description that mixed implemented workflows with aspirations.

## Start before the analysis

A mixed financial production is not a usable account history. Someone has to determine where documents begin and end, identify accounts and represented periods, and resolve ambiguous records.

Exit Protocol is an evidence-linked, reviewer-controlled financial investigation platform. The immediate pilot focuses on document organization. Subsequent review surfaces connect the organized sources to account activity and bounded analytical methods.

## Distinct states, not one confident answer

The implementation distinguishes:

1. An original source and its recorded identity.
2. Proposed document boundaries and metadata.
3. Explicit reviewer decisions.
4. Recorded transactions and statement periods.
5. Deterministic numerical controls.
6. Proposed and reviewer-confirmed transfer relationships.
7. Bounded analytical output and workpaper references.

These distinctions matter because a proposal is not an approval, a reconciled balance is not proof of completeness, and a movement between accounts is not an ownership determination.

## The reconstruction desk

The Financial Record Workspace brings account-by-period navigation, source inspection, recorded activity and numerical controls into the same working context. The recorded transaction population is not silently reduced by a materiality filter.

The interface should make the next useful question easy: which statement is represented here, where is its source, and what still needs review?

## Calculation and source integrity

The LIBR workpaper path remains single-claim and one-account. Inputs and ordering are explicit, calculations are deterministic, and preserved snapshots support reproduction.

SHA-256 comparison establishes whether a file matches registered bytes. It does not establish authenticity, completeness, admissibility or a professional conclusion.

The [public state-machine demo](https://github.com/Vinaygond/libr-state-machine-demo) is a small inspectable calculation artifact, not the complete private application.

## Constraints I keep visible

- The current document-organization workflow uses native PDF text; image-only pages can remain unresolved. It is not universal OCR.
- A transfer candidate requires review before becoming a reviewer-confirmed relationship.
- Current finalized value lineage stops at the outgoing-transfer boundary; it does not automatically propagate claims across accounts.
- Clio access is a user-triggered technical integration, not an endorsement or permission to sweep an entire workspace.
- Outputs support professional review. They do not supply legal advice or independent expert opinions.

## Verification approach

Django regression tests cover financial and workflow behavior. PostgreSQL concurrency coverage matters for locking-sensitive operations. Browser checks cover navigation and review interactions. Synthetic fixtures support repeatable checks, but do not establish real-record performance or production security.

**Stack:** Python, Django, PostgreSQL, Celery, Redis, JavaScript, Docker, GitHub Actions and Playwright.

[Project overview](/projects/#exit-protocol) · [Product](https://exitprotocols.com/) · [Contact](mailto:vinay@exitprotocols.com)
