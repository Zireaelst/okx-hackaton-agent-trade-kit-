---
title: Wallet, Market, Trade, Payments
description: OnchainOS yeteneklerini kullanım amacına göre seçme.
---

# Wallet, Market, Trade, Payments

## Wallet

Agentic Wallet, agent için zincir üstü cüzdan akışları sunar. Resmî belgeler anahtar üretimi ve imzalamanın TEE içinde korunduğunu açıklar. Cüzdanın açılması ve bir işlemin imzalanması ayrı kararlardır. [Wallet dokümanları](https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos)

## Market

Token fiyatı ve zincir üstü piyasa verileri için kullanılır. Hackathon başlangıcında en güvenli örnek, belli zincir ve token adresiyle veri okumak, zamanı belirtmek ve araç sonucunu ham veriyle karşılaştırmaktır. [Market ve Skills/MCP genel bakışı](https://web3.okx.com/onchainos/dev-docs/home/skills-mcp-services)

## Trade

DEX likidite yönlendirme ve swap gibi akışları kapsar. Gerçek işlem için cüzdan, yeterli bakiye, uygun ağ ve kullanıcı onayı gerekir. Okuma amaçlı teklif ile imzalanmış zincir üstü işlem birbirine karıştırılmamalıdır. [Resmî OnchainOS dokümanı](https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos)

## Payments

Agent'ların ücretli servisleri kullanması için ödeme araçları sağlar. Ücret, zincir ve onay akışı kullanılan servise göre değişir; örnekleri uygulamadan önce [resmî Payment bölümünü](https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos) izleyin.

## Proje seçimi

Bir **token araştırma asistanı** için Market ve risk meta verileri yeterli olabilir. Bir **portföy görüntüleyici** için Wallet okuma akışı gerekir. Swap veya ödeme eklemek, kullanıcı onayı ve ayrı hata yönetimi gerektirir. En küçük okuma akışıyla başlayıp etki alanını adım adım büyütün.

**Kaynak kontrolü:** 16 Ekim 2026 · [OnchainOS genel bakış](https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos) · [Skills/MCP servisleri](https://web3.okx.com/onchainos/dev-docs/home/skills-mcp-services)
