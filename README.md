# Kişisel akademik site

Astro ile yapılmış, iki dilli (TR/EN), statik bir akademik site. Tasarım fikri bir genom tarayıcısı:

- **Kromozom ideogramı (üst menü):** Her sayfa ayrı bir kromozom. Kırmızı pencere sayfada nerede olduğunu gösterir; kromozoma tıklayıp sürükleyerek sayfada gezinebilirsin. Bant etiketleri o sayfanın bölümleridir.
- **Çift sarmal (ana sayfa):** İmleç üzerine gelince sarmal açılır ve bazlar görünür. Dizi, adını kodonlarla kodlar; `translate()` ile geri çevrilir.
- **Gen modeli (Hakkımda):** Eğitim ve deneyim ekzonlar olarak çizilir.

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
| Blog yazıları | `src/content/blog/tr/*.md`, `src/content/blog/en/*.md` |
| Projeler | `src/content/projects/tr/*.md`, `src/content/projects/en/*.md` |
| Yayınlar (dilden bağımsız) | `src/content/publications/*.yml` |
| Fotoğraf, CV, görseller | `public/media/` |
| Arayüz metinleri (menü vb.) | `src/i18n/ui.ts` |

Bir yazının iki dildeki dosya adı aynıysa dil düğmesi doğrudan çevirisine gider.
Blog yazılarında `$...$` ve `$$...$$` ile LaTeX formül yazabilirsin.

Taslak yazılar (`draft: true`) yalnızca `npm run dev` sırasında görünür, yayına girmez. `blog/*/delta-delta-ct.md` böyle bir taslaktır; gözden geçirip `draft: false` yaptığında yayınlanır.

## GitHub Pages'te yayınlama

1. GitHub'da yeni bir repo oluştur. En sorunsuz seçenek repo adını **`kullaniciadi.github.io`** yapmaktır; site doğrudan `https://kullaniciadi.github.io` adresinde açılır.
2. Bu klasörü repoya gönder:
   ```bash
   git init
   git add .
   git commit -m "İlk sürüm"
   git branch -M main
   git remote add origin https://github.com/mehmetsolgun/mehmetsolgun.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages → Source: GitHub Actions** seç.
4. Her `main` push'unda `.github/workflows/deploy.yml` siteyi otomatik derleyip yayınlar.

## Tarayıcıdan içerik düzenleme (Pages CMS)

1. <https://app.pagescms.org> adresine git, GitHub ile giriş yap.
2. Repoyu seç. Panelde Profil, Yayınlar, Blog (TR/EN) ve Projeler (TR/EN) bölümleri görünür (`.pages.yml` tanımlar).
3. Kaydettiğin her değişiklik repoya commit olarak gider, GitHub Actions siteyi birkaç dakikada günceller.

Not: Panelden yüklenen görseller `/media/...` yolunu kullanır; bu yüzden `kullaniciadi.github.io` adlı repo önerilir.
