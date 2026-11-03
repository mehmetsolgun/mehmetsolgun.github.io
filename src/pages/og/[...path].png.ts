import type { APIRoute, GetStaticPaths } from 'astro';
import profile from '../../data/profile.json';
import { pick, useTranslations, type Lang } from '../../i18n/ui';
import { entrySlug, getPosts, getProjects } from '../../lib/content';
import type { ChromName } from '../../lib/genome';
import { renderOg } from '../../lib/og';

// Her sayfa ve yazı için bir paylaşım görseli: /og/<dil>/<sayfa>.png
// Base.astro aynı anahtarı sayfanın yolundan türetir.
export const getStaticPaths = (async () => {
  const paths = [];
  for (const lang of ['tr', 'en'] as Lang[]) {
    const t = useTranslations(lang);
    const pages: [string, ChromName, string, string][] = [
      ['index', 'chr1', lang === 'tr' ? 'ana sayfa' : 'home', pick(profile, 'title', lang)],
      ['about', 'chr2', t('nav.about'), t('about.title')],
      ['research', 'chr3', t('nav.research'), t('research.title')],
      ['publications', 'chr4', t('nav.publications'), t('pubs.title')],
      ['blog', 'chr5', 'blog', t('blog.lead')],
      ['contact', 'chr6', t('nav.contact'), t('contact.lead')],
      ['notebook', 'chr7', t('nav.notebook'), t('notebook.lead')],
      ['cv', 'chr8', 'cv', t('cv.title')],
      ['404', 'chrX', '404', t('404.title')],
    ];
    for (const p of await getPosts(lang)) pages.push([`blog/${entrySlug(p.id)}`, 'chr5', 'blog', p.data.title]);
    for (const p of await getProjects(lang)) pages.push([`research/${entrySlug(p.id)}`, 'chr3', t('nav.research'), p.data.title]);
    for (const [key, chrom, label, title] of pages) {
      paths.push({
        params: { path: `${lang}/${key}` },
        props: { chrom, label: label.toLocaleLowerCase(lang), title, tagline: t('site.tagline') },
      });
    }
  }
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as Parameters<typeof renderOg>[0]);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
