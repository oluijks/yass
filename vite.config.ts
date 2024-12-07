import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    __NAME__: `"${pkg.name}"`,
    __VERSION__: `"${pkg.version}"`,
    __SVELTE_VERSION__: `"${sveltePackage.version}"`,
    __SVELTEKIT_VERSION__: `"${svelteKitPackage.version}"`,
  },
});
