---
title: ATK nedir?
description: OKX TR Agent Trade Kit için geliştiriciye yönelik başlangıç rehberi.
---

# OKX TR Agent Trade Kit

**OKX TR Agent Trade Kit (ATK)**, OKX araçlarını bir yapay zekâ istemcisine veya terminale bağlamak için kullanılan açık kaynaklı bir araç takımıdır. MCP sunucusu, CLI ve agent skills ile piyasa verisi sorgulama, hesap izleme ve hesabın izin verdiği işlemler için arayüz sağlar. Bu site, hackathon katılımcıları için hazırlanmış **bağımsız bir topluluk rehberidir**.

> **Hızlı yol:** Önce [anahtarsız piyasa verisi sorgusunu](./quickstart.md) çalıştırın. Hesap erişimi veya işlem yetkisi gerektiren adımlara ancak ihtiyaç duyduğunuzda geçin.

## Üç kullanım yolu

| Yol | Ne sağlar? | Ne zaman seçilir? |
| --- | --- | --- |
| **MCP** | Codex, Claude Code, Cursor gibi istemcilere çağrılabilir araçlar | Agent'ın güncel veriyi doğrudan okuması gerektiğinde |
| **CLI** | `okx` terminal komutu | Script, prototip, otomasyon veya hızlı kontrol için |
| **Skills** | Agent'a CLI'ı ne zaman ve nasıl kullanacağını anlatan talimatlar | Kodlama asistanıyla görev odaklı çalışma için |

Skills tek başına bir borsa bağlantısı değildir; ilgili beceriler, kurulu CLI üzerinden çalışır. MCP sunucusu ise araçları doğrudan istemciye sunar. [Resmî ATK rehberi](https://tr.okx.com/docs-v5/agent_en/#introduction) ve [güncel depo](https://github.com/okx/agent-trade-kit) bu ayrımı açıklar.

## Nereden başlamalı?

1. [5 dakikalık başlangıç](./quickstart.md) ile anahtarsız veri okuyun.
2. [Codex](./setup-codex.md), [Claude Code](./setup-claude-code.md) veya [Cursor](./setup-cursor.md) kurulumunu izleyin.
3. [Rehberli demoda](./demo.mdx) ticker, order book ve mum verisini birleştirin.
4. Projenize uygun veri kaynaklarını seçin; [21 ATK projesi fikrini](../ideas/atk.md) erişim düzeyine göre inceleyin.

## Kapsam sınırı

ATK'nin aracı sunması, her ürünün her bölgede veya her hesapta kullanılabildiği anlamına gelmez. Hesap ve bölge izinleri geçerlidir. Resmî sayfalardaki araç sayısı ve modül listesi sürümler arasında değişebildiğinden burada sabit bir “toplam araç” sayısı kullanılmaz; güncel liste için [depo README'sine](https://github.com/okx/agent-trade-kit) bakın.

**Kaynak kontrolü:** 16 Ekim 2026 · [OKX TR rehberi](https://tr.okx.com/docs-v5/agent_en/#introduction) · [ATK deposu](https://github.com/okx/agent-trade-kit)
