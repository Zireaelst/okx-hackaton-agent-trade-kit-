---
title: Claude Code kurulumu
description: Claude Code için OKX TR ATK CLI, MCP ve piyasa Skills kurulumu.
---

# Claude Code kurulumu

Claude Code'u terminalde veya editör uzantısında kullanıyorsanız bu adımlar **OKX TR piyasa verisi** ile güvenli başlangıç sağlar. Başlangıç akışı hesap veya API anahtarı istemez.

## 1. ATK paketlerini kur

Node.js 18+ ve Claude Code kurulu olmalı. Terminalde:

```bash
node --version
claude --version
npm install -g @okx_ai/okx-trade-mcp @okx_ai/okx-trade-cli
okx --version
okx-trade-mcp --version
```

Claude Code komutu bulunmuyorsa önce [Claude Code'un resmî kurulumunu](https://code.claude.com/docs/en/overview) tamamlayın. ATK paketleri için [resmî depoya](https://github.com/okx/agent-trade-kit) bakın.

## 2. CLI ile OKX TR'yi kontrol et

```bash
OKX_SITE=tr okx market ticker BTC-USDT
```

Komutun veri döndürmesi, CLI'ın kurulduğunu ve TR adresine ulaşabildiğini gösterir. Bu bir işlem emri değildir. Windows PowerShell biçimi [CLI ve Skills rehberindedir](./cli-skills.md).

## 3. Claude Code'a MCP kaydı ekle

```bash
claude mcp add --transport stdio okx-tr-market -- okx-trade-mcp --site tr --modules market
claude mcp list
```

Claude Code'un varsayılan **local** kapsamı bu projedeki kullanım için uygundur. Proje ekibiyle paylaşılabilir bir MCP kaydı istiyorsanız önce [Claude Code MCP kapsamlarını](https://code.claude.com/docs/en/mcp) inceleyin. `--site tr` açıkça OKX TR'yi seçer; `--modules market` hesabı değiştirebilen modülleri açmaz.

:::caution
ATK'nin `okx-trade-mcp setup --client claude-code` yardımcısı kurulu 1.4.8 sürümünde `--site` kabul etmez. OKX TR için yukarıdaki doğrudan `claude mcp add` kaydını kullanın.
:::

Claude Code oturumunu yeniden açıp `claude mcp list` çıktısında `okx-tr-market` kaydını kontrol edin. Kullanıcı veya proje onayı sorulursa kaydın `okx-trade-mcp --site tr --modules market` çalıştıracağını doğrulayın.

## 4. Piyasa Skills'ini yükle

Claude Code ile açtığınız proje klasöründe:

```bash
npx --yes skills add okx/agent-skills --skill okx-cex-market --agent claude-code --copy --yes
```

Bu yalnızca `okx-cex-market` talimatlarını yükler; Skills'in çalışması için 1. adımda kurulan `okx` CLI gerekir. Kurulumu geçici bir dizinde doğruladık. Beceri dosyasını ve beklediği izinleri [OKX Skills deposunda](https://github.com/okx/agent-skills) inceleyebilirsiniz.

## 5. Claude Code'da ilk isteği gönder

```text
OKX TR için BTC-USDT ticker, en iyi alış/satış ve veri zamanını oku.
Yalnızca public market verisini kullan. Hesap verisi isteme, işlem yapma,
eksik alanları tahmin etme. Kullandığın aracı belirt.
```

MCP ile sorgu yapmak istiyorsanız istemde açıkça “MCP market aracını kullan” diyebilirsiniz. Skills ile CLI akışını denemek istiyorsanız “`okx-cex-market` becerisini ve CLI'ı kullan” deyin. İkisi alternatif başlangıç yollarıdır; her ikisini kurduysanız hangi yolu test ettiğinizi belirtmek sonucu anlaşılır kılar.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK yapılandırma](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) · [Claude Code MCP](https://code.claude.com/docs/en/mcp) · [OKX Skills](https://github.com/okx/agent-skills) · [Skills CLI](https://github.com/vercel-labs/skills#readme)
