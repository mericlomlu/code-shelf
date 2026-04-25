# usePrevious

Returns the value from the previous render. Uses the React 19 render-time ref pattern — more accurate than the `useEffect` approach since it's synchronous and has zero render lag.

Returns `undefined` on the first render.

## Signature

```ts
usePrevious<T>(value: T): T | undefined
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `value` | `T` | The value to track across renders |

## Usage

```tsx
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

const increased = prevCount !== undefined && count > prevCount;
```

```tsx
// React to a prop change without an effect
const prevUserId = usePrevious(userId);

if (prevUserId !== userId) {
    // userId just changed
}
```
