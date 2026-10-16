---
title: Hackathon fikirleri
description: OKX TR Agent Trade Kit, OnchainOS ve OKX.ai ile geliştirilebilecek 20 proje fikri.
---

# Hackathon fikirleri

Buradaki **20 fikir topluluk önerisidir**; hazır OKX ürünleri, resmî hackathon kategorileri veya ödül vaadi değildir. Ana odak [OKX TR Agent Trade Kit (ATK)](../atk/intro.md). Her fikir, kısa sürede gösterilebilir bir prototip ve açık bir kullanıcı sorusu etrafında tasarlandı.

| Başlangıç yolu | Fikir sayısı | İlk adım | Demo erişimi |
| --- | ---: | --- | --- |
| [ATK: piyasa verisi](./atk.md) | 12 | [Anahtarsız ilk sorgu](../atk/quickstart.md) | Salt okunur piyasa verisiyle başlayabilir |
| [OnchainOS: zincir üstü akışlar](./onchainos.md) | 5 | [Ürün ve yetenekler](../onchainos/intro.md) | Önce temsili veri; canlı API erişimini ayrıca kontrol et |
| [OKX.ai: agent hizmetleri](./okx-ai.md) | 3 | [Roller ve işleyiş](../okx-ai/intro.md) | Görev ve değerlendirme akışını simüle et |

## Hızlı başlayabileceğin üç fikir

1. **[Market Risk Copilot](./atk.md#1-market-risk-copilot):** BTC-USDT ticker, order book ve kapanmış mumları okunabilir bir risk özetine dönüştür. [Hazır rehberli demo](../atk/demo.mdx) üzerinden ilerleyebilirsin.
2. **[Spread Radar](./atk.md#2-spread-radar):** Birkaç spot çiftin alış ve satış farkını zaman damgasıyla karşılaştır; işlem önerisi üretmeden veriyi açıkla.
3. **[Veri Tazeliği Nöbetçisi](./atk.md#10-veri-tazeliği-nöbetçisi):** Eksik veya eski piyasa verisini yakala; agent'ın belirsizliği dürüstçe raporlamasını göster.

## Fikir seçme kuralı

Önce kullanıcıyı ve tek bir soruyu seç: “Bu kullanıcı, bu ekranda hangi kararı daha iyi anlayacak?” Ardından en küçük demoyu kur: **veri → açık hesaplama → kaynak/zaman damgası → sınırlama**. Jüriye canlı entegrasyon gerekiyorsa kurulu sürümün yardım çıktısını ve ürün erişimini kontrol et. Erişim yoksa temsili veriyi belirgin biçimde etiketle; canlıymış gibi sunma.

Gerçek emir, takas, transfer, ödeme, cüzdan imzası, hesap ayarı veya marketplace kaydı fikirlerin varsayılan demosuna dahil değildir. Bunlar ayrı yetki ve insan onayı gerektiren eylemlerdir. API anahtarı, özel anahtar ya da seed phrase'i herkese açık siteye, repoya veya sohbet istemine koyma.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK deposu](https://github.com/okx/agent-trade-kit) · [OnchainOS geliştirici dokümanı](https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos) · [OKX.ai dokümanı](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai). Fikirlerdeki ürün kapsamı bu kaynaklara dayanır; ürün tasarımı ve MVP önerileri bize aittir.
