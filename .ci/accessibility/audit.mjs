import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { readFile, mkdir, writeFile, appendFile } from 'node:fs/promises';

const output = 'accessibility-report';
await mkdir(output, { recursive: true });
const { pages } = JSON.parse(await readFile('link-check/inventory.json', 'utf8'));
if (!pages?.length) throw new Error('No sitemap pages available for accessibility audit');
const browser = await chromium.launch();
const scans = [];
const keyboard = [];
const failures = [];
const tags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'];

async function scan(page, url, viewport, state) {
  const result = await new AxeBuilder({ page }).withTags(tags).analyze();
  scans.push({ url, viewport, state, engine: result.testEngine, violations: result.violations, incomplete: result.incomplete, passedRules: result.passes.length });
  console.log(`${viewport} ${state} ${new URL(url).pathname}: ${result.violations.length} violation rules`);
}

async function checkKeyboard(page, url, viewport) {
  try {
  // Start a fresh navigation so Tab begins at the document start.
  await page.goto(url, { waitUntil: 'load' });
  await page.keyboard.press('Tab');
  const skipFocused = await page.locator('.skip-link').evaluate(el => el === document.activeElement);
  if (!skipFocused) throw new Error('First Tab does not focus the skip link');
  await page.keyboard.press('Enter');
  const reachedContent = await page.evaluate(() => {
    const target = document.querySelector('#contenuto');
    return target && (document.activeElement === target || target.contains(document.activeElement));
  });
  if (!reachedContent) throw new Error('Skip link does not move keyboard focus to main content');
  keyboard.push({ url, viewport, check: 'skip-link', status: 'passed' });
  } catch (error) { keyboard.push({ url, viewport, check: 'skip-link', status: 'failed', error: error.message }); }
  if (viewport === 'mobile') {
    await page.goto(url, { waitUntil: 'load' });
    let reachedMenu = false;
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab');
      if (await page.locator('.mobile-menu > summary').evaluate(el => el === document.activeElement)) { reachedMenu = true; break; }
    }
    if (!reachedMenu) throw new Error('Mobile menu cannot be reached with Tab');
    await page.keyboard.press('Enter');
    if (!(await page.locator('.mobile-menu').evaluate(el => el.open))) throw new Error('Enter does not open mobile menu');
    await page.keyboard.press('Tab');
    if (!(await page.locator('.mobile-menu nav a').first().evaluate(el => el === document.activeElement))) throw new Error('First mobile link is not next in tab order');
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Enter');
    if (await page.locator('.mobile-menu').evaluate(el => el.open)) throw new Error('Keyboard cannot close mobile menu');
  }
  if (viewport === 'mobile') keyboard.push({ url, viewport, check: 'menu', status: 'passed' });
}

try {
  for (const [viewport, size] of Object.entries({ desktop: { width: 1440, height: 1000 }, mobile: { width: 390, height: 844 } })) {
    const context = await browser.newContext({ viewport: size });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    for (const url of pages) {
      try {
        const response = await page.goto(url, { waitUntil: 'load', timeout: 30000 });
        if (response.status() !== 200) throw new Error(`HTTP ${response.status()}`);
        await page.evaluate(() => document.fonts.ready);
        await scan(page, url, viewport, 'page');
        if (viewport === 'mobile') {
          const toggle = page.locator('.mobile-menu > summary');
          if (await toggle.isVisible()) {
            await toggle.click();
            await scan(page, url, viewport, 'menu-open');
          }
        }
      } catch (error) { failures.push({ url, viewport, error: error.message }); }
    }
    try { await checkKeyboard(page, 'http://127.0.0.1:4173/', viewport); }
    catch (error) { keyboard.push({ viewport, check: 'menu', status: 'failed', error: error.message }); }
    await context.close();
  }
} finally { await browser.close(); }

const rules = new Map();
for (const scan of scans) for (const v of scan.violations) {
  if (!rules.has(v.id)) rules.set(v.id, { impact: v.impact, description: v.help, pages: new Set(), nodes: 0 });
  const rule = rules.get(v.id);
  rule.pages.add(new URL(scan.url).pathname);
  rule.nodes += v.nodes.length;
}
const lines = ['# Accessibility audit — axe-core', '', `${pages.length} sitemap pages; ${scans.length} scans on desktop/mobile, including open mobile menus.`, '', 'WCAG A/AA (2.0, 2.1, 2.2) and axe best practices. Automated checks are not a certification; incomplete results require human review.', '', '| Rule | Impact | Pages | Node occurrences across scans |', '|---|---|---:|---:|'];
for (const [id, r] of rules) lines.push(`| ${id} | ${r.impact} | ${r.pages.size} | ${r.nodes} |`);
lines.push('', '## Keyboard checks', ...keyboard.map(k => `- ${k.viewport} ${k.check}: ${k.status}${k.error ? ' — ' + k.error : ''}`), '', `Scan errors: ${failures.length}. Incomplete rule results: ${scans.reduce((n,s) => n+s.incomplete.length,0)}.`);
const summary = lines.join('\n') + '\n';
await writeFile(`${output}/summary.md`, summary);
await writeFile(`${output}/results.json`, JSON.stringify({ tags, pages, scans, keyboard, failures }, null, 2));
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
// No silent exclusions or baseline acceptance: violations remain visible as a failed check.
if (rules.size || failures.length || keyboard.some(k => k.status !== 'passed')) process.exitCode = 1;
