# OKX Hackathon Community Guide

Hackathon katılımcıları için hazırlanmış bağımsız Türkçe dokümantasyon sitesi. Ana odak **OKX TR Agent Trade Kit**; OnchainOS ve OKX.ai ayrı rehberlerdir. Resmî OKX yayını değildir.

**Canlı site:** https://okx-tr-atk-hackathon-guide.vercel.app/

## Yerelde çalıştır

Node.js 20+ kullanın:

```bash
npm ci
npm run start
```

Kontrol:

```bash
npm test
npm run build
```

Statik çıktı `build/` klasöründedir. `vercel.json` kurulum, build ve çıktı klasörünü tanımlar. Vercel projesi bu GitHub deposuna bağlıdır; `main` dalındaki değişiklikler production dağıtımı başlatır.

## İçerik düzeni

- `docs/atk/`: OKX TR Agent Trade Kit rehberi
- `docs/atk/setup-*.md`: Codex, Claude Code ve Cursor için ayrı CLI, MCP, Skills kurulumları
- `docs/onchainos/`: OnchainOS rehberi
- `docs/okx-ai/`: OKX.ai rehberi
- `docs/ideas/`: ATK, OnchainOS ve OKX.ai için 20 topluluk hackathon fikri
- `static/llms.txt`, `static/llms-full.txt`: İngilizce agent bağlamı
- `static/ai/starter-prompt.txt`: Codex/Claude Code başlangıç prompt'u
- `SOURCE_AUDIT.md`: kaynak önceliği, kontrol tarihi ve bilinen uyuşmazlıklar

Yeni komut veya özellik eklerken önce ilgili resmî kaynağı doğrulayın; sayfanın altına kaynak URL'si ve kontrol tarihini yazın. Gerçek fiyatları dokümana sabitlemeyin. API anahtarı, secret, passphrase veya özel anahtar commit etmeyin.

## Yayın notu

`docusaurus.config.cjs`, `static/llms.txt` ve `static/ai/starter-prompt.txt` içindeki site adresi production URL ile aynı tutulmalıdır. Demo verileri temsili ve salt okunurdur.
