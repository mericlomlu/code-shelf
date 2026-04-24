'use client';

import { useEffect, useState } from 'react';

/**
 * Custom React hook that tracks whether a CSS media query matches.
 *
 * Defaults to `false` on the server to prevent hydration mismatches in Next.js.
 * The correct value is applied on the client after mount.
 *
 * @param {string} query - A valid CSS media query string (e.g. `'(max-width: 768px)'`)
 * @returns {boolean} Whether the media query currently matches
 *
 * @example
 * // Detect mobile viewport
 * const isMobile = useMediaQuery('(max-width: 768px)');
 *
 * @example
 * // Detect user preference
 * const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
 */

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        setMatches(mediaQueryList.matches);

        const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

        mediaQueryList.addEventListener('change', listener);

        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);

    return matches;
};
