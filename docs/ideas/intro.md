---
title: Hackathon fikirleri
description: Agent ödemeleri, hizmetler ve güvenli iş akışları ağırlıklı 20 OKX hackathon fikri.
---

# Hackathon fikirleri

Bu seçkideki **20 fikir**, geliştirilebilecek topluluk prototipleridir; hazır OKX ürünleri, resmî yarışma kategorileri veya ödül vaadi değildir. Rehberin ana konusu [OKX TR Agent Trade Kit](../atk/intro.md) olmaya devam ediyor. Fikirler ise ağırlıkla **agentic payment, hizmet pazaryeri, veri kalitesi ve güvenli otomasyon** üzerine kurulu. Böylece hackathon projesi için alım satım ekranı yapmak gerekmez.

| Alan | Fikir | Nasıl başlanır? |
| --- | ---: | --- |
| [ATK: veri ve eğitim araçları](./atk.md) | 5 | Anahtarsız piyasa verisi veya temsili hesap verisi |
| [OnchainOS: ödemeler ve cüzdan deneyimi](./onchainos.md) | 9 | Yerel, temsili ödeme akışı; canlı API erişimi ayrı |
| [OKX.ai: agent hizmetleri](./okx-ai.md) | 6 | Görev, teslim ve değerlendirme simülasyonu |

## Öne çıkan üç trade dışı başlangıç

1. **[402 Ödeme Laboratuvarı](./onchainos.md#6-402-ödeme-laboratuvarı):** Ücretli bir API isteğinin “erişim isteği → ödeme talebi → onay → sonuç” yolculuğunu yerel olarak canlandır.
2. **[Agent Harcama Onayı](./onchainos.md#7-agent-harcama-onayı):** Agent'ın ücretli bir araca erişmeden önce maliyet, alıcı ve üst sınırı kullanıcıya açıklamasını tasarla.
3. **[Hizmet Talebi Oluşturucu](./okx-ai.md#15-hizmet-talebi-oluşturucu):** Belirsiz bir isteği teslim biçimi, kabul ölçütü ve bütçe sınırı açık bir agent görevine dönüştür.

## Bir fikri hafta sonu demosuna dönüştür

**Tek kullanıcı sorusu → tek görünür akış → iki hata durumu → açık kaynak bağlantısı.** Örneğin 402 demosunda ücretsiz erişim, ödeme gerektiren erişim, reddedilen onay ve süresi dolan talep ayrı ayrı gösterilebilir. Her ekran “temsili” veriyi belirtmeli; ödeme yapılmış veya zincire yazılmış izlenimi vermemeli.

Bu katalogda geçen ödeme, imza, transfer, abonelik ve marketplace işlemleri **varsayılan demo kapsamında simüle edilir**. Gerçek entegrasyon için ilgili API'nin mevcut olup olmadığı, geliştirici erişimi, desteklenen ağ ve cüzdan izinleri ayrıca doğrulanmalıdır. Kullanıcı onayı olmadan gerçek para hareketi yapılmaz; gizli anahtarlar repoya veya sohbete konmaz.

**Kaynak kontrolü: 16 Ekim 2026.** Ürün sınırları için [ATK deposu](https://github.com/okx/agent-trade-kit), [OnchainOS Payments API](https://web3.okx.com/onchainos/dev-docs/payments/api-overview) ve [OKX.ai dokümanı](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai) kullanıldı. Fikirler ve MVP tasarımları topluluk önerisidir.
