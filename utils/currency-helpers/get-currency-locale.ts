const CURRENCY_LOCALES: Record<string, string> = {
    USD: 'en-US',
    AUD: 'en-AU',
    CAD: 'en-CA',
    GBP: 'en-GB',
    EUR: 'de-DE',
    CHF: 'de-CH',
    JPY: 'ja-JP',
    CNY: 'zh-CN',
    DKK: 'da-DK',
    SEK: 'sv-SE',
    NOK: 'nb-NO',
    KWD: 'ar-KW',
    SAR: 'ar-SA',
    IRR: 'fa-IR',
    BGN: 'bg-BG',
    RON: 'ro-RO',
    RUB: 'ru-RU',
    PKR: 'ur-PK',
    TRY: 'tr-TR',
};

/**
 * Returns the primary BCP 47 locale for a given ISO 4217 currency code.
 *
 * Used to drive `Intl.NumberFormat` so that decimal separators, grouping,
 * and symbol placement follow the conventions of the currency's home region.
 * Returns `null` for unrecognized codes so the caller can handle the fallback.
 *
 * @note To support additional currencies, add an entry to `CURRENCY_LOCALES`.
 *
 * @param {string} currencyCode - An ISO 4217 currency code (e.g. `'USD'`, `'EUR'`)
 * @returns {string | null} The BCP 47 locale string, or `null` if unrecognized
 *
 * @example
 * getCurrencyLocale('USD') // 'en-US'
 * getCurrencyLocale('EUR') // 'de-DE'
 * getCurrencyLocale('XYZ') // null
 */
export const getCurrencyLocale = (currencyCode: string): string | null =>
    CURRENCY_LOCALES[currencyCode] ?? null;
