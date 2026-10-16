---
title: Cursor kurulumu
description: Cursor editöründe OKX TR ATK CLI, MCP ve piyasa Skills kurulumu.
---

# Cursor kurulumu

Cursor'un Agent görünümünde **OKX TR piyasa araçlarını** kullanmak için önce CLI'ı terminalde doğrulayın, sonra MCP ve isteğe bağlı Skills'i ekleyin. Bu başlangıç hesabınıza bağlanmaz ve API anahtarı gerektirmez.

## 1. Paketleri Cursor terminalinde kur

Node.js 18+ ve npm kurulu olmalı. Cursor'da bir proje açıp terminalinde:

```bash
node --version
npm install -g @okx_ai/okx-trade-mcp @okx_ai/okx-trade-cli
okx --version
okx-trade-mcp --version
```

Paket adları [resmî ATK deposundan](https://github.com/okx/agent-trade-kit) alınmıştır. `okx` terminalde çalışıyor, Cursor MCP'de bulunamıyorsa [PATH sorun giderme](./troubleshooting.md) bölümüne bakın.

## 2. Terminalden ilk TR sorgusunu çalıştır

```bash
OKX_SITE=tr okx market ticker BTC-USDT
```

`OKX_SITE=tr` yalnızca bu komut için TR sitesini seçer. Windows PowerShell karşılığı [CLI sayfasındadır](./cli-skills.md). Terminalde bu adım çalışmadan editör ayarına geçmeyin; iki sorunu birbirinden ayırmak kolaylaşır.

## 3. Cursor'a MCP sunucusunu ekle

Cursor'ın MCP ayarında **yeni sunucu** oluşturun veya `~/.cursor/mcp.json` (kullanıcı düzeyi) ya da projenizde `.cursor/mcp.json` dosyasındaki mevcut `mcpServers` nesnesine şu girdiyi birleştirin:

```json
{
  "mcpServers": {
    "okx-tr-market": {
      "command": "okx-trade-mcp",
      "args": ["--site", "tr", "--modules", "market"]
    }
  }
}
```

Var olan diğer sunucuları silmeyin. Cursor ayarlarında MCP sunucusunun etkin olduğunu kontrol edip pencereyi yeniden yükleyin. ATK'nin genel `setup --client cursor` komutu sürüm 1.4.8'de `--site` kabul etmediği için burada TR argümanlarını içeren doğrudan kayıt kullanılıyor. Cursor'un MCP arayüzü için [Cursor dokümanına](https://cursor.com/docs/context/mcp), bölge ve modül argümanları için [ATK yapılandırmasına](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) bakın.

:::tip
Cursor'da çok sayıda MCP aracı görünürse yalnız `market` modülünü etkin bıraktığınızı kontrol edin. Hackathonun ilk sorgusu için diğer modüllere ihtiyaç yoktur.
:::

## 4. Piyasa Skills'ini ekle

Cursor'da açtığınız projenin terminalinde:

```bash
npx --yes skills add okx/agent-skills --skill okx-cex-market --agent cursor --copy --yes
```

Bu komut `okx-cex-market` becerisini projeye ekler. Cursor proje içindeki `.agents/skills/` becerilerini okur. Skills, CLI komutlarına yönelik talimat sağlar; MCP bağlantısını kendi başına kurmaz. Kaynaklar: [OKX Skills](https://github.com/okx/agent-skills), [Cursor Skills](https://cursor.com/help/customization/skills), [Skills CLI](https://github.com/vercel-labs/skills#readme).

## 5. Cursor Agent ile doğrula

Agent sohbetine şunu yazın:

```text
OKX TR MCP market aracını kullanarak BTC-USDT ticker verisini oku.
Enstrümanı ve veri zamanını göster. Yalnızca salt okunur araç kullan;
hesabıma erişme, emir gönderme, eksik alanları uydurma.
```

CLI ve Skills yolunu ayrıca denemek için istemde “`okx-cex-market` becerisiyle `OKX_SITE=tr okx market ticker BTC-USDT` komutunu çalıştır” deyin. İki yolu ayrı ayrı denemek, sorun çıktığında hangi katmanın çalışmadığını gösterir.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK yapılandırma](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) · [Cursor Skills](https://cursor.com/help/customization/skills) · [OKX Skills](https://github.com/okx/agent-skills) · [Skills CLI](https://github.com/vercel-labs/skills#readme)
