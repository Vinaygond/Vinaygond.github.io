const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const pages = ['index.html','projects.md','technicalskills.md','aboutme.md','research.md','resume.md','_includes/resume-content.html'];
for (const name of pages) {
  const text = read(name);
  assert.doesNotMatch(text, /500k ARR|99\.9%|weeks (?:to|into) minutes|cryptographic evidence sealing|court-ready|guaranteed admissible/i, name);
  assert.doesNotMatch(text, /github\.com\/Vinaygond\/The-500K-C-D-Report/, name + ': private repo link');
}
assert.match(read('_includes/resume-content.html'), /degree not completed/);
assert.match(read('resume.md'), /include resume-content\.html/);
assert.match(read('scripts/build-resume.cjs'), /_includes\/resume-content\.html/);
assert.ok(!fs.existsSync(path.join(root, 'resume.tex')), 'Competing resume source');
assert.match(read('_layouts/base.html'), /class="skip-link"/);
assert.doesNotMatch(read('_layouts/base.html'), /<script|maximum-scale|particles/);
assert.match(read('_posts/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-𝕏.md'), /alleged profits/);
console.log('PASS: current-page claim checks, canonical resume source, accessible shared layout.');
