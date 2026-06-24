# Page Router — Rendering Patterns

A Next.js app using the **Pages Router** to demonstrate and compare three core rendering strategies: CSR, SSR, and SSG.

## What This Covers

| Pattern | File | Description |
|---|---|---|
| **CSR** — Client Side Rendering | `src/pages/csr-page.js` | Data fetched in browser using `useEffect` after page loads |
| **SSR** — Server Side Rendering | `src/pages/ssr-page.js` | Data fetched on server on every request via `getServerSideProps` |
| **SSG** — Static Site Generation | `src/pages/ssg-page.js` | Data fetched at build time via `getStaticProps` |

## How Each Pattern Works

### CSR (`/csr-page`)
The page shell loads immediately, then data is fetched client-side using `useEffect`. Users see a loading state until the fetch completes.
```js
useEffect(() => {
  fetch('http://localhost:4000/tutorials').then(...)
}, []);
```

### SSR (`/ssr-page`)
Data is fetched on the server on every request. The fully rendered HTML is sent to the browser — no loading state.
```js
export async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/tutorials');
  return { props: { videos: await res.json() } }
}
```

### SSG (`/ssg-page`)
Data is fetched once at build time. The page is pre-rendered as static HTML — fastest possible load, but data can go stale.
```js
export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/tutorials');
  return { props: { videos: await res.json() } }
}
```

## Setup & Run

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`

> Make sure a data API is running at `http://localhost:4000/tutorials` before visiting the pages.

## Routes

- `http://localhost:3000` — Home
- `http://localhost:3000/csr-page` — Client Side Rendering
- `http://localhost:3000/ssr-page` — Server Side Rendering
- `http://localhost:3000/ssg-page` — Static Site Generation

## Tech Stack

- Next.js (Pages Router)
- React
- Tailwind CSS
