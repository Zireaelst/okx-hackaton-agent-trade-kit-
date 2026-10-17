import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ClientStrip from '../components/ClientStrip';
import { ideas } from '../data/ideas.mjs';

const guides = [
  { tag: 'ANA REHBER', title: 'OKX TR Agent Trade Kit', text: 'MCP, CLI ve Skills ile piyasa verisinden çalışan hackathon prototipine ilerle.', href: '/guide/atk/intro' },
  { tag: 'ONCHAIN', title: 'OnchainOS', text: 'Agentic Wallet, zincir üstü veri, işlem ve ödeme araçlarına giriş yap.', href: '/guide/onchainos/intro' },
  { tag: 'AGENT EKONOMİSİ', title: 'OKX.ai', text: 'Agent marketplace rollerini ve ilk görev akışını öğren.', href: '/guide/okx-ai/intro' },
];

export default function Home() {
  return <Layout title="Ana Sayfa" description="Hackathon için OKX TR Agent Trade Kit, OnchainOS ve OKX.ai topluluk rehberi">
    <main>
      <section className="heroGuide"><div className="container">
        <div className="heroLayout">
          <div className="heroCopy">
            <p className="eyebrow">Hackathon topluluk rehberi</p>
            <h1>Bir fikir seç.<br /><span>Çalışan demoya ilerle.</span></h1>
            <p>OKX TR Agent Trade Kit ile güvenli bir ilk sorgu yap, uygun proje reçetesini aç ve Codex veya Claude Code için hazır bağlamı kullan.</p>
            <div className="heroActions">
              <Link className="button button--primary button--lg" to="/guide/start/intro">Buradan başla <span aria-hidden="true">→</span></Link>
              <Link className="button button--outline button--secondary button--lg" to="/guide/ideas/intro#fikir-kesfet">{ideas.length} fikri keşfet</Link>
            </div>
            <p className="heroBuilderLink">Avalanche araçlarına hazırlan: <a href="https://go.team1.network/turkiye-builder" target="_blank" rel="noopener noreferrer">Team1 bağlantısıyla Builder Hub hesabı aç ↗</a> · <Link to="/guide/start/judging">Jüriye hazırlık rehberi</Link></p>
            <div className="heroFacts" aria-label="Rehber kapsamı"><span>3 ürün rehberi</span><span>{ideas.length} proje fikri</span><span>3 çalışan örnek</span></div>
          </div>
          <aside className="heroJourney" aria-label="Demoya giden üç adım">
            <div className="heroJourneyHeader"><span className="heroJourneyIcon" aria-hidden="true">↗</span><span>Kısa yol</span></div>
            <ol>
              <li><span>01</span><div><strong>Yolunu seç</strong><p>Hedefin ve kullandığın istemciye göre başla.</p><Link to="/guide/start/intro">Başlangıç rehberi →</Link></div></li>
              <li><span>02</span><div><strong>Bir örnek çalıştır</strong><p>ATK verisini oku veya temsili akışı dene.</p><Link to="/guide/build/atk-data-quality">Proje reçeteleri →</Link></div></li>
              <li><span>03</span><div><strong>Agent'a bağlam ver</strong><p>Projeye özel prompt ile geliştirmeye devam et.</p><Link to="/ai">AI paketini aç →</Link></div></li>
            </ol>
          </aside>
        </div>
      </div></section>
      <ClientStrip />
      <section className="container builderSection" aria-labelledby="builder-title">
        <div className="builderPanel">
          <div><span className="eyebrow">Avalanche Builder Hub</span><h2 id="builder-title">Zincir tarafını da hazırlayın.</h2><p>Team1 bağlantısıyla Builder Hub hesabı açın; ardından jüriye göstereceğiniz gerçek Avalanche ve OKX kanıtlarını planlayın.</p><small>Builder Hub hesabı, hackathon kaydı veya zincir dağıtımı değildir.</small></div>
          <div className="builderActions"><a className="button button--primary" href="https://go.team1.network/turkiye-builder" target="_blank" rel="noopener noreferrer">Builder Hub'a kaydol ↗</a><Link className="button button--outline button--secondary" to="/guide/start/judging">Jüri rehberini aç</Link></div>
        </div>
      </section>
      <section className="container guideSection"><div className="guideSectionHeading"><div><span className="eyebrow">Üç ayrı ürün, açık sınırlar</span><h2>İhtiyacın olan rehbere geç.</h2><p>ATK verisi, zincir üstü araçlar ve agent hizmetleri için ayrı yollar.</p></div><Link to="/guide/ideas/intro#fikir-kesfet">Fikirleri filtrele →</Link></div><div className="guideGrid">
        {guides.map((guide) => <Link key={guide.title} className="guideCard" to={guide.href}><span className="tag">{guide.tag}</span><h3>{guide.title} →</h3><p>{guide.text}</p></Link>)}
      </div></section>
      <div className="noteStrip"><div className="container">Bu site hackathon katılımcıları için hazırlanmış bağımsız bir topluluk kaynağıdır. Komutlar ve ürün kapsamı değişebilir; kritik adımlarda sayfadaki resmî kaynak bağlantısını kontrol edin.</div></div>
    </main>
  </Layout>;
}
