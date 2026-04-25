import { currencySymbols } from './currency-symbols';
import { getCurrencyCode } from './get-currency-code';

/**
 * Returns the display symbol for a given currency.
 *
 * First checks the `currencySymbols` map for a known symbol. If not found,
 * falls back to extracting the symbol via `Intl.NumberFormat.formatToParts` —
 * so any valid ISO 4217 code works even if it is not in the map.
 * Returns `null` if the currency is unrecognized or the symbol cannot be resolved.
 *
 * @param {string} [curType] - A raw currency string (e.g. `'USD'`, `'EUR (Euro)'`)
 * @returns {string | null} The currency symbol, or `null` if unresolvable
 *
 * @example
 * getCurrencySymbol('USD') // '$'
 * getCurrencySymbol('EUR') // '€'
 * getCurrencySymbol('TRY') // '₺'
 * getCurrencySymbol('XYZ') // null
 */
export const getCurrencySymbol = (curType?: string): string | null => {
    if (!curType) return null;

    const currencyCode = getCurrencyCode(curType);
    if (!currencyCode) return null;

    if (currencySymbols[currencyCode]) return currencySymbols[currencyCode];

    try {
        const parts = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).formatToParts(0);
        return parts.find(part => part.type === 'currency')?.value ?? null;
    } catch {
        return null;
    }
};
