// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.milkteamc.org',
  integrations: [sitemap(), playformCompress()],
});