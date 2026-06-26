# jesutoni.com — personal portfolio

Editorial, hand-built portfolio. Next.js (App Router) · Tailwind v4 · zero UI dependencies.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
```

## Edit the content

Everything you'd change lives in **`lib/content.ts`** — profile, headline,
projects, experience, press. No need to touch the components.

The one accent color is the CSS variable `--accent` in **`app/globals.css`**
(`@theme` block). Change it once, the whole site follows.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On vercel.com → **Add New → Project** → import the repo.
3. Framework preset auto-detects **Next.js**. No env vars needed. Deploy.
4. Add your custom domain under **Settings → Domains**.

## Structure

```
app/
  layout.tsx     fonts + metadata
  page.tsx       section assembly
  globals.css    design tokens (colors, fonts, animation)
components/       Nav, Hero, Work, About, Experience, Contact
lib/content.ts   all copy + data
```
