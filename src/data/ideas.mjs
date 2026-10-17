const rows = [
  [1, 'Veri Kalitesi Panosu', 'atk', 'public', 'Eski, eksik ve tutarsız piyasa verisini gerekçeli uyarılarla göster.', '/guide/build/atk-data-quality'],
  [2, 'Kripto Veri Sözlüğü', 'atk', 'public', 'Ticker, bid/ask ve mum alanlarını sade Türkçeyle açıkla.'],
  [3, 'Kaynaklı Haber Özeti', 'atk', 'verify', 'Haber başlıklarını kaynak ve yayımlanma zamanıyla özetle.'],
  [4, 'API Yanıtı Doğrulama Servisi', 'atk', 'public', 'Piyasa yanıtlarını şema, zaman ve eksik alan kurallarıyla denetle.'],
  [5, 'Hesap Ekstresi Açıklayıcısı', 'atk', 'account', 'Temsili hesap hareketlerini kategori ve tarih bazında açıkla.'],
  [6, 'Enstrüman Atlası', 'atk', 'public', 'SPOT ve SWAP enstrümanlarını arama ve alan açıklamalarıyla sun.'],
  [7, 'Veri Hikâyesi Oluşturucu', 'atk', 'public', 'Kapanmış mum verisini kanıtlı ve anlaşılır bir özete dönüştür.'],
  [8, 'Erişilebilir Veri Okuyucusu', 'atk', 'public', 'Ticker ve order book verisini ekran okuyucuya uygun kartlarda göster.'],
  [9, 'Doğal Dille Sorgu Planlayıcısı', 'atk', 'public', 'Kullanıcı isteğini doğru salt okunur piyasa aracına eşleştir.'],
  [10, 'Haber Kaynak Zinciri', 'atk', 'verify', 'Haberin kaynağını, zamanını ve doğrulama durumunu izle.'],
  [11, 'Duygu Verisi Açıklayıcısı', 'atk', 'verify', 'Haber duygu etiketinin kaynak ve zaman bağlamını göster.'],
  [12, 'Varlık Envanteri', 'atk', 'account', 'Temsili hesap bakiyelerini kapsam ve para birimiyle birleştir.'],
  [13, 'Ekstre Mutabakatı', 'atk', 'account', 'Eksik ve yinelenen hesap hareketlerini gerekçeli işaretle.'],
  [14, 'Ücret Şeffaflığı Kartı', 'atk', 'account', 'Ücret oranlarını koşul ve veri zamanıyla açıkla.'],
  [15, 'Agent Araç Günlüğü', 'atk', 'verify', 'Temsili araç çağrılarını zaman, sonuç ve izin türüyle izle.'],
  [16, 'ATK Verisini Ücretli Servise Dönüştürme', 'atk', 'simulated', 'ATK veri servisini ayrı A2MCP ve temsili ödeme adımlarıyla tasarla.', '/guide/build/atk-a2mcp'],
  [17, '402 Ödeme Laboratuvarı', 'onchainos', 'simulated', 'HTTP 402, onay, ret ve süre dolumunu yerel olarak canlandır.', '/guide/build/payment-402'],
  [18, 'Agent Harcama Onayı', 'onchainos', 'simulated', 'Birim ücret, tekrar sayısı ve üst sınırı onay öncesinde göster.'],
  [19, 'Kullanım Bazlı Fatura Defteri', 'onchainos', 'simulated', 'Temsili çağrı maliyetlerini ve yinelenen istekleri uzlaştır.'],
  [20, 'Agent Ödeme Linki Masası', 'onchainos', 'simulated', 'Teklif, temsili ödeme bağlantısı ve durumları izle.'],
  [21, 'Abonelik Koşulları Okuyucusu', 'onchainos', 'simulated', 'Dönem, toplam maliyet ve iptal koşullarını takvimde açıkla.'],
  [22, 'Ödeme Makbuzu ve Mutabakat Panosu', 'onchainos', 'simulated', 'Temsili ödeme, istek ve teslim kayıtlarını eşleştir.'],
  [23, 'Gelir Paylaşımı Taslağı', 'onchainos', 'simulated', 'Katkı paylarını ve yuvarlama farklarını doğrula.'],
  [24, 'Herkese Açık Adres Etkinlik Defteri', 'onchainos', 'simulated', 'Temsili açık adres hareketlerini ağ bazında zaman çizelgesine koy.'],
  [25, 'Cüzdan Eylem Önizlemesi', 'onchainos', 'simulated', 'Temsili imza isteğinin hedef, ağ, tutar ve etkisini açıkla.'],
  [26, 'Hizmet Talebi Oluşturucu', 'okxai', 'simulated', 'Belirsiz isteği kabul ölçütleri açık bir agent görevine çevir.'],
  [27, 'A2MCP Mikroservis Atölyesi', 'okxai', 'simulated', 'Açık giriş ve çıkış şemalı küçük agent hizmeti tasarla.'],
  [28, 'Sağlayıcı Seçim Açıklayıcısı', 'okxai', 'simulated', 'Temsili sağlayıcıları kapsam, fiyat ve teslim süresiyle karşılaştır.'],
  [29, 'ASP Teslim Kalitesi Kontrolü', 'okxai', 'simulated', 'Örnek hizmet teslimini şema, kaynak ve zaman kurallarıyla denetle.'],
  [30, 'Evaluator Kanıt Panosu', 'okxai', 'simulated', 'Brief, teslim ve itiraz kanıtlarını tek ekranda topla.'],
  [31, 'Çok Agentlı Görev Bütçesi', 'okxai', 'simulated', 'Alt görevlerin maliyet ve teslim bağımlılıklarını planla.'],
  [32, 'Mum Oynaklığı Öğretmeni', 'atk', 'public', 'Kapanmış mumlarla fiyat aralığı ve oynaklık kavramını kanıtlı örneklerle öğret.'],
  [33, 'Piyasa Verisi Ulaşılabilirlik Monitörü', 'atk', 'public', 'Salt okunur sorguların gecikmesini, hatasını ve son başarılı zamanını izle.'],
  [34, 'Emir Defteri Derinlik Haritası', 'atk', 'public', 'Emir defteri seviyelerini anlaşılır bir yoğunluk görseline dönüştür.'],
  [35, 'Agent Sorgu Bütçesi', 'atk', 'public', 'Bir görevde gereken piyasa araçlarını ve gereksiz tekrarları görünür kıl.'],
  [36, 'Piyasa Verisi Kanıtlayıcısı', 'atk', 'public', 'Basit piyasa iddialarını kaynak yanıtı ve zaman damgasıyla kontrol et.'],
  [37, 'Ödeme Geçmişi Gizlilik Filtresi', 'onchainos', 'simulated', 'Makbuz eşleştirirken adres ve kişisel alanları rol bazlı maskele.'],
  [38, 'Ücretli API Erişim Kurtarma Akışı', 'onchainos', 'simulated', '402, süre dolumu ve tekrar denemede çift erişimi engelleyen akış tasarla.'],
  [39, 'A2A Görev Kurtarma Masası', 'okxai', 'simulated', 'Geciken veya eksik agent tesliminde seçenekleri ve onay noktalarını göster.'],
  [40, 'Kör Hizmet Değerlendirme Atölyesi', 'okxai', 'simulated', 'İki temsili teslimi sağlayıcı adını gizleyerek aynı ölçütlerle değerlendir.'],
];

const section = { atk: 'atk', onchainos: 'onchainos', okxai: 'okx-ai' };

function headingSlug(title) {
  return title.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/\s+/g, '-');
}

export const ideas = rows.map(([id, title, product, access, summary, recipe]) => ({
  id, title, product, access, summary,
  href: `/guide/ideas/${section[product]}#${id}-${headingSlug(title)}`,
  ...(recipe ? { recipe } : {}),
}));

function normalizeSearch(value) {
  return value.toLocaleLowerCase('tr').normalize('NFD').replace(/\p{M}/gu, '').replaceAll('ı', 'i');
}

export function filterIdeas({ query = '', product = 'all', access = 'all' } = {}) {
  const needle = normalizeSearch(query.trim());
  return ideas.filter((idea) => {
    if (product !== 'all' && idea.product !== product) return false;
    if (access !== 'all' && idea.access !== access) return false;
    if (!needle) return true;
    return normalizeSearch(`${idea.title} ${idea.summary}`).includes(needle);
  });
}
