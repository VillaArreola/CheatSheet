# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:4321
npm run build        # production build to dist/
npm run preview      # preview built site
npm run astro -- check  # type/lint check (installs @astrojs/check if missing)

# Notion sync (requires NOTION_TOKEN and NOTION_DB env vars)
npm run sync         # sync Notion DB -> src/data/generated/commands.ts
npm run sync:md      # fetch Notion pages -> public/comando/*.md
npm run sync:all     # run both sync steps
```

No test runner is configured; there are no `*.test.*` or `*.spec.*` files.

## Architecture

**Stack:** Astro 5, TypeScript (strict), Tailwind CSS v3, `@tailwindcss/typography`.

**Notion as CMS.** All cheatsheet content lives in a Notion database. Two Node scripts (CommonJS `.cjs`) pull from it at sync time:

- `scripts/sync-notion-commands.cjs` → writes `src/data/generated/commands.ts` (the command index with metadata).
- `scripts/generate-markdown-raw.cjs` → writes `public/comando/<slug>.md` (full markdown content served statically).

**Do not hand-edit generated files** (`src/data/generated/commands.ts`, `public/comando/*.md`) unless making a deliberate one-off patch.

**Routing:**
- `/` — `src/pages/index.astro`: dashboard with a two-panel sidebar (rail + explorer) built entirely client-side from the generated command list.
- `/[slug]` — `src/pages/[slug].astro`: individual command page. At build time, static paths are derived from the generated commands list using `getStaticPaths()`. At runtime, clicking a command in the sidebar fetches the corresponding `public/comando/<slug>.md` via `fetch()` and renders it with `marked`, using `history.pushState` for navigation without a full page reload.

**Slug formula** (used consistently throughout): `title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')`.

**Data sources:**
- `src/data/generated/commands.ts` — active runtime source imported by both pages.
- `src/data/commands.ts` — legacy static data; no longer imported by pages. Keep as reference only.

**Theme system:** Two dark-mode variants (`vault` = blue-dark, `black` = near-black) toggled via CSS classes on `<html>`. Applied inline in `BaseLayout.astro` before first render to prevent flash. Global helpers exposed as `window.__setThemeMode`, `window.__getThemeMode`, `window.__toggleTheme`. CSS custom properties (`--bg-start`, `--surface`, etc.) drive both themes in `src/styles/global.css`.

**Key CSS utilities** (defined in `src/styles/global.css`): `.glass-panel` (backdrop-blur surface), `.surface-elevated` (card surface), `.soft-reveal` (entry animation).

**Favorites & nav state** persist in `localStorage` under keys `cheatsheet-favorites-v1` and `cheatsheet-nav-state-v1`.

## Environment Variables

Required for sync scripts only (not needed for `dev` or `build` if generated files already exist):

```
NOTION_TOKEN=...
NOTION_DB=...
```

Notion filter: only pages with `Status = Done` and non-empty `Title` are synced.

## Conventions

- **Slug generation** must stay stable; changing it breaks existing URLs.
- Components/layouts: `PascalCase.astro`. Variables/functions: `camelCase`. Env vars: `UPPER_SNAKE_CASE`.
- Keep server logic in `---` frontmatter; browser-only logic in `<script>` tags.
- `scripts/*.cjs` are CommonJS; all `src/` files are ESM.
- User-facing copy is in Spanish — preserve that style when editing UI text.
- Run `npm run build` after meaningful UI or data changes to catch type and build errors early.
