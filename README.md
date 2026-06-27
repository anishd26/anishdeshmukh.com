# anishdeshmukh.com

Personal site built with [Astro](https://astro.build) and deployed free on GitHub Pages.

## Run locally

```bash
npm install      # first time only
npm run dev      # start the dev server at http://localhost:4321
```

## Edit content (no markup needed)

- **Profile / about / skills / socials:** `src/data/site.js`
- **Projects:** `src/data/projects.js`
- **Publications:** `src/data/publications.js`
- **Blog posts:** add a Markdown file to `src/content/blog/`
- **Résumé:** replace `public/resume.pdf` with your own

## Deploy

Push to the `main` branch. The workflow in `.github/workflows/deploy.yml`
builds and publishes automatically. Full instructions are in `DEPLOY.md`.
