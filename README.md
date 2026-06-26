# Portfolio

My personal site. It's where I send recruiters, collaborators, and anyone who wants to see what I've built and how I think about product.

Live at https://jesutoniomiye.vercel.app

Built with Next.js and Tailwind. No UI libraries, no template, just a handful of components and one content file.

## Run it locally

You'll need Node 18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing the content

Everything you'd actually want to change (the intro, projects, experience, skills, articles, links) lives in one place:

```
lib/content.ts
```

Edit that file and the whole site updates. You don't need to touch the components for normal edits.

The accent colour is a single line if you ever want to change it: `--accent` in `app/globals.css`.

## Deploying

The repo is connected to Vercel, so any push to `main` ships to production on its own. Nothing manual.

If you want to sanity-check the build before pushing:

```bash
npm run build
```

## Layout

```
app/             layout, page, global styles, fonts
components/       the page sections (hero, work, skills, about, experience, contact)
lib/content.ts    all the copy and data
public/           images
```

That's the whole thing.
