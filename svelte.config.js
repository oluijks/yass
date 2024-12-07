import * as child_process from "node:child_process";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // @see https://svelte.dev/docs/kit/integrations
  preprocess: vitePreprocess(),

  kit: {
    // @see https://svelte.dev/docs/kit/adapters
    // @see https://svelte.dev/docs/kit/adapter-auto
    adapter: adapter(),
  },
};

export default config;
