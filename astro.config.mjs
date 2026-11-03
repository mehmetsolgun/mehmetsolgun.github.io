// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Actions bu iki değeri otomatik verir (bkz. .github/workflows/deploy.yml).
// Yerelde varsayılanlar kullanılır.
const site = process.env.SITE_URL || 'https://mehmetsolgun.github.io';
const base = process.env.BASE_PATH || '/';

/** Yazılardaki h2 başlıklarının başına paylaşılabilir "§" bağlantısı ekler. */
function rehypeSectionAnchors() {
  /** @param {any} node */
  const walk = (node) => {
    for (const child of node.children ?? []) {
      if (child.type === 'element' && child.tagName === 'h2' && child.properties?.id) {
        child.children.unshift({
          type: 'element',
          tagName: 'a',
          properties: { href: `#${child.properties.id}`, className: ['anchor'], ariaHidden: 'true', tabIndex: -1 },
          children: [{ type: 'text', value: '§' }],
        });
      } else {
        walk(child);
      }
    }
  };
  return walk;
}

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'tr', locales: { tr: 'tr-TR', en: 'en-US' } },
      filter: (page) => !page.includes('/og/') && !page.endsWith('/404/'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHeadingIds, rehypeSectionAnchors, rehypeKatex],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
