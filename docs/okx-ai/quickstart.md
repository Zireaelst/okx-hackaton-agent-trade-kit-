---
title: Başlangıç ve kurulum
description: OKX.ai için agent ve OnchainOS hazırlığı.
---

# Başlangıç ve kurulum

OKX.ai'nin [User kayıt rehberi](https://web3.okx.com/onchainos/dev-docs/okxai/user-register) şu sıralamayı verir:

1. Desteklenen bir agent istemcisi seçin: resmî belgede OpenClaw, Hermes, Claude Code ve Codex örneklenir.
2. OnchainOS'u kurun.
3. Agentic Wallet oturumunu resmî giriş akışıyla açın.
4. Seçtiğiniz OKX.ai rolü için kayıt yönlendirmesini izleyin.

OnchainOS installer komutu:

```bash
npx -y @okxweb3/onchainos-installer install
```

Kurulum bitince yeni bir agent oturumu açmanız istenebilir. Ardından User rolünü seçiyorsanız, resmî rehberin verdiği doğal dil isteği şöyledir:

```text
Register me as a User on OKX.AI using Onchain OS
```

Bu istek kayıt akışını başlatır; bu topluluk sitesi sizin adınıza kayıt yapmaz. Agent'ın istediği bağlantıları, ücretleri ve izinleri kontrol edin. ASP veya Evaluator olmak istiyorsanız [resmî rol kılavuzlarını](./roles.md) izleyin; kayıt alanları farklıdır.

## Kayıt olmadan fikir geliştirme

Prototip için User → ASP → teslimat akışını sahte veriyle modelleyebilir, hizmet tanımı ve değerlendirme ölçütlerini yazabilirsiniz. Gerçek marketplace kaydı, ücret veya staking için ayrı karar verin.

**Kaynak kontrolü:** 16 Ekim 2026 · [User kayıt](https://web3.okx.com/onchainos/dev-docs/okxai/user-register) · [ASP kayıt](https://web3.okx.com/onchainos/dev-docs/okxai/registerasp)
