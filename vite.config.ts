/* eslint-disable antfu/no-import-node-modules-by-path */
/* eslint-disable node/prefer-global/process */

// import fs from "node:fs";
// import path from "node:path";

import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
// import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { defineConfig } from "vitest/config";

import svelteKitPackage from "./node_modules/@sveltejs/kit/package.json" with { type: "json" };
import sveltePackage from "./node_modules/svelte/package.json" with { type: "json" };
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    sveltekit(),
    enhancedImages(),
    svelteTesting(),
    viteCompression({
      disable: true,
      algorithm: "brotliCompress",
    }),
    // visualizer({
    //   emitFile: true,
    //   filename: "stats.html",
    // }),
  ],

  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    //   https: {
    //     key: fs.readFileSync(path.join(__dirname, "/cert/luba.dev/private.key.pem")),
    //     cert: fs.readFileSync(path.join(__dirname, "/cert/luba.dev/domain.cert.pem")),
    //     key: fs.readFileSync(path.join(__dirname, "/cert/localhost/key.pem")),
    //     cert: fs.readFileSync(path.join(__dirname, "/cert/localhost/cert.pem")),
    //   },
    //   proxy: {},
  },

  define: {
    "__NAME__": `"${pkg.name}"`,
    "__VERSION__": `"${pkg.version}"`,
    "__SVELTE_VERSION__": `"${sveltePackage.version}"`,
    "__SVELTEKIT_VERSION__": `"${svelteKitPackage.version}"`,
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development",
    ),
  },

  test: {
    coverage: {
      enabled: false,
      provider: "v8",
      exclude: [
        ".svelte-kit/**",
        "src/__tests__/**",
        "src/lib/components/shadcn/**",
      ],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
