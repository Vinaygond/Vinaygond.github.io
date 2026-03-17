---
layout: page
title: Projects
subtitle: Engineering & Research
---

A selection of engineering projects focused on distributed systems, machine learning, and forensic intelligence.

---

## 🛡️ Exit Protocol
**De-Fi Forensic Intelligence for High-Conflict Litigation**

**Mission:** A defense-grade forensic platform designed to neutralize financial abuse. Unlike standard legal software, it weaponizes data by combining **Lowest Intermediate Balance Rule (LIBR)** accounting with **Generative AI** to automate forensic accounting.

**Key Features:**
- **Sovereign Mode (Enterprise):** A fully containerized "Black Box" Docker appliance ensuring zero data leakage for law firms.
- **LIBR Tracing Engine:** Automates the complex *See v. See* separate property tracing standard.
- **AI Audit Express:** Ingests PDF bank statements and produces forensic reports in <24h.
- **Asset Concealment Hunter:** Dectects micro-transfers to exchanges (Coinbase, Kraken) to flag hidden crypto assets.

**Tech Stack:** `Docker` `Python` `AI (Gemini 2.0 + Mistral)` `AES-256 Encryption`

[**View Project**](https://exitprotocols.com) | [**Read Case Study**](https://exitprotocols.com/case-studies/kim-v-pak/)

<br/>

## 🐙 Hydra (XLeadScraper)
**Distributed High-Velocity Data Pipeline**

**Mission:** A horizontally scalable scraping architecture engineered to bypass modern anti-bot defenses. It utilized a "hydra-headed" approach (rotating residential proxies + distributed auth tokens) to ingest 2M+ public profiles daily for lead generation.

**Key Features:**
- **Proxy Orchestration:** Validated 100K+ requests/hour using rotation algorithms.
- **Sentiment Engine:** Filtered leads based on tweet context using NLP.
- **Resilient Architecture:** Auto-healing workers that restarted upon rate-limiting.

**Tech Stack:** `Python (Scrapy)` `Redis` `PostgreSQL` `Celery`

[**View Project**](https://xleadscraper.com) | [**Read Case Study**](/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/)

<br/>




