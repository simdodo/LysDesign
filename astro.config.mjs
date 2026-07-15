// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://defreitaslysdesign.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'no'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr', no: 'no' },
      },
    }),
  ],
});
