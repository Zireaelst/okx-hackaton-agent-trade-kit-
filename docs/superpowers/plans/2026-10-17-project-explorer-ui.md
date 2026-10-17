---
draft: true
---

# Project Explorer and UI Polish Implementation Plan

> **For agentic workers:** Execute inline in this session. Keep the site static, source claims tied to existing guide pages, and publish only after tests and a production build pass.

**Goal:** Make all 31 hackathon ideas searchable by product and access level, then improve the visual flow from the homepage into the guide.

**Architecture:** `src/data/ideas.mjs` is the single card catalogue and exports a pure filter function. A React explorer renders controls, result count, empty state, and links to existing idea detail headings. The homepage receives a clearer two-column hero, and CSS supplies consistent spacing, focus states, mobile layouts, and reduced-motion handling.

**Tech stack:** Docusaurus 3, React 19, CSS, Node's built-in test runner.

## Global constraints

- Keep 16 ATK, 9 OnchainOS, and 6 OKX.ai ideas, with no claim that they are official OKX products.
- Label live access accurately: public ATK market, version/region check, read-authorized account, or simulated demo.
- Do not run orders, payments, wallet operations, or account actions.
- Preserve light/dark readability and responsive navigation.

## Task 1: Catalogue and filtering

**Files:** Create `src/data/ideas.mjs` and `tests/idea-explorer.test.mjs`.

- [ ] Write failing tests asserting 31 unique IDs, category counts 16/9/6, exact public-market and simulated counts, case-insensitive Turkish search, and combined filters.
- [ ] Run `node --test tests/idea-explorer.test.mjs`; confirm failure from missing behavior.
- [ ] Add the 31 source-linked entries and implement `filterIdeas({query, product, access})`.
- [ ] Run the focused test and `npm test`; confirm all pass.
- [ ] Commit the catalogue and tests.

## Task 2: Explorer UI

**Files:** Create `src/components/IdeaExplorer.js`; modify `docs/ideas/intro.md` to `docs/ideas/intro.mdx`.

- [ ] Render search, product and access selects, visible result count, reset, keyboard-friendly links, and a zero-results message.
- [ ] Give the three implemented examples direct recipe links and every card its original detailed idea link.
- [ ] Add CSS for card states, clear focus indicators, responsive columns, and dark mode.
- [ ] Run `npm run build` to catch MDX and route errors; confirm all card anchors exist in generated docs.
- [ ] Commit the explorer.

## Task 3: Homepage flow and release

**Files:** Modify `src/pages/index.js`, `src/css/custom.css`, `README.md`, and `SOURCE_AUDIT.md`.

- [ ] Introduce a concise start path panel in the hero and a direct entry to the filtered idea explorer.
- [ ] Improve spacing, responsive hierarchy, hover/focus transitions, and `prefers-reduced-motion` behavior.
- [ ] Run `npm test`, `npm run build`, `git diff --check`, and a local output check for new links.
- [ ] Commit and push `main`; verify Vercel Ready and live routes.
