---
layout: page
title: Engineering notes
subtitle: Implementation decisions, failures and small artifacts you can inspect.
permalink: /research/
eyebrow: Writing
---

## Start here

### [Exit Protocol: building a reviewer-controlled financial record](/2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/)

How document organization, review state, numerical controls and exact-file verification fit together. Updated to reflect the current platform rather than earlier product ambitions.

### [When throughput wasn't enough: the Hydra retrospective](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/)

A platform-enforcement failure, the published correspondence, and a distinction between allegations, founder-reported metrics and demonstrated engineering work.

### [Platform dependencies and failure isolation](/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/)

Why rate limits are only one part of an integration contract—and why authorization cannot be substituted with clever traffic routing.

### [LIBR: a public, testable state machine](https://github.com/Vinaygond/libr-state-machine-demo)

A compact reference implementation with synthetic fixtures and reproducible outputs. Not a legal opinion or the entire Exit Protocol codebase.

## Archive
{: #archive }

These historical prototypes and learning exercises retain their original dates. That does not imply that a service is still offered, that every experiment is deployed, or that older product descriptions remain current.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: '%B %Y' }}
{% endfor %}

## Reading the claims

These are engineering notes, not peer-reviewed research or independent product audits. The historical forensic-accounting PDF is an earlier exploration, not the current implementation contract. Current scope is on the [work page](/projects/).

[Discuss a technical decision](mailto:vinay@exitprotocols.com)
