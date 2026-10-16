# Kaynak denetimi

Son manuel kontrol: **17 Ekim 2026**. Bu dosya topluluk rehberinin kaynağını ve bilinçli kapsam kararlarını kaydeder. Ürünler hızla değişebildiği için yayın öncesi komutlar yeniden kontrol edilmelidir.

## Kaynak önceliği

1. Ürün ve hesap sınırları: ilgili ürünün resmî dokümanı.
2. Paket komutları, bayraklar ve güncel araç listesi: ilgili resmî GitHub deposu ve kurulu paketin `--help` çıktısı.
3. Codex istemci komutu: resmî OpenAI dokümanı ve yerel `codex mcp add --help`.
4. Bu sitenin anlatımı: ikincil topluluk özeti. Çelişkide resmî kaynak önceliklidir.

## ATK

| Konu | Resmî kaynak | Bu sitedeki karar |
| --- | --- | --- |
| Tanım, kullanım yolları, güvenlik | https://tr.okx.com/docs-v5/agent_en/#introduction | MCP, CLI, Skills ayrı anlatıldı; anahtarsız market verisiyle başlandı. |
| Paketler, Node sürümü, modüller | https://github.com/okx/agent-trade-kit | Node 18+ ve npm paketleri buradan alındı. |
| İstemci setup ve izinler | https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md | Claude Code/Cursor için `--modules market`; profile gerekmeden public data. Ancak setup `--site` kabul etmiyor; TR için doğrudan MCP kaydı yazıldı. |
| CLI sözdizimi | https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md | MCP araç adından CLI komutu uydurulmuyor. |
| Skills | https://github.com/okx/agent-skills | Skills'in CLI bağımlılığı belirtildi. |
| Skills kurulum seçenekleri | https://github.com/vercel-labs/skills#readme | `--skill okx-cex-market --agent codex/claude-code/cursor --copy --yes` geçici proje klasöründe çalıştırıldı; yalnız piyasa becerisi kuruldu. |
| Codex MCP biçimi | https://developers.openai.com/learn/docs-mcp | `codex mcp add … -- …` yapısı esas alındı. |
| Claude Code MCP biçimi | https://code.claude.com/docs/en/mcp | `claude mcp add --transport stdio` ve `claude mcp list` yerel yardım çıktısına karşı kontrol edildi. |
| Cursor Skills görünürlüğü | https://cursor.com/help/customization/skills | Proje `.agents/skills/` klasörü destekleniyor. |

**Bölge doğrulaması:** Kurulu ATK CLI 1.4.7 ve MCP 1.4.8 varsayılanı `global`; her iki pakette `tr` sitesi `https://tr.okx.com` adresine eşleniyor. `OKX_SITE=tr okx market ticker BTC-USDT --json` 16 Ekim 2026 tarihinde salt okunur olarak başarılı oldu. MCP `--site tr` bayrağı ve Claude Code doğrudan MCP kaydı yerel `--help`/paket koduna karşı doğrulandı. Cursor için aynı MCP argümanları JSON kaydıyla verildi.

**İstemci rehberleri:** Codex, Claude Code ve Cursor için CLI, MCP ve Skills ayrı sayfalara ayrıldı. Kurulum komutları kullanıcı yapılandırmasına yazılmadan, paket yardım çıktısı ve geçici klasördeki Skills kurulumu ile doğrulandı. Kullanıcının IDE içindeki izin/onay ekranı hesap durumuna bağlı olabileceği için rehber bu ekranı taklit etmez.

**Uyuşmazlıklar:** OKX TR agent sayfasındaki araç/modül listesi, GitHub README'sindeki daha geniş listeden geride kalabiliyor. Bu nedenle sitede sabit bir toplam araç sayısı yoktur. Önceki sunum sohbetinde geçen uzaktan OAuth MCP yolu mevcut ATK kaynaklarıyla doğrulanmadığından rehbere alınmadı. GitHub README'sindeki “build from source” örneğinde depo adının başka biçimde yazıldığı görülüyor; bu yol rehbere alınmadı.

## OnchainOS

| Konu | Resmî kaynak |
| --- | --- |
| Ürün sınırı ve yetenekler | https://web3.okx.com/onchainos/dev-docs/home/what-is-onchainos |
| Installer ve Agentic Wallet giriş akışı | https://web3.okx.com/onchainos/dev-docs/home/install-your-agentic-wallet |
| Skills/MCP servisleri | https://web3.okx.com/onchainos/dev-docs/home/skills-mcp-services |
| Resmî Skills kodu | https://github.com/okx/onchainos-skills |

OnchainOS'un cüzdan, işlem ve ödeme akışları hesap/izin gerektirir. Site bunları çalıştırmaz; ilk örnek okuma amaçlıdır.

## OKX.ai

| Konu | Resmî kaynak |
| --- | --- |
| Ürün ve roller | https://web3.okx.com/onchainos/dev-docs/okxai/what-is-okxai |
| User kayıt | https://web3.okx.com/onchainos/dev-docs/okxai/user-register |
| ASP modelleri ve kayıt | https://web3.okx.com/onchainos/dev-docs/okxai/asp ve https://web3.okx.com/onchainos/dev-docs/okxai/registerasp |
| User görev akışı | https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service |
| Evaluator | https://web3.okx.com/onchainos/dev-docs/okxai/okxai-evaluator |

