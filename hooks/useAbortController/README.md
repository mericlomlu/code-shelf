# useAbortController

Manages an `AbortController` for cancellable fetch requests and async operations. Automatically aborts on component unmount so in-flight requests never update unmounted components.

## Signature

```ts
useAbortController(): { signal: AbortSignal, abort: (reason?: unknown) => void, reset: () => void }
```

| Return | Description |
|--------|-------------|
| `signal` | Pass to `fetch` or any API that accepts `AbortSignal` |
| `abort` | Cancel the current operation, optionally with a reason |
| `reset` | Create a fresh controller — call this after `abort` before retrying |

## Usage

```tsx
const { signal } = useAbortController();

useEffect(() => {
    fetch('/api/data', { signal })
        .then(res => res.json())
        .then(setData)
        .catch(err => { if (err.name !== 'AbortError') throw err; });
}, [signal]);
```

```tsx
// Retry pattern
const { signal, abort, reset } = useAbortController();

const refetch = () => {
    abort();
    reset();
};
```
