# YaSS (Yet another sveltekit starter)

Feel free to fork the repo, open issues, or submit pull requests to help improve it. Whether it's adding new features, optimizing performance, or fixing bugs, any contributions are welcome.

In various places in the code I placed comments where you might want to make adjustments to make it your own.

## Getting started

- Clone repo
  ```bash
  git clone https://github.com/oluijks/yass
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

Open `.svelte-kit/output/server/stats.html` to analyze your bundle to see which modules are taking up space.

### HTTPS on localhost

See [https://github.com/FiloSottile/mkcert](https://github.com/FiloSottile/mkcert)

Uncomment the server.https block in `vite.config.ts` and generate `key.pem` and `cert.pem` by running:

```bash
mkdir -p cert/localhost && cd $_
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
- Enhanced Images (@sveltejs/enhanced-img)
- Rollup Plugin Visualizer (rollup-plugin-visualizer)

### Routes

Pages are responsive and have a basic header with home, about, login and register links and a dark/light switcher and a footer with the site name, version and last commit info.

- /
- /about
- /settings
- /login
- /register
- /legal/terms
- /legal/policy
- /legal/cookies

### Misc

- SEO (global and per page)
- Local fonts (preloaded in prod)
- Subtle animations (configurable)

## Thanks to

These good people who inspired me and thought me a lot about svelte and css:

- Ben Davis - [https://www.youtube.com/@bmdavis419](https://www.youtube.com/@bmdavis419)
- Coding2GO - [https://www.youtube.com/@coding2go](https://www.youtube.com/@coding2go)
- Hunter Johnston - [https://www.youtube.com/@Huntabyte](https://www.youtube.com/@Huntabyte)
- Johnny Magrippis - [https://www.youtube.com/@johnnifytech](https://www.youtube.com/@johnnifytech)
- JoyofCodeDev - [https://www.youtube.com/@JoyofCodeDev](https://www.youtube.com/@JoyofCodeDev)
- Kevin Powell - [https://www.youtube.com/@KevinPowell](https://www.youtube.com/@KevinPowell)
- Syntax FM - [https://www.youtube.com/@syntaxfm](https://www.youtube.com/@syntaxfm)
- RGB Studios.org [https://rgbstudios.org](https://rgbstudios.org)
