/* eslint-disable antfu/no-import-node-modules-by-path */

// import fs from 'node:fs';
// import path from 'node:path';

import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

import svelteKitPackage from "./node_modules/@sveltejs/kit/package.json" with { type: "json" };
import sveltePackage from "./node_modules/svelte/package.json" with { type: "json" };
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    sveltekit(),
    viteCompression({ algorithm: "brotliCompress" }),
  ],

  define: {
    __NAME__: `"${pkg.name}"`,
    __VERSION__: `"${pkg.version}"`,
    __SVELTE_VERSION__: `"${sveltePackage.version}"`,
    __SVELTEKIT_VERSION__: `"${svelteKitPackage.version}"`,
  },

  // server: {
  //   https: {
  //     key: fs.readFileSync(path.join(__dirname, '/cert/key.pem')),
  //     cert: fs.readFileSync(path.join(__dirname, '/cert/cert.pem')),
  //   },
  //   proxy: {},
  // },
});
