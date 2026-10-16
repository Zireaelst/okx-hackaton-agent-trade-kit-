---
title: İzinler ve güvenlik
description: ATK için salt okunur başlangıç, demo hesap ve gerçek işlem sınırları.
---

# İzinler ve güvenlik

ATK araçları üç farklı etki düzeyinde düşünülmeli:

| Düzey | Gereken | Örnek |
| --- | --- | --- |
| Herkese açık veri | API anahtarı yok | Ticker, order book, mum |
| Hesap verisi | Yetkili, en az okuma izni | Bakiye, pozisyon |
| İşlem | Uygun hesap ve işlem izni | Emir, bot, hesap ayarı |

Hackathon demosunda `--modules market` ile başlayın. Hesap izlemek için yetkili profil ve `--read-only` kullanın. Simüle edilmiş işlem denemeleri için `demo` profilini seçin; bazı ürünler ve bot uç noktaları demo modunda desteklenmeyebilir. [Resmî güvenlik ve yapılandırma rehberleri](https://tr.okx.com/docs-v5/agent_en/#safety) bu ayrımları açıklar.

## Kimlik bilgileri

- API key, secret key, passphrase, özel anahtar veya seed phrase'i **sohbete, repoya ya da bu siteye yazmayın**.
- ATK'nin yerel `~/.okx/config.toml` yapılandırmasını kullanın. Gerekli en düşük izinleri verin; mümkünse ayrı alt hesap ve güvenilir IP kısıtı kullanın.
- Gerçek emir, transfer, çekim veya hesap ayarı değişikliği öncesi yapılacak işlemi açıkça gösterip kullanıcıdan onay alın.
- Bölgesel ve hesap bazlı ürün kısıtları geçerlidir; ATK bunları aşmaz.

## Agent talimatı

```text
Varsayılan olarak yalnızca salt okunur araçları kullan.
Gerçek emir, transfer, çekim veya hesap ayarı değişikliği için
önce parametreleri ve olası etkileri göster, açık onay bekle.
Kimlik bilgilerini sohbetten isteme veya çıktıda gösterme.
```

Bu talimat yararlıdır, ancak tek başına teknik yetki sınırı değildir. Uygun modül ve API izinlerini de yapılandırın.

**Kaynak kontrolü:** 16 Ekim 2026 · [OKX TR ATK Safety](https://tr.okx.com/docs-v5/agent_en/#safety) · [ATK yapılandırma](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md)
