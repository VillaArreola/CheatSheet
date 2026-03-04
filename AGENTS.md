# AGENTS.md

Operational guide for coding agents working in this repository.

## Project Snapshot

- Stack: Astro 5, TypeScript (strict config), Tailwind CSS.
- Package manager: npm (`package-lock.json` present).
- Module mode: project uses ESM (`"type": "module"`), but `scripts/*.cjs` are CommonJS.
- Primary app code: `src/`.
- Generated command dataset: `src/data/generated/commands.ts`.
- Generated markdown pages: `public/comando/*.md`.

## Source Of Truth

- Runtime command data comes from `src/data/generated/commands.ts`.
- Notion sync scripts own generated outputs:
  - `scripts/sync-notion-commands.cjs` -> `src/data/generated/commands.ts`
  - `scripts/generate-markdown-raw.cjs` -> `public/comando/*.md`
- Do not hand-edit generated files unless the user explicitly asks for a one-off patch.

## Setup

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production site: `npm run build`
- Preview built site: `npm run preview`

## Build / Lint / Test Commands

### Build

- Full production build: `npm run build`
- Build output folder: `dist/`

### Lint / Typecheck

- Astro CLI passthrough: `npm run astro -- <command>`
- Type/lint-style checks (Astro): `npm run astro -- check`
- Note: in this repo, `astro check` currently prompts to install `@astrojs/check` if missing.

### Tests

- There is currently no test runner configured in `package.json`.
- There are no `*.test.*` or `*.spec.*` files in the repository right now.
- Canonical status: automated tests are not yet set up.

### Single Test Execution (Important)

- Current state: not available (no test framework configured).
- If a test framework is added, prefer a script named `test` and `test:watch`.
- Recommended future pattern (Vitest example):
  - all tests: `npx vitest run`
  - single file: `npx vitest run path/to/file.test.ts`
  - single test by name: `npx vitest run path/to/file.test.ts -t "test name"`

## Data Sync Commands

- Sync Notion DB to TS data: `npm run sync`
- Generate raw markdown command pages: `npm run sync:md`
- Run both sync steps: `npm run sync:all`

## File/Folder Conventions

- `src/components/**`: Astro components.
- `src/layouts/**`: page/layout shells.
- `src/pages/**`: route files (`index.astro`, `[slug].astro`, etc.).
- `src/lib/**`: API/data utilities.
- `src/styles/global.css`: global Tailwind layers and utility classes.
- `public/**`: static assets and generated markdown content.

## Code Style Guidelines

### Imports

- Use top-of-file imports in frontmatter blocks for `.astro` files.
- Use relative imports consistently (existing codebase convention).
- Prefer explicit named imports where practical.
- Keep import groups simple; avoid over-optimizing import ordering unless tooling is added.

### Formatting

- Follow existing formatting in touched file; do not reformat unrelated code.
- Use semicolons in TS/JS (current dominant style).
- Prefer single quotes in TS/JS where consistent with file.
- Keep long template strings readable with indentation.
- Avoid trailing whitespace and accidental mixed indentation.

### Types

- Prefer explicit interfaces/types for component props and data contracts.
- `tsconfig` extends `astro/tsconfigs/strict`; preserve strict-compatible code.
- Avoid introducing new `any`; if unavoidable, constrain scope and document why.
- Reuse existing domain shapes (`Command`, `Category`, etc.) instead of duplicating.
- For generated data, update generator scripts rather than patching generated typings manually.

### Naming

- Components/layouts: `PascalCase.astro` (e.g., `CommandCard.astro`).
- Variables/functions: `camelCase`.
- Constants/environment names: `UPPER_SNAKE_CASE`.
- Route filenames: Astro defaults (`index.astro`, `[slug].astro`).
- Slug generation should remain stable: lowercase + remove spaces + strip non-alphanumeric.

### Astro Patterns

- Keep server/frontmatter logic in `---` blocks.
- Keep browser-only logic in `<script>` tags.
- When exposing globals on `window`, namespace clearly and avoid collisions.
- Prefer progressive enhancement: render useful HTML before JS hydration logic.

### Tailwind / CSS

- Use utility classes first; use `global.css` layers for shared utilities/components.
- Keep dark-mode behavior class-based (`dark` class on root), matching current implementation.
- Preserve mobile-first responsiveness (`sm`, `lg`, etc.) used across components.
- Reuse existing spacing/typography utilities before adding new custom classes.

### Error Handling & Logging

- Use `try/catch` around external I/O (Notion API, file writes, fetches).
- Fail loudly in scripts when required env vars are missing (`process.exit(1)`).
- In UI scripts, surface friendly fallback messages in addition to console errors.
- Include actionable context in logs (command/page id, file name, HTTP status).

### Environment & Secrets

- Required env vars for sync scripts:
  - `NOTION_TOKEN`
  - `NOTION_DB`
- Never hardcode secrets or commit `.env` values.
- Treat API tokens as runtime-only configuration.

## Change Strategy For Agents

- Prefer minimal, targeted diffs over broad rewrites.
- Do not modify generated files directly when source scripts can be fixed.
- If both `src/data/commands.ts` and generated commands exist, verify which one is active before edits.
- Preserve Spanish UX copy style when editing user-facing text in current pages.

## Validation Checklist

- Run `npm run build` after meaningful UI/data changes.
- If `@astrojs/check` is installed, run `npm run astro -- check`.
- For sync-related changes, run `npm run sync:all` only when env vars are available.
- Confirm generated outputs are updated only when intentionally regenerated.

## Cursor / Copilot Rules

- `.cursorrules`: not found.
- `.cursor/rules/`: not found.
- `.github/copilot-instructions.md`: not found.
- If these files are later added, treat them as higher-priority agent instructions.

## Git Hygiene

- Keep commits focused and atomic.
- Avoid mixing formatting-only churn with functional changes.
- Mention when regenerated artifacts are included and why.
