# RoomSmart

A deliberately retro guide to useful meeting, presentation, creative, and client techniques. The visual design is proudly stuck in 1997; the application underneath it is not.

## Live site

Visit [alecbarr90.github.io/room-smart](https://alecbarr90.github.io/room-smart).

## Features

- Search by title or advice text
- Filter results by category
- Browse recommended techniques for common scenarios
- Save techniques in the current browser
- Responsive layout and reduced-motion support

Saved techniques are stored only in browser local storage. They are not uploaded or shared and can be removed by clearing browser site data.

## Local development

```bash
npm ci
npm run dev
```

Vite prints the local address when the development server starts.

## Quality checks

```bash
npm test
npm run lint
npm run build
npm audit --audit-level=high
```

## Deployment

GitHub Actions builds and deploys the `main` branch to GitHub Pages after the test, lint, build, and dependency checks pass. Production assets use the `/room-smart/` base path.

## Technologies

- React
- Vite and Vitest
- Tailwind CSS
- Testing Library
- GitHub Pages

## Rights

Copyright is retained by the repository owner. See [LICENSE.md](LICENSE.md). No permission to reuse the code or written material is granted unless the owner provides it separately.
