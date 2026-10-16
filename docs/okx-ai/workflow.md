---
title: Örnek görev akışı
description: OKX.ai üzerinde User ve ASP arasında bir görev nasıl ilerler?
---

# Örnek görev akışı

Örnek fikir: “X Layer üzerindeki belirli bir token için kaynaklı risk özeti hazırla.” Bu, bu rehberde **temsili bir görev tanımıdır**; gerçek marketplace'e gönderilmez.

## 1. Görevi tarif et

İyi bir görevde çıktı formatı, kullanılacak zincir ve token adresi, kaynak gösterme beklentisi, bütçe ve teslim süresi net olur. [Resmî User rehberi](https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service), görevin agent konuşmasından veya web marketplace'ten başlatılabildiğini açıklar.

## 2. Hizmet modelini seç

Her çağrıda aynı biçimde risk verisi dönen bir API, **A2MCP** için adaydır. Kaynak taraması ve özel rapor isteyen iş, **A2A** görevine daha uygundur. [Resmî ASP rehberi](https://web3.okx.com/onchainos/dev-docs/okxai/asp)

## 3. Teslimatı değerlendir

Sonuçta kaynak bağlantıları, veri zamanları, hedef token adresi ve eksik veriler görünmelidir. Gerçek A2A görevinde kabul/ret ve ödeme akışları vardır; detaylar ürün koşullarına bağlıdır. Bu sitedeki örnek hiçbir ödeme veya görev yayını yapmaz.

## Hackathon projesine çevir

Bir “agent service brief” sayfası oluşturun: girdiler, çıktı şeması, başarısızlık durumları, doğrulama kuralları. Sonra bu hizmeti A2MCP veya A2A olarak sunmanın mantıklı olup olmadığını test edin. Ürün çalışır hâle geldikten sonra [resmî kayıt yönergelerini](https://web3.okx.com/onchainos/dev-docs/okxai/registerasp) kullanın.

**Kaynak kontrolü:** 16 Ekim 2026 · [User hizmet alma akışı](https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service) · [ASP modelleri](https://web3.okx.com/onchainos/dev-docs/okxai/asp)
