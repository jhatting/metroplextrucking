import { defineConfig } from 'astro/config';

// https://astro.build/config
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })]
});