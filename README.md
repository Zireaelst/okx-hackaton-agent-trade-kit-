# OKX Hackathon Community Guide

Hackathon katılımcıları için hazırlanmış bağımsız Türkçe dokümantasyon sitesi. Ana odak **OKX TR Agent Trade Kit**; OnchainOS ve OKX.ai ayrı rehberlerdir. Resmî OKX yayını değildir.

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

Statik çıktı `build/` klasöründedir. Vercel'de Framework Preset **Docusaurus**, build komutu `npm run build`, output directory `build` olmalıdır. GitHub deposu `Zireaelst/okx-hackaton-agent-trade-kit-` bağlandığında `main` dalındaki değişiklikler dağıtılabilir.

## İçerik düzeni

- `docs/atk/`: OKX TR Agent Trade Kit rehberi
- `docs/onchainos/`: OnchainOS rehberi
- `docs/okx-ai/`: OKX.ai rehberi
- `static/llms.txt`, `static/llms-full.txt`: İngilizce agent bağlamı
- `static/ai/starter-prompt.txt`: Codex/Claude Code başlangıç prompt'u
- `SOURCE_AUDIT.md`: kaynak önceliği, kontrol tarihi ve bilinen uyuşmazlıklar

Yeni komut veya özellik eklerken önce ilgili resmî kaynağı doğrulayın; sayfanın altına kaynak URL'si ve kontrol tarihini yazın. Gerçek fiyatları dokümana sabitlemeyin. API anahtarı, secret, passphrase veya özel anahtar commit etmeyin.

## Yayın notu

`docusaurus.config.cjs`, `static/llms.txt` ve `static/ai/starter-prompt.txt` içindeki site adresi Vercel'in verdiği gerçek production URL ile aynı olmalıdır. Önizleme ve production URL'leri doğrulanmadan başka bir alan adına yönlendirme yapılmamalıdır.
