# shravanikarry.com

Personal portfolio. Vite + React + Tailwind, deployed to GitHub Pages on every push to `main`.

- Content lives in `src/data/profile.js` and `src/data/work.js`.
- Screens and product images live in `public/img/`.
- CV is `public/Shravani-Karry-CV.pdf`.

## Analytics

Google Analytics 4 loads only when the build has `VITE_GA_ID` (from the repo variable `GA_MEASUREMENT_ID`).
`.github/workflows/weekly-traffic.yml` runs every Monday, builds a report with `scripts/weekly-traffic.mjs`,
and posts it as a GitHub issue labelled `traffic-report`. It needs the repo variable `GA_PROPERTY_ID`
and the secret `GA_SA_KEY` (a service account JSON key with Viewer access to the GA4 property).

```
npm install
npm run dev     # local preview
npm run build   # production build to dist/
```
