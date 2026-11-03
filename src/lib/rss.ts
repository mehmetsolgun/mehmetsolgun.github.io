import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import profile from '../data/profile.json';
import { href, useTranslations, type Lang } from '../i18n/ui';
import { entrySlug, getPosts } from './content';

export function feed(lang: Lang) {
  return async (context: APIContext) => {
    const t = useTranslations(lang);
    const posts = await getPosts(lang);
    return rss({
      title: `${profile.name} — ${t('blog.title')}`,
      description: t('blog.lead'),
      site: context.site!,
      customData: `<language>${lang === 'tr' ? 'tr-TR' : 'en-US'}</language>`,
      items: posts.map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.date,
        categories: p.data.tags,
        link: href(lang, `blog/${entrySlug(p.id)}/`),
      })),
    });
  };
}
