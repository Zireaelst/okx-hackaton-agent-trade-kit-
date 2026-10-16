---
title: ATK ile 12 fikir
description: OKX TR Agent Trade Kit'in salt okunur piyasa araçlarıyla yapılabilecek hackathon projeleri.
---

# ATK ile 12 fikir

Bu fikirler [ATK `market` araçları](https://github.com/okx/agent-trade-kit) ve [güncel CLI başvurusu](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) üzerine kurulur. **Hepsi salt okunur prototip olarak yapılabilir.** Kullanılabilir alt komut ve alanlar kurulu sürüme göre değişebilir; önce [ilk sorguyu](../atk/quickstart.md) çalıştır, sonra `okx market --help` çıktısını kontrol et. Türkiye uç noktası için rehberdeki `OKX_SITE=tr` ayarını kullan.

Her fikir için ekranda **enstrüman, veri zamanı, kullanılan araç ve hesaplama varsayımı** görünmeli. Piyasa verisi gözlemdir; tahmin, kâr garantisi veya kişisel yatırım tavsiyesi gibi sunulmamalıdır.

## 1. Market Risk Copilot

**Soru:** “Şu anki piyasa görünümünü hangi sayılarla açıklayabilirim?”

**MVP:** BTC-USDT ticker, ilk order book seviyeleri ve kapanmış mumlardan orta fiyat, spread (bps) ve mum fiyat aralığı hesapla. Eksik alanları ayrıca göster. **Demo:** [Rehberli temsili örneği](../atk/demo.mdx) kendi arayüzüne taşı. **Veri:** ticker, order book, candles.

## 2. Spread Radar

**Soru:** “İzlediğim spot çiftlerde alış-satış farkı nasıl değişiyor?”

**MVP:** Kullanıcının seçtiği 3–5 çiftin en iyi bid/ask değerlerini ve spread'ini tek tabloda göster. Ölçüm saatini sakla; farklı zamanlı gözlemleri aynı an gibi karşılaştırma. **Demo:** İki ardışık okumanın farkını göster. **Veri:** ticker veya order book.

## 3. Derinlik Stres Testi

**Soru:** “Varsayımsal bir büyüklük, görünen emir defterinde kaç seviyeye yayılır?”

**MVP:** Kullanıcının girdiği *varsayımsal* miktarı mevcut order book seviyeleri üzerinde hesapla; ağırlıklı ortalama fiyatı ve karşılanmayan miktarı yaz. **Demo:** “Bu bir anlık görüntü, gerçekleşecek işlem fiyatı değildir” uyarısıyla iki farklı miktarı karşılaştır. **Veri:** order book. Emir gönderme yok.

## 4. Mum Hikâyesi

**Soru:** “Son kapanmış mumlarda hangi gözlemlenebilir değişim var?”

**MVP:** 1 saatlik kapanmış mumların yüksek/düşük aralığını, yönünü ve hacmini sade bir zaman çizelgesine çevir. Açık mumu ayır. **Demo:** Aynı aralıktaki en yüksek ve en düşük mumları gerekçesiyle işaretle. **Veri:** candles.

## 5. Funding Watch

**Soru:** “Takip ettiğim perpetual çiftlerin fonlama verisi nerede dikkat çekiyor?”

**MVP:** Seçili swap enstrümanlarında funding rate, mark price ve ölçüm zamanını yan yana göster. Aykırı görünen değerleri yalnızca kullanıcı tanımlı eşikle işaretle. **Demo:** Eşik değişince açıklamanın nasıl değiştiğini göster. **Veri:** funding rate, mark price.

## 6. Açık Pozisyon Nabzı

**Soru:** “Açık pozisyon büyüklüğü fiyatla birlikte nasıl değişmiş?”

**MVP:** Open interest ile fiyatın iki zamanlı değişimini birlikte göster. “Birlikte hareket” gözlemini “nedensellik” olarak anlatma. **Demo:** Artış, düşüş ve veri eksikliği için üç açıklama kartı. **Veri:** open interest/OI history ve ticker.

## 7. Parite Farkı İzleyicisi

**Soru:** “İki seçili enstrüman arasındaki fiyat farkı nasıl izlenir?”

**MVP:** Kurulu sürümde varsa `pair-spread` çıktısını; yoksa iki ticker'ın karşılaştırılabilir fiyat alanlarını kullan. Çiftlerin para birimi ve ölçüm zamanını doğrula. **Demo:** Farkın formülünü ve kullanılan alanları ekranda göster. **Veri:** pair-spread veya ticker.

## 8. Gösterge Karşılaştırma Laboratuvarı

**Soru:** “İki farklı teknik gösterge aynı veri için ne söylüyor?”

**MVP:** Kurulu ATK sürümündeki gösterge araçlarını kontrol edip iki göstergeyi kapanmış mumlarla birlikte görselleştir. Parametreleri ve veri penceresini açık yaz. **Demo:** Parametre değişince sonucun nasıl değiştiğini göster; al/sat kararı üretme. **Veri:** technical indicators, candles.

## 9. Açıklanabilir Piyasa Tarayıcısı

**Soru:** “Hangi enstrümanlar benim tanımladığım filtreyi geçti?”

**MVP:** Kurulu sürümdeki market-filter araçlarını veya ticker listesini kullanarak hacim ve fiyat değişimi gibi açık eşikler uygula. Her sonucun yanında “neden listede” açıklaması olsun. **Demo:** Eşiği değiştirip sıralamanın güncellenmesini göster. **Veri:** tickers, market filter.

## 10. Veri Tazeliği Nöbetçisi

**Soru:** “Agent eski veya eksik veriyi nasıl fark eder?”

**MVP:** Piyasa sorgularının kaynak zamanını, yerel alınma zamanını ve hata durumunu göster. Tanımlı eşik aşılırsa hesaplama sonucunu “güncelliği doğrulanamadı” diye işaretle. **Demo:** Temsili gecikme ve boş yanıt senaryoları. **Veri:** ticker, candles; amaç veri kalitesi.

## 11. Piyasa Tekrar Anlatıcısı

**Soru:** “Geçmiş bir zaman penceresini hangi kanıtlarla özetleyebilirim?”

**MVP:** Geçmiş kapanmış mumları seçilen aralığa göre böl; yüksek/düşük, hacim ve belirgin değişimleri metinle anlat. Tarihsel order book varmış gibi davranma. **Demo:** Aynı veri için kısa ve ayrıntılı anlatım seçenekleri. **Veri:** historical candles.

## 12. İşlem Öncesi Kontrol Listesi

**Soru:** “Kullanıcının düşündüğü işlemden önce hangi piyasa koşulları görünür olmalı?”

**MVP:** Kullanıcının *varsayımsal* yön ve miktarını al; spread, görünen derinlik, veri yaşı ve ölçüm eksiklerini raporla. **Demo:** “Devam et” düğmesi yerine yalnızca indirilebilir kontrol raporu üret. **Veri:** ticker, order book, candles. Hesap veya emir erişimi yok.

## Uygulama sınırı

İlk prototip için [CLI, MCP ve Skills farkı](../atk/cli-skills.md) ve [güvenli kullanım](../atk/safety.md) sayfalarına bak. Her fikrin canlı veriyle çalışması ağ ve bölge erişimine bağlıdır; yedek demo verisi **temsili** diye etiketlenmelidir. Yukarıdaki ürün yetenekleri [resmî ATK deposundan](https://github.com/okx/agent-trade-kit) kontrol edildi; bu 12 uygulama fikri topluluk önerisidir. **Kontrol tarihi: 16 Ekim 2026.**
