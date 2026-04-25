/**
 * A map of ISO 4217 currency codes to their display symbols.
 *
 * Used by `getCurrencySymbol` as the primary lookup before falling back
 * to `Intl.NumberFormat.formatToParts`. Extend this record to support
 * additional currencies.
 *
 * @example
 * // Add a currency not in the default map
 * currencySymbols['AED'] = 'د.إ';
 */
export const currencySymbols: Record<string, string> = {
    USD: '$',
    AUD: 'A$',
    CAD: 'C$',
    GBP: '£',
    EUR: '€',
    CHF: 'CHF',
    JPY: '¥',
    CNY: '¥',
    DKK: 'kr',
    SEK: 'kr',
    NOK: 'kr',
    KWD: 'KD',
    SAR: '﷼',
    IRR: '﷼',
    BGN: 'лв',
    RON: 'lei',
    RUB: '₽',
    PKR: '₨',
    TRY: '₺',
};
