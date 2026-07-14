# RoomSmart Modernisation and Reliability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve RoomSmart's retro design while fixing search, making saved tips durable, replacing the obsolete build system, improving accessibility, and adding dependable automation.

**Architecture:** Keep the React component and data model. Move search and storage behaviour into small pure modules with regression tests, replace Create React App with Vite and local Tailwind compilation, then deploy the verified static output to the existing GitHub Pages site.

**Tech Stack:** React 19, Vite 8, Vitest 4, Testing Library, Tailwind CSS 3.4, GitHub Actions, GitHub Pages.

## Global Constraints

- Preserve the current deliberately retro visual design and public URL.
- Use the GitHub Pages base path `/room-smart/` in production.
- Treat saved techniques as browser-local data; never send them to a server.
- Do not grant a permissive reuse licence without explicit owner approval.
- Require clean install, tests, lint, build, and high-severity audit checks before merge.

---

### Task 1: Lock down search and saved-tip behaviour with failing tests

**Files:**
- Modify: `src/App.test.js`
- Create: `src/lib/search.js`
- Create: `src/lib/savedTips.js`
- Modify: `src/SmartestPersonApp.js`
- Modify: `src/components/SearchBox.js`

**Interfaces:**
- Produces: `searchTips(searchTerm: string, categoryFilter: string): TipSearchResult[]`.
- Produces: `loadSavedTips(storage?: Storage): string[]` and `saveSavedTips(tipIds: string[], storage?: Storage): void`.
- `handleSearch(nextCategoryFilter?: string)` accepts the new select value so it cannot read stale React state.

- [ ] **Step 1: Write regression tests**

Add tests that type `story`, change the category to `Models Are Magical`, and expect zero results; and that save `Break it Down`, unmount, remount, and still find it in the saved section.

- [ ] **Step 2: Verify RED**

Run: `CI=true npm test -- --runInBand`

Expected: the filter test sees results from all categories and the persistence test loses the saved item after remount.

- [ ] **Step 3: Implement pure search and storage helpers**

`searchTips` iterates `categories`, applies the supplied category first, then matches a trimmed case-insensitive query against title and content. `loadSavedTips` parses `room-smart:saved-tips`, returns only unique string IDs, and returns `[]` for missing or malformed storage. `saveSavedTips` writes the JSON array and tolerates unavailable storage.

- [ ] **Step 4: Wire helpers into the app**

Initialise `savedTips` from `loadSavedTips`, persist changes in an effect, and call `handleSearch(nextCategory)` from the category select.

- [ ] **Step 5: Verify GREEN**

Run: `CI=true npm test -- --runInBand`

Expected: all behaviour tests pass.

### Task 2: Replace Create React App and CDN styling

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `index.html`
- Delete: `public/index.html`
- Create: `vite.config.js`
- Create: `tailwind.config.cjs`
- Create: `postcss.config.cjs`
- Create: `eslint.config.js`
- Modify: `src/index.css`
- Modify: `src/setupTests.js`
- Delete: `src/reportWebVitals.js`
- Modify: `src/index.js`

**Interfaces:**
- Produces: `npm run dev`, `npm test`, `npm run lint`, `npm run build`, and `npm run preview` using Vite/Vitest.

- [ ] **Step 1: Replace dependencies and scripts**

Remove `react-scripts`, `web-vitals`, and the manual `gh-pages` package. Add Vite 8.1.4, React plugin 6.0.3, Vitest 4.1.10, jsdom, ESLint 9, React Hooks/Refresh/JSX-accessibility plugins, Tailwind 3.4.19, PostCSS, and Autoprefixer.

- [ ] **Step 2: Configure Vite for the existing `.js` JSX files**

Set production `base` to `/room-smart/`; apply the React plugin to `.js` JSX; configure esbuild and dependency optimisation to treat `src/*.js` as JSX; use jsdom, globals, and `src/setupTests.js` for Vitest.

- [ ] **Step 3: Compile Tailwind locally**

Scan `index.html` and `src/**/*.{js,jsx}`. Add `@tailwind base`, `@tailwind components`, and `@tailwind utilities` before the existing global CSS. Remove the external Tailwind CDN link.

- [ ] **Step 4: Replace the CRA HTML shell**

Create a root `index.html` with the real description, favicon, restrictive CSP meta policy, `#root`, and a module script for `/src/index.js`.

- [ ] **Step 5: Verify clean migration**

Run: `npm ci && npm test && npm run lint && npm run build && npm audit --audit-level=high`.

Expected: all commands exit successfully and `dist/index.html` references `/room-smart/` assets.

### Task 3: Repair accessibility and documentation

**Files:**
- Modify: `src/components/SearchBox.js`
- Modify: `src/components/SavedTips.js`
- Modify: `src/components/ScenarioModal.js`
- Modify: `src/components/CategoryList.js`
- Modify: `src/SmartestPersonApp.js`
- Modify: `src/animations.css`
- Modify: `README.md`
- Create: `LICENSE.md`

**Interfaces:**
- Produces: labelled icon buttons, labelled form controls, expanded/collapsed state, dialog semantics, valid navigation, and reduced-motion support.

- [ ] **Step 1: Label controls and structure**

Connect labels with search/select IDs, add `aria-label` to icon buttons, add `aria-expanded` and `aria-controls` to categories, and give the modal `role=dialog`, `aria-modal=true`, and a labelled title.

- [ ] **Step 2: Remove fake links and duplicate saved-tip actions**

Keep HOME as a real `./` link, render unavailable guestbook/links/webmaster items as decorative text, and expose one clearly labelled remove action per saved tip.

- [ ] **Step 3: Respect reduced-motion preferences**

Disable blink, bounce, pulse, rotate, marquee, and shimmer animations inside `prefers-reduced-motion: reduce`.

- [ ] **Step 4: Replace starter documentation**

Document purpose, live URL, commands, deployment, browser-local saved tips, and the absence of a reuse licence. Add an all-rights-reserved notice rather than inventing an open-source licence.

### Task 4: Automate, publish, and protect

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/dependabot.yml`

**Interfaces:**
- Produces: deterministic Node 20 CI, monthly dependency proposals, official GitHub Pages deployment, and protected `main`.

- [ ] **Step 1: Add CI and Dependabot**

Use Node 20.19.0 and run `npm ci`, tests, lint, build, and `npm audit --audit-level=high` on pushes and pull requests. On a successful `main` run, upload `dist` and deploy it with the official GitHub Pages actions. Schedule monthly npm updates with a five-PR limit.

- [ ] **Step 2: Publish through a pull request**

Commit only the planned files, push `agent/portfolio-hardening`, open a PR, and require the new CI check before merge.

- [ ] **Step 3: Deploy and verify**

After merge, change the repository's Pages build mode to GitHub Actions, wait for the official deployment job, then confirm the live site loads, filtering works, saved tips survive reload, and there are no browser console errors.

- [ ] **Step 4: Apply repository hygiene**

Protect `main`, enable automatic branch deletion, close stale PR #2, delete obsolete feature branches, add accurate repository metadata, and verify the main-branch workflow.
