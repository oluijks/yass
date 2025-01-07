# Yass (Yet Another SvelteKit Starter)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/oluijks/yass/blob/main/LICENSE)
[![Made with SvelteKit](https://img.shields.io/badge/made%20with-SvelteKit-FF3E00.svg)](https://kit.svelte.dev)

A modern, feature-rich SvelteKit starter template with authentication, database integration, UI components and deployment configurations ready to go. You can view a live demo of the site at [https://yass.luba.dev](https://yass.luba.dev).

## ✨ Features

- 🔐 Authentication using Auth
- 💾 SQLite database with Drizzle ORM
- 🎨 Styled with Tailwind CSS & shadcn/ui
- 📱 Fully responsive design
- 🚀 Production-ready deployment configs

## 📋 Requirements

- Node.js 18+
- pnpm 8+

Feel free to fork the repo, open issues, or submit pull requests to help improve it. Whether it's adding new features, optimizing performance, or fixing bugs, any contributions are welcome.

## Disclaimer

This project is not ready for production use. It is primarily created for educational purposes and to demonstrate certain concepts or techniques. While the code may work as expected in a controlled environment, it may not be stable, secure, or optimized for real-world applications.

Please use this repository as a learning resource, and exercise caution if you decide to use or modify the code for any production environments.

## 🚀 Getting started

- Clone repo
  ```bash
  git clone https://github.com/oluijks/yass
  ```
- Install deps
  ```bash
  pnpm install
  ```
- Create .env and set `DATABASE_URL`
  ```bash
  cp .env.example .env
  ```
- Migrate database
  ```bash
  pnpm db:migrate
  ```
- Start dev server
  ```bash
  pnpm run dev --host 0.0.0.0
  ```

### 🔒 HTTPS on localhost

See [https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)

Uncomment the server.https block in `vite.config.ts` and generate `key.pem` and `cert.pem` by running:

```bash
mkdir -p cert/localhost && cd $_
mkcert -install
mkcert -key-file key.pem -cert-file cert.pem localhost
```

Restart dev server.

### ⚙️ Site configuration

Change the dummy values in `src/lib/config/site.ts` with your own information. You can add more items if you need to.

### 🐳 Docker

I've included a simple `Dockerfile` and some scripts in the `package.json` to run the tests and a production build in Docker.

```bash
pnpm run docker:build
pnpm run docker:run
pnpm run docker:update
```

### 🏗️ Building

```bash
pnpm run build
```

By enabling the Rollup Visualizer plugin in `vite.config.ts`, you can analyze your bundle by viewing the `.svelte-kit/output/server/stats.html` and `.svelte-kit/output/client/stats.html` files to identify which modules consume the most space.

Alternatively, you can enable the Vite Compression plugin in `vite.config.ts` to generate compressed build files using the gzip or Brotli algorithm.

### 🌎 Deploying

You can deploy the site to various platforms, such as Render, Fly.io, Vercel, Netlify, or Cloudflare Pages. Make sure to configure the environment variables and settings accordingly and use the correct SvelteKit Adapter.

If you want to make use of a SQLite database, you may need to set up a persistent storage solution or use a different database provider like Turso. Be sure to check out their and Drizzle documentation for more information on how to set up and configure the database.

#### Fly.io

Install the [Fly CLI](https://fly.io/docs/flyctl/install/), login and deploy the site to Fly.io.

```bash
curl -L https://fly.io/install.sh | sh
flyctl auth login
flyctl deploy
```

## ➕ What's included?

### 📦 Packages

- Auth (former Lucia)
- Drizzle ORM/Kit with SQLite
- ESLint (@antfu/eslint-config)
- Tailwind CSS & Svelte port of shadcn/ui
- Enhanced Images (@sveltejs/enhanced-img)
- Rollup Plugin Visualizer (rollup-plugin-visualizer)
- Vite Compression (gzip/brotli) (vite-plugin-compression)

### 🛣️ Routes

The pages are responsive and include a basic header with links for Home, About, Login, and Register, along with a dark/light mode switcher. The footer displays the site name, version, and details of the last commit.

The home page comes with a hero and features section.

- /
- /about
- /settings
- /login
- /register
- /legal/terms
- /legal/policy
- /legal/cookies

### 🎨 Misc

- SEO (global and per page)
- Local fonts (preloaded in prod)
- Subtle animations (configurable)

## 💝 Thanks to

These amazing individuals inspired me and taught me so much about Svelte and CSS:

- Ben Davis - [https://www.youtube.com/@bmdavis419](https://www.youtube.com/@bmdavis419)
- Coding2GO - [https://www.youtube.com/@coding2go](https://www.youtube.com/@coding2go)
- Hunter Johnston - [https://www.youtube.com/@Huntabyte](https://www.youtube.com/@Huntabyte)
- Johnny Magrippis - [https://www.youtube.com/@johnnifytech](https://www.youtube.com/@johnnifytech)
- JoyofCodeDev - [https://www.youtube.com/@JoyofCodeDev](https://www.youtube.com/@JoyofCodeDev)
- Kevin Powell - [https://www.youtube.com/@KevinPowell](https://www.youtube.com/@KevinPowell)
- Syntax FM - [https://www.youtube.com/@syntaxfm](https://www.youtube.com/@syntaxfm)
- RGB Studios.org [https://rgbstudios.org](https://rgbstudios.org)
