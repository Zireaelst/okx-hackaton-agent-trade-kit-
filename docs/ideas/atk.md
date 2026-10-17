---
title: ATK ile 21 proje fikri
description: Agent Trade Kit verisini eğitim, kalite kontrolü ve hizmet prototiplerinde kullanma fikirleri.
---

# ATK ile 21 proje fikri

ATK adında “Trade” geçse de hackathon prototipi emir vermek zorunda değildir. [Resmî depoda](https://github.com/okx/agent-trade-kit) anahtarsız `market`, haber ve salt okunur hesap sorguları gibi farklı araçlar bulunur. **ATK, OnchainOS ödeme veya OKX.ai marketplace modülü değildir.** Bu fikirlerde iki ürünü birleştirirsen ayrı entegrasyon ve izin sınırlarını açıkça göster.

| Yapılabilirlik | Fikirler | İlk demo |
| --- | --- | --- |
| **Doğrudan ATK, anahtarsız** | 1, 2, 4, 6–9, 32–36 | `market` verisi veya açıkça temsili yanıt |
| **ATK haber aracı, erişimi doğrula** | 3, 10, 11 | Temsili haber; kurulu sürüm ve bölgeyi kontrol et |
| **ATK okuma yetkisi gerekli** | 5, 12–14 | Kişisel veri içermeyen temsili hesap kayıtları |
| **Yerel günlük / kurulu sürüm** | 15 | Temsili araç çağrısı günlüğü |
| **ATK + ayrı ürün entegrasyonu** | 16 | ATK veri servisi + temsili OnchainOS ödeme |

“Doğrudan” ATK veriyi sağlar demektir; aşağıdaki arayüz ve hesaplamalar hackathon projesinde geliştirilecektir. Haber, hesap ve yerel günlük araçlarının tam erişimi kurulu sürüm ile bölge/izin koşullarına bağlıdır.

## 1. Veri Kalitesi Panosu

**Kimin sorunu?** Piyasa verisini kullanan bir agent'ın eski veya eksik yanıtı fark etmesi. **MVP:** Ticker ve mum yanıtlarında kaynak zamanı, alınma zamanı, boş alan ve hata durumunu kontrol eden pano. **Demo:** Temsili gecikmiş/boş yanıtlarla uyarının değişmesi. **ATK dayanağı:** `market` verisi; anahtarsız başlanabilir. Bu bir alım satım sinyali değildir.

## 2. Kripto Veri Sözlüğü

**Kimin sorunu?** Yeni başlayanların ticker, bid/ask ve mum alanlarını karıştırması. **MVP:** Gerçek veya temsili bir BTC-USDT yanıtındaki her alanı sade Türkçeyle açıklayan etkileşimli kartlar. **Demo:** Kullanıcı bir alanı seçince anlam, birim ve veri zamanı görünür. **ATK dayanağı:** ticker, order book, candles. [Mevcut rehberli demo](../atk/demo.mdx) örnek veri sağlar.

## 3. Kaynaklı Haber Özeti

**Kimin sorunu?** Birden çok haber başlığını kaynağı ve yayımlanma zamanı olmadan özetlemek. **MVP:** Kurulu sürümde erişilebiliyorsa ATK `news` modülündeki başlıkları konuya göre grupla; her iddiayı özgün habere bağla. **Demo:** Temsili üç haberle yinelenen başlıkları ayır. **Erişim:** `news` modülü ve bölge kullanılabilirliğini kurulu sürümde kontrol et; fiyat tahmini üretme.

## 4. API Yanıtı Doğrulama Servisi

**Kimin sorunu?** Başka uygulamaların bozuk veya belirsiz piyasa verisini fark etmeden kullanması. **MVP:** ATK'den alınmış bir *örnek yanıtı* şema, zaman ve eksik alan kurallarıyla doğrulayan küçük API. **Demo:** Hatalı üç yanıtı gerekçeli olarak reddet. **Genişletme:** İstersen bu servisi [OnchainOS 402 ödeme fikri](./onchainos.md#17-402-ödeme-laboratuvarı) için temsili ücretli kaynak yap; ödeme ATK özelliği gibi gösterilmez.

## 5. Hesap Ekstresi Açıklayıcısı

**Kimin sorunu?** Kendi hesap hareketlerini anlamak isteyen kullanıcının işlem geçmişindeki alanları yorumlaması. **MVP:** Tamamen temsili, kişisel veri içermeyen hesap hareketlerini kategori ve tarih bazında açıklayan arayüz. **Demo:** Eksik işlem ve yinelenen kayıt uyarıları. **ATK dayanağı:** [Account modülünde](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md) bakiye ve bills sorguları var; **canlı hesap sorgusu okuma yetkili API erişimi ister**. Kullanıcıdan kimlik bilgisi sohbette istenmez.

## 6. Enstrüman Atlası

**Kimin sorunu?** Kullanıcının bir enstrümanın ne olduğunu ve hangi pazarda listelendiğini anlaması. **MVP:** ATK'nin enstrüman listesini arama, tür ve temel alan açıklamalarıyla sun. **Demo:** SPOT ve SWAP örneklerinin alanlarını yan yana göster; bölgeye göre kullanılabilirlik iddiası kurma. **Dayanak:** [CLI'deki `market instruments`](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) sorgusu.

## 7. Veri Hikâyesi Oluşturucu

**Kimin sorunu?** Ham mum tablosunun teknik olmayan bir kullanıcı için anlaşılmaz olması. **MVP:** Kapanmış mumları seçilen dönemde yüksek/düşük ve hacim gözlemlerine çevir; her cümleyi veri noktasıyla ilişkilendir. **Demo:** Aynı veriyi “kısa özet” ve “kanıtlı ayrıntı” olarak anlat. **Dayanak:** ATK `market` mumları. Öngörü veya al/sat önerisi üretme.

## 8. Erişilebilir Veri Okuyucusu

**Kimin sorunu?** Karmaşık tabloların ekran okuyucu ve mobil kullanıcıları zorlaması. **MVP:** ATK ticker ve order book yanıtını metin odaklı, doğru birim ve zaman damgası içeren erişilebilir kartlara dönüştür. **Demo:** Görsel tablo ile sesli okunabilecek özet arasında geçiş. **Dayanak:** ATK `market` verisi; erişilebilir sunum uygulamanın kendi katkısıdır.

## 9. Doğal Dille Sorgu Planlayıcısı

**Kimin sorunu?** Kullanıcının “son bir saatte ne oldu?” gibi isteğinde agent'ın yanlış aracı çağırması. **MVP:** İsteği `ticker`/`candles`/`orderbook` seçeneklerinden birine eşleştir; enstrüman, zaman aralığı ve eksik parametreleri çağrıdan **önce** göster. **Demo:** Belirsiz istek için açıklama iste, geçerli istekte yalnız salt okunur sorgu çalıştır. **Dayanak:** [ATK CLI başvurusu](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md).

## 10. Haber Kaynak Zinciri

**Kimin sorunu?** Agent'ın bir haberi kaynak, yayımlanma zamanı veya ikinci doğrulama olmadan aktarması. **MVP:** Haber kartında kaynak alanı, bağlantı, zaman ve “doğrulandı/doğrulanmadı” durumunu göster. **Demo:** Temsili yinelenen ve kaynağı eksik iki haber. **Dayanak:** [ATK `news` modülündeki](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/news.md) haber ve kaynak sorguları; canlı erişim koşullarını doğrula.

## 11. Duygu Verisi Açıklayıcısı

**Kimin sorunu?** “Olumlu/olumsuz” etiketinin nesnel fiyat tahmini gibi anlaşılması. **MVP:** Haber duygu alanını hangi zaman penceresine ve kaynağa ait olduğunu belirterek açıkla; eksik yöntemi “bilinmiyor” yaz. **Demo:** Aynı temsili haber setinde özet değişiminin nedenini göster. **Dayanak:** [ATK `news` duygu sorguları](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/news.md). Duygu verisi yatırım tavsiyesi değildir.

