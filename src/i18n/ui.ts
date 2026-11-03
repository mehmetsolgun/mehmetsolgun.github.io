export const languages = { tr: 'Türkçe', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'tr';

export const ui = {
  tr: {
    'nav.about': 'Hakkımda',
    'nav.research': 'Araştırma',
    'nav.publications': 'Yayınlar',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.menu': 'Menü',
    'nav.skip': 'İçeriğe geç',
    'theme.toggle': 'Temayı değiştir',
    'lang.switch': 'Switch to English',
    'home.interests': 'Araştırma ilgi alanları',
    'home.projects': 'Öne çıkan projeler',
    'home.publications': 'Seçilmiş yayınlar',
    'home.posts': 'Son yazılar',
    'home.cv': 'CV indir',
    'home.translate': 'translate()',
    'home.helixHint': 'İmleci sarmalın üzerinde gezdirin',
    'all.projects': 'Tüm projeler',
    'all.publications': 'Tüm yayınlar',
    'all.posts': 'Tüm yazılar',
    'about.title': 'Hakkımda',
    'about.timeline': 'Gen modeli: akademik geçmiş',
    'about.education': 'eğitim',
    'about.experience': 'deneyim',
    'about.skills': 'Odak konular',
    'about.profiles': 'Akademik profiller',
    'about.present': 'günümüz',
    'research.title': 'Araştırma ve projeler',
    'research.lead': 'Araştırma ilgi alanlarım, projelerim ve yayınlarım.',
    'research.interests': 'İlgi alanları',
    'research.projects': 'Projeler',
    'research.empty': 'Doktoramın başındayım; yürüttüğüm projeler başladıkça burada yer alacak.',
    'status.ongoing': 'devam ediyor',
    'status.completed': 'tamamlandı',
    'pubs.title': 'Yayınlar',
    'pubs.lead': 'Makaleler, bildiriler ve posterler.',
    'pubs.all': 'tümü',
    'pubs.type.article': 'makale',
    'pubs.type.conference': 'bildiri',
    'pubs.type.poster': 'poster',
    'pubs.type.preprint': 'ön baskı',
    'pubs.type.thesis': 'tez',
    'pubs.type.chapter': 'kitap bölümü',
    'pubs.bibtex': 'BibTeX',
    'pubs.copied': 'kopyalandı',
    'pubs.empty': 'Henüz yayımlanmış bir çalışmam yok; yayınlarım çıktıkça burada listelenecek. Güncel kayıtlar için akademik profillerime bakabilirsiniz.',
    'blog.title': 'Blog',
    'blog.lead': 'MikroRNA, gen ifadesi ve veteriner moleküler genetik üzerine notlar.',
    'blog.minutes': 'dk okuma',
    'blog.updated': 'güncellendi',
    'blog.back': 'Tüm yazılar',
    'blog.empty': 'Henüz yazı yok.',
    'blog.tags': 'Etiketler',
    'contact.title': 'İletişim',
    'contact.lead': 'İş birliği, soru ya da sohbet için yazabilirsiniz.',
    'footer.built': 'Astro ile oluşturuldu',
    'site.tagline': 'Moleküler Biyokimya ve Genetik',
    'home.cvWeb': 'Özgeçmiş',
    'home.helixHintTouch': 'Sarmalı yana sürükleyin',
    'helix.sr': 'Adım DNA kodonları olarak yazılmış',
    'helix.note': 'O = Pyl (UAG) · U = Sec (UGA): yeniden kodlanan stop kodonları',
    'pubs.type.abstract': 'özet bildiri',
    'pubs.type.talk': 'sözlü sunum',
    'pubs.status.published': 'yayımlandı',
    'pubs.status.in-press': 'baskıda',
    'pubs.status.submitted': 'gönderildi',
    'pubs.status.in-preparation': 'hazırlanıyor',
    'cv.title': 'Özgeçmiş',
    'cv.print': 'Yazdır / PDF kaydet',
    'cv.contact': 'İletişim',
    'cv.education': 'Eğitim',
    'cv.interests': 'Araştırma ilgi alanları',
    'cv.focus': 'Odak konular',
    'cv.publications': 'Yayınlar',
    'cv.updated': 'Son güncelleme',
    '404.title': 'Lokus bulunamadı',
    '404.text': 'Aradığınız sayfa referans genomda yer almıyor.',
    '404.home': 'Ana sayfaya dön',
  },
  en: {
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Toggle theme',
    'lang.switch': 'Türkçeye geç',
    'home.interests': 'Research interests',
    'home.projects': 'Featured projects',
    'home.publications': 'Selected publications',
    'home.posts': 'Recent writing',
    'home.cv': 'Download CV',
    'home.translate': 'translate()',
    'home.helixHint': 'Move your cursor over the helix',
    'all.projects': 'All projects',
    'all.publications': 'All publications',
    'all.posts': 'All posts',
    'about.title': 'About',
    'about.timeline': 'Gene model: academic path',
    'about.education': 'education',
    'about.experience': 'experience',
    'about.skills': 'Focus areas',
    'about.profiles': 'Academic profiles',
    'about.present': 'present',
    'research.title': 'Research and projects',
    'research.lead': 'My research interests, projects and publications.',
    'research.interests': 'Interests',
    'research.projects': 'Projects',
    'research.empty': 'I am at the start of my PhD; projects will appear here as they begin.',
    'status.ongoing': 'ongoing',
    'status.completed': 'completed',
    'pubs.title': 'Publications',
    'pubs.lead': 'Articles, conference papers and posters.',
    'pubs.all': 'all',
    'pubs.type.article': 'article',
    'pubs.type.conference': 'conference',
    'pubs.type.poster': 'poster',
    'pubs.type.preprint': 'preprint',
    'pubs.type.thesis': 'thesis',
    'pubs.type.chapter': 'book chapter',
    'pubs.bibtex': 'BibTeX',
    'pubs.copied': 'copied',
    'pubs.empty': 'I have no published work yet; my publications will be listed here as they appear. For up-to-date records, see my academic profiles.',
    'blog.title': 'Blog',
    'blog.lead': 'Notes on microRNAs, gene expression and veterinary molecular genetics.',
    'blog.minutes': 'min read',
    'blog.updated': 'updated',
    'blog.back': 'All posts',
    'blog.empty': 'No posts yet.',
    'blog.tags': 'Tags',
    'contact.title': 'Contact',
    'contact.lead': 'Get in touch for collaboration, questions or a chat.',
    'footer.built': 'Built with Astro',
    'site.tagline': 'Molecular Biochemistry and Genetics',
    'home.cvWeb': 'CV',
    'home.helixHintTouch': 'Drag across the helix',
    'helix.sr': 'My name written as DNA codons',
    'helix.note': 'O = Pyl (UAG) · U = Sec (UGA): recoded stop codons',
    'pubs.type.abstract': 'abstract',
    'pubs.type.talk': 'talk',
    'pubs.status.published': 'published',
    'pubs.status.in-press': 'in press',
    'pubs.status.submitted': 'submitted',
    'pubs.status.in-preparation': 'in preparation',
    'cv.title': 'Curriculum vitae',
    'cv.print': 'Print / save as PDF',
    'cv.contact': 'Contact',
    'cv.education': 'Education',
    'cv.interests': 'Research interests',
    'cv.focus': 'Focus areas',
    'cv.publications': 'Publications',
    'cv.updated': 'Last updated',
    '404.title': 'Locus not found',
    '404.text': 'The page you are looking for is not in the reference assembly.',
    '404.home': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['tr'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Dil önekli, base-path farkında site içi bağlantı. path: 'about/' gibi. */
export function href(lang: Lang, path = '') {
  const clean = path.replace(/^\//, '');
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${base}${prefix}/${clean}`;
}

/** Dil öneki olmadan, base-path farkında statik dosya yolu. */
export function asset(path: string) {
  if (/^https?:/.test(path)) return path;
  return `${base}/${path.replace(/^\//, '')}`;
}

/** profile.json'daki `alan_tr` / `alan_en` alanlarından doğru dili seçer. */
export function pick(obj: Record<string, any>, field: string, lang: Lang): string {
  return obj[`${field}_${lang}`] || obj[`${field}_${defaultLang}`] || '';
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
