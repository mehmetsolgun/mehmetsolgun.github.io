// schema.org yapılandırılmış verisi (JSON-LD): arama motorları kişiyi ve yazıları tanısın.
import type { CollectionEntry } from 'astro:content';
import profile from '../data/profile.json';
import { asset, href, pick, type Lang } from '../i18n/ui';
import { profileLinks } from './links';

const abs = (path: string, site?: URL) => (site ? new URL(path, site).toString() : path);

export function person(lang: Lang, site?: URL) {
  const edu = profile.timeline.filter((e) => e.track === 'education');
  const current = edu.find((e) => !e.end);
  const [givenName, ...rest] = profile.name.split(' ');
  const orcid = profile.links.orcid?.split('/').pop();
  return {
    '@type': 'Person',
    '@id': `${abs(href('tr'), site)}#person`,
    name: profile.name,
    givenName,
    familyName: rest.join(' '),
    honorificSuffix: profile.credentials,
    jobTitle: pick(profile, 'title', lang),
    email: `mailto:${profile.email}`,
    url: abs(href(lang), site),
    image: profile.photo ? abs(asset(profile.photo), site) : undefined,
    sameAs: profileLinks.map((l) => l.url),
    identifier: orcid ? { '@type': 'PropertyValue', propertyID: 'ORCID', value: orcid } : undefined,
    knowsAbout: profile.interests.map((i) => pick(i, 'title', lang)),
    affiliation: current ? { '@type': 'EducationalOrganization', name: pick(current, 'place', lang) } : undefined,
    alumniOf: edu
      .filter((e) => e.end)
      .map((e) => ({ '@type': 'EducationalOrganization', name: pick(e, 'place', lang) })),
  };
}

export const profilePage = (lang: Lang, site?: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  inLanguage: lang,
  mainEntity: person(lang, site),
});

export const blogPosting = (post: CollectionEntry<'blog'>, url: string, lang: Lang, site?: URL) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.data.title,
  description: post.data.description,
  datePublished: post.data.date.toISOString(),
  dateModified: (post.data.updated ?? post.data.date).toISOString(),
  inLanguage: lang,
  keywords: post.data.tags.join(', '),
  url: abs(url, site),
  author: { '@id': `${abs(href('tr'), site)}#person`, name: profile.name },
});
