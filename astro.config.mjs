import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ["shiki"],
    },
  },
  integrations: [tailwind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark", // Change this to any Shiki theme
    },
  },
});
