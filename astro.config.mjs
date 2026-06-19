// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://defreitaslysdesign.com',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/design-lab/') && !page.endsWith('/home-v2/')
    })
  ]
});
