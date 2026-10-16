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

1. **[ATK Veri Kalitesi Panosu](../build/atk-data-quality.mdx):** <span className="feasibilityBadge">Anahtarsız · çalışan örnek</span> Anahtarsız veriyi sorgula; eski veya eksik yanıtı görünür kıl.
2. **[ATK verisinden agent hizmeti](../build/atk-a2mcp.mdx):** <span className="feasibilityBadge">ATK · yerel prototip</span> Veri kaynağını ve servis katmanını ayrı göster. A2MCP kaydı ayrı iştir.
3. **[402 Ödeme Laboratuvarı](../build/payment-402.mdx):** <span className="feasibilityBadge feasibilityBadge--warn">Tamamen temsili</span> 402 yanıtı, yerel onay, ret ve süre dolumunu canlandır.
4. **[Hizmet Talebi Oluşturucu](./okx-ai.md#26-hizmet-talebi-oluşturucu):** <span className="feasibilityBadge feasibilityBadge--warn">Marketplace simülasyonu</span> İsteği teslim biçimi ve kabul ölçütü açık bir agent görevine dönüştür.

**Rozet anahtarı:** “Anahtarsız” ATK'nin public market verisiyle başlar; “yerel prototip” gerçek A2MCP hizmeti değildir; “temsili” ve “simülasyon” gerçek ödeme veya marketplace işlemi yapmaz. Üç [adım adım proje reçetesine](../build/atk-data-quality.mdx) geçebilir veya [sana uygun yolu](../start/intro.mdx) seçebilirsin.

## Bir fikri hafta sonu demosuna dönüştür

**Tek kullanıcı sorusu → tek görünür akış → iki hata durumu → açık kaynak bağlantısı.** Örneğin 402 demosunda ücretsiz erişim, ödeme gerektiren erişim, reddedilen onay ve süresi dolan talep ayrı ayrı gösterilebilir. Her ekran “temsili” veriyi belirtmeli; ödeme yapılmış veya zincire yazılmış izlenimi vermemeli.

Bu katalogda geçen ödeme, imza, transfer, abonelik ve marketplace işlemleri **varsayılan demo kapsamında simüle edilir**. Gerçek entegrasyon için ilgili API'nin mevcut olup olmadığı, geliştirici erişimi, desteklenen ağ ve cüzdan izinleri ayrıca doğrulanmalıdır. Kullanıcı onayı olmadan gerçek para hareketi yapılmaz; gizli anahtarlar repoya veya sohbete konmaz.

**Kaynak kontrolü: 16 Ekim 2026.** Ürün sınırları için [ATK deposu](https://github.com/okx/agent-trade-kit), [OnchainOS Payments API](https://web3.okx.com/onchainos/dev-docs/payments/api-overview) ve [OKX.ai dokümanı](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai) kullanıldı. Fikirler ve MVP tasarımları topluluk önerisidir.
