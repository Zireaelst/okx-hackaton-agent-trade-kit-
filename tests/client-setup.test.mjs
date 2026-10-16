import test from 'node:test';
import assert from 'node:assert/strict';
import { getClientSetupSnippet } from '../src/lib/client-setup.mjs';

test('supported clients copy only OKX TR public market MCP configuration', () => {
  for (const client of ['codex', 'claude', 'cursor']) {
    const snippet = getClientSetupSnippet(client);
    assert.ok(snippet);
    assert.match(snippet, /okx-trade-mcp/);
    if (client === 'cursor') {
      assert.deepEqual(JSON.parse(snippet).mcpServers['okx-tr-market'].args, ['--site', 'tr', '--modules', 'market']);
    } else {
      assert.match(snippet, /--site tr --modules market$/);
    }
    assert.doesNotMatch(snippet, /api.?key|secret|passphrase|--modules (account|trade)|withdraw/i);
  }
});

test('unsupported clients have no guessed installation command', () => {
  assert.equal(getClientSetupSnippet('openclaw'), null);
  assert.equal(getClientSetupSnippet('opencode'), null);
});
