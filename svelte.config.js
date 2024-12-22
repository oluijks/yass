import * as child_process from "node:child_process";
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // @see https://svelte.dev/docs/kit/integrations
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      $assets: "src/assets",
    },

    // @see https://svelte.dev/docs/kit/adapters
    // @see https://svelte.dev/docs/kit/adapter-auto
    adapter: adapter({
      precompress: true,
      out: "build",
    }),

    version: {
      name: child_process.execSync("git rev-parse --short HEAD").toString().trim(),
      // pollInterval: 3000,
    },
  },
};

export default config;
