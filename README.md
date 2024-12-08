# Lorem Forum

> Just another project starter for a SvelteKit website.

## Getting started

- Clone repo
  ```bash
  git clone https://github.com/oluijks/repo
  ```
- Install deps
  ```bash
  pnpm install
  ```
- Migrate database
  ```bash
  pnpm db:migrate
  ```
- Start dev server
  ```bash
  pnpm run dev --host 0.0.0.0
  ```

## Building

```bash
pnpm run build
```

## https on localhost

Uncomment the server.https block in `vite.config.ts` and generate `key.pem` and `cert.pem` by running:

```bash
cd cert
mkcert -install
mkcert -key-file key.pem -cert-file cert.pem localhost
```

Restart dev server.

---

## What's included?

### Packages

- Auth (former Lucia)
- Drizzle ORM/Kit for SQLite
- ESLint (@antfu/eslint-config)
- Tailwind CSS & Svelte port of shadcn/ui

### Routes

Pages have a basic header with home, about, login and register links and a dark/light switcher and a footer with site name, version and last commit info.

- /
- /login
- /register
- /about (csr, prerendered)
- /legal/terms (csr, prerendered)
- /legal/policy (csr, prerendered)
- /legal/cookies (csr, prerendered)

### Misc

- SEO (global and per page)
- Local fonts (preloaded in prod)
