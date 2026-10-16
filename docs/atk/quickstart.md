---
title: 5 dakikada başla
description: API anahtarı gerektirmeyen ilk OKX ATK piyasa verisi sorgusu.
---

# 5 dakikada başla

Bu yol yalnızca **herkese açık piyasa verisini** okur. Hesap açma, API anahtarı veya alım satım izni gerektirmez.

## 1. Node.js sürümünü kontrol et

Resmî depo **Node.js 18 veya üzerini** istiyor:

```bash
node --version
```

## 2. CLI ve MCP paketlerini kur

```bash
npm install -g @okx_ai/okx-trade-mcp @okx_ai/okx-trade-cli
```

Komutlar [ATK deposunun Quick Start bölümünden](https://github.com/okx/agent-trade-kit#quick-start) alınmıştır. Kurulumdan sonra terminali yeniden açmak gerekebilir.

## 3. İlk sorguyu çalıştır

```bash
OKX_SITE=tr okx market ticker BTC-USDT
```

`OKX_SITE=tr` komutu OKX TR adresine yönlendirir. Bu komut BTC-USDT için o anki ticker verisini getirir. Fiyatı bu rehberde sabitlemiyoruz; piyasada sürekli değişir. Sonuç gelmezse [sorun giderme](./troubleshooting.md) sayfasına bakın.

## 4. Agent'a bağla

İstemciniz Codex, Claude Code veya Cursor ise [MCP kurulumuna](./mcp.md) geçin. Sadece terminalden veri okuyacaksanız kurulum burada tamamdır.

:::tip
Anahtar isteyen hesap veya işlem örneklerine geçmeden önce [izinler ve güvenlik](./safety.md) sayfasını okuyun. API anahtarını, secret key'i veya passphrase'i sohbet penceresine yapıştırmayın.
:::

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK Quick Start](https://github.com/okx/agent-trade-kit#quick-start) · [OKX TR Quick Start](https://tr.okx.com/docs-v5/agent_en/#quick-start)
