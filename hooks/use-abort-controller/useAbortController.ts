import { useCallback, useEffect, useRef } from 'react';

interface UseAbortControllerReturn {
    signal: AbortSignal;
    abort: (reason?: unknown) => void;
    reset: () => void;
}

/**
 * Custom React hook that manages an AbortController for cancellable async operations.
 *
 * Automatically aborts on unmount to prevent state updates on unmounted components.
 * Exposes `abort` to cancel manually and `reset` to get a fresh signal after cancellation.
 *
 * @returns {UseAbortControllerReturn} Object with the current `signal`, `abort`, and `reset` functions
 *
 * @example
 * // Cancel a fetch request on unmount or when the user navigates away
 * const { signal } = useAbortController();
 *
 * useEffect(() => {
 *     fetch('/api/data', { signal })
 *         .then(res => res.json())
 *         .then(setData)
 *         .catch(err => { if (err.name !== 'AbortError') throw err; });
 * }, [signal]);
 *
 * @example
 * // Manually cancel an in-flight request and restart it
 * const { signal, abort, reset } = useAbortController();
 *
 * const refetch = () => {
 *     abort();
 *     reset();
 * };
 */

export const useAbortController = (): UseAbortControllerReturn => {
    const controllerRef = useRef<AbortController>(new AbortController());

    useEffect(() => {
        return () => controllerRef.current.abort();
    }, []);

    const abort = useCallback((reason?: unknown) => {
        controllerRef.current.abort(reason);
    }, []);

    const reset = useCallback(() => {
        controllerRef.current = new AbortController();
    }, []);

    return { signal: controllerRef.current.signal, abort, reset };
};
