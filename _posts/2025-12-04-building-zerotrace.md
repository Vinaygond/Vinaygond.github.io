---
layout: post
title: "ZeroTrace: Identity-Locked Secure Messaging (Research Prototype)"
subtitle: "A security experiment for high-signal contact when public channels are noisy"
date: 2025-12-04
categories: [Security, Projects, Django]
tags: [python, cryptography, security, django]
description: "How I prototyped ZeroTrace — an identity-locked, burn-after-reading message channel for reaching verified accounts without open inboxes."
permalink: /2025-12-04-building-zerotrace/
---

> **Status:** Internal prototype / security research. Not a production product.

High-value people on the internet — founders, researchers, operators — face a predictable inbox problem: open DMs and public email become unusable under spam volume. Closing the front door protects attention, but it also blocks **high-signal, low-volume contact** (security reports, partnership notes, confidential introductions).

ZeroTrace was a weekend security experiment: can you build a **narrow, identity-verified channel** that raises the cost of spam without pretending to solve anonymity or end-to-end messaging for everyone?

---

## Design goals

| Property | Intent |
|---|---|
| **Identity locked** | Only the verified owner of a target handle can decrypt and view the payload |
| **Ephemeral delivery** | Message becomes unreadable after first access + short TTL |
| **High friction for senders** | Deliberate workflow — not a mass-blast channel |
| **Minimal server retention** | Payload encrypted at rest; short-lived keys; no long-term message archive |

This is **not** a "bypass closed DMs" tool. It is a research prototype exploring whether cryptographic identity binding + ephemeral storage can filter signal from noise.

---

## Protocol overview

### 1. Uplink (encryption)

- Sender drafts a message in the browser
- Django backend encrypts payload with **Fernet symmetric encryption**
- Unique `uuid` generated; encryption key stored with strict TTL
- Payload metadata locked to a specific platform user ID (e.g., target handle)

### 2. Handshake (authentication)

- Recipient opens `zerotrace.example/msg/<uuid>`
- Sees a preview shell — not the plaintext
- Authenticates via **Twitter OAuth**
- Server verifies: `authenticated_user.id == target_user.id`
- Mismatch → access denied (no decryption attempt logged with payload)

### 3. Purge (single-view + TTL)

- On successful decrypt, `is_read = True`
- Browser countdown (~60s) before UI clears
- Revisit or reload → rejected; ciphertext purged per retention policy

```python
@login_required
def message_view(request, message_uuid):
    record = get_object_or_404(SecureMessage, uuid=message_uuid)

    if record.is_read:
        return render(request, 'error.html', {'msg': 'Message expired or already viewed.'})

    if record.target_username.lower() != request.user.username.lower():
        return render(request, 'error.html', {'msg': 'Identity mismatch.'})

    try:
        f = Fernet(record.key.encode())
        payload = f.decrypt(record.ciphertext).decode()
        record.is_read = True
        record.save()
        return render(request, 'view.html', {'payload': payload})
    except Exception:
        return render(request, 'error.html', {'msg': 'Decryption failed.'})
```

---

## Stack

| Layer | Technology |
|---|---|
| Backend | Python / Django 5 |
| Crypto | `cryptography` (Fernet) |
| Auth | Twitter API v2 (`tweepy`) |
| Storage | PostgreSQL (prod) / SQLite (dev) |
| Frontend | HTML/CSS (terminal-style UI for demo) |

---

## What I learned

1. **Access control is product design.** If every message is free to send, spam wins. Friction and identity binding are features, not bugs.

2. **Ephemeral != zero-knowledge.** The server holds ciphertext and keys during the delivery window. Honest architecture means stating that plainly — not marketing around it.

3. **Platform dependency is fragility.** OAuth to a third-party identity provider means policy changes can end the experiment overnight. Production secure messaging needs its own trust model.

4. **Walled gardens are a systems problem.** As AI-generated outreach scales, high-trust contact channels become more valuable — and more constrained. The interesting engineering is in **bounded, verifiable channels**, not infinite reach.

---

## Boundaries (important)

- Research prototype only — not deployed as a commercial service
- Not legal advice, not a certified secure messenger, not an anonymity tool
- Teaches patterns useful for **high-signal workflows**; not an invitation to evade platform policies

---

**Related work:** [Exit Protocol](https://exitprotocols.com) (forensic evidence integrity) · [Distributed systems writing](/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/)

**Contact:** [vinay@exitprotocols.com](mailto:vinay@exitprotocols.com)