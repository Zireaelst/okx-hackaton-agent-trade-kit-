---
title: Jüriye hazırlık
description: Team1 Builder Hub bağlantısı, öneri niteliğindeki değerlendirme ölçütleri ve proje kanıt listesi.
---

# Jüriye hazırlık

[Avalanche başlangıç sayfasında](./intro.md) Team1 Builder Hub bağlantısını ve geliştirici kaynaklarını bulabilirsin. Builder Hub hesabı **hackathon başvurusu, etkinlik kabulü veya proje teslimi yerine geçmez.** Etkinlik kaydı ve son teslim koşullarını organizatörün güncel duyurusundan ayrıca doğrula.

## Paylaşılan değerlendirme taslağı

Aşağıdaki ağırlıklar bu rehberle paylaşılan jüri çalışma dosyasından alınmıştır. Dosyada bunlar **önerilen ölçütler** olarak geçer; organizatörün resmî puan cetveli oldukları doğrulanmadı. Güncel kurallar için organizatörün duyurusunu kontrol et.

| Başlık | Ağırlık | Jüriye gösterilecek somut kanıt |
| --- | ---: | --- |
| Agentic Design | **%20** | Agent'ın bir görevi baştan sona yürüttüğü iz; araç seçimi, çok adımlı kararlar, hata ve insan onayı noktaları. |
| Technical Execution | **%15** | Çalışan ve erişilebilir ürün, anlaşılır mimari, zor teknik parçanın gerçek uygulaması. |
| Avalanche Integration | **%10** | C-Chain veya Avalanche L1 üzerinde gerçek dağıtım bağlantısı ve Avalanche seçiminin ürüne kattığı açıklanabilir fayda. |
| OKX Integration | **%10** | Kullanılan OKX aracının gerçek çağrısı ve çıktısı; OKX.ai hizmet fikri varsa mevcut entegrasyon ile gelecekteki planın ayrımı. |
| Innovation & Real-World Value | **%25** | Özgün çözüm, hedef kullanıcı, doğrulanabilir ihtiyaç, iş modeli ve pazara çıkış için makul ilk adım. |
| Demo & Presentation | **%20** | Canlı demo, anlaşılır kullanıcı deneyimi, kısa sunum ve sorulara hazırlanmış yanıtlar. |

**Taslak uygunluk kontrolü:** Paylaşılan dosya sıralamadan önce herkese açık repo, çalışan demo, Avalanche dağıtımı ve en az bir OKX aracının kullanılmasını kontrol etmeyi öneriyor. Eşitlikte Agentic Design puanını öne çıkarıyor. Bunları kesin etkinlik koşulu veya ödül garantisi olarak sunma. Dosyadaki “her başlığın dört alt ölçütünün ortalaması” notu, bazı başlıklarda iki ya da üç alt ölçüt bulunmasıyla uyuşmuyor; bu rehber hesaplama formülü üretmiyor.

## Sunumda göstereceklerin

1. **Repo ve kurulum:** Herkese açık depo, tekrar edilebilir çalıştırma adımları, örnek veri ile canlı veri arasındaki ayrım.
2. **Agent'ın işlem kaydı:** Kullanıcı hedefi → plan → OKX aracı → gözlem → karar → sonuç akışını tek oturumda göster. Araç çağrısı başarısız olursa ne olduğunu da belirt.
3. **OKX kanıtı:** Örneğin ATK'nin salt okunur `market` sorgusunun komutunu, yanıt zamanını ve kullanılan alanlarını göster. OKX.ai kaydı veya OnchainOS ödemesi yapılmadıysa yapılmış gibi anlatma.
4. **Avalanche kanıtı:** Gerçekten C-Chain/Fuji veya bir Avalanche L1'e dağıtılan bileşenin ağını, kontrat adresini ve blok gezgini veya işlem bağlantısını ekle. Yalnızca Builder Hub hesabı veya statik bir Vercel sayfası zincir dağıtımı değildir.
5. **Ürün değeri:** Hedef kullanıcının sorunu, neden şimdi önemli olduğu, çözümün neden agent gerektirdiği ve ilk kullanıcıya ulaşma yolu.
6. **Canlı demo:** Başarılı senaryoyu iki dakikada göster. Bir hata veya izin durumunu, veri kaynağını ve güvenlik sınırını da açıkla. Ağ ya da hesap erişimi kesilirse önceden hazırlanmış kaydı açıkça etiketle.

ATK piyasa verisi ile Avalanche dağıtımı **ayrı entegrasyonlardır**. Zincir bileşenine gerçek ihtiyaç yoksa sırf ölçütü doldurmak için sahte kontrat ekleme. Ödeme, takas veya cüzdan imzası içeren demoda işlem parametrelerini ve maliyeti kullanıcıya göster; açık onay olmadan gerçek işlem başlatma. Kimlik bilgilerini repoya, siteye veya sohbet mesajına koyma.

## Avalanche kaynakları

- [Builder Hub hesabı ve testnet araçları](https://build.avax.network/academy/avalanche-l1/avalanche-fundamentals/04-creating-an-l1/01a-create-builder-account)
- [Fuji C-Chain üzerinde uygulama dağıtımı](https://build.avax.network/blog/deploy-a-dapp-on-c-chain-with-foundry)
- [Avalanche Interchain Messaging](https://build.avax.network/docs/cross-chain/avalanche-warp-messaging/overview)
- [ATK resmî deposu](https://github.com/okx/agent-trade-kit)

**Kaynak kontrolü: 17 Ekim 2026.** Puan başlıklarının kaynağı kullanıcı tarafından paylaşılan çalışma dosyasıdır; Avalanche ürün bilgileri yukarıdaki resmî Builder Hub sayfalarından kontrol edilmiştir.
