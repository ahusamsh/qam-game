import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
const read = p => readFileSync(p, 'utf8');
test('same task scope for authorized coding agents', () => {
 assert.match(read('AGENTS.md'), /توجيه التنفيذ/);
 assert.match(read('CLAUDE.md'), /@AGENTS\.md/);
 assert.doesNotMatch(read('CLAUDE.md'), /For the first session: perform a read-only audit/);
});
test('Arabic literacy page remains RTL and documented', () => {
 const html = read('index.html');
 assert.match(html, /<html[^>]+dir=["']rtl["']/i);
 assert.match(html, /القاعدة المدنية/);
 assert.match(read('docs/ENGINEERING_PLAYBOOK.md'), /بوابات الجودة بحسب الخطر/);
 assert.match(read('.github/PULL_REQUEST_TEMPLATE.md'), /بوابة جودة/);
});