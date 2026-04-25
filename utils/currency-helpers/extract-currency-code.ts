/**
 * Parses a raw currency string from an API and extracts the 2–3 letter ISO code.
 *
 * Handles common API formats like `'EUR (Euro)'`, `'TL (TRY)'`, `'USD/GBP'`,
 * or plain codes like `'usd'`. Always returns an uppercased result.
 *
 * @param {string} curType - The raw currency string to parse
 * @returns {string} The extracted and uppercased currency code
 *
 * @example
 * extractCurrencyCode('EUR (Euro)') // 'EUR'
 * extractCurrencyCode('TL (TRY)') // 'TL'
 * extractCurrencyCode('usd') // 'USD'
 * extractCurrencyCode('USD/GBP') // 'USD'
 */
export function extractCurrencyCode(curType: string): string {
    const trimmed = curType.trim();
    const match = trimmed.match(/^([A-Z]{2,3})(?:\s|$|[(\/]|\))/i);
    if (match) return match[1].toUpperCase();
    if (/^[A-Z]{2,3}$/i.test(trimmed)) return trimmed.toUpperCase();
    return trimmed.toUpperCase().slice(0, 3);
}
