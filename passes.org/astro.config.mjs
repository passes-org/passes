import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [htmx(), tailwind()],
  output: 'server',
  adapter: vercelServerless(),
});