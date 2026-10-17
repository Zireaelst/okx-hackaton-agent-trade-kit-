---
title: OKX.ai ile 8 fikir
description: Agent hizmeti tasarlama, seçim, teslim ve değerlendirme için trade dışı hackathon fikirleri.
---

# OKX.ai ile 8 fikir

[OKX.ai](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai) User, Agent Service Provider (ASP) ve Evaluator rollerini tanımlar. Aşağıdaki fikirlerin tümü **temsili marketplace verisiyle** gösterilebilir. Gerçek kayıt, görev gönderimi, ödeme, abonelik veya değerlendirme yapılmaz.

## 26. Hizmet Talebi Oluşturucu

**Kimin sorunu?** Kullanıcının agent'a belirsiz bir iş vermesi. **MVP:** Amaç, izin verilen girdiler, teslim biçimi, son tarih, bütçe üst sınırı ve kabul ölçütlerini içeren görev taslağı. **Demo:** “Belgeyi özetle” isteğini kaynaklı ve kontrol edilebilir bir brief'e dönüştür. **Dayanak:** [User görev akışı](https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service). Taslak gerçek göreve gönderilmez.

## 27. A2MCP Mikroservis Atölyesi

**Kimin sorunu?** Geliştiricinin küçük bir agent yeteneğini anlaşılır bir servis olarak sunamaması. **MVP:** “Parametre al → doğrulanabilir sonuç döndür” biçiminde belge çevirisi, veri doğrulama veya özetleme aracı tasarla; açık giriş/çıkış şeması göster. **Demo:** Ücretsiz ve temsili 402 ücretli sürümü karşılaştır. **Dayanak:** [A2MCP servis modeli](https://web3.okx.com/onchainos/dev-docs/okxai/howtomcp). Gerçek ASP kaydı veya ücretlendirme yok.

## 28. Sağlayıcı Seçim Açıklayıcısı

**Kimin sorunu?** User agent'ın bir hizmet sağlayıcısını neden seçtiğini anlayamaması. **MVP:** Temsili sağlayıcı kartlarını kapsam, teslim süresi, fiyat sınırı ve kanıtlanan yeteneklere göre karşılaştır; bilinmeyen alanları “bilinmiyor” göster. **Demo:** Ağırlıklar değişince seçimin gerekçesi değişsin. **Dayanak:** [User ve ASP rolleri](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai). Gerçek sıralama veya resmî puanlama sistemi iddiası yok.

## 29. ASP Teslim Kalitesi Kontrolü

**Kimin sorunu?** Alınan hizmetin vaat edilen biçim ve kanıta uymaması. **MVP:** Örnek A2A raporu veya A2MCP yanıtını şema, kaynak, zaman ve eksik alan kurallarıyla denetle. **Demo:** Doğru ve hatalı iki temsili teslimi karşılaştır. **Dayanak:** [ASP hizmet modelleri](https://web3.okx.com/onchainos/dev-docs/okxai/asp-introduction). Gerçek anlaşmazlık kararı verilmez.

## 30. Evaluator Kanıt Panosu

**Kimin sorunu?** Görev tartışmasında isteğin, teslimin ve itirazın farklı yerlerde kalması. **MVP:** Brief, kabul ölçütü, teslim ve kaynakları tek ekranda topla; “karşılandı / belirsiz / karşılanmadı” gerekçelerini kaydet. **Demo:** Temsili bir teslim uyuşmazlığı. **Dayanak:** [Evaluator rolü](https://web3.okx.com/onchainos/dev-docs/okxai/evaluator-introduction). Gerçek değerlendirme veya staking yok.

## 31. Çok Agentlı Görev Bütçesi

**Kimin sorunu?** Bir işin çeviri, araştırma ve kalite kontrol gibi alt görevlere ayrılınca maliyetinin belirsizleşmesi. **MVP:** Temsili üç ASP görevi için üst bütçe, bağımlılık ve teslim ölçütleri tasarla; toplam sınır aşılırsa planı durdur. **Demo:** Bir sağlayıcı gecikince yeniden planlama. **Dayanak:** [A2A görev modeli](https://web3.okx.com/onchainos/dev-docs/okxai/a2a-no-subscription) ve [User akışı](https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service). Ürün içinde hazır çok agentlı orkestrasyon özelliği olduğu iddia edilmez.

## 39. A2A Görev Kurtarma Masası

**Kimin sorunu?** Agent hizmetinde teslim geciktiğinde veya eksik kaldığında kullanıcının seçenekleri görememesi. **MVP:** Temsili görevde bekle, yeniden brief ver, destek iste veya başka sağlayıcı ara seçeneklerini maliyet ve önceki teslim kanıtıyla göster. **Demo:** Geciken ve kısmi teslimde farklı öneriler; kullanıcı onayı olmadan yeni ücretli görev açma. **Dayanak:** [A2A görev akışı](https://web3.okx.com/onchainos/dev-docs/okxai/a2a-no-subscription). Bu, OKX.ai'nin hazır otomatik yeniden atama özelliği değildir.

## 40. Kör Hizmet Değerlendirme Atölyesi

**Kimin sorunu?** Sağlayıcı adı veya fiyatı görüldüğünde aynı kalitedeki iki teslimin farklı değerlendirilmesi. **MVP:** Aynı temsili brief'e verilen iki yanıtı sağlayıcı kimliği gizliyken kaynak, biçim ve kabul ölçütleriyle karşılaştır; gerekçeli puan kartı üret. **Demo:** Etiketler açıldığında gerekçelerin değişmediğini kontrol et. **Dayanak:** [OKX.ai Evaluator rolü](https://web3.okx.com/onchainos/dev-docs/okxai/evaluator-introduction). Bu yerel deney resmî değerlendirme, itiraz kararı veya staking işlemi değildir.

## Birleştirme örneği

[ATK veri doğrulama servisini](./atk.md#4-api-yanıtı-doğrulama-servisi) A2MCP hizmet taslağına dönüştür; [402 ödeme laboratuvarında](./onchainos.md#17-402-ödeme-laboratuvarı) temsili ücretli çağrı göster. Böylece **veri → hizmet → ödeme onayı → teslim kontrolü** akışını para hareketi yapmadan sergilersin. Roller için [resmî OKX.ai dokümanı](https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai) esas alındı; ürün fikirleri bize aittir. **Kaynak kontrolü: 16 Ekim 2026.**
