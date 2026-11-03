import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export const entryLang = (id: string) => id.split('/')[0] as Lang;
export const entrySlug = (id: string) => id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    'blog',
    (p) => entryLang(p.id) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getProjects(lang: Lang) {
  const items = await getCollection('projects', (p) => entryLang(p.id) === lang);
  // Devam edenler önce, sonra başlangıç yılına göre yeniden eskiye
  return items.sort(
    (a, b) =>
      Number(a.data.status === 'completed') - Number(b.data.status === 'completed') ||
      b.data.start - a.data.start,
  );
}

export async function getPublications() {
  const items = await getCollection('publications');
  return items.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

/** Diğer dilde aynı slug'a sahip bir çeviri var mı? */
export async function hasTranslation(collection: 'blog' | 'projects', id: string, target: Lang) {
  const all = await getCollection(collection);
  return all.some(
    (e) =>
      e.id === `${target}/${entrySlug(id)}` &&
      (import.meta.env.DEV || !('draft' in e.data && e.data.draft)),
  );
}

/** Yazar adını karşılaştırma için sadeleştirir: "Solgun, M." ≈ "solgun m" */
export const normName = (s: string) =>
  s
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export function readingMinutes(body = '') {
  const words = body.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function toBibtex(pub: CollectionEntry<'publications'>) {
  const d = pub.data;
  const kind = { article: 'article', conference: 'inproceedings', abstract: 'inproceedings', poster: 'misc', talk: 'misc', preprint: 'misc', thesis: 'phdthesis', chapter: 'incollection' }[d.type];
  const venueKey = { article: 'journal', conference: 'booktitle', abstract: 'booktitle', chapter: 'booktitle', thesis: 'school' }[d.type as string] ?? 'howpublished';
  const firstAuthor = d.authors[0].split(/[ ,]/)[0].toLowerCase().normalize('NFD').replace(/[^a-z]/g, '');
  const fields: [string, string | undefined][] = [
    ['title', d.title],
    ['author', d.authors.join(' and ')],
    [venueKey, d.venue],
    ['year', String(d.year)],
    ['volume', d.volume],
    ['pages', d.pages],
    ['doi', d.doi],
  ];
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(',\n');
  return `@${kind}{${firstAuthor}${d.year},\n${body}\n}`;
}
