# EXIT PROTOCOL
## Complete Documentation & Memo

---

## MEMO: EXIT PROTOCOL

**TO:** Anyone who gives a shit about broken systems  
**FROM:** Someone who actually fixed one  
**RE:** Why divorce financial discovery is a scam and what I did about it

---

### The Problem

Look, I'm gonna be straight with you.

A friend got divorced. Had three quarters of a million going in. Inheritance from his dad. Five years later, it's all mixed up in the joint account with paychecks, mortgage, her shopping, his trading losses, whatever.

Lawyer says "we need to prove what's still yours." Cool. How much? 

**Five grand. Four weeks minimum.**

For what? Some guy in a back office doing ctrl+F on Excel for $400/hour.

I sat there thinking - this is fucking insane. It's just math. Read transactions, categorize them, apply a formula. Why doesn't software exist for this?

Turns out it does - if you're a white shoe law firm paying $50k/year for enterprise garbage. If you're a normal human or a solo practitioner? Get fucked, apparently.

So I built it.

---

### What It Actually Does

Takes your bank PDFs - and I mean the real ones, not some clean CSV export. The scanned, blurry, coffee-stained PDFs from 2019 that you got from Chase after calling them twice.

Mistral's OCR reads it. Their LLM categorizes every transaction:
- "Rivian purchase" gets flagged as hidden asset
- "MGM Grand ATM" gets flagged as waste
- "Schwab transfer" is legit investment

Then my Python code runs the legal tracing rule. It's called **Lowest Intermediate Balance Rule** and every divorce lawyer knows it but nobody's automated it.

**Output:** Forensic report showing exactly what you can prove is yours. With charts. With evidence logs. With SHA-256 hashing so opposing counsel can't say you doctored it.

**Time:** 3 minutes  
**Cost:** $149

---

### Why This Matters

Because financial discovery is where divorces *die*. 

Not in the courtroom. In the 4-week waiting period where nobody can prove anything and whoever has better lawyers just waits out the other person.

You know how many people settle for less than they're owed because they literally cannot afford to prove what's theirs? All of them. Everyone who isn't rich.

I'm not trying to disrupt some industry or whatever Valley bullshit. I just think if the legal system already has rules for this, and computers can do math, then charging five grand to run the calculation is essentially theft.

---

### Technical Real Talk

- **Django** because I needed auth and payments working yesterday
- **Postgres** because this is legal data, not your blog comments
- **Mistral** because their OCR actually works on the chaos that is real banking PDFs
- **Celery** because some statements have 10,000 transactions
- **SHA-256 hashing** because opposing counsel will challenge everything

The LIBR algorithm took me three weekends to get right. Not because it's complex - it's not. Because edge cases in financial law are *vicious*. What happens when the account hits zero? What if there are multiple deposits? What if someone withdraws everything right before filing?

Got it working though. And it's deterministic - same input, same output, every single time. That's not a feature, that's a legal requirement.

---

### Where We're At

Live in production as of today. Real users. Real cases. Already got a lawyer in Mumbai using it for a client hearing next week.

Priced it at $149 not because I'm being charitable but because I refuse to be part of the problem. The whole point is that this shouldn't cost four thousand dollars.

Will it scale? Probably not at this price. Do I care? Not really. If 1,000 people use it and 1,000 people get fair settlements instead of getting robbed, that's a win.

---

### What's Next

Probably a B2B version where law firms pay monthly and can run unlimited cases. That's where the actual money is.

Maybe a burner communication log feature for custody battles - encrypted, immutable, timestamped. Basically a "he said she said" resolver.

Maybe Plaid integration so you don't even need PDFs, just OAuth into your bank.

But honestly? Right now I'm just watching the server logs and making sure it doesn't fall over.

---

### The Point

You don't need a VC pitch here. You don't need a vision deck.

**There was a problem:** proving financial ownership in separation costs thousands and takes weeks.

**There's now a solution:** upload PDFs, wait 3 minutes, get proof.

It's live. It works. It's cheap.

If you know someone getting divorced and fighting over money, send them the link. If you're a lawyer tired of telling clients you can't help because they can't afford forensics, use it.

That's it. That's the memo.

---

## THE GLOBAL PROBLEM

### The Universal Nightmare

Across every country, same nightmare: someone enters marriage with money (inheritance, savings, business proceeds). Gets mixed into joint accounts. Marriage ends.

Now proving "this was mine before" requires forensic accountants:

- **US:** $5,000-15,000, 4-6 weeks
- **UK:** £3,000-8,000, similar timeline  
- **India:** ₹3-5L, if you can even find someone
- **Australia, Canada, EU:** Same story everywhere

The legal rule exists globally (called "tracing" or "source of funds"). The math is universal. But the service is either unavailable or unaffordable for 95% of people going through separation.

### Exit Protocol Solution

Upload bank statements in any format. AI parses them, categorizes transactions, applies tracing mathematics. 3 minutes. $149.

Works regardless of currency, bank format, or country. The algorithm doesn't care if it's analyzing Chase Bank USD or HDFC INR - money flow is money flow.

Built it in India. Priced it for accessibility. But the problem is identical in London, Los Angeles, or Sydney.

**Financial abuse in separation is a universal epidemic. The tools to fight it shouldn't be a luxury good.**

---

## MARKETING COPY: Justice at Machine Speed

### The Problem Nobody Solved (Until Now)

You enter marriage with ₹50 lakhs in your account. Five years later, it's mixed with joint income, mortgage payments, vacations. The balance dipped to ₹3 lakhs. Now it's ₹75 lakhs.

**The ₹50 lakh question: How much of that original money is still legally *yours*?**

**Traditional answer:** Hire a forensic accountant. Wait 4 weeks. Pay ₹4,00,000. Get an Excel spreadsheet.

**Exit Protocol's answer:** Upload your bank statement. Wait 3 minutes. Pay ₹149. Get court-ready proof.

---

### What We Actually Built

Exit Protocol is the world's first **forensic AI engine for asset separation**. We didn't build another budgeting app. We built a legal weapon.

#### The Core Tech (In Plain English)

**1. Vision That Reads Banking Chaos**

Your bank PDFs are messy—scanned copies, weird fonts, columns that don't line up. Our Mistral-powered OCR doesn't care. It reads them like a forensic accountant reads evidence: methodically, completely, correctly.

**2. Intelligence That Understands Financial Behavior**

- "Rivian purchase" = hidden asset
- "MGM Grand withdrawal" = dissipation
- "Schwab transfer" = legitimate investment

Our LLM doesn't just categorize—it *investigates*. Every transaction gets a forensic flag: Asset, Waste, Income, Legal Expense.

**3. Math That Holds Up in Court**

The **Lowest Intermediate Balance Rule** isn't optional in divorce law—it's mandatory. We're the only software that automates it. When your joint account crashed to zero because someone "invested" in crypto, our algorithm mathematically proves your separate property was destroyed. The chart shows the exact moment it happened.

**4. Evidence That Can't Be Challenged**

Every uploaded document gets SHA-256 hashed. Chain-of-custody logging. IP address tracking. Timestamp verification. We don't just generate reports—we generate *admissible evidence*.

---

### Who This Changes Everything For

**The blindsided spouse** who discovers ₹30 lakhs is "missing" and needs proof of waste—tonight, because the hearing is tomorrow morning.

**The family lawyer** at a small firm who can't afford a ₹4L forensic accountant but refuses to let their client get robbed.

**The honest person** who just wants what they brought into the marriage, mathematically proven, so they can move on with their life.

---

### Why This Exists

Because justice shouldn't require ₹400/hour specialists.

Because financial abuse in divorce is epidemic and invisible.

Because a 4-week delay in getting financial proof means 4 more weeks of control, manipulation, or worse.

We built Exit Protocol because the legal system already has the rules—someone just needed to code them.

---

### What Happens When You Use It

1. **Upload** your bank statements (PDF, even the blurry scanned ones)
2. **Wait 180 seconds** while our AI reads, categorizes, and traces every transaction
3. **Download** a forensic report showing:
   - Your traceable separate property (mathematically proven)
   - Every suspicious transaction (flagged and categorized)
   - A timeline visualization showing exactly when/how assets were depleted
   - Cryptographically verified evidence logs

**No spreadsheets. No billable hours. No waiting.**

---

### The Technical Truth

This runs on Django because we needed battle-tested security. PostgreSQL because family law data demands integrity. Celery + Redis because some bank statements have 10,000 transactions. Mistral AI because generic OCR fails on real-world financial documents.

We use the same cryptographic standards as blockchain (SHA-256 hashing) not because it's trendy, but because opposing counsel will challenge everything. They can't challenge math.

The LIBR algorithm isn't approximate—it's deterministic. Run it twice on the same data, you get identical results. Every time. That's not a feature; that's a legal requirement.

---

### What We're Not

We're not a meditation app for "conscious uncoupling."

We're not another budgeting tool with cute graphics.

We're not software that "helps facilitate dialogue."

**We're a forensic microscope that turns your bank statements into legal ammunition.**

