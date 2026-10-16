---
title: ATK ile 5 trade dışı fikir
description: Agent Trade Kit verisini eğitim, kalite kontrolü ve hizmet prototiplerinde kullanma fikirleri.
---

# ATK ile 5 trade dışı fikir

ATK adında “Trade” geçse de hackathon prototipi emir vermek zorunda değildir. [Resmî depoda](https://github.com/okx/agent-trade-kit) anahtarsız `market`, haber ve salt okunur hesap sorguları gibi farklı araçlar bulunur. **ATK, OnchainOS ödeme veya OKX.ai marketplace modülü değildir.** Bu fikirlerde iki ürünü birleştirirsen ayrı entegrasyon ve izin sınırlarını açıkça göster.

## 1. Veri Kalitesi Panosu

**Kimin sorunu?** Piyasa verisini kullanan bir agent'ın eski veya eksik yanıtı fark etmesi. **MVP:** Ticker ve mum yanıtlarında kaynak zamanı, alınma zamanı, boş alan ve hata durumunu kontrol eden pano. **Demo:** Temsili gecikmiş/boş yanıtlarla uyarının değişmesi. **ATK dayanağı:** `market` verisi; anahtarsız başlanabilir. Bu bir alım satım sinyali değildir.

## 2. Kripto Veri Sözlüğü

**Kimin sorunu?** Yeni başlayanların ticker, bid/ask ve mum alanlarını karıştırması. **MVP:** Gerçek veya temsili bir BTC-USDT yanıtındaki her alanı sade Türkçeyle açıklayan etkileşimli kartlar. **Demo:** Kullanıcı bir alanı seçince anlam, birim ve veri zamanı görünür. **ATK dayanağı:** ticker, order book, candles. [Mevcut rehberli demo](../atk/demo.mdx) örnek veri sağlar.

## 3. Kaynaklı Haber Özeti

**Kimin sorunu?** Birden çok haber başlığını kaynağı ve yayımlanma zamanı olmadan özetlemek. **MVP:** Kurulu sürümde erişilebiliyorsa ATK `news` modülündeki başlıkları konuya göre grupla; her iddiayı özgün habere bağla. **Demo:** Temsili üç haberle yinelenen başlıkları ayır. **Erişim:** `news` modülü ve bölge kullanılabilirliğini kurulu sürümde kontrol et; fiyat tahmini üretme.

## 4. API Yanıtı Doğrulama Servisi

**Kimin sorunu?** Başka uygulamaların bozuk veya belirsiz piyasa verisini fark etmeden kullanması. **MVP:** ATK'den alınmış bir *örnek yanıtı* şema, zaman ve eksik alan kurallarıyla doğrulayan küçük API. **Demo:** Hatalı üç yanıtı gerekçeli olarak reddet. **Genişletme:** İstersen bu servisi [OnchainOS 402 ödeme fikri](./onchainos.md#6-402-ödeme-laboratuvarı) için temsili ücretli kaynak yap; ödeme ATK özelliği gibi gösterilmez.

## 5. Hesap Ekstresi Açıklayıcısı

**Kimin sorunu?** Kendi hesap hareketlerini anlamak isteyen kullanıcının işlem geçmişindeki alanları yorumlaması. **MVP:** Tamamen temsili, kişisel veri içermeyen hesap hareketlerini kategori ve tarih bazında açıklayan arayüz. **Demo:** Eksik işlem ve yinelenen kayıt uyarıları. **ATK dayanağı:** [Account modülünde](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md) bakiye ve bills sorguları var; **canlı hesap sorgusu okuma yetkili API erişimi ister**. Kullanıcıdan kimlik bilgisi sohbette istenmez.

## Nasıl kurulur?

Anahtarsız ilk örnek için [ATK hızlı başlangıç](../atk/quickstart.md), MCP/CLI/Skills seçenekleri için [kurulum rehberi](../atk/cli-skills.md) ve erişim sınırları için [güvenlik](../atk/safety.md) sayfasına bak. Haber ve hesap araçları kurulu sürüm ve izinlere göre değişebilir; resmî [depo](https://github.com/okx/agent-trade-kit) ile [CLI başvurusunu](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) kontrol et. **Kaynak kontrolü: 16 Ekim 2026.**
