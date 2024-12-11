# Lorem Forum

Feel free to fork the repo, open issues, or submit pull requests to help improve it. Whether it's adding new features, optimizing performance, or fixing bugs, any contributions are welcome.

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

### Building

```bash
pnpm run build
```

### HTTPS on localhost

Uncomment the server.https block in `vite.config.ts` and generate `key.pem` and `cert.pem` by running:

```bash
cd cert/localhost
mkcert -install
mkcert -key-file key.pem -cert-file cert.pem localhost
```

Restart dev server.

---

## What's included?

### Packages

- Auth (former Lucia)
- Drizzle ORM/Kit with SQLite
- ESLint (@antfu/eslint-config)
- Tailwind CSS & Svelte port of shadcn/ui

### Routes

Pages are responsive and have a basic header with home, about, login and register links and a dark/light switcher and a footer with the site name, version and last commit info.

- /
- /about
- /login
- /register
- /legal/terms
- /legal/policy
- /legal/cookies

### Misc

- SEO (global and per page)
- Local fonts (preloaded in prod)

## Thanks to

These good people who inspired me and thought me a lot.

- Ben Davis - [https://www.youtube.com/@bmdavis419](https://www.youtube.com/@bmdavis419)
- Coding2GO - [https://www.youtube.com/@coding2go](https://www.youtube.com/@coding2go)
- Hunter Johnston - [https://www.youtube.com/@Huntabyte](https://www.youtube.com/@Huntabyte)
- Johnny Magrippis - [https://www.youtube.com/@johnnifytech](https://www.youtube.com/@johnnifytech)
- JoyofCodeDev - [https://www.youtube.com/@JoyofCodeDev](https://www.youtube.com/@JoyofCodeDev)
- Syntax FM - [https://www.youtube.com/@syntaxfm](https://www.youtube.com/@syntaxfm)