---

### The Price Point Is Deliberate

₹149 isn't a discount. It's a statement.

Forensic accounting costs ₹4,00,000 because it's manual labor intensive. We automated the labor. We're not charging ₹4,00,000 because that would make us part of the problem we're solving.

Access to financial truth shouldn't be a luxury good.

---

### Live Now

Exit Protocol launched in production today. Real users. Real cases. Real court filings already citing our reports.

The code is deployed. The AI is trained. The legal framework is validated.

**We're not pre-launch. We're not beta. We're operational.**

---

### The Uncomfortable Truth

If you're reading this and thinking *"this could've saved me"*—you're right. If you're reading this and thinking *"I know someone who needs this right now"*—you're also right.

Financial discovery shouldn't take 4 weeks when the technology exists to do it in 4 minutes.

---

## HACKER NEWS POST

**Show HN: I automated forensic accounting for divorce cases (3 min vs 4 weeks)**

Burned about 6 months on this. Not sure if it's useful to anyone beyond my original use case, but figure I'd share.

**Context:** Friend went through a nasty divorce. Had $750k going into the marriage (inheritance), put it in a joint account like an idiot. Five years later, account's been up and down, money mixed with paychecks and mortgage payments. Lawyer says "you need a forensic accountant to trace what's still yours." Quote comes back: $5k, 4 weeks minimum.

I'm sitting there thinking - this is just transaction categorization and some relatively simple math (the "Lowest Intermediate Balance Rule" if you want to google it). Why doesn't software exist for this?

Turns out it kind of doesn't. There are $50k enterprise tools for big law firms, but nothing a normal person or small practice can actually use.

**What I built:** Django app that takes bank statement PDFs, uses Mistral's OCR to parse them (because real-world bank PDFs are a nightmare - scanned, rotated, weird formats), then runs them through an LLM to categorize transactions and a Python implementation of the LIBR algorithm.

Output is a court-usable report showing exactly how much of your "separate property" is still traceable, with visualizations and evidence logging (SHA-256 hashing for chain of custody, audit trails, the works).

Whole process takes about 3 minutes. I'm in India and honestly just want to see if people use it.

**Technical details that were interesting:**

- Mistral's document OCR is genuinely impressive on messy banking PDFs. Tried Tesseract first, got maybe 60% accuracy.
- The LIBR algorithm is conceptually simple but has some gnarly edge cases (what happens when account hits zero? how do you handle multiple deposits of separate property? etc.)
- Evidence integrity was harder than expected. Lawyers care a LOT about proving a document hasn't been tampered with.
- Used Celery because some statements have 10k+ transactions and you can't block the request

Currently running on Render with Postgres. Code's not open source yet because honestly it's kind of a mess and I need to clean up some stuff, but might do that if there's interest.

**Things I'm unsure about:**
- Is the $149 price point stupid? Should it be higher? Lower? Subscription?
- B2C vs B2B - individuals might use this once, but lawyers could use it repeatedly
- How much do I need to worry about legal liability for the output? I have disclaimers everywhere but still

Anyway, it's live: [link]. Would love feedback, especially if you've dealt with this problem before or know the family law space.

---

## WHATSAPP MESSAGE: What Exit Protocol Does

**Exit Protocol - what it actually does:**

You had ₹50L before marriage. Put it in joint account. 5 years later it's mixed with salaries, expenses, everything.

Divorce happens. Question: how much of that original ₹50L is still legally "yours"?

Normal solution: Forensic accountant. ₹4L cost. 4 weeks wait.

Exit Protocol: Upload bank PDFs. AI reads them, categorizes every transaction, applies legal tracing rules. 3 minutes. ₹149.

Court-ready forensic report proving exactly what's yours mathematically.

Basically - automated the most expensive part of financial discovery in divorce cases. Already live, processing real cases.

---

## TWITTER POST FOR MISTRAL

Just shipped Exit Protocol to production - forensic accounting for divorce cases that runs in 3 minutes instead of 4 weeks.

Tried every OCR solution for messy bank PDFs. Tesseract failed. Adobe failed. Vision APIs got maybe 70% accuracy.

Then tried @MistralAI's document OCR. 

It just... worked. On scanned statements. Rotated pages. Tables that don't line up. The exact chaos you get from real financial documents in legal cases.

Not sponsored, just genuinely impressed. When you're building tools for high-stakes legal work, accuracy isn't a feature - it's the entire product.

Built the whole categorization layer on mistral-small too. Turns out "flag suspicious transactions in a divorce case" is exactly the kind of nuanced task LLMs are actually good at.

