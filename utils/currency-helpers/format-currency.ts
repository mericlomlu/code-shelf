import { getCurrencyCode } from './get-currency-code';
import { getCurrencyLocale } from './get-currency-locale';

/**
 * Formats a value as a locale-aware currency string using native symbols.
 *
 * Resolves the locale automatically from the currency code via `getCurrencyLocale`,
 * then formats using `Intl.NumberFormat` with `style: 'currency'` — which produces
 * native symbol placement (e.g. `'$1,234.50'`, `'1.234,50 €'`).
 * Returns `null` if the currency code is unrecognized.
 *
 * @note Uses `style: 'currency'` which outputs native symbols and symbol placement
 * per the currency's locale (e.g. `'$1,234.50'` not `'1,234.50 USD'`).
 * For a plain label appended after the number, use the pattern below instead:
 * @example
 * // Custom label output — copies just this snippet, no imports needed
 * const formatCurrencyLabel = (value: number, locale: string, currency: string, decimals = 2): string => {
 *     const formatted = new Intl.NumberFormat(locale, {
 *         style: 'decimal',
 *         minimumFractionDigits: decimals,
 *         maximumFractionDigits: decimals,
 *     }).format(value);
 *     return `${formatted} ${currency}`;
 * };
 *
 * @param {string | number} [value] - The numeric value to format (parsed from string if needed)
 * @param {string} [curType] - A raw currency string (e.g. `'USD'`, `'EUR (Euro)'`)
 * @returns {string | null} The formatted currency string, or `null` if the currency is unrecognized
 *
 * @example
 * formatCurrency(1234.5, 'USD') // '$1,234.50'
 * formatCurrency(1234.5, 'EUR') // '1.234,50 €'
 * formatCurrency(0, 'GBP') // '£0.00'
 * formatCurrency(1234.5, 'XYZ') // null — unknown currency
 */
export const formatCurrency = (value?: string | number, curType?: string): string | null => {
    const currencyCode = getCurrencyCode(curType);
    if (!currencyCode) return null;

    const locale = getCurrencyLocale(currencyCode);
    if (!locale) return null;

    const raw = typeof value === 'string' ? Number.parseFloat(value.replace(/[^\d.-]/g, '')) : value ?? NaN;
    const normalizedValue = Number.isNaN(raw) ? 0 : raw;

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 2,
    }).format(normalizedValue);
};
