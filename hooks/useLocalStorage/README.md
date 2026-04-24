# useLocalStorage

Syncs React state with `localStorage`. API mirrors `useState` — returns a tuple of `[value, setValue, removeValue]`. SSR-safe and handles JSON errors silently so a corrupt entry never breaks the UI.

## Signature

```ts
useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void, () => void]
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `key` | `string` | The `localStorage` key |
| `initialValue` | `T` | Fallback when the key is absent or unreadable |

## Usage

```tsx
const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light');

return (
    <>
        <button onClick={() => setTheme('dark')}>Dark</button>
        <button onClick={removeTheme}>Reset</button>
    </>
);
```

```tsx
// Updater function (same as useState)
const [count, setCount] = useLocalStorage('count', 0);
setCount(prev => prev + 1);
```
