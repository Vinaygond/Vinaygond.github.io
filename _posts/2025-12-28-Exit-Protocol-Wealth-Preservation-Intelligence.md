---
layout: post
title: "Exit Protocol: Reconstruct the Record Before You Analyze It"
subtitle: "What I am building after listening to the forensic accountant who has to open the production"
date: 2025-12-28
image: /img/blackimg.jpg
tags: [forensics, legal-tech, finance, python, django]
---

# Exit Protocol

**Status:** Active development and practitioner pilot evaluation

**Product:** [exitprotocols.com](https://exitprotocols.com)

Exit Protocol is an evidence-linked, reviewer-controlled workspace for forensic financial investigations.

That description is more restrained than the way I described the product when I began building it. It is also more accurate.

The important problem is not asking an AI to “follow the money.” The first problem is establishing a financial record that a professional can inspect: which productions arrived, which documents they contain, which accounts and periods are represented, which rows were recorded, what reconciles, what remains unresolved, and what a reviewer actually decided.

The current direction came from a practical observation by a forensic accountant: before the expert analysis starts, somebody may spend days turning a mixed production into usable records. One large PDF can contain several institutions, accounts, statement periods, tax records, duplicates, supplemental productions, and pages that do not belong together. The expert has to open files, identify boundaries, name what is present, order it, and work out what is missing from the expected set.

That preparation is not glamorous. It is the work that makes everything after it possible.

---

## The product decision

The first commercial wedge for Exit Protocol is therefore deliberately concrete:

```text
mixed financial production
    -> proposed document boundaries and metadata
    -> reviewer decisions
    -> account and period reconstruction
    -> recorded transaction activity
    -> statement controls and reconciliation
    -> reviewed movement relationships
    -> bounded analytical methods
    -> reproducible workpapers
```

The software can propose structure. The professional controls what becomes reviewed state.

That boundary matters because a filename, extracted account number, transfer match, balance agreement, or missing month can each be useful without proving what a legal case ultimately means. Exit Protocol keeps those meanings separate instead of allowing a convenient software guess to become an invisible conclusion.

---

## 1. Organize the production without rewriting it

A production enters the system as source material. Exit Protocol records the delivery and preserves the original evidence separately from proposed organization.

The document-production workflow can help a reviewer work through:

- source-file and page accounting;
- proposed document boundaries;
- proposed institution, account identifier, document type, and represented period;
- duplicate relationships;
- reviewer-defined expectations; and
- explicit approval, correction, rejection, or unresolved states.

The proposal is not the source, and it is not a reviewer decision. Approving organization does not replace the original file or erase where a page arrived from.

This is also where the current extraction boundary is important: native-text documents can support bounded organization, while image-only pages remain visibly unresolved unless they enter a separately reviewed process. The product does not claim universal OCR or silent success on unreadable records.

---

## 2. Reconstruct accounts and represented periods

Once document organization has been reviewed, the Financial Record Workspace gives the practitioner an account-by-period view of the material.

The useful question is intentionally boring:

> Which statements do I have for this account, for these months, and where can I inspect them?

The workspace groups reviewed financial records by account and represented period. It can display reviewer expectations alongside represented periods, overlaps, and unresolved expectation states. Selecting a statement opens its recorded control information, source pages, transaction activity, and downstream review paths.

A visible period gap is a review condition—not an autonomous declaration that discovery is incomplete. A represented statement is an application record—not proof that the underlying document is authentic or sufficient. Those distinctions stay visible in the interface and data model.

---

## 3. Show complete recorded activity and deterministic controls

For a selected statement period, the workspace shows the complete recorded account activity in scope. It does not silently hide smaller transactions behind a materiality filter.

Where the reviewed inputs support it, statement reconciliation uses exact Decimal arithmetic:

```text
opening balance
+ recorded deposits
- recorded withdrawals
= calculated closing balance
```

The calculated balance is compared with the reviewer-recorded closing balance. Transaction-count controls and continuity observations are also exposed where their inputs exist.

Agreement is useful. It does not establish that every discoverable record was produced, that every transaction description is correct, or that a statement is authentic. It is a reproducible numerical control for professional review.

---

## 4. Keep transfer proposals separate from reviewed movements

Software can detect candidate relationships between ledger entries. Exit Protocol records those as transfer proposals.

Only an explicit reviewer decision creates a `ReviewedTransfer`: an application-level relationship saying the selected ledger legs are being treated as one movement under the platform's contract. Simple, split, merged, and bounded-fee relationships are subject to exact-cent conservation.

A reviewed movement still does not establish legal ownership, purpose, intent, concealment, source ancestry, or marital characterization. Those are professional or legal interpretations outside the software's autonomous authority.

Money Flow then provides a read-only view of reviewed movements. It helps a practitioner inspect how represented accounts are connected without creating new financial records or silently turning a proposal into a decision.

---

## 5. Use deterministic methods only within disclosed bounds

Exit Protocol includes a Lowest Intermediate Balance Rule workpaper path. Its present scope is intentionally narrow:

- one account;
- one claim;
- reviewed financial records;
- disclosed ordering and settings;
- deterministic calculation;
- preserved inputs and source references; and
- attorney-reviewable output requiring professional review.

The platform also supports conserved Value Lineage for one reviewer-selected source value inside one account. Finalization requires exact-cent conservation and creates immutable analytical records for that run. Current lineage stops at a reviewed outgoing-transfer boundary; it does not automatically propagate value into destination accounts or perform multi-hop or multi-claim tracing.

These limits are part of the product. A deterministic calculation can be reproduced from named inputs, but it is not a legal conclusion, expert opinion, ownership determination, or promise of court acceptance.

---

## 6. Preserve source reversibility and exact-file identity

The platform keeps source relationships close to the work:

- original evidence records and registered SHA-256 references;
- page, row, or region anchors where available;
- transaction-to-evidence relationships with explicit review state;
- calculation input fingerprints and snapshots; and
- exact-file verification for registered final exports.

SHA-256 has a precise job here. A matching digest shows that uploaded bytes match registered bytes. It does not, by itself, prove authenticity, admissibility, substantive correctness, or approval.

That narrower statement is stronger than calling a file “sealed.” It tells a reviewer exactly what the control establishes and what it does not.

---

## Why the reviewer-controlled model matters now

General-purpose models will keep improving at reading financial documents, proposing classifications, and drafting summaries. Those capabilities are useful, but they are not the system of record.

Exit Protocol is being built around the state that persists after the suggestion:

- What source was registered?
- What did software propose?
- What did the reviewer accept, correct, reject, or leave unresolved?
- Which records and assumptions entered a calculation?
- What changed after a checkpoint?
- Can another professional return to the source and reproduce the result?

That is the product: not a chatbot that declares what happened, but a controlled environment in which a practitioner reconstructs what the analysis is allowed to rely on.

---

## The engineering lesson behind the change

My earlier work on Hydra / XLeadScraper taught me what happens when throughput becomes the product and operational constraints are treated as something to solve later. The result was a platform reset and a cease-and-desist.

I wrote the full engineering postmortem here:

**[The $500K Cease-and-Desist: A Distributed Systems Postmortem](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/)**

The connection to Exit Protocol is not a claim that the two systems are equivalent. It is the design lesson I carried forward: authority, isolation, blast radius, provenance, and explicit boundaries have to exist in the architecture—not only in a disclaimer after the fact.

---

## What I am validating next

The immediate test is practical: can Exit Protocol take an authorized, difficult sample production and materially reduce the mechanical work required to organize it without hiding uncertainty or displacing professional judgment?

The pilot target is narrow:

1. separate a large mixed production into probable records;
2. identify document, institution, account, and represented period where reasonably possible;
3. organize the result chronologically;
4. let the professional review and correct every proposal; and
5. produce a usable account-and-period workspace for the next stage of work.

If that saves a practitioner days of preparation and gives them a clearer starting record, it is valuable. More sophisticated tracing remains downstream depth—not a substitute for solving the first painful job well.

Exit Protocol remains in active development and pilot evaluation. It organizes review material for counsel and retained professionals; it does not provide legal advice or autonomous professional conclusions.

**Product:** [exitprotocols.com](https://exitprotocols.com)

**Engineering context:** [The $500K C&D postmortem](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/)

**Public calculation reference:** [LIBR state-machine demo](https://github.com/Vinaygond/libr-state-machine-demo)

**Contact:** [vinay@exitprotocols.com](mailto:vinay@exitprotocols.com)
