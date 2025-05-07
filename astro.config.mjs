import { defineConfig } from 'astro/config';
import iconify from 'astro-iconify';

export default defineConfig({
  integrations: [iconify()],
});
