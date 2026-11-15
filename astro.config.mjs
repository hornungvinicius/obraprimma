// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [CONFIRMAR] domínio definitivo. Troque aqui quando o domínio estiver registrado na Vercel.
export default defineConfig({
  site: 'https://obraprimma.com.br',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
