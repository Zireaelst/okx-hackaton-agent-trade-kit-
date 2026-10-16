---
title: CLI ve Skills
description: OKX ATK terminal komutları ve agent skills kullanımına giriş.
---

# CLI ve Skills

## CLI: doğrudan terminalden çalış

`okx` komutu, bir AI istemcisi olmadan da kullanılabilir:

```bash
OKX_SITE=tr okx market ticker BTC-USDT
OKX_SITE=tr okx market candles BTC-USDT --bar 1H --limit 10
OKX_SITE=tr okx market funding-rate BTC-USDT-SWAP
```

`OKX_SITE=tr`, CLI'ın varsayılan global adresi yerine OKX TR adresini kullanır. Çıktıyı bir uygulamada işleyecekseniz CLI'ın `--json` seçeneğini kullanın. Parametre ve alt komutları tahmin etmek yerine [güncel CLI referansını](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) izleyin; MCP araç adları CLI alt komutlarıyla birebir aynı değildir.

## Skills: agent'a görev yönergesi ver

Resmî Skills deposundan kurulum:

```bash
npx skills add okx/agent-skills
```

Skills, `okx` CLI'ın kurulu olmasını bekler. `okx-cex-market` piyasa verileri, `okx-cex-portfolio` hesap görüntüleme, `okx-cex-trade` ise yetkili işlem akışları içindir. Tam ve güncel liste [resmî agent-skills deposundadır](https://github.com/okx/agent-skills).

## Hangi yolu seçmeliyim?

| İhtiyaç | Başlangıç seçimi |
| --- | --- |
| Terminalde veri kontrolü | CLI |
| Codex/Claude Code'un araç çağırması | MCP, yalnız `market` modülü |
| Kodlama asistanına hazır OKX iş akışı öğretmek | Skills + CLI |

MCP ile Skills birlikte kullanılabilir, ancak aynı araçları gereksizce çoğaltmak agent'ın seçimlerini zorlaştırabilir. Hackathon prototipinizin ihtiyacına göre en küçük araç kümesiyle başlayın.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK CLI referansı](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) · [agent-skills](https://github.com/okx/agent-skills)
