# [JacobSartin.github.io](https://jacobsartin.github.io)

This frontend uses [Vite](https://vite.dev/) and [TanStack Router](https://tanstack.com/router/latest).

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open <http://localhost:5173> in your browser.

## Scripts

- `pnpm dev` — start Vite dev server
- `pnpm build` — build production bundle into `dist/`
- `pnpm start` — preview the production build locally

## Routing

Routes are defined in `src/router.tsx` using TanStack Router and render page components from `app/`.

## Static Hosting Notes

The post-build step creates:

- `.nojekyll` for GitHub Pages compatibility
- `404.html` (copied from `index.html`) for SPA deep-link fallback
