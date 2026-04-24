# useDebounce

Delays updating a value until a given amount of time has passed since the last change. Useful for search inputs, form validation, and anything that fires too frequently to act on every change.

## Signature

```ts
useDebounce<T>(value: T, delay?: number): T
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `value` | `T` | — | The value to debounce |
| `delay` | `number` | `500` | Delay in milliseconds |

## Usage

```tsx
const [search, setSearch] = useState('');
const debouncedSearch = useDebounce(search);

useEffect(() => {
    if (debouncedSearch) {
        fetchResults(debouncedSearch);
    }
}, [debouncedSearch]);
```

```tsx
// Custom delay
const debouncedValue = useDebounce(value, 1000);
```