## 12. Varlık Envanteri

**Kimin sorunu?** Kullanıcının kendi fonlama ve işlem hesaplarını tek yerde anlamak istemesi. **MVP:** Temsili iki hesap bakiyesini kategori, zaman ve para birimiyle birleştir; toplamın hangi hesapları kapsadığını yaz. **Demo:** Eksik hesap ve tekrarlanan bakiye durumları. **Dayanak:** [ATK `account` bakiye sorguları](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md). Canlı sürüm okuma yetkisi gerektirir.

## 13. Ekstre Mutabakatı

**Kimin sorunu?** Hesap hareketi dışa aktarımında eksik veya çift kayıtların gözden kaçması. **MVP:** Temsili `bills` kayıtlarını ID, tarih ve tutara göre denetle; uyuşmayan satırların nedenini göster. **Demo:** Aynı kaydın iki kez aktarılması ve eksik gün senaryosu. **Dayanak:** [ATK `account` bills ve archive](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md). Belgenin kapsadığı tarih aralığını aşan tam geçmiş iddiası kurma.

## 14. Ücret Şeffaflığı Kartı

**Kimin sorunu?** Kullanıcının kendi hesap ücret oranını yanlış genellemesi. **MVP:** Temsili ücret oranını enstrüman türü, hesap koşulu ve alınma zamanı ile açıkla; varsayımsal tutar üzerinden yalnız aritmetik örnek göster. **Demo:** Eksik veya eski ücret verisinde hesaplamayı durdur. **Dayanak:** [ATK `account` fee rates](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md). Canlı sorgu okuma yetkisi ister.

## 15. Agent Araç Günlüğü

**Kimin sorunu?** Bir agent'ın ne zaman hangi OKX aracını çağırdığının görünmemesi. **MVP:** Temsili çağrı günlüğünü araç, zaman, sonuç ve salt okunur/yazma ayrımıyla göster; özel verileri maskele. **Demo:** Başarısız çağrının nedenini ve yeniden deneme kaydını incele. **Dayanak:** [ATK yerel audit-log aracı](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md); kurulmuş sürümde kapsamını kontrol et. Bu, zincir üstü denetim kaydı değildir.

## 16. ATK Verisini Ücretli Servise Dönüştürme

**Kimin sorunu?** ATK'den türetilmiş bir doğrulama/özetleme hizmetinin başka agent'lara açık biçimde sunulması. **MVP:** ATK `market` verisini kullanan, açık giriş/çıkış şemalı bir servis kur; ücretsiz sonuç ve **temsili** HTTP 402 ücretli sonuç ekranı göster. **Demo:** Geçerli yanıt, eski veri ve ödeme reddi. **Sınır:** Veri ATK'den gelebilir; [A2MCP servis biçimi](https://web3.okx.com/onchainos/dev-docs/okxai/howtomcp) OKX.ai, [ödeme](https://web3.okx.com/onchainos/dev-docs/payments/api-overview) OnchainOS tarafındadır. ATK tek başına ödeme almaz. Canlı yayın ve fiyatlandırma ayrıca erişim ve entegrasyon gerektirir.

## 32. Mum Oynaklığı Öğretmeni

**Kimin sorunu?** Yeni başlayanların büyük bir mum aralığını doğrudan gelecek fiyat tahmini sanması. **MVP:** ATK'den alınan **kapanmış** mumları seçilen zaman aralığında yüksek/düşük farkı ve basit aralık ölçüsüyle açıkla; kullanılan mumları tek tek göster. **Demo:** Aynı enstrümanda 1 saatlik ve 1 günlük örneğin farklı yorumlandığını göster; açık mumu hesaba katma. **Dayanak:** [ATK `market candles`](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md). Bu eğitim aracı yatırım önerisi üretmez.

## 33. Piyasa Verisi Ulaşılabilirlik Monitörü

**Kimin sorunu?** Agent'ın veri alamadığı anlarda son başarılı yanıtı güncel sanması. **MVP:** ATK'nin salt okunur ticker sorgularında yanıt süresi, hata kodu ve son başarılı veri zamanını kaydet; erişilemiyorsa “canlı” etiketini kaldır. **Demo:** Yerel olarak gecikme ve hata senaryosu enjekte et; gerçek sorgu yapılıyorsa aralığı makul tut. **Dayanak:** [ATK public market komutları ve hata kodları](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md). Bu, OKX hizmetinin resmî çalışma durumu değildir.

## 34. Emir Defteri Derinlik Haritası

**Kimin sorunu?** İlk beş emir defteri seviyesindeki miktarların tablo halinde zor okunması. **MVP:** ATK `market orderbook` yanıtını alış/satış tarafları, fiyat seviyesi ve kümülatif miktar olarak görselleştir; alınma zamanını belirt. **Demo:** Temsili sığ ve yoğun iki defteri karşılaştır. **Dayanak:** [ATK `market orderbook`](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md). Görünen derinlik gerçek işlem fiyatı veya gerçekleşme garantisi değildir.

## 35. Agent Sorgu Bütçesi

**Kimin sorunu?** Bir agent'ın aynı bilgiyi almak için gereksiz sayıda piyasa aracı çağırması. **MVP:** Görev başlamadan gerekli `ticker`, `candles` ve `orderbook` çağrılarını listele; yinelenen isteği, veri yaşını ve çağrı sayısını yerel izde göster. **Demo:** İki eşdeğer okuma planını çağrı sayısı ve kaynak şeffaflığı açısından karşılaştır. **Dayanak:** [ATK public market araçları](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md). Varsayımsal ücret veya resmî kota iddiası kurma.

## 36. Piyasa Verisi Kanıtlayıcısı

**Kimin sorunu?** Bir agent'ın “şu an spread geniş” gibi bir cümleyi kaynaksız söylemesi. **MVP:** Yalnız önceden tanımlanmış, sayısal ve doğrulanabilir iddiaları ATK ticker veya order book alanlarıyla eşleştir; hesap ve veri zamanını göster. **Demo:** Kanıtlanan, eski verili ve doğrulanamayan üç iddia. **Dayanak:** [ATK public market verisi](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md). Serbest metinden fiyat tahmini ya da yatırım tavsiyesi çıkarma.

## Önce hangisini yapmalı?

| Süre ve erişim | Önerilen yol | Gösterilecek kanıt |
| --- | --- | --- |
| Anahtar yok, en kısa demo | 1 → 2 veya 8 | Gerçek salt okunur yanıt + temsili hata senaryosu |
| Eğitim ve güvenilirlik odaklı | 32 → 36 veya 33 | Kapanmış mum/yanıt zamanı + iddia kanıtı veya hata izi |
| Haber erişimi belirsiz | 10 → 11 | Temsili veri; erişim doğrulanırsa canlı kaynak |
| Hesap erişimi yok | 12 veya 13 | Kişisel veri içermeyen temsili kayıt |
| Ürünleri birleştirmek istiyor | 4 → 16 | ATK veri kaynağı, ayrı servis ve ödeme sınırı |

Bu yollar mevcut ürün komutları değil, **önerilen proje sıralarıdır**. Önce fikrin tek kullanıcı sorusunu seç, sonra giriş verisi, çıktı, hata durumu ve demo sınırını yaz.

## Nasıl kurulur?

Anahtarsız ilk örnek için [ATK hızlı başlangıç](../atk/quickstart.md), MCP/CLI/Skills seçenekleri için [kurulum rehberi](../atk/cli-skills.md) ve erişim sınırları için [güvenlik](../atk/safety.md) sayfasına bak. Haber ve hesap araçları kurulu sürüm ve izinlere göre değişebilir; resmî [depo](https://github.com/okx/agent-trade-kit) ile [CLI başvurusunu](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) kontrol et. **Kaynak kontrolü: 16 Ekim 2026.**
