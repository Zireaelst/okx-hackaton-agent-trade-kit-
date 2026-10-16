---
title: MCP kurulumu
description: ATK'nin piyasa verisi araçlarını Codex, Claude Code ve Cursor'a bağlama.
---

# MCP kurulumu

MCP, agent'ın OKX ATK araçlarını çağırmasını sağlar. Hackathon başlangıcı için yalnızca `market` modülünü açın; bu modül herkese açık piyasa verisi okur ve API anahtarı gerektirmez.

```bash
okx-trade-mcp --site tr --modules market
```

Bu, yerel bir **stdio** sunucusudur. Tek başına terminalde çalıştırınca insan için bir ekran açmaz; MCP istemcisi süreçle iletişim kurar. [Resmî başlangıç seçenekleri](https://tr.okx.com/docs-v5/agent_en/#mcp) bunu açıklar.

## Codex

Codex CLI kuruluysa sunucuyu şu şekilde ekleyin:

```bash
codex mcp add okx-tr-market -- okx-trade-mcp --site tr --modules market
codex mcp list
```

Codex CLI ve masaüstü/IDE yapılandırması aynı MCP kaydını kullanır. Komut biçimi [resmî OpenAI MCP kurulum dokümanı](https://developers.openai.com/learn/docs-mcp) ile uyumludur. Ardından Codex'e “OKX araçlarıyla BTC-USDT ticker verisini oku; işlem yapma” deyin.

## Claude Code

Claude Code'un MCP komutuyla OKX TR sitesini açıkça seçin:

```bash
claude mcp add --transport stdio okx-tr-market -- okx-trade-mcp --site tr --modules market
```

`okx-trade-mcp setup` kurulu 1.4.8 sürümünde `--site` parametresi kabul etmez; yukarıdaki doğrudan kayıt TR sitesini seçer. Bu komutun istemci entegrasyonu [ATK yapılandırma belgesinde](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) açıklanır. Claude Code'u yeniden başlatıp araç listesini kontrol edin.

## Cursor

Cursor MCP ayarındaki `mcpServers` nesnesine şu kaydı ekleyin:

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

Cursor'da tüm modülleri bir anda açmak araç sınırına takılabilir; hackathon örneği için `market` seçimi daha küçük ve anlaşılır bir araç listesi verir. İstemci ayarını [ATK yapılandırma belgesindeki](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) Cursor bölümünden kontrol edin.

## İlk güvenli istek

```text
OKX TR Agent Trade Kit market araçlarını kullanarak BTC-USDT için
güncel ticker, en iyi alış/satış seviyeleri ve son tamamlanmış
1 saatlik mumları getir. Verinin zamanını belirt. Eksik alanları
uydurma; hiçbir emir oluşturma veya hesap ayarını değiştirme.
```

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK yapılandırma](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) · [OpenAI Docs MCP](https://developers.openai.com/learn/docs-mcp)
