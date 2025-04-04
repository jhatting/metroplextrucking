import { defineConfig } from 'astro/config';

// https://astro.build/config
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx()]
});