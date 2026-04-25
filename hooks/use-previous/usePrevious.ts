import { useRef } from 'react';

/**
 * Custom React hook that returns the value from the previous render.
 *
 * Uses the React 19 pattern of mutating a ref during render rather than inside `useEffect`.
 * This is safe per the React docs — reading and writing a ref during render is allowed
 * when the write is guarded by a condition, making it synchronous and avoiding the
 * one-render lag that the `useEffect` approach introduces.
 *
 * @template T - The type of the tracked value
 * @param {T} value - The value to track
 * @returns {T | undefined} The value from the previous render, or `undefined` on the first render
 *
 * @example
 * // Detect the direction of a count change
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 * const increased = prevCount !== undefined && count > prevCount;
 *
 * @example
 * // Run logic only when a specific prop changes
 * const prevUserId = usePrevious(userId);
 * if (prevUserId !== userId) { ... }
 */

export const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<{ value: T; prev: T | undefined }>({ value, prev: undefined });

    if (ref.current.value !== value) {
        ref.current.prev = ref.current.value;
        ref.current.value = value;
    }

    return ref.current.prev;
};
