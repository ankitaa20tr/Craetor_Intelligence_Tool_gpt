const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const source = fs.readFileSync('app.js', 'utf8');

assert.match(html, /id="app-content"/, 'App mount point is missing');
assert.match(html, /id="ask-modal"/, 'Assistant modal is missing');
assert.match(html, /data-route="opportunities"/, 'Opportunity navigation is missing');
assert.match(css, /@media \(max-width: 620px\)/, 'Mobile layout is missing');
assert.match(source, /localStorage\.setItem\('ci-custom-creators'/, 'Watchlist persistence is missing');
assert.match(source, /function downloadBrief\(/, 'Brief export is missing');

const dataSource = source.slice(0, source.indexOf('const state =')) + `
  globalThis.__validation = Object.fromEntries(Object.entries(nicheData).map(([name, data]) => [name, {
    topics: data.topics.length,
    opportunities: data.opportunities.length,
    creators: data.creators.length,
    ideas: data.ideas.length,
    patterns: data.patterns.length,
    validTopics: data.topics.every(t => t.score >= 1 && t.score <= 100 && ['Rising','Peaking','Falling'].includes(t.state) && t.platforms.length > 0 && t.values.length === 8),
    validOpportunities: data.opportunities.every(o => o.score >= 1 && o.score <= 100 && o.coverage < o.demand && o.angle.length > 20),
    connectedIdeas: data.ideas.every(i => i.title && i.hook && i.angle && i.platform && i.format && i.why && i.source),
    completeCreators: data.creators.every(c => c.recent && c.topics.length && c.performance && c.frequency && c.shift)
  }]));`;

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataSource, sandbox);
const validation = sandbox.__validation;

assert.deepStrictEqual(Object.keys(validation), ['AI', 'Finance', 'Fitness', 'Tech', 'Business', 'Gaming']);
for (const [name, result] of Object.entries(validation)) {
  assert.ok(result.topics >= 5, `${name} needs at least five topics`);
  assert.ok(result.opportunities >= 3, `${name} needs at least three opportunities`);
  assert.ok(result.creators >= 5 && result.creators <= 10, `${name} watchlist must have 5–10 creators`);
  assert.ok(result.ideas >= 5, `${name} needs five content ideas`);
  assert.ok(result.patterns >= 3, `${name} needs three competitor patterns`);
  assert.ok(result.validTopics, `${name} has an invalid trend signal`);
  assert.ok(result.validOpportunities, `${name} has an invalid opportunity signal`);
  assert.ok(result.connectedIdeas, `${name} has an incomplete content idea`);
  assert.ok(result.completeCreators, `${name} has an incomplete creator profile`);
}

console.log(`Creator Intelligence checks passed: ${Object.keys(validation).length} niches, ${Object.values(validation).reduce((n, x) => n + x.topics, 0)} trends, ${Object.values(validation).reduce((n, x) => n + x.ideas, 0)} connected ideas.`);