Anyway, thanks for making the hard part easy. Product's live, already processing real cases.

---

## TECHNICAL ARCHITECTURE OVERVIEW

### The Tech Stack

- **Language:** Python 3.9+
- **Framework:** Django 5.x (The "Battery-Included" Web Framework)
- **Database:**
  - Development: SQLite (db.sqlite3)
  - Production: PostgreSQL (via dj_database_url)
- **AI Engine:** Mistral AI API (mistral-ocr-latest & mistral-small-latest)
- **Task Queue:** Celery + Redis (for handling large PDF parsing in the background)
- **Payments:** Razorpay (UPI, Credit/Debit)
- **PDF Generation:** xhtml2pdf / WeasyPrint (HTML-to-PDF for court reports)

### The Data Pipeline (The "Secret Sauce")

This is how a raw PDF becomes a forensic report:

#### 1. Ingestion
- User uploads `Chase_Jan2024.pdf`
- System validates MIME type and calculates SHA-256 hash
- File is stored securely in `media/evidence/{case_id}/`

#### 2. Optical Character Recognition (OCR) via Mistral
- The file is encoded to Base64
- Payload sent to Mistral OCR API (document_url mode)
- Response: A structured Markdown representation of the table data

#### 3. LLM Structuring & Categorization
- The Markdown is fed into Mistral LLM with a forensic prompt
- "Extract transactions... categorize 'Rivian' as Asset, 'MGM Grand' as Waste..."
- Response: A pure JSON object containing date, description, amount, category

#### 4. Forensic Calculation
- Django iterates through the JSON
- Updates the AccountBalance
- Runs the LIBR Check: `if current_balance < separate_claim: separate_claim = current_balance`
- This "dipping" event is recorded in the database

### The Database Schema (Key Models)

#### UserSubscription (The Paywall)
Tracks payment status to lock/unlock features.

```python
class UserSubscription(models.Model):
    user = models.OneToOneField(User, ...)
    is_active = models.BooleanField(default=False)
    razorpay_payment_id = models.CharField(...) # Links to real money
```

#### EvidenceDocument (The Vault)
Ensures legal admissibility.

```python
class EvidenceDocument(models.Model):
    file_hash_sha256 = models.CharField(unique=True, ...) # Integrity Check
    upload_ip_address = models.GenericIPAddressField(...) # Audit Trail
    document_type = models.CharField(choices=['bank_statement', 'court_filing']...)
```

#### Transaction (The Data)
The atomic unit of the application.

```python
class Transaction(models.Model):
    amount = models.DecimalField(...)
    category = models.CharField(choices=['asset', 'waste', 'legal', 'income']...)
    is_suspicious = models.BooleanField(default=False) # AI Flag
```

---

## SECURITY & DEPLOYMENT

### Security Architecture

- **Environment Variables:** All API keys (OpenAI, Mistral, Razorpay, Secret Key) are decoupled using `.env` files and never committed to Git
- **Authentication:** Django's robust Auth system + `@login_required` decorators on every view
- **Payment Verification:** Server-side signature verification using `hmac_sha256` ensures users can't fake a successful payment response

### Deployment (Production)

- **Platform:** Render (PaaS)
- **Web Server:** Gunicorn (WSGI HTTP Server) handles incoming traffic
- **Static Files:** WhiteNoise serves CSS/JS/Images directly from the application, compressed and cached
- **CI/CD:** GitHub Actions (or manual Git Push) triggers automatic builds on Render

---

## THE ROADMAP

### The B2B Pivot

While the tech is currently B2C (User pays ₹149), the architecture supports Multi-Tenancy.

- **Feature:** "Firm Dashboard" allows a Lawyer to manage 50 "Cases" (Clients)
- **Pricing:** $500/month recurring revenue

### Secure Comms Module

- **Concept:** A "Burner" communication log
- **Tech:** A separate encrypted database table for logging texts/emails that acts as an immutable diary for custody battles

### Bank API Integration

- **Future Upgrade:** Replace PDF uploads with Plaid or Yodlee APIs to fetch bank data directly via OAuth, removing the need for OCR entirely

---

## SUMMARY

Exit Protocol is not just an app; it is a weaponized financial instrument. It takes the complexity of forensic accounting, wraps it in the speed of AI, and delivers it with the security of a legal vault.

**Exit Protocol: Because your money has a memory, and now you can prove it.**

---

*Version 1.0 - Production Ready*  
*Built for the moment you need proof. Ready the moment you need it.*

**Live:** [ExitProtocols.com](https://exitprotocols.com/)
