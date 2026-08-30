# code-shelf

A small, growing collection of React hooks and TypeScript utilities gathered from recurring frontend problems.

This is a reference shelf rather than a published package: each item is kept independent so it can be read, adapted and copied without bringing in the entire repository.

## What's inside

### React hooks

- [`useAbortController`](hooks/use-abort-controller) — manage cancellable async operations
- [`useDebounce`](hooks/use-debounce) — delay frequently changing values
- [`useLocalStorage`](hooks/use-local-storage) — keep React state in sync with `localStorage`
- [`useMediaQuery`](hooks/use-media-query) — respond to CSS media queries in React
- [`usePrevious`](hooks/use-previous) — retain the previous value between renders

### Utilities

- [`currency-helpers`](utils/currency-helpers) — resolve and format currencies with `Intl.NumberFormat`
- [`date-helpers`](utils/date-helpers/dayjs) — compare and format dates with Day.js
- [`string-helpers`](utils/string-helpers) — format, normalize and sanitize strings and numbers
- [`validation-helpers`](utils/validation-helpers) — small format and identity validation helpers
- [`cipher`](utils/cipher) — encryption and decryption helpers

Individual hooks include their own API notes and usage examples. Utility files are documented alongside the implementation.

## Notes

- Written in TypeScript, with React used where a hook requires it.
- Some utilities depend on libraries such as Day.js; check the imports before copying.
- The examples are intended to be adapted to the needs and conventions of the project using them.
