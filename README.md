# Ralosy

Marketing site for [Ralosy](https://ralosy.com) — Indian tech, education, and civic empowerment.

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS 4
- Display font: Bricolage Grotesque
- Body font: Figtree

Both fonts load through `next/font`.

## Scripts

- `npm run dev` — development server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

`ralosy.com` is served by a Next.js process behind OpenResty on the Hostinger server. Forcing HTTP to HTTPS, and which host is canonical at the edge, is configured there — not in this repository.
