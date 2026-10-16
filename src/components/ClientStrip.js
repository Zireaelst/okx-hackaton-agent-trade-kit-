import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import atkLogo from '../../assets/atk.png';
import openClawLogo from '../../assets/openclaw-atk.png';
import claudeLogo from '../../assets/claud-atk.png';
import cursorLogo from '../../assets/cursor-atk.png';
import openCodeLogo from '../../assets/opencode-atk.png';
import codexLogo from '../../assets/codex-atk.png';
import { getClientSetupSnippet } from '../lib/client-setup.mjs';

const clients = [
  { id: 'openclaw', name: 'OpenClaw', logo: openClawLogo, route: 'https://docs.openclaw.ai/tools/mcp', mode: 'Resmî MCP belgeleri' },
  { id: 'claude', name: 'Claude Code', logo: claudeLogo, route: '/guide/atk/setup-claude-code', mode: 'Kurulum rehberi' },
  { id: 'cursor', name: 'Cursor', logo: cursorLogo, route: '/guide/atk/setup-cursor', mode: 'Kurulum rehberi' },
  { id: 'opencode', name: 'OpenCode', logo: openCodeLogo, route: 'https://opencode.ai/docs/mcp-servers/', mode: 'Resmî MCP belgeleri' },
  { id: 'codex', name: 'Codex', logo: codexLogo, route: '/guide/atk/setup-codex', mode: 'Kurulum rehberi' },
];

export default function ClientStrip() {
  const [copyStatus, setCopyStatus] = useState('');

  async function copySetup(client) {
    try {
      await navigator.clipboard.writeText(getClientSetupSnippet(client.id));
      setCopyStatus(`${client.name} MCP kaydı kopyalandı.`);
    } catch {
      setCopyStatus('Kopyalama başarısız oldu. İlgili kurulum rehberindeki kod bloğunu kullan.');
    }
  }

  return <section className="clientSection" aria-labelledby="clientSectionTitle">
    <div className="container">
      <img className="clientProductLogo" src={atkLogo} alt="Agent Trade Kit" />
      <p className="clientEyebrow">MCP ve Skills istemcileri</p>
      <h2 id="clientSectionTitle">Kullandığın agent ortamıyla devam et.</h2>
      <p className="clientIntro">ATK yerel bir MCP sunucusu ve CLI sunar. İstemcine uygun kurulum yolunu seç veya salt okunur OKX TR MCP kaydını kopyala.</p>
      <div className="clientStrip">
        {clients.map((client) => <div key={client.id} className="clientCard">
          <Link className="clientBrand" to={client.route} aria-label={`${client.name}: ${client.mode}`}>
            <img src={client.logo} alt="" loading="lazy" />
            <span>{client.mode} →</span>
          </Link>
          {getClientSetupSnippet(client.id) && <button type="button" className="clientCopy" onClick={() => copySetup(client)} aria-label={`${client.name} için OKX TR piyasa MCP kaydını kopyala`}>MCP kaydını kopyala</button>}
        </div>)}
      </div>
      {copyStatus && <p className="clientCopyStatus" role="status">{copyStatus}</p>}
      <p className="clientFootnote">Önce <Link to="/guide/atk/quickstart">ATK paketlerini kur</Link>. Cursor JSON kaydını mevcut <code>mcpServers</code> içine birleştir. OpenClaw ve OpenCode kartları resmî belgelere gider. <Link to="/guide/atk/mcp">Genel MCP rehberi →</Link></p>
    </div>
  </section>;
}
