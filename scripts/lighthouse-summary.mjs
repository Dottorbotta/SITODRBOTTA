import { readdir, readFile, appendFile } from 'node:fs/promises';
const files = await readdir('.lighthouseci').catch(() => []);
const reports = [];
for (const file of files.filter(f => /^lhr-.*\.json$/.test(f))) {
  const report = JSON.parse(await readFile(`.lighthouseci/${file}`, 'utf8'));
  if (report.categories) reports.push(report);
}
const lines = ['# Lighthouse mobile', '', 'Build locale nel runner: non misura il gateway di accesso Sites o la latenza di produzione. Noindex mantenuto: la penalizzazione SEO per indicizzazione bloccata è attesa. Soglie iniziali informative (warning).', '', '| URL | Performance | Accessibilità | Best practices | SEO | LCP | CLS | TBT |', '|---|---:|---:|---:|---:|---:|---:|---:|'];
for (const url of [...new Set(reports.map(r => r.requestedUrl))]) {
  const runs = reports.filter(r => r.requestedUrl === url);
  const median = values => values.sort((a,b) => a-b)[Math.floor(values.length/2)];
  const score = id => Math.round(median(runs.map(r => r.categories[id].score)) * 100);
  const metric = id => median(runs.map(r => r.audits[id].numericValue));
  lines.push(`| ${new URL(url).pathname} (${runs.length} run) | ${score('performance')} | ${score('accessibility')} | ${score('best-practices')} | ${score('seo')} | ${(metric('largest-contentful-paint')/1000).toFixed(2)} s | ${metric('cumulative-layout-shift').toFixed(3)} | ${Math.round(metric('total-blocking-time'))} ms |`);
}
if (!reports.length) lines.push('', 'Nessun report disponibile: consultare il log del job.');
const result = lines.join('\n') + '\n';
console.log(result);
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, result);
