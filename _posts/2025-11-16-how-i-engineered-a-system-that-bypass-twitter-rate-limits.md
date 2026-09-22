---
layout: post
title: "Platform dependencies and failure isolation"
subtitle: "Why a successful request is not the same as an authorized, sustainable integration."
date: 2025-11-16
permalink: /2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/
tags: [architecture, integrations, retrospective]
---

**Updated September 22, 2026.** The historical URL is preserved. Earlier numerical and detection-model claims should not be read as independent benchmarks or knowledge of a platform's internal systems.

## The wrong success criterion

A request succeeding tells you little about whether the surrounding workload is authorized or sustainable. Spreading requests across credentials does not resolve that question.

My [Hydra postmortem](/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/) describes the consequences of optimizing the technical path without adequately accounting for platform boundaries and customer risk.

## A better integration checklist

1. What use is explicitly authorized, for which user and purpose?
2. What happens when that user revokes access?
3. Can one credential or shared dependency compromise another customer's operation?
4. Do retries respect documented limits and stop on authorization failure?
5. Is the user choosing the records being accessed?
6. Can a reviewer distinguish a stored source, a software suggestion and an approved action?
7. Can the workflow fail safely without silently widening its scope?

## Trade throughput for inspectable behavior

Bounded queues, backoff and workload isolation are useful engineering techniques. They are not substitutes for permission.

An account that has a stored token is not necessarily an operationally authorized connection. A source that has been downloaded should not be silently modified. A failed identity check should not be hidden behind a successful-looking interface.

Those are the integration questions I prioritize in current product work.

[Exit Protocol engineering notes](/2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/) · [Projects](/projects/)
