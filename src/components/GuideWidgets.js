import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { selectGuidePath } from '../lib/guide-paths.mjs';

export function PathFinder() {
  const [goal, setGoal] = useState('atk');
  const [client, setClient] = useState('codex');
  const [access, setAccess] = useState('public');
  const path = selectGuidePath({ goal, client, access });

  return <div className="pathFinder">
    <div className="pathFinderFields">
      <label>Ne üretmek istiyorsun?
        <select value={goal} onChange={(event) => setGoal(event.target.value)}>
          <option value="atk">ATK ile veri aracı</option>
          <option value="service">ATK verisinden agent hizmeti</option>
          <option value="payment">Agent ödeme akışı</option>
        </select>
      </label>
      <label>Hangi istemciyi kullanıyorsun?
        <select value={client} onChange={(event) => setClient(event.target.value)}>
          <option value="codex">Codex</option>
          <option value="claude">Claude Code</option>
          <option value="cursor">Cursor</option>
          <option value="other">Diğer MCP istemcisi</option>
        </select>
      </label>
      <label>ATK hesabı için okuma yetkin var mı?
        <select value={access} onChange={(event) => setAccess(event.target.value)}>
          <option value="public">Hayır veya bilmiyorum</option>
          <option value="read">Evet, okuma yetkim var</option>
        </select>
      </label>
    </div>
    <div className="pathFinderResult" aria-live="polite">
      <span className="feasibilityBadge">{path.mode === 'simulated' ? 'Temsili demo' : 'Anahtarsız başlangıç'}</span>
      <h3>{path.title}</h3>
      <p>{path.note}</p>
      <div className="button-group">
        <Link className="button button--primary" to={path.recipeUrl}>Proje reçetesini aç</Link>
        <Link className="button button--secondary" to={path.setupUrl}>Kurulum yolunu gör</Link>
      </div>
    </div>
  </div>;
}

export function PromptCopy({ src, label = 'AI prompt’unu kopyala' }) {
  const [message, setMessage] = useState('');
  async function copy() {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error('Dosya okunamadı');
      await navigator.clipboard.writeText(await response.text());
      setMessage('Kopyalandı. Codex veya Claude Code sohbetine yapıştırabilirsin.');
    } catch {
      setMessage('Kopyalama başarısız oldu. Metin bağlantısını açıp kopyalayabilirsin.');
    }
  }

  return <div className="promptBox">
    <div><strong>Bu projeye özel AI başlangıcı</strong><p>Görev, veri sınırı ve başarı ölçütleri hazır.</p></div>
    <div className="button-group">
      <button type="button" className="button button--primary" onClick={copy}>{label}</button>
      <a className="button button--secondary" href={src} download>TXT indir</a>
    </div>
    {message && <p role="status" className="promptStatus">{message}</p>}
  </div>;
}

const paymentStates = {
  idle: { title: 'İstek bekliyor', detail: 'Örnek agent ücretli /summary kaynağını isteyecek.' },
  challenge: { title: '402 Payment Required', detail: 'Örnek sunucu 0,02 USDT tutarlı temsili ödeme talebi döndürdü.' },
  approved: { title: 'Onay kaydedildi', detail: 'Bu yalnızca yerel demo onayıdır. İmza ve para hareketi yapılmadı.' },
  completed: { title: 'Örnek içerik açıldı', detail: 'Erişim sonucu temsili olarak gösterildi. Gerçek settlement yapılmadı.' },
  declined: { title: 'Kullanıcı reddetti', detail: 'İçerik kapalı kaldı; hiçbir ödeme denenmedi.' },
  expired: { title: 'Talep süresi doldu', detail: 'Yeni bir talep olmadan bu ödeme isteği kullanılamaz.' },
};

export function PaymentFlowDemo() {
  const [state, setState] = useState('idle');
  const current = paymentStates[state];
  return <div className="paymentDemo">
    <span className="feasibilityBadge feasibilityBadge--warn">Tamamen temsili · Cüzdan bağlantısı yok</span>
    <h3>{current.title}</h3>
    <p aria-live="polite">{current.detail}</p>
    <div className="paymentTimeline" aria-label="Ödeme akışı adımları">
      {['İstek', '402 yanıtı', 'Kullanıcı kararı', 'Sonuç'].map((step, index) =>
        <span key={step} className={index <= (state === 'idle' ? -1 : state === 'challenge' ? 1 : state === 'approved' ? 2 : 3) ? 'isActive' : ''}>{step}</span>)}
    </div>
    <div className="button-group">
      {state === 'idle' && <button type="button" className="button button--primary" onClick={() => setState('challenge')}>Örnek isteği başlat</button>}
      {state === 'challenge' && <>
        <button type="button" className="button button--primary" onClick={() => setState('approved')}>Temsili onay ver</button>
        <button type="button" className="button button--secondary" onClick={() => setState('declined')}>Reddet</button>
        <button type="button" className="button button--secondary" onClick={() => setState('expired')}>Süreyi doldur</button>
      </>}
      {state === 'approved' && <button type="button" className="button button--primary" onClick={() => setState('completed')}>Örnek sonucu göster</button>}
      {state !== 'idle' && <button type="button" className="button button--outline button--secondary" onClick={() => setState('idle')}>Baştan dene</button>}
    </div>
  </div>;
}
