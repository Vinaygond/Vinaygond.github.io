const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..', '_site');
const artifacts = path.resolve(__dirname, '..', 'qa-artifacts');
const routes = ['/','/projects/','/technicalskills/','/research/','/aboutme/','/resume/','/2025-12-28-Exit-Protocol-Wealth-Preservation-Intelligence/','/2025-12-01-The-500K-Tool-That-Got-Me-a-Cease-and-Desist-from-X/','/2025-11-16-how-i-engineered-a-system-that-bypass-twitter-rate-limits/','/404.html'];
function fileFor(url) {
  const name = decodeURIComponent(new URL(url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + name);
  if (file !== root && !file.startsWith(root + path.sep)) return null;
  return name.endsWith('/') ? path.join(file, 'index.html') : file;
}
async function main() {
  assert.ok(fs.existsSync(path.join(root, 'index.html')), 'Run the Jekyll build first');
  fs.mkdirSync(artifacts, { recursive: true });
  const server = http.createServer((req,res) => {
    const file = fileFor(req.url);
    if (!file || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('Not found'); return; }
    const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.jpg':'image/jpeg','.png':'image/png','.pdf':'application/pdf','.ico':'image/x-icon'};
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch(process.env.BROWSER_CHANNEL ? { channel: process.env.BROWSER_CHANNEL } : {});
  try {
    for (const width of [1440,1280,390]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
      for (const route of routes) {
        const response = await page.goto(base + route, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200, route);
        assert.equal(await page.locator('main').count(), 1, route + ': main');
        assert.equal(await page.locator('h1').count(), 1, route + ': single h1');
        assert.ok(await page.locator('main').innerText(), route + ': content');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), route + ': overflow at ' + width);
        assert.equal(await page.locator('script[src]').count(), 0, route + ': external scripts');
        const links = await page.locator('a[href]').evaluateAll(nodes => nodes.map(n => n.getAttribute('href')));
        for (const href of links.filter(x => x.startsWith('/') && !x.startsWith('//'))) {
          const file = fileFor(href);
          assert.ok(file && fs.existsSync(file), route + ': missing local link ' + href);
        }
        if (width === 1440 || route === '/') await page.screenshot({ path:path.join(artifacts, width+'-'+(route === '/' ? 'home' : route.replace(/[^a-z0-9]/gi,'_'))+'.png'), fullPage:true });
      }
      await page.goto(base);
      await page.getByRole('link', {name:'Explore my work'}).click();
      assert.equal(new URL(page.url()).pathname, '/projects/');
      await page.getByRole('navigation').getByRole('link', {name:'Résumé'}).click();
      assert.match(await page.locator('.resume-sheet').innerText(), /degree not completed/);
      const download = page.waitForEvent('download');
      await page.getByRole('link', {name:'Download PDF résumé'}).click();
      assert.equal((await download).suggestedFilename(), 'Resume.pdf');
      assert.deepEqual(errors, [], 'Browser errors');
      await page.close();
      console.log('PASS: ' + width + 'px — ' + routes.length + ' routes, links, navigation, resume download, no overflow/errors');
    }
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
