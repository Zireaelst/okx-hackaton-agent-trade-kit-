---
title: CLI ve Skills
description: OKX ATK terminal komutları ve agent skills kullanımına giriş.
---

# CLI ve Skills

CLI ve Skills, MCP'den bağımsız başlayabilir. CLI komutunu terminalde siz çalıştırırsınız; Skills ise agent'a bu komutları hangi görevde kullanacağını anlatır. Her ikisi için de `@okx_ai/okx-trade-cli` kurulu olmalıdır. [Codex](./setup-codex.md), [Claude Code](./setup-claude-code.md) ve [Cursor](./setup-cursor.md) için adım adım kurulum ayrı sayfalardadır.

## CLI: doğrudan terminalden çalış

`okx` komutu, bir AI istemcisi olmadan da kullanılabilir:

```bash
okx --version
OKX_SITE=tr okx market ticker BTC-USDT
OKX_SITE=tr okx market candles BTC-USDT --bar 1H --limit 10
OKX_SITE=tr okx market funding-rate BTC-USDT-SWAP
```

`OKX_SITE=tr`, CLI'ın varsayılan global adresi yerine OKX TR adresini kullanır. Çıktıyı bir uygulamada işleyecekseniz CLI'ın `--json` seçeneğini kullanın. Parametre ve alt komutları tahmin etmek yerine [güncel CLI referansını](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) izleyin; MCP araç adları CLI alt komutlarıyla birebir aynı değildir.

Örnekler macOS/Linux kabuğu içindir. Windows PowerShell'de aynı bölge ayarı ve ilk sorgu şöyle yazılır:

```powershell
$env:OKX_SITE = 'tr'
okx market ticker BTC-USDT
```

Bu ortam değişkeni açık PowerShell oturumunda sonraki komutlara da uygulanır. Birden fazla bölgeyle çalışıyorsanız hangi siteyi sorguladığınızı çıktınızda belirtin.

## Skills: agent'a görev yönergesi ver

Yalnızca herkese açık piyasa verisiyle başlayan bir proje için resmî depodaki `okx-cex-market` becerisini hedef istemciye kurun:

```bash
npx --yes skills add okx/agent-skills --skill okx-cex-market --agent codex --copy --yes
```

Örnekteki `--agent codex` değerini Claude Code için `claude-code`, Cursor için `cursor` yapın. `--skill` yalnız seçili beceriyi kurar; `--copy` proje klasörüne yerel kopya oluşturur; `--yes` kurulum sorularını atlar. Bu biçim geçici bir klasörde üç istemci hedefiyle denendi. Skills, `okx` CLI'ın kurulu olmasını bekler. `okx-cex-market` piyasa verileri, `okx-cex-portfolio` hesap görüntüleme, `okx-cex-trade` ise yetkili işlem akışları içindir. Tam ve güncel liste [resmî agent-skills deposundadır](https://github.com/okx/agent-skills); kurulum seçenekleri [Skills CLI deposundadır](https://github.com/vercel-labs/skills#readme).

Kurulumdan sonra yeni agent oturumu açıp “`okx-cex-market` becerisini kullanarak OKX TR BTC-USDT ticker verisini oku; işlem yapma” diye sorun. Beceri dosyasının kurulması tek başına bir sorgu çalıştırmaz veya MCP sunucusu açmaz.

## Hangi yolu seçmeliyim?

| İhtiyaç | Başlangıç seçimi |
| --- | --- |
| Terminalde veri kontrolü | CLI |
| Codex, Claude Code veya Cursor'un araç çağırması | MCP, yalnız `market` modülü |
| Kodlama asistanına hazır OKX iş akışı öğretmek | Skills + CLI |

MCP ile Skills birlikte kullanılabilir, ancak aynı araçları gereksizce çoğaltmak agent'ın seçimlerini zorlaştırabilir. Hackathon prototipinizin ihtiyacına göre en küçük araç kümesiyle başlayın.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK CLI referansı](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) · [agent-skills](https://github.com/okx/agent-skills) · [Skills CLI](https://github.com/vercel-labs/skills#readme)
