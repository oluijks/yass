/* eslint-disable antfu/no-import-node-modules-by-path */

// import fs from "node:fs";
// import path from "node:path";

import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

// import { visualizer } from "rollup-plugin-visualizer";
// import viteCompression from "vite-plugin-compression";

import svelteKitPackage from "./node_modules/@sveltejs/kit/package.json" with { type: "json" };
import sveltePackage from "./node_modules/svelte/package.json" with { type: "json" };
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    sveltekit(),
    enhancedImages(),
    // viteCompression({ algorithm: "brotliCompress" }),
    // visualizer({
    //   emitFile: true,
    //   filename: "stats.html",
    // }),
  ],

  define: {
    __NAME__: `"${pkg.name}"`,
    __VERSION__: `"${pkg.version}"`,
    __SVELTE_VERSION__: `"${sveltePackage.version}"`,
    __SVELTEKIT_VERSION__: `"${svelteKitPackage.version}"`,
  },

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.join(__dirname, "/cert/luba.dev/private.key.pem")),
  //     cert: fs.readFileSync(path.join(__dirname, "/cert/luba.dev/domain.cert.pem")),
  //     key: fs.readFileSync(path.join(__dirname, "/cert/localhost/key.pem")),
  //     cert: fs.readFileSync(path.join(__dirname, "/cert/localhost/cert.pem")),
  //   },
  //   proxy: {},
  // },
});
