import React from 'react';
import Link from '@docusaurus/Link';

const clients = [
  { name: 'OpenClaw', mark: '✦', route: 'https://docs.openclaw.ai/tools/mcp', mode: 'MCP / Skills' },
  { name: 'Claude', mark: '✳', route: '/guide/atk/setup-claude-code', mode: 'MCP' },
  { name: 'Cursor', mark: '◈', route: '/guide/atk/setup-cursor', mode: 'MCP' },
  { name: 'OpenCode', mark: '▦', route: 'https://opencode.ai/docs/mcp-servers/', mode: 'MCP' },
  { name: 'Codex', mark: '◎', route: '/guide/atk/setup-codex', mode: 'MCP' },
];

export default function ClientStrip() {
  return <section className="clientSection" aria-labelledby="clientSectionTitle">
    <div className="container">
      <p className="clientEyebrow">MCP ve Skills istemcileri</p>
      <h2 id="clientSectionTitle">Kullandığın agent ortamıyla devam et.</h2>
      <p className="clientIntro">ATK yerel bir MCP sunucusu ve CLI sunar. İstemcine uygun kurulum yolunu seç.</p>
      <div className="clientStrip">
        {clients.map((client) => <Link key={client.name} className="clientBrand" to={client.route} aria-label={`${client.name} kurulum veya resmî doküman`}>
          <span className="clientMark" aria-hidden="true">{client.mark}</span>
          <span className="clientText"><strong>{client.name}</strong><small>{client.mode}</small></span>
        </Link>)}
      </div>
      <p className="clientFootnote">OpenClaw ve OpenCode bağlantıları ilgili ürünün resmî kurulum belgelerine gider. <Link to="/guide/atk/mcp">Genel MCP kurulumuna bak →</Link></p>
    </div>
  </section>;
}
