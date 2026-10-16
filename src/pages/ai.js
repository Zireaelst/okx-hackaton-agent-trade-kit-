import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function AiPack() {
  const [message, setMessage] = useState('');
  async function copyPrompt() {
    try {
      const response = await fetch('/ai/starter-prompt.txt');
      if (!response.ok) throw new Error('Prompt dosyası alınamadı.');
      await navigator.clipboard.writeText(await response.text());
      setMessage('Prompt kopyalandı. Codex veya Claude Code sohbetine yapıştırabilirsin.');
    } catch {
      setMessage('Kopyalama başarısız oldu; aşağıdaki dosya bağlantısını açıp metni kopyalayabilirsin.');
    }
  }
  return <Layout title="AI için" description="Codex ve Claude Code için OKX ATK bağlam paketi">
    <main className="container margin-vert--xl">
      <p className="eyebrow">Codex · Claude Code · Cursor</p>
      <h1>Agent'a doğru bağlamı ver.</h1>
      <p>İngilizce dosyalar, ATK'nin doğrulanmış başlangıç yollarını ve güvenli kullanım sınırlarını özetler. <code>llms.txt</code> bir kaynak haritasıdır; asistanın bağlantıyı otomatik okuyacağını varsayma. Gerekirse tam metni indirip sohbete ekle.</p>
      <div className="aiBox">
        <h2>Başlangıç prompt'u</h2>
        <p>Codex veya Claude Code'a ilk görev olarak yapıştır. Gerçek işlem istemez.</p>
        <button className="button button--primary" onClick={copyPrompt}>Prompt'u kopyala</button>{' '}
        <a className="button button--secondary" href="/ai/starter-prompt.txt" download>TXT indir</a>
        {message && <p role="status" className="margin-top--md">{message}</p>}
      </div>
      <div className="guideGrid">
        <Link className="guideCard" to="pathname:///llms.txt"><span className="tag">Kısa harita</span><h3>llms.txt →</h3><p>Kaynakları ve ürün sınırlarını gösterir.</p></Link>
        <Link className="guideCard" to="pathname:///llms-full.txt"><span className="tag">Tam bağlam</span><h3>llms-full.txt →</h3><p>Komutlar, örnek akış ve güvenlik sınırları.</p></Link>
        <Link className="guideCard" to="/guide/atk/quickstart"><span className="tag">İnsan rehberi</span><h3>5 dakikada başla →</h3><p>Türkçe ve adım adım kurulum.</p></Link>
      </div>
    </main>
  </Layout>;
}
