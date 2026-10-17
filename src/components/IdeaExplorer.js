import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { ideas, filterIdeas } from '../data/ideas.mjs';

const productLabels = { atk: 'Agent Trade Kit', onchainos: 'OnchainOS', okxai: 'OKX.ai' };
const accessLabels = {
  public: 'Anahtarsız piyasa verisi',
  verify: 'Erişimi doğrula',
  account: 'Hesap okuma yetkisi',
  simulated: 'Temsili demo',
};

export default function IdeaExplorer() {
  const [query, setQuery] = useState('');
  const [product, setProduct] = useState('all');
  const [access, setAccess] = useState('all');
  const results = filterIdeas({ query, product, access });
  const hasFilters = query.trim() || product !== 'all' || access !== 'all';

  function resetFilters() {
    setQuery('');
    setProduct('all');
    setAccess('all');
  }

  return <section className="ideaExplorer" aria-label="Hackathon fikir keşfi">
    <div className="ideaExplorerHeading">
      <div>
        <span className="eyebrow">Fikir keşfi</span>
        <p>Ürüne, erişime veya aklındaki probleme göre daralt. Kartlar ayrıntılı fikir sayfalarına açılır.</p>
      </div>
      <span className="ideaTotal">{ideas.length} topluluk fikri</span>
    </div>
    <div className="ideaControls" role="search" aria-label="Hackathon fikirlerini filtrele">
      <label className="ideaSearch">Fikirlerde ara
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Örn. ödeme, veri, erişilebilirlik" />
      </label>
      <label>Ürün
        <select value={product} onChange={(event) => setProduct(event.target.value)}>
          <option value="all">Tüm ürünler</option>
          <option value="atk">Agent Trade Kit</option>
          <option value="onchainos">OnchainOS</option>
          <option value="okxai">OKX.ai</option>
        </select>
      </label>
      <label>Başlangıç koşulu
        <select value={access} onChange={(event) => setAccess(event.target.value)}>
          <option value="all">Tüm koşullar</option>
          <option value="public">Anahtarsız piyasa verisi</option>
          <option value="verify">Erişimi doğrula</option>
          <option value="account">Hesap okuma yetkisi</option>
          <option value="simulated">Temsili demo</option>
        </select>
      </label>
    </div>
    <div className="ideaResultsBar">
      <p aria-live="polite"><strong>{results.length}</strong> fikir gösteriliyor</p>
      {hasFilters && <button type="button" onClick={resetFilters}>Filtreleri sıfırla</button>}
    </div>
    {results.length ? <div className="ideaGrid">
      {results.map((idea) => <article key={idea.id} className="ideaCard">
        <div className="ideaCardTop"><span className="ideaNumber">{String(idea.id).padStart(2, '0')}</span><span className={`ideaProduct ideaProduct--${idea.product}`}>{productLabels[idea.product]}</span></div>
        <h3><Link to={idea.href}>{idea.title}</Link></h3>
        <p>{idea.summary}</p>
        <div className="ideaCardBottom"><span className={`ideaAccess ideaAccess--${idea.access}`}>{accessLabels[idea.access]}</span>{idea.recipe && <Link to={idea.recipe}>Çalışan örneği aç →</Link>}</div>
      </article>)}
    </div> : <div className="ideaEmpty" role="status">
      <strong>Eşleşen fikir bulunamadı.</strong>
      <p>Başka bir kelime deneyebilir veya filtreleri sıfırlayabilirsin.</p>
      <button type="button" className="button button--primary" onClick={resetFilters}>Tüm fikirleri göster</button>
    </div>}
  </section>;
}
