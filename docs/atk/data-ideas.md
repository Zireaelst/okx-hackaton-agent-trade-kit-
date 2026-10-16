---
title: Veriler ve proje fikirleri
description: ATK ile okunabilecek veriler ve hackathon için uygulama fikirleri.
---

# Veriler ve proje fikirleri

ATK'nin `market` modülü, bir prototip için anahtarsız başlangıç noktasıdır. Resmî dokümanda ticker, order book, mumlar, son işlemler, funding rate, mark price ve open interest gibi araçlar listelenir. [Güncel depo](https://github.com/okx/agent-trade-kit) daha fazla piyasa ve analiz aracı içerebilir; hangi araçların mevcut olduğu kurulu sürüme göre kontrol edilmelidir.

| Veri | Ne anlatır? | Örnek kullanım |
| --- | --- | --- |
| Ticker | Son fiyat, bid/ask ve hacim | Piyasa özeti |
| Order book | Fiyat seviyelerindeki alış/satış miktarı | Spread ve derinlik gözlemi |
| Candles | Açılış, yüksek, düşük, kapanış, hacim | Zaman aralığı karşılaştırması |
| Funding rate | Perpetual sözleşme fonlama oranı | Türev piyasa izleme |
| Open interest | Açık pozisyon büyüklüğü | Piyasa ilgisi göstergesi |

## ATK ile başlangıç için üç fikir

Daha geniş bir liste için [20 projelik Hackathon Fikirleri rehberine](../ideas/intro.md) bak.

**Trade dışı bir proje arıyorsan:** [agent ödemeleri ve hizmetleri fikirleri](../ideas/intro.md) bölümünden başla. Bu sayfadaki üç örnek yalnız ATK piyasa verisiyle başlangıç seçenekleridir.

### Market Risk Copilot

Ticker, ilk order book seviyeleri ve tamamlanmış mumları okuyup spread, fiyat aralığı ve gözlemleri kısa bir rapora dönüştürür. [Rehberli demo](./demo.mdx) bunun temsili sürümüdür.

### Likidite radarı

Seçilen spot çiftlerinde spread ve order book derinliğini karşılaştırır. Kullanıcıya değişimleri açık veri ve zaman damgasıyla gösterir. Sinyal üretebilir; otomatik alım satım yapmak zorunda değildir.

### İşlem öncesi kontrol

Kullanıcının düşündüğü bir işlem için mevcut spread ve ilk seviyelerdeki likiditeyi raporlar. Hesaplama ve yürütme ayrı aşamalardır: varsayılan akış yalnızca **okur ve açıklar**.

## Veriyi doğru yorumlama

Her sonuçta enstrüman adını, veri zamanını, kullanılan aracı ve hesaplama varsayımını gösterin. Eksik veri varsa “veri yok” deyin. Mum analizinde henüz kapanmamış mumu tamamlanmış gibi kullanmayın. Order book'un bir anlık görüntü olduğunu belirtin.

**Kaynak kontrolü:** 16 Ekim 2026 · [OKX TR ATK market araçları](https://tr.okx.com/docs-v5/agent_en/#mcp) · [ATK deposu](https://github.com/okx/agent-trade-kit)
