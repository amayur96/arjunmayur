# Arjun Mayur Personal Website

A personal website built with [Next.js](https://nextjs.org/) (App Router) and React with TypeScript, styled using [HeroUI](https://heroui.com/) components and [Tailwind CSS](https://tailwindcss.com/) v4.

## Requirements

- [Node.js](https://nodejs.org/) 18.18+ (Node 20+ recommended)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` — start the local development server with hot reloading
- `npm run build` — create an optimized production build
- `npm run start` — run the production build locally (run `npm run build` first)
- `npm run lint` — run Next.js/ESLint checks

## Tech stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **HeroUI** (`@heroui/react`) for UI components
- **Tailwind CSS v4** for styling (configured via PostCSS)
- **next-themes** for light/dark theme support

## Project structure

```
app/
  layout.tsx     # Root layout: metadata, fonts, theme provider, structured data
  page.tsx       # Home page content (HeroUI components)
  providers.tsx  # Client-side theme provider (next-themes)
  globals.css    # Tailwind + HeroUI styles and theme tokens
  robots.ts      # Generates /robots.txt
  sitemap.ts     # Generates /sitemap.xml
public/
  assets/        # Static images and assets
postcss.config.mjs  # Tailwind CSS v4 PostCSS setup
```
