---
title: Codex kurulumu
description: Codex CLI ve masaüstünde OKX TR ATK için CLI, MCP ve piyasa Skills kurulumu.
---

# Codex kurulumu

Bu akış Codex CLI veya Codex masaüstünde **OKX TR piyasa verisi** ile başlamak içindir. Başlangıçta hesap bağlantısı ve API anahtarı gerekmez. Komutları kendi bilgisayarınızın terminalinde çalıştırın; sitedeki demo bu komutları sizin yerinize çalıştırmaz.

## 1. Ortak araçları kur

Node.js 18+ ve npm kurulu olmalı. Terminalde sürümleri kontrol edin, ardından ATK paketlerini yükleyin:

```bash
node --version
npm --version
npm install -g @okx_ai/okx-trade-mcp @okx_ai/okx-trade-cli
okx --version
okx-trade-mcp --version
```

Kurulumun kaynağı [resmî ATK deposudur](https://github.com/okx/agent-trade-kit). `okx` bulunamıyorsa [sorun giderme](./troubleshooting.md) sayfasındaki PATH adımını izleyin.

## 2. CLI ile ilk TR sorgusunu doğrula

```bash
OKX_SITE=tr okx market ticker BTC-USDT
```

`OKX_SITE=tr`, varsayılan global OKX yerine `tr.okx.com` sitesini seçer. Çıktıda enstrüman ve veri zamanı bulunmalı; fiyatı bu rehberde sabitlemiyoruz. Windows PowerShell kullanıyorsanız [CLI ve Skills sayfasındaki](./cli-skills.md) ortam değişkeni örneğini kullanın. Bu adım yalnızca herkese açık veriyi okur.

## 3. MCP sunucusunu Codex'e ekle

```bash
codex mcp add okx-tr-market -- okx-trade-mcp --site tr --modules market
codex mcp list
codex mcp get okx-tr-market
```

`--site tr` bölgeyi, `--modules market` ise kullanılabilir araç kümesini sınırlar. Codex CLI ve Codex masaüstü aynı MCP yapılandırmasını kullanır. Açık Codex oturumunu yeniden başlatın; araç görünmüyorsa `codex mcp get okx-tr-market` çıktısında komut ve argümanları kontrol edin. Kayıt biçimi [Codex MCP dokümanına](https://developers.openai.com/codex/mcp), ATK argümanları [ATK yapılandırma dokümanına](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) dayanır.

:::note
Bu komut yalnızca MCP kaydı oluşturur. Gerçek hesap sorgusu veya işlem emri çalıştırmaz. MCP sunucusunu terminalde tek başına başlatmak, onu Codex'e kaydetmez.
:::

## 4. Piyasa Skills'ini ekle

Codex'in çalıştığı proje klasörüne geçip yalnızca anahtarsız piyasa becerisini yükleyin:

```bash
npx --yes skills add okx/agent-skills --skill okx-cex-market --agent codex --copy --yes
```

Bu komut proje düzeyinde `okx-cex-market` becerisini ekler; `--copy` dosyaları yerel kopya olarak tutar. Skills, `okx` CLI'ına nasıl başvuracağını anlatan talimatlardır; MCP yerine geçen bir veri bağlantısı değildir. Kurulum komutu geçici bir dizinde denendi. [OKX Skills deposu](https://github.com/okx/agent-skills) ve [Skills CLI](https://github.com/vercel-labs/skills#readme) ayrıntıları içerir.

## 5. Codex içinde dene

Yeni bir Codex oturumunda şunu yazın:

```text
OKX TR market araçlarıyla BTC-USDT ticker verisini oku. Kaynağı ve veri
zamanını göster. Yalnızca salt okunur piyasa araçlarını kullan; hesap
verisine erişme, işlem emri oluşturma ve eksik alanları uydurma.
```

MCP araçları görünüyorsa agent onlarla sorgu yapabilir. Terminal üzerinden denemek isterseniz 2. adımdaki CLI komutunu kullanın. Skills'in yüklenmesi bir sorguyu otomatik başlatmaz; agent'a görev vermeniz gerekir. Kapsam ve güvenlik için [MCP özeti](./mcp.md) ile [izinler](./safety.md) sayfalarını okuyun.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK yapılandırma](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) · [OKX Skills](https://github.com/okx/agent-skills) · [Codex MCP](https://developers.openai.com/codex/mcp) · [Skills CLI](https://github.com/vercel-labs/skills#readme)
