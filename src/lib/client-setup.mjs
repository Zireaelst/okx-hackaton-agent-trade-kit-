const snippets = {
  codex: 'codex mcp add okx-tr-market -- okx-trade-mcp --site tr --modules market',
  claude: 'claude mcp add --transport stdio okx-tr-market -- okx-trade-mcp --site tr --modules market',
  cursor: JSON.stringify({
    mcpServers: {
      'okx-tr-market': {
        command: 'okx-trade-mcp',
        args: ['--site', 'tr', '--modules', 'market'],
      },
    },
  }, null, 2),
};

export function getClientSetupSnippet(client) {
  return snippets[client] ?? null;
}
