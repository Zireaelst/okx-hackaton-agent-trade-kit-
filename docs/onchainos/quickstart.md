---
title: Agent ile başlangıç
description: OnchainOS Skills kurulumu ve ilk güvenli okuma akışı.
---

# Agent ile başlangıç

Resmî [Agentic Wallet kurulum rehberi](https://web3.okx.com/onchainos/dev-docs/home/install-your-agentic-wallet), Node.js 18+ ve desteklenen bir agent istemcisiyle kurulumu anlatır. Rehberin verdiği installer komutu:

```bash
npx -y @okxweb3/onchainos-installer install
```

Kurulum sırasında hangi agent ortamına Skills ekleneceğini gözden geçirin. Paket kaynağını ve istenen izinleri kontrol edin. Resmî örnek Claude Code kullanır; desteklenen diğer istemciler için [güncel kurulum belgesine](https://web3.okx.com/onchainos/dev-docs/home/install-your-agentic-wallet) bakın.

## İlk salt okunur görev

Kurulumdan sonra agent'a şu görevi verebilirsiniz:

```text
OnchainOS'un market araçlarıyla seçtiğim token için mevcut
fiyat ve likidite verisini bul. Kullandığın zinciri, token
adresini, veri zamanını ve kaynak araçları belirt. Cüzdan
oluşturma, imzalama veya işlem gönderme.
```

Araç bağlantısı veya oturum açma gerekiyorsa agent'ın gösterdiği resmi akışı izleyin. Sohbet içine doğrulama kodu, seed phrase veya özel anahtar girmeyin. Bu görev yalnızca okuma amaçlıdır; token adı tek başına yeterli değilse zincir ve sözleşme adresini ayrıca doğrulayın.

## Cüzdan kurmak isterseniz

Resmî rehber e-posta, Google veya Apple ile giriş akışını ve ilk girişte Agentic Wallet oluşturulmasını açıklar. Bu, salt okunur piyasa görevinin ötesinde bir adımdır. Cüzdan kurulumunda çıkan bağlantıyı ve izinleri dikkatle inceleyin; varlık göndermeden veya imza atmadan önce işlemi ayrı doğrulayın.

**Kaynak kontrolü:** 16 Ekim 2026 · [Agentic Wallet kurulumu](https://web3.okx.com/onchainos/dev-docs/home/install-your-agentic-wallet) · [Skills/MCP servisleri](https://web3.okx.com/onchainos/dev-docs/home/skills-mcp-services)
