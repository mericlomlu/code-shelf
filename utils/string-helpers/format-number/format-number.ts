/**
 * Formats a numeric value with locale-aware separators.
 *
 * Uses `Intl.NumberFormat` for formatting. When `decimals` is omitted the
 * runtime default is used (typically 0–3 significant fraction digits).
 * Falls back to `0` if the value cannot be parsed.
 *
 * @note Pass the locale that matches your user's region (e.g. `'en-US'`, `'tr-TR'`, `'de-DE'`)
 * to get the correct decimal and grouping separators.
 *
 * @param {number | string} value - The numeric value to format
 * @param {string} locale - A BCP 47 locale string
 * @param {number} [decimals] - Fixed number of decimal places; omit to use runtime default
 * @returns {string} The formatted number string
 *
 * @example
 * formatNumber(1234567.89, 'en-US') // '1,234,567.89'
 * formatNumber(1234567.89, 'tr-TR') // '1.234.567,89'
 * formatNumber(1234567.89, 'en-US', 0) // '1,234,568'
 * formatNumber('invalid', 'en-US') // '0'
 */
export const formatNumber = (
    value: number | string,
    locale: string,
    decimals?: number,
): string => {
    const numberValue = typeof value === 'string' ? Number.parseFloat(value) : value;
    const normalizedValue = Number.isNaN(numberValue) ? 0 : numberValue;

    return new Intl.NumberFormat(locale, {
        style: 'decimal',
        ...(decimals !== undefined && {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }),
    }).format(normalizedValue);
};
