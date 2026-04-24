# useMediaQuery

Tracks whether a CSS media query matches. SSR-safe — returns `false` on the server to avoid hydration mismatches in Next.js, then syncs to the real value after mount.

## Signature

```ts
useMediaQuery(query: string): boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | `string` | Any valid CSS media query string |

## Usage

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');

return isMobile ? <MobileNav /> : <DesktopNav />;
```

```tsx
// User preferences
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
```
