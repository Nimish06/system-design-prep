# App Router — Rendering Patterns

A Next.js app using the **App Router** to demonstrate React Server Components (RSC) and modern rendering patterns.

## What This Covers

- **React Server Components (RSC)** — components that render entirely on the server with no client-side JS
- Async data fetching directly inside server components
- Difference between RSC and traditional client-side rendering

## Pages

| Route | File | Pattern |
|---|---|---|
| `/rsc-page` | `src/app/rsc-page/page.js` | React Server Component — fetches data on the server |

## How RSC Works Here

The `RscPage` component is an `async` server component. It fetches tutorial videos from a local API (`http://localhost:4000/tutorials`) at request time on the server, then renders the HTML — no useEffect, no useState, no client JS needed.

```js
export default async function RscPage() {
  const videos = await fetchVideos(); // runs on the server
  return (
    <>
      <h1>Tutorials</h1>
      {videos.map((video, index) => (
        <Tutorials video={video} key={index} />
      ))}
    </>
  )
}
```

## Setup & Run

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`

> Make sure a data API is running at `http://localhost:4000/tutorials` before visiting `/rsc-page`

## Tech Stack

- Next.js (App Router)
- React Server Components
- TypeScript / JavaScript
