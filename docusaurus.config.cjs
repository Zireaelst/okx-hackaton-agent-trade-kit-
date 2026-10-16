const config = {
  title: 'OKX Hackathon Rehberi',
  tagline: 'Agent araçlarıyla keşfet, öğren, üret.',
  favicon: 'img/favicon.svg',
  url: 'https://okx-tr-atk-hackathon-guide.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'throw' } },
  i18n: { defaultLocale: 'tr', locales: ['tr'] },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'guide',
          sidebarPath: require.resolve('./sidebars.cjs'),
          showLastUpdateTime: false,
          editUrl: 'https://github.com/Zireaelst/okx-hackaton-agent-trade-kit-/edit/main/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
  themes: [[require.resolve('@easyops-cn/docusaurus-search-local'), { hashed: true, language: ['tr', 'en'], docsRouteBasePath: '/guide', indexBlog: false }]],
  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'OKX Hackathon Guide',
      hideOnScroll: false,
      items: [
        { to: '/guide/start/intro', label: 'Buradan Başla', position: 'left', activeBasePath: '/guide/start' },
        { to: '/guide/atk/intro', label: 'Agent Trade Kit', position: 'left', activeBasePath: '/guide/atk' },
        { to: '/guide/onchainos/intro', label: 'OnchainOS', position: 'left', activeBasePath: '/guide/onchainos' },
        { to: '/guide/okx-ai/intro', label: 'OKX.ai', position: 'left', activeBasePath: '/guide/okx-ai' },
        { to: '/guide/ideas/intro', label: 'Hackathon Fikirleri', position: 'left', activeBasePath: '/guide/ideas' },
        { to: '/guide/build/atk-data-quality', label: 'Proje Reçeteleri', position: 'right', activeBasePath: '/guide/build' },
        { to: '/ai', label: 'AI için', position: 'right' },
        { href: 'https://github.com/Zireaelst/okx-hackaton-agent-trade-kit-', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Rehberler', items: [
          { label: 'Buradan başla', to: '/guide/start/intro' },
          { label: 'Proje reçeteleri', to: '/guide/build/atk-data-quality' },
          { label: 'OKX TR Agent Trade Kit', to: '/guide/atk/intro' },
          { label: 'OnchainOS', to: '/guide/onchainos/intro' },
          { label: 'OKX.ai', to: '/guide/okx-ai/intro' },
          { label: 'Hackathon Fikirleri', to: '/guide/ideas/intro' },
        ] },
        { title: 'Resmî kaynaklar', items: [
          { label: 'OKX TR ATK', href: 'https://tr.okx.com/docs-v5/agent_en/#introduction' },
          { label: 'OnchainOS Docs', href: 'https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos' },
          { label: 'OKX.ai Docs', href: 'https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai' },
        ] },
      ],
      copyright: 'Hackathon için hazırlanmış bağımsız topluluk rehberi. OKX tarafından yayımlanmış resmî doküman değildir.',
    },
    prism: { additionalLanguages: ['bash', 'json', 'toml'] },
  },
};

module.exports = config;
