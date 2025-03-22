# Development Guidelines

## Commands
- Start development server: `npm start`
- Build production: `npm run build`
- Run all tests: `npm test`
- Run single test: `npm test -- -t 'test-name'`
- Deploy to GitHub Pages: `npm run deploy`

## Code Style
- **Format:** 2-space indentation, no trailing whitespace
- **Components:** React function components with hooks
- **Naming:** PascalCase for components, camelCase for variables/functions
- **Imports:** Group React imports first, then external libraries, then local components
- **CSS:** Use Tailwind classes when possible, custom CSS for complex animations
- **Error Handling:** Use try/catch for async operations, provide meaningful error messages
- **State Management:** Use React hooks (useState, useEffect) for component state
- **Comments:** Add comments for complex logic only, keep code self-documenting
- **Testing:** Write unit tests for all components with meaningful assertions

## Project Structure
- `/src/components` - Reusable UI components
- `/public` - Static assets
- `/cline_docs` - Project documentation