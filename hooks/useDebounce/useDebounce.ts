import { useEffect, useState } from 'react';

/**
 * Custom React hook that debounce a value with a configurable delay.
 *
 * This hook is useful for optimizing performance when dealing with frequent value changes,
 * such as search input, form validation, or API calls. It delays updating the returned
 * value until the specified delay has passed since the last change.
 *
 * @template T - The type of the value being debounced
 * @param {T} value - The value to debounce
 * @param {number} [delay=500] - Debounce delay in milliseconds (default: 500ms)
 * @returns {T} The debounced value
 *
 * @example
 * // Debounce a search input with default 500ms delay
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm);
 *
 * @example
 * // Debounce with custom delay
 * const debouncedValue = useDebounce(value, 1000);
 */

export const useDebounce = <T>(value: T, delay: number = 500): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay, value]);

    return debouncedValue;
};
