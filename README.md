# OKX Hackathon Community Guide

Hackathon katılımcıları için hazırlanmış bağımsız Türkçe dokümantasyon sitesi. Ana odak **OKX TR Agent Trade Kit**; OnchainOS ve OKX.ai ayrı rehberlerdir. Resmî OKX yayını değildir.

**Canlı site:** https://agentic-hackathon-tr.vercel.app/

Avalanche Builder Hub'a Team1 referansıyla giriş: https://go.team1.network/turkiye-builder . Kullanıcı tarafından paylaşılan öneri jüri ölçütleri ve kanıt listesi: https://agentic-hackathon-tr.vercel.app/guide/start/judging . Bu ölçütler doğrulanmış resmî etkinlik kuralları olarak sunulmaz.

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
- `docs/ideas/`: 21 ATK odaklı fikir dahil 40 topluluk hackathon fikri; giriş sayfasında ürün, erişim ve metin filtreleri
- `docs/start/`: hedefe ve istemciye göre başlangıç yolu; Avalanche/Jüri hazırlık sayfası
- `docs/build/`: çalışan ATK veri kalitesi, yerel veri servisi ve temsili 402 proje reçeteleri
- `examples/`: reçetelerdeki çalıştırılabilir, salt okunur veya tamamen temsili örnekler
- `static/llms.txt`, `static/llms-full.txt`: İngilizce agent bağlamı
- `static/ai/starter-prompt.txt`: Codex/Claude Code başlangıç prompt'u
- `static/ai/prompts/`: üç projeye özel İngilizce agent prompt'u
- `assets/`: ana sayfa istemci şeridinde kullanılan ATK ve istemci logoları
- `SOURCE_AUDIT.md`: kaynak önceliği, kontrol tarihi ve bilinen uyuşmazlıklar
- `src/data/ideas.mjs`: fikir keşif kartlarının başlık, erişim ve ayrıntı bağlantısı listesi

Yeni komut veya özellik eklerken önce ilgili resmî kaynağı doğrulayın; sayfanın altına kaynak URL'si ve kontrol tarihini yazın. Gerçek fiyatları dokümana sabitlemeyin. API anahtarı, secret, passphrase veya özel anahtar commit etmeyin.

## Yayın notu

`docusaurus.config.cjs`, `static/llms.txt` ve `static/ai/starter-prompt.txt` içindeki site adresi production URL ile aynı tutulmalıdır. Demo verileri temsili ve salt okunurdur.
