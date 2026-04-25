/**
 * Formats a large number into a compact, human-readable string.
 *
 * Uses `Intl.NumberFormat` with `notation: 'compact'`. The compact labels
 * (K, M, B, T) are locale-dependent — different locales may render them differently.
 * Falls back to `0` if the value cannot be parsed.
 *
 * @note Compact labels vary by locale — `'en-US'` uses `K/M/B/T` while `'tr-TR'`
 * uses `B/Mn/Mr/T`. Always test with your target locale.
 *
 * @param {number | string} value - The numeric value to format
 * @param {string} locale - A BCP 47 locale string
 * @returns {string} A compact representation of the number
 *
 * @example
 * formatCompact(1500, 'en-US') // '1.5K'
 * formatCompact(1500000, 'en-US') // '1.5M'
 * formatCompact(2300000000, 'en-US') // '2.3B'
 * formatCompact(1500000, 'tr-TR') // '1,5 Mn'
 * formatCompact('invalid', 'en-US') // '0'
 */
export const formatCompact = (value: number | string, locale: string): string => {
    const numberValue = typeof value === 'string' ? Number.parseFloat(value) : value;
    const normalizedValue = Number.isNaN(numberValue) ? 0 : numberValue;

    return new Intl.NumberFormat(locale, {
        notation: 'compact',
        compactDisplay: 'short',
    }).format(normalizedValue);
};
