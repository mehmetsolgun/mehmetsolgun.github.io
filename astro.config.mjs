// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// GitHub Actions bu iki değeri otomatik verir (bkz. .github/workflows/deploy.yml).
// Yerelde varsayılanlar kullanılır.
const site = process.env.SITE_URL || 'https://mehmetsolgun.github.io';
const base = process.env.BASE_PATH || '/';

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
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
