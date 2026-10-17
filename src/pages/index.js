import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import ClientStrip from '../components/ClientStrip';
import { ideas } from '../data/ideas.mjs';

const guides = [
  { tag: 'ATK REHBERİ', title: 'OKX TR Agent Trade Kit', text: 'MCP, CLI ve Skills kurulumunu öğren; ilk piyasa verisi sorgunu çalıştır.', href: '/guide/atk/intro' },
  { tag: 'ZİNCİR ÜSTÜ', title: 'OnchainOS', text: 'Cüzdan, piyasa verisi ve ödeme araçlarına nasıl başlanacağını gör.', href: '/guide/onchainos/intro' },
  { tag: 'AGENT HİZMETLERİ', title: 'OKX.ai', text: 'Marketplace rollerini ve örnek görev akışını incele.', href: '/guide/okx-ai/intro' },
];

export default function Home() {
  return <Layout title="Ana Sayfa" description="Hackathon için OKX TR Agent Trade Kit, OnchainOS ve OKX.ai topluluk rehberi">
    <main>
      <section className="heroGuide"><div className="container">
        <div className="heroLayout">
          <div className="heroCopy">
            <p className="eyebrow">Bağımsız hackathon rehberi</p>
            <h1>ATK'yi kur.<br /><span>İlk demonu çalıştır.</span></h1>
            <p>OKX TR Agent Trade Kit kurulumu, anahtarsız piyasa verisi örnekleri ve Codex ile Claude Code için hazır talimatlar. OnchainOS ve OKX.ai rehberleri de burada.</p>
            <div className="heroActions">
              <Link className="button button--primary button--lg" to="/guide/start/intro">Rehbere başla <span aria-hidden="true">→</span></Link>
              <Link className="button button--outline button--secondary button--lg" to="/guide/ideas/intro#fikir-kesfet">{ideas.length} proje fikri</Link>
            </div>
            <p className="heroBuilderLink">Avalanche için: <a href="https://go.team1.network/turkiye-builder" target="_blank" rel="noopener noreferrer">Team1 bağlantısıyla Builder Hub'a kaydol ↗</a> · <Link to="/guide/avalanche/judging">Jüri ölçütleri</Link></p>
          </div>
          <aside className="heroJourney" aria-label="Demoya giden üç adım">
            <div className="heroJourneyHeader">İlk üç adım</div>
            <ol>
              <li><span>01</span><div><strong>Kurulumu seç</strong><p>Kullandığın araca uygun ATK adımlarını izle.</p><Link to="/guide/start/intro">Başlangıç rehberi →</Link></div></li>
              <li><span>02</span><div><strong>Örneği çalıştır</strong><p>Piyasa verisini oku veya temsili bir akış dene.</p><Link to="/guide/build/atk-data-quality">Örnek projeler →</Link></div></li>
              <li><span>03</span><div><strong>LLM dosyalarını kullan</strong><p>Proje talimatlarını Codex veya Claude Code'a ver.</p><Link to="/ai">Dosyaları aç →</Link></div></li>
            </ol>
          </aside>
        </div>
      </div></section>
      <ClientStrip />
      <section className="container builderSection" aria-labelledby="builder-title">
        <div className="builderPanel">
          <div><span className="eyebrow">Avalanche Builder Hub</span><h2 id="builder-title">Avalanche ile geliştirecek misin?</h2><p>Team1 bağlantısıyla Builder Hub'a kaydol. Jüriye sunacağın Avalanche dağıtımını ve OKX kullanımını ayrıca belgelemeyi unutma.</p><small>Builder Hub hesabı, hackathon kaydı veya zincir dağıtımı değildir.</small></div>
          <div className="builderActions"><a className="button button--primary" href="https://go.team1.network/turkiye-builder" target="_blank" rel="noopener noreferrer">Builder Hub'a kaydol ↗</a><Link className="button button--outline button--secondary" to="/guide/avalanche/intro">Avalanche rehberi</Link></div>
        </div>
      </section>
      <section className="container guideSection"><div className="guideSectionHeading"><div><span className="eyebrow">Ürün rehberleri</span><h2>Ne kullanacaksın?</h2><p>ATK, OnchainOS ve OKX.ai için kurulum ve örnek akışlar.</p></div><Link to="/guide/ideas/intro#fikir-kesfet">Proje fikirlerine bak →</Link></div><div className="guideGrid">
        {guides.map((guide) => <Link key={guide.title} className="guideCard" to={guide.href}><span className="tag">{guide.tag}</span><h3>{guide.title} →</h3><p>{guide.text}</p></Link>)}
      </div></section>
      <div className="noteStrip"><div className="container">Bu bağımsız bir hackathon rehberidir. Komutlar ve ürün özellikleri değişebilir; kurulum yaparken ilgili resmî kaynağı da kontrol et.</div></div>
    </main>
  </Layout>;
}
