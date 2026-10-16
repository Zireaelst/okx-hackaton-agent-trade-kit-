---
title: Sorun giderme
description: ATK kurulumunda sık görülen sorunları adım adım ayırma.
---

# Sorun giderme

## `okx: command not found`

Önce `npm install -g @okx_ai/okx-trade-cli` adımının tamamlandığını kontrol edin. Terminali yeniden açın, ardından `okx --help` çalıştırın. Node.js sürümünün en az 18 olduğundan emin olun.

## MCP aracı istemcide görünmüyor

Kurulum yaptığınız istemciyi yeniden başlatın. Codex için `codex mcp list`, diğer istemciler için kendi MCP ayar ekranını kontrol edin. Başlangıçta yalnız `market` modülünü etkinleştirin. Stdio sunucusunu tek başına terminalde başlatmak, istemcide otomatik kayıt oluşturmaz.

Claude Code için `claude mcp list` kullanın. Cursor için `mcpServers` içindeki `okx-tr-market` girdisini ve `args` dizisindeki `--site tr --modules market` değerlerini kontrol edin. Editör terminalinde `okx-trade-mcp --version` çalışıyor fakat MCP sunucusu başlamıyorsa editörün aldığı `PATH`, terminalden farklı olabilir; `command -v okx-trade-mcp` ile bulunan tam yolu MCP kaydındaki `command` alanında kullanın. Windows'ta `where.exe okx-trade-mcp` ile yolu bulun.

## Skills görünmüyor veya komut çalışmıyor

Skills'i istemcinin açtığı **proje klasöründe** kurduğunuzu doğrulayın. `npx skills add okx/agent-skills --list` yalnız mevcut becerileri listeler; kurulum için ilgili [istemci sayfasındaki](./setup-codex.md) `--skill okx-cex-market --agent ...` komutunu kullanın. Yeni oturum açın; Skills'in tek başına veri çekmediğini, `okx` CLI'ının da kurulu olması gerektiğini unutmayın.

## Yanlış OKX bölgesi

CLI'ın varsayılan sitesi global olabilir. TR örneklerinde `OKX_SITE=tr` ortam değişkenini, MCP kaydında `--site tr` argümanını arayın. `okx-trade-mcp setup` yardımcısı kurulu 1.4.8 sürümünde `--site` kabul etmez; TR için doğrudan istemci kaydını kullanın. Bölge seçimi [resmî ATK yapılandırmasında](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) açıklanır.

## Yetki hatası

Piyasa verisi sorgusu ile hesap sorgusunu ayırın. `market` herkese açık olabilir; hesap ve emir araçları yetkili profil gerektirir. Profilin `demo` veya `live` olduğunu, hesap bölgesini ve API izinlerini yerel yapılandırmada kontrol edin. Kimlik bilgilerini hata raporuna eklemeyin.

## Komut adı çalışmıyor

MCP araç adını CLI komutu gibi yazmayın. Örneğin alt komutlar boşlukla ayrılır. Güncel biçimi [CLI referansından](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) doğrulayın.

## Hâlâ çözülmediyse

Hata mesajındaki gizli bilgileri temizleyip [ATK GitHub issues](https://github.com/okx/agent-trade-kit/issues) bölümüne bakın. Raporunuza kullanılan paket sürümünü, hangi istemcide olduğunuzu, beklenen ve görülen davranışı ekleyin.

**Kaynak kontrolü:** 16 Ekim 2026 · [ATK yapılandırma](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) · [CLI referansı](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md)
