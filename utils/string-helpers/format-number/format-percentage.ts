/**
 * Formats a ratio (0–1) as a locale-aware percentage string.
 *
 * Expects the value as a ratio — `0.75` is formatted as `'75%'`, not `75`.
 * Uses `Intl.NumberFormat` with `style: 'percent'` which handles the ×100
 * multiplication and symbol placement automatically. Falls back to `0` if
 * the value cannot be parsed.
 *
 * @note Pass the locale that matches your user's region (e.g. `'en-US'`, `'tr-TR'`, `'de-DE'`)
 * to control symbol placement and separators — some locales render `75 %` with a space.
 *
 * @param {number | string} value - A ratio between 0 and 1 (e.g. `0.75` for 75%)
 * @param {string} locale - A BCP 47 locale string
 * @param {number} [decimals=0] - Number of decimal places in the percentage
 * @returns {string} The formatted percentage string
 *
 * @example
 * formatPercentage(0.75, 'en-US') // '75%'
 * formatPercentage(0.7567, 'en-US', 1) // '75.7%'
 * formatPercentage(0.75, 'tr-TR') // '%75'
 * formatPercentage('invalid', 'en-US') // '0%'
 */
export const formatPercentage = (
    value: number | string,
    locale: string,
    decimals: number = 0,
): string => {
    const numberValue = typeof value === 'string' ? Number.parseFloat(value) : value;
    const normalizedValue = Number.isNaN(numberValue) ? 0 : numberValue;

    return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(normalizedValue);
};
