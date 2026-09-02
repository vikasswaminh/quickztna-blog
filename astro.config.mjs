// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'ignore',
  integrations: [sitemap(), tailwind()],
  markdown: {
    shikiConfig: { theme: 'github-dark', wrap: true },
  },
});