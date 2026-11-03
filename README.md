# Kişisel akademik site

https://mehmetsolgun.github.io — Astro ile yapılmış, iki dilli (TR/EN), statik bir akademik site. Tasarım fikri bir genom tarayıcısı:

- **Kromozom ideogramı (üst menü):** Her sayfa ayrı bir kromozom. Kırmızı pencere sayfada nerede olduğunu gösterir; kromozoma tıklayıp sürükleyerek gezinebilirsin. Bantlar sayfanın bölümleri, blog yazılarında ise ara başlıklardır (içindekiler).
- **Çift sarmal (ana sayfa):** İmleç ya da parmakla açılır. Dizi adını kodonlarla kodlar; `transcribe()` DNA'yı mRNA'ya, `translate()` mRNA'yı amino asitlere çevirir (O = pirolizin, U = selenosistein).
- **Gen modeli (Hakkımda):** Eğitim dönemleri ekzon olarak çizilir.
- **Lab defteri:** Tarihli kayıtlar bir "feature track" üzerinde; yalnızca yılı bilinen kayıt soluk bir aralık olarak görünür.
- **Paylaşım görselleri:** Her sayfa ve yazı için derleme sırasında sitenin stilinde 1200×630 görsel üretilir (`src/lib/og.ts`).

## Yerelde çalıştırma

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne üretir
```

## İçerik nerede?

| Ne | Dosya |
|---|---|
| Ad, unvan, biyografi, ilgi alanları, eğitim, bağlantılar | `src/data/profile.json` |
| Lab defteri (kurs, kongre, sertifika, not) | `src/content/notebook/*.yml` |
| Blog yazıları | `src/content/blog/tr/*.md`, `src/content/blog/en/*.md` |
| Projeler | `src/content/projects/tr/*.md`, `src/content/projects/en/*.md` |
| Yayınlar (dilden bağımsız) | `src/content/publications/*.yml` |
| Fotoğraf, belgeler, görseller | `public/media/` |
| Arayüz metinleri (menü vb.) | `src/i18n/ui.ts` |

- **CV** (`/cv/`) ayrı tutulmaz: profil, lab defteri (kurs/çalıştay/kongre/sertifika/sunum) ve yayınlardan otomatik oluşur. "Yazdır / PDF kaydet" ile A4 CV alınır. Profilde bir PDF yüklersen CV düğmeleri onu gösterir.
- **Yayınlar** ilk yayın eklenene kadar Araştırma sayfasında durur; ilk yayınla menüye kendiliğinden gelir. "Durum" alanıyla gönderildi/hazırlanıyor gibi çalışmalar da eklenebilir (bunlarda BibTeX çıkmaz).
- **Çeviri eşleşmesi:** bir yazının iki dildeki dosya adı aynıysa dil düğmesi doğrudan çevirisine gider. Panelde bu, **Eşleşme anahtarı** alanıyla yapılır: iki dilde aynı değeri gir (ör. `delta-delta-ct`).
- Blog yazılarında `$...$` ve `$$...$$` ile LaTeX formül yazabilirsin. Görsel: `![açıklama](/media/dosya.jpg)`.
- Taslak yazılar (`draft: true`) yalnızca `npm run dev` sırasında görünür. `blog/*/delta-delta-ct.md` böyle bir taslaktır; gözden geçirip `draft: false` yaptığında yayınlanır.

## Yayın

`main` dalına her gönderimde `.github/workflows/deploy.yml` siteyi derleyip GitHub Pages'e yayınlar (Settings → Pages → Source: GitHub Actions).

## Tarayıcıdan içerik düzenleme (Pages CMS)

1. <https://app.pagescms.org> adresine git, GitHub ile giriş yap.
2. `mehmetsolgun.github.io` reposunu seç. Panelde Profil, Lab defteri, Yayınlar, Blog (TR/EN) ve Projeler (TR/EN) bölümleri görünür (`.pages.yml` tanımlar).
3. Kaydettiğin her değişiklik repoya commit olarak gider; site birkaç dakikada güncellenir.

## Site dışı yapılacaklar

- **ORCID:** Eğitim bilgilerini (DVM 2021–2026, Doktora 2026–), anahtar kelimeleri ve "Websites & social links" kısmına `https://mehmetsolgun.github.io` adresini ekle.
- **Google Search Console:** `https://mehmetsolgun.github.io` mülkünü "URL öneki" ile ekle → doğrulama yöntemi "HTML etiketi" → `content="..."` içindeki kodu panelde Profil → *Google Search Console doğrulama kodu* alanına yapıştır → yayınlanınca "Doğrula" → Sitemaps bölümüne `sitemap-index.xml` gönder.
- Varsa **YÖK Akademik** ve **Google Scholar** adreslerini panelde Profil → Akademik bağlantılar kısmına ekle.