Kayıt, staking, marketplace görevi ve ödeme gerçek dış sistem eylemleridir; sitedeki akış temsili kalır.

## LLM dosyaları ve görsel örnek

- `llms.txt` biçim önerisi: https://llmstxt.org/
- Morpho Docs yalnızca gezinme düzeni referansı: https://docs.morpho.org/
- Demo sayıları bu projede oluşturulmuş **temsili** veridir; canlı piyasa fiyatı değildir.

## Hackathon fikirleri

`docs/ideas/` içindeki 31 fikir **topluluk önerisidir**; resmî OKX ürünleri veya yarışma kategorileri olarak sunulmaz. 16 Ekim 2026 revizyonunda katalog 16 ATK veri/eğitim/servis, 9 OnchainOS ödeme/cüzdan ve 6 OKX.ai hizmet fikrine genişletildi. ATK araçları için [ATK deposu](https://github.com/okx/agent-trade-kit), [CLI başvurusu](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md), [news modülü](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/news.md) ve [account modülü](https://github.com/okx/agent-trade-kit/blob/github-main/docs/modules/account.md) kontrol edildi. ATK fikirleri anahtarsız `market`, erişimi doğrulanacak `news`, okuma yetkili `account`, yerel audit-log ve ayrı ürünle entegrasyon olarak sınıflandırıldı. Haber araçlarının TR/bölge ve kurulu sürüm kapsamı yerelde kesinleştirilmediği için canlı çalışma vaadi verilmedi. OnchainOS ödeme fikirleri için [API yöntem matrisi](https://web3.okx.com/onchainos/dev-docs/payments/api-overview), [HTTP 402](https://web3.okx.com/onchainos/dev-docs/payments/api-http), [one-time](https://web3.okx.com/onchainos/dev-docs/payments/api-http-onetime), [pay-as-you-go](https://web3.okx.com/onchainos/dev-docs/payments/pay-as-you-go), [abonelik](https://web3.okx.com/onchainos/dev-docs/payments/subscription) ve [Agent API durumları](https://web3.okx.com/onchainos/dev-docs/payments/api-agent-onetime) kontrol edildi. OKX.ai rol ve hizmet akışı için [User](https://web3.okx.com/onchainos/dev-docs/okxai/user-buy-service), [A2MCP](https://web3.okx.com/onchainos/dev-docs/okxai/howtomcp), [A2A](https://web3.okx.com/onchainos/dev-docs/okxai/a2a-no-subscription) ve [Evaluator](https://web3.okx.com/onchainos/dev-docs/okxai/evaluator-introduction) belgeleri kullanıldı. **Kontrol tarihi: 16 Ekim 2026.**

OnchainOS HTTP Seller API'si geliştirici kimlik doğrulaması gerektirebilir. Agent API genel bakışındaki bazı yöntemler “coming soon” durumundadır; bu yüzden ödeme fikirleri önce temsili veriyle gösterilecek şekilde yazıldı. OKX.ai fikirleri gerçek marketplace işlemi veya staking gerektirmez. Ürün yeteneği ile önerilen uygulama tasarımı ayrı anlatılır. ATK'nin kendi başına ödeme veya marketplace yeteneği olduğu iddia edilmez.

## Başlangıç akışı ve proje reçeteleri

**Kontrol tarihi: 17 Ekim 2026.** `docs/start/intro.mdx` hedef, istemci ve erişim durumuna göre başlangıç sayfasına yönlendirir. `docs/build/atk-data-quality.mdx` ve `docs/build/atk-a2mcp.mdx` içindeki canlı mod yalnız [ATK CLI market ticker](https://github.com/okx/agent-trade-kit/blob/github-main/docs/cli-reference.md) komutunu kullanır. Bölge seçimi [ATK yapılandırması](https://github.com/okx/agent-trade-kit/blob/github-main/docs/configuration.md) ile karşılaştırıldı. Örnek ticker dosyası uydurma fiyat içerir ve temsili olarak etiketlenir. Veri yaş eşiği ve servis sözleşmesi topluluk tasarımıdır.

`examples/atk-service/server.mjs` yerel JSON HTTP prototipidir; MCP sunucusu veya A2MCP kaydı olduğu iddia edilmez. Gerçek A2MCP gereksinimleri için [OKX.ai A2MCP rehberi](https://web3.okx.com/onchainos/dev-docs/okxai/howtomcp) referans verildi. `examples/payment-402/server.mjs` yalnız HTTP 402 öğretir: sahte `x-demo-approved` başlığı ödeme kanıtı değildir, cüzdan veya settlement yoktur. Gerçek yöntemler için [OnchainOS Payments API genel bakışı](https://web3.okx.com/onchainos/dev-docs/payments/api-overview) ve [HTTP ödeme belgeleri](https://web3.okx.com/onchainos/dev-docs/payments/api-http) bağlandı. `src/components/ClientStrip.js` görsel düzeni kullanıcı ekran görüntüsünden esinlenir; görsel varlıklar kopyalanmadı. OpenClaw için [resmî MCP](https://docs.openclaw.ai/tools/mcp), OpenCode için [resmî MCP](https://opencode.ai/docs/mcp-servers/) sayfalarına gidilir. Türkçe arama indeksi için Docusaurus eklentisinin `tr` dil desteği derlemede doğrulandı.
