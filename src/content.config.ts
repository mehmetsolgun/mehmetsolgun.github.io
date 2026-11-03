import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pages CMS boş bırakılan alanları null/'' olarak kaydedebilir. Bunlar "yok" sayılır;
// böylece coerce onları 0 ya da 1970'e çevirmez ve tek boş alan derlemeyi durdurmaz.
const empty = (v: unknown) => (v === '' || v == null ? undefined : v);
const optional = <T extends z.ZodTypeAny>(schema: T) => z.preprocess(empty, schema.optional());
const withDefault = <T extends z.ZodTypeAny>(schema: T, value: z.input<T>) =>
  z.preprocess(empty, schema.default(value));
const text = optional(z.string());
const list = withDefault(z.array(z.string()).transform((a) => a.filter(Boolean)), []);

// Blog ve projeler: src/content/<koleksiyon>/<tr|en>/<eşleşme-anahtarı>.md
// Aynı dosya adı = aynı yazının çevirisi (Pages CMS'teki "pair" alanı dosya adını belirler).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: withDefault(z.string(), ''),
    date: z.coerce.date(),
    updated: optional(z.coerce.date()),
    tags: list,
    draft: withDefault(z.boolean(), false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: withDefault(z.enum(['ongoing', 'completed']), 'ongoing'),
    start: z.coerce.number().int(),
    end: optional(z.coerce.number().int()),
    tags: list,
    featured: withDefault(z.boolean(), false),
    funding: text,
    link: text,
  }),
});

// Yayınlar dil bağımsız: src/content/publications/<id>.yml
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).transform((a) => a.filter(Boolean)).pipe(z.array(z.string()).min(1)),
    year: z.coerce.number().int(),
    venue: z.string(),
    type: withDefault(
      z.enum(['article', 'conference', 'abstract', 'poster', 'talk', 'preprint', 'thesis', 'chapter']),
      'article',
    ),
    status: withDefault(z.enum(['published', 'in-press', 'submitted', 'in-preparation']), 'published'),
    volume: text,
    pages: text,
    doi: text,
    pmid: text,
    url: text,
    featured: withDefault(z.boolean(), false),
  }),
});

export const collections = { blog, projects, publications };
