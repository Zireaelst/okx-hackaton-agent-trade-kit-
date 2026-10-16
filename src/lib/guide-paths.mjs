const clientSetup = {
  codex: '/guide/atk/setup-codex',
  claude: '/guide/atk/setup-claude-code',
  cursor: '/guide/atk/setup-cursor',
  other: '/guide/atk/mcp',
};

export function selectGuidePath({ goal = 'atk', client = 'codex', access = 'public' } = {}) {
  if (goal === 'payment') {
    return {
      title: '402 Ödeme Akışı',
      recipeUrl: '/guide/build/payment-402',
      setupUrl: '/guide/onchainos/quickstart',
      mode: 'simulated',
      note: 'Ödeme adımları yerel simülasyondur. Cüzdan, imza ve gerçek para gerekmez.',
    };
  }

  if (goal === 'service') {
    return {
      title: 'ATK Verisinden A2MCP Servisi',
      recipeUrl: '/guide/build/atk-a2mcp',
      setupUrl: clientSetup[client] ?? clientSetup.other,
      mode: 'public',
      note: 'İlk servis ATK market verisini okur. Marketplace kaydı ve ödeme ayrı aşamalardır.',
    };
  }

  return {
    title: 'ATK Veri Kalitesi Panosu',
    recipeUrl: '/guide/build/atk-data-quality',
    setupUrl: clientSetup[client] ?? clientSetup.other,
    mode: 'public',
    note: access === 'read'
      ? 'Okuma yetkin olsa da ilk adım anahtarsız market sorgusudur.'
      : 'API anahtarı olmadan salt okunur market verisiyle başlayabilirsin.',
  };
}
