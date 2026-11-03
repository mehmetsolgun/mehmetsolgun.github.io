import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pages CMS boş bırakılan alanları null/'' olarak kaydedebilir; coerce bunları 0 ya da 1970'e çevirmesin.
const optional = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((v) => (v === '' || v == null ? undefined : v), schema.optional());

// Blog ve projeler: src/content/<koleksiyon>/<tr|en>/<slug>.md
// Aynı dosya adı = aynı yazının çevirisi.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    updated: optional(z.coerce.date()),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['ongoing', 'completed']).default('ongoing'),
    start: z.coerce.number().int(),
    end: optional(z.coerce.number().int()),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    funding: z.string().optional(),
    link: z.string().url().optional().or(z.literal('')),
  }),
});

// Yayınlar dil bağımsız: src/content/publications/<id>.yml
const publications = defineCollection({
  loader: glob({ pattern: '**/*.{yml,yaml}', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    year: z.coerce.number().int(),
    venue: z.string(),
    type: z.enum(['article', 'conference', 'poster', 'preprint', 'thesis', 'chapter']).default('article'),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    pmid: z.string().optional(),
    url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, publications };
