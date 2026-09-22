const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
async function main() {
  const body = fs.readFileSync(path.join(root, '_includes/resume-content.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'css/resume-print.css'), 'utf8');
  const browser = await chromium.launch(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {});
  try {
    const page = await browser.newPage();
    await page.setContent('<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Vinay Kumar Gond — Resume</title><style>' + css + '</style></head><body>' + body + '</body></html>');
    await page.emulateMedia({ media: 'print' });
    const out = path.join(root, process.env.RESUME_OUTPUT || 'Resume.pdf');
    await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true });
    console.log('Generated ' + out + ' from the same content used by /resume/.');
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
