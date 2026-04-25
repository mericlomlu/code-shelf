import { extractCurrencyCode } from './extract-currency-code';

const KNOWN_CURRENCIES = new Set([
    'USD', 'AUD', 'CAD', 'GBP', 'EUR', 'CHF', 'JPY', 'CNY',
    'DKK', 'SEK', 'NOK', 'KWD', 'SAR', 'IRR', 'BGN', 'RON',
    'RUB', 'PKR', 'TRY',
]);

/**
 * Normalizes a raw currency string into a known ISO 4217 code.
 *
 * Uses `extractCurrencyCode` to parse messy API values, then validates
 * the result against the set of supported currencies. Returns `null` for
 * unrecognized codes so the caller can handle the fallback explicitly.
 *
 * @note To support additional currencies, add them to `KNOWN_CURRENCIES`.
 * For Turkish Lira aliases (TL, TRL → TRY) use `getCurrencyCodeTR` from
 * the `turkish-specific` folder instead.
 *
 * @param {string} [curType] - A raw currency string (e.g. `'EUR'`, `'EUR (Euro)'`)
 * @returns {string | null} The normalized ISO code, or `null` if unrecognized
 *
 * @example
 * getCurrencyCode('EUR (Euro)') // 'EUR'
 * getCurrencyCode('usd') // 'USD'
 * getCurrencyCode('XYZ') // null
 * getCurrencyCode() // null
 */
export const getCurrencyCode = (curType?: string): string | null => {
    if (!curType) return null;
    const code = extractCurrencyCode(curType);
    return KNOWN_CURRENCIES.has(code) ? code : null;
};
