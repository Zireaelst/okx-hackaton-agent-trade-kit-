---
title: Hackathon fikirleri
description: ATK odaklı veri, agent ödemeleri ve hizmetler için 31 OKX hackathon fikri.
---

# Hackathon fikirleri

Bu seçkideki **31 fikir**, geliştirilebilecek topluluk prototipleridir; hazır OKX ürünleri, resmî yarışma kategorileri veya ödül vaadi değildir. Ana odak [OKX TR Agent Trade Kit](../atk/intro.md): 16 fikir ATK verisiyle başlıyor. Diğer fikirler **agentic payment, hizmet pazaryeri ve güvenli otomasyon** için OnchainOS ile OKX.ai'yi ayrı ürünler olarak kullanıyor. Alım satım ekranı yapmak gerekmez.

| Alan | Fikir | Nasıl başlanır? |
| --- | ---: | --- |
| [ATK: veri, eğitim ve servis fikirleri](./atk.md) | 16 | Anahtarsız piyasa verisi, erişime bağlı haber/hesap verisi |
| [OnchainOS: ödemeler ve cüzdan deneyimi](./onchainos.md) | 9 | Yerel, temsili ödeme akışı; canlı API erişimi ayrı |
| [OKX.ai: agent hizmetleri](./okx-ai.md) | 6 | Görev, teslim ve değerlendirme simülasyonu |

## Öne çıkan dört trade dışı başlangıç

1. **[ATK Veri Kalitesi Panosu](./atk.md#1-veri-kalitesi-panosu):** Anahtarsız veriyi sorgula; eski veya eksik yanıtı görünür kıl.
2. **[ATK verisinden agent hizmeti](./atk.md#16-atk-verisini-ücretli-servise-dönüştürme):** Veri kaynağını, servis katmanını ve temsili ödeme adımını ayrı göster.
3. **[402 Ödeme Laboratuvarı](./onchainos.md#17-402-ödeme-laboratuvarı):** Ücretli bir API isteğinin “erişim isteği → ödeme talebi → onay → sonuç” yolculuğunu yerel olarak canlandır.
4. **[Hizmet Talebi Oluşturucu](./okx-ai.md#26-hizmet-talebi-oluşturucu):** Belirsiz bir isteği teslim biçimi, kabul ölçütü ve bütçe sınırı açık bir agent görevine dönüştür.

## Bir fikri hafta sonu demosuna dönüştür

**Tek kullanıcı sorusu → tek görünür akış → iki hata durumu → açık kaynak bağlantısı.** Örneğin 402 demosunda ücretsiz erişim, ödeme gerektiren erişim, reddedilen onay ve süresi dolan talep ayrı ayrı gösterilebilir. Her ekran “temsili” veriyi belirtmeli; ödeme yapılmış veya zincire yazılmış izlenimi vermemeli.

Bu katalogda geçen ödeme, imza, transfer, abonelik ve marketplace işlemleri **varsayılan demo kapsamında simüle edilir**. Gerçek entegrasyon için ilgili API'nin mevcut olup olmadığı, geliştirici erişimi, desteklenen ağ ve cüzdan izinleri ayrıca doğrulanmalıdır. Kullanıcı onayı olmadan gerçek para hareketi yapılmaz; gizli anahtarlar repoya veya sohbete konmaz.

**Kaynak kontrolü: 16 Ekim 2026.** Ürün sınırları için [ATK deposu](https://github.com/okx/agent-trade-kit), [OnchainOS Payments API](https://web3.okx.com/onchainos/dev-docs/payments/api-overview) ve [OKX.ai dokümanı](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai) kullanıldı. Fikirler ve MVP tasarımları topluluk önerisidir.
