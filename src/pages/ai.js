import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { PromptCopy } from '../components/GuideWidgets';

export default function AiPack() {
  const [message, setMessage] = useState('');
  async function copyPrompt() {
    try {
      const response = await fetch('/ai/starter-prompt.txt');
      if (!response.ok) throw new Error('Prompt dosyası alınamadı.');
      await navigator.clipboard.writeText(await response.text());
      setMessage('Talimat kopyalandı. Codex veya Claude Code sohbetine yapıştırabilirsin.');
    } catch {
      setMessage('Kopyalama başarısız oldu; aşağıdaki dosya bağlantısını açıp metni kopyalayabilirsin.');
    }
  }
  return <Layout title="LLM dosyaları" description="Codex ve Claude Code için OKX ATK talimatları ve kaynaklar">
    <main className="container margin-vert--xl">
      <p className="eyebrow">Codex · Claude Code · Cursor</p>
      <h1>Codex ve Claude Code için dosyalar</h1>
      <p>İngilizce dosyalarda ATK kurulum adımları, örnek komutlar ve güvenlik sınırları bulunur. <code>llms.txt</code> kaynak bağlantılarını listeler. Asistan bağlantıyı kendiliğinden açmayabilir; gerekirse dosyayı indirip sohbete ekle.</p>
      <p>Proje sunumuna hazırlanırken <Link to="/guide/avalanche/judging">jüriye hazırlık rehberini</Link> de kullan. Paylaşılan puan ağırlıkları bir taslaktır; resmî kuralları organizatörden doğrula.</p>
      <div className="aiBox">
        <h2>Başlangıç talimatı</h2>
        <p>Codex veya Claude Code'a ilk görev olarak yapıştır. Gerçek işlem istemez.</p>
        <button className="button button--primary" onClick={copyPrompt}>Talimatı kopyala</button>{' '}
        <a className="button button--secondary" href="/ai/starter-prompt.txt" download>TXT indir</a>
        {message && <p role="status" className="margin-top--md">{message}</p>}
      </div>
      <div className="guideGrid">
        <Link className="guideCard" to="pathname:///llms.txt"><span className="tag">Kaynak listesi</span><h3>llms.txt →</h3><p>Rehber bağlantıları ve ürün sınırları.</p></Link>
        <Link className="guideCard" to="pathname:///llms-full.txt"><span className="tag">Ayrıntılı dosya</span><h3>llms-full.txt →</h3><p>Komutlar, örnekler ve güvenlik notları.</p></Link>
        <Link className="guideCard" to="/guide/atk/quickstart"><span className="tag">Türkçe rehber</span><h3>Hızlı başlangıç →</h3><p>Adım adım ATK kurulumu.</p></Link>
      </div>
      <h2>Projeye uygun talimatı seç</h2>
      <p>Aşağıdaki üç örneğin her biri görev kapsamını ve kontrol adımlarını açıklar. Önce ilgili proje rehberini oku, sonra talimatı Codex veya Claude Code'a ver.</p>
      <div className="promptGrid">
        <div><h3>ATK Veri Kalitesi Panosu</h3><p>Anahtarsız, salt okunur veri denetimi.</p><PromptCopy src="/ai/prompts/atk-data-quality.txt" /></div>
        <div><h3>ATK verisinden agent hizmeti</h3><p>Yerel JSON prototipi ve A2MCP yol haritası.</p><PromptCopy src="/ai/prompts/atk-a2mcp.txt" /></div>
        <div><h3>402 Ödeme Laboratuvarı</h3><p>Cüzdansız ve tamamen temsili ödeme deneyimi.</p><PromptCopy src="/ai/prompts/payment-402.txt" /></div>
      </div>
    </main>
  </Layout>;
}
