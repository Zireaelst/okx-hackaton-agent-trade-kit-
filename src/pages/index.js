import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ClientStrip from '../components/ClientStrip';

const guides = [
  { tag: 'ANA REHBER', title: 'OKX TR Agent Trade Kit', text: 'MCP, CLI ve Skills ile piyasa verisinden çalışan hackathon prototipine ilerle.', href: '/guide/atk/intro' },
  { tag: 'ONCHAIN', title: 'OnchainOS', text: 'Agentic Wallet, zincir üstü veri, işlem ve ödeme araçlarına giriş yap.', href: '/guide/onchainos/intro' },
  { tag: 'AGENT EKONOMİSİ', title: 'OKX.ai', text: 'Agent marketplace rollerini ve ilk görev akışını öğren.', href: '/guide/okx-ai/intro' },
];

export default function Home() {
  return <Layout title="Ana Sayfa" description="Hackathon için OKX TR Agent Trade Kit, OnchainOS ve OKX.ai topluluk rehberi">
    <main>
      <section className="heroGuide"><div className="container">
        <p className="eyebrow">Hackathon topluluk rehberi</p>
        <h1>Agent araçlarıyla fikrini çalışan bir prototipe dönüştür.</h1>
        <p>OKX TR Agent Trade Kit ile başla. Kurulumu adım adım izle, salt okunur örnekleri dene ve Codex veya Claude Code için hazır bağlamı kullan.</p>
        <div className="button-group">
          <Link className="button button--primary button--lg" to="/guide/start/intro">Sana uygun yolu bul</Link>
          <Link className="button button--outline button--secondary button--lg" to="/ai">AI paketini al</Link>
          <Link className="button button--outline button--secondary button--lg" to="/guide/ideas/intro">31 proje fikrine bak</Link>
        </div>
      </div></section>
      <ClientStrip />
      <section className="container"><div className="guideGrid">
        {guides.map((guide) => <Link key={guide.title} className="guideCard" to={guide.href}><span className="tag">{guide.tag}</span><h3>{guide.title} →</h3><p>{guide.text}</p></Link>)}
      </div></section>
      <div className="noteStrip"><div className="container">Bu site hackathon katılımcıları için hazırlanmış bağımsız bir topluluk kaynağıdır. Komutlar ve ürün kapsamı değişebilir; kritik adımlarda sayfadaki resmî kaynak bağlantısını kontrol edin.</div></div>
    </main>
  </Layout>;
}
