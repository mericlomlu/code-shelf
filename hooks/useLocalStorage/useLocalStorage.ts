'use client';

import { useCallback, useState } from 'react';

/**
 * Custom React hook that syncs state with `localStorage`.
 *
 * SSR safe — falls back to `initialValue` when `localStorage` is unavailable (e.g. during
 * Next.js server rendering). JSON serialization errors are caught silently, so a corrupt
 * entry never breaks the UI.
 *
 * @template T - The type of the stored value
 * @param {string} key - The `localStorage` key to read from and write to
 * @param {T} initialValue - Fallback value when the key is absent or unreadable
 * @returns {[T, (value: T | ((prev: T) => T)) => void, () => void]} A tuple of the current value,
 * a setter (accepts a value or updater function), and a remover that clears the key
 *
 * @example
 * // Persist a theme preference
 * const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light');
 *
 * @example
 * // Use an updater function (same API as useState)
 * const [count, setCount] = useLocalStorage('count', 0);
 * setCount(prev => prev + 1);
 */

export const useLocalStorage = <T>(
    key: string,
    initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void, () => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? (JSON.parse(item) as T) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = useCallback(
        (value: T | ((prev: T) => T)) => {
            setStoredValue(prev => {
                const resolved = value instanceof Function ? value(prev) : value;
                try {
                    localStorage.setItem(key, JSON.stringify(resolved));
                } catch {}
                return resolved;
            });
        },
        [key],
    );

    const removeValue = useCallback(() => {
        setStoredValue(initialValue);
        try {
            localStorage.removeItem(key);
        } catch {}
    }, [key, initialValue]);

    return [storedValue, setValue, removeValue];
};
