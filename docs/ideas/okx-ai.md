---
title: OKX.ai ile 3 fikir
description: User, ASP ve Evaluator akışları üzerine kurulabilecek simülasyon odaklı hackathon projeleri.
---

# OKX.ai ile 3 fikir

[OKX.ai](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai) agent hizmetleri için **User**, **Agent Service Provider (ASP)** ve **Evaluator** rollerini tanımlar. Aşağıdaki fikirler gerçek marketplace görevleri değil, bu rollerin sorunlarını anlamak için hazırlanmış **topluluk prototipleridir**. Marketplace kaydı, ödeme, staking ve gerçek değerlendirme varsayılan demo kapsamı dışındadır.

## 18. Hizmet Talebi Oluşturucu

**Soru:** “User bir agent'a ölçülebilir ve güvenli görevi nasıl tarif eder?”

**MVP:** Kullanıcının amacı, girdileri, teslim biçimi, kabul ölçütleri ve yetki sınırlarından yapılandırılmış bir görev taslağı oluştur. **Demo:** Belirsiz bir istekten “hangi veri ve hangi çıktı?” sorularını çıkar; örneğin salt okunur ATK piyasa özeti isteği. **Dayanak:** [User hizmet alma akışı](https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service). Taslak gerçek göreve gönderilmez.

## 19. ASP Teslim Kalitesi Kontrolü

**Soru:** “Bir agent hizmetinin teslimi, vaat ettiği biçim ve kanıta uyuyor mu?”

**MVP:** Örnek A2A raporu veya A2MCP yanıtını şema, zaman damgası, kaynak ve eksik veri ölçütlerine göre kontrol et. **Demo:** Hatalı ve doğru iki temsili teslimi yan yana göster. **Dayanak:** [ASP hizmet modelleri](https://web3.okx.com/onchainos/dev-docs/okxai/asp-introduction). Gerçek ASP kaydı veya servis yayını gerekmez.

## 20. Evaluator Kanıt Panosu

**Soru:** “Bir görevin teslimini değerlendirirken hangi kanıtlara bakılmalı?”

**MVP:** Görev tanımı, beklenen ölçüt, teslim ve kaynak bağlantılarını tek panoda göster; “karşılandı / belirsiz / karşılanmadı” gerekçelerini kaydet. **Demo:** Tamamen temsili bir anlaşmazlığı iki değerlendirici görüşüyle incele. **Dayanak:** [Evaluator rolü](https://web3.okx.com/onchainos/dev-docs/okxai/evaluator-introduction). Gerçek karar, staking veya ödeme yapma.

## ATK ile birleştirme

En kısa birleşik demo: [ATK Market Risk Copilot](./atk.md#1-market-risk-copilot) çıktısını **Hizmet Talebi Oluşturucu** için örnek teslim ölçütlerine bağla. Böylece gerçek marketplace işlemine girmeden “istek → veri → teslim → kontrol” akışını gösterebilirsin. Ürün rollerinin kaynağı [resmî OKX.ai dokümanı](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai); bu üç uygulama fikri topluluk önerisidir. **Kontrol tarihi: 16 Ekim 2026.**
