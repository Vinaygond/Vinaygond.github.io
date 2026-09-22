# Vinay Kumar Gond — portfolio

Recruiter-facing portfolio, project case studies and résumé, published with Jekyll at https://vinaygond.github.io/.

## Content

- `index.html`: introduction and selected work.
- `projects.md`: ownership, implementation, scope and evidence.
- `technicalskills.md`: skills tied to concrete implementation.
- `research.md`: current reading guide and historical archive.
- `aboutme.md`: background and role interests.
- `_includes/resume-content.html`: canonical résumé shared by web and PDF.
- `scripts/build-resume.cjs`: text-based, linked PDF generation with Chromium.
- `docs/CONTENT_EVIDENCE.md`: claim boundaries and maintenance checklist.

No private application source, customer data or outreach lists belong here.

## Build and check

GitHub Pages builds the Jekyll site. The pull-request workflow builds and checks rendered pages.

```sh
bundle install
bundle exec jekyll build
npm ci
npx playwright install chromium
npm run check
npm run resume
npm run test:site
```

Commit `Resume.pdf` after regenerating it when the shared fragment or print style changes. PDF creation metadata may differ between builds. The previous LaTeX résumé is retired to prevent conflicting copies.

## Content policy

Do not convert a legal allegation into verified commercial metrics. The C&D screenshots refer to alleged profits; they do not substantiate ARR. Do not claim universal OCR, customer savings, certification, legal conclusions or security guarantees without evidence.

## Rollback

Revert the portfolio-update commit instead of resetting unrelated work. No Exit Protocol application changes are included.
