import { defineConfig } from 'astro/config';

// https://astro.build/config
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()]
});