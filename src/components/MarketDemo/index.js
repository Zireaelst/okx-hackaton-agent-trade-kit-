import React, { useState } from 'react';
import { analyzeMarket } from '../../lib/demo.mjs';

const fixture = {
  bid: 99900,
  ask: 100100,
  candles: [
    { high: 100400, low: 99500, complete: true },
    { high: 100800, low: 99200, complete: true },
    { high: 100600, low: 99600, complete: true },
    { high: 100900, low: 99800, complete: true },
    { high: 101000, low: 99700, complete: true },
    { high: 100700, low: 99400, complete: true },
    { high: 102000, low: 99000, complete: false },
  ],
};

const steps = [
  'Ticker: en iyi alış ve satış fiyatını al.',
  'Order book: ilk beş seviyedeki miktarları gözden geçir.',
  'Candles: yalnızca tamamlanmış 1 saatlik mumları seç.',
  'Hesapla: spread (bps) ve altı saatlik fiyat aralığı.',
];

export default function MarketDemo() {
  const [visible, setVisible] = useState(1);
  const result = analyzeMarket(fixture);
  return <div className="demoShell">
    <p className="eyebrow">Temsili veri · Canlı piyasa verisi değildir</p>
    <p>Bu akış, bir agent'ın ATK araçlarından topladığı veriyi nasıl anlamlandırabileceğini gösterir. Hiçbir API çağrısı veya işlem emri gönderilmez.</p>
    {steps.slice(0, visible).map((step, index) => <div className="demoStep" key={step}><span className="demoNum">{index + 1}</span><span>{step}</span></div>)}
    {visible >= 4 && <div className="demoStats">
      <div className="demoStat">Orta fiyat <strong>{result.mid.toLocaleString('en-US')} USDT</strong></div>
      <div className="demoStat">Bid/ask spread <strong>{result.spreadBps.toFixed(1)} bps</strong></div>
      <div className="demoStat">6 mum aralığı <strong>{result.rangeLow.toLocaleString('en-US')}–{result.rangeHigh.toLocaleString('en-US')}</strong></div>
      <div className="demoStat">Aralık genişliği <strong>%{result.rangePercent.toFixed(2)}</strong></div>
    </div>}
    {visible < 4 && <button className="button button--primary" onClick={() => setVisible(visible + 1)}>Sonraki adım →</button>}
    {visible === 4 && <button className="button button--secondary" onClick={() => setVisible(1)}>Baştan göster</button>}
  </div>;
}
