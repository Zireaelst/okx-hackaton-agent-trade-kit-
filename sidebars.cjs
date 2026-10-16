module.exports = {
  start: [
    { type: 'category', label: 'Buradan başla', items: ['start/intro'] },
  ],
  build: [
    { type: 'category', label: 'Proje reçeteleri', items: [
      'build/atk-data-quality', 'build/atk-a2mcp', 'build/payment-402',
    ] },
  ],
  atk: [
    { type: 'category', label: 'OKX TR Agent Trade Kit', items: [
      'atk/intro', 'atk/quickstart', 'atk/mcp', 'atk/cli-skills',
      { type: 'category', label: 'İstemciye göre kurulum', items: [
        'atk/setup-codex', 'atk/setup-claude-code', 'atk/setup-cursor',
      ] },
      'atk/data-ideas', 'atk/demo', 'atk/safety', 'atk/troubleshooting',
    ] },
  ],
  onchainos: [
    { type: 'category', label: 'OnchainOS', items: [
      'onchainos/intro', 'onchainos/quickstart', 'onchainos/capabilities', 'onchainos/build',
    ] },
  ],
  okxai: [
    { type: 'category', label: 'OKX.ai', items: [
      'okx-ai/intro', 'okx-ai/roles', 'okx-ai/quickstart', 'okx-ai/workflow',
    ] },
  ],
  ideas: [
    { type: 'category', label: 'Hackathon Fikirleri', items: [
      'ideas/intro', 'ideas/atk', 'ideas/onchainos', 'ideas/okx-ai',
    ] },
  ],
};
