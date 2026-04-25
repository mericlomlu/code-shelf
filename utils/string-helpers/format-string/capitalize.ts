/**
 * Capitalizes only the first letter of a string, leaving the rest unchanged.
 *
 * Unlike `toTitleCase`, this only affects the very first character — words
 * after the first are not touched. Returns an empty string for falsy input.
 *
 * @note For locale-aware casing (e.g. Turkish dotless i), replace `toUpperCase`
 * with `toLocaleUpperCase(locale)`.
 * @example
 * // Locale-aware version
 * const capitalizeLocale = (text: string, locale: string): string =>
 *     text ? text.charAt(0).toLocaleUpperCase(locale) + text.slice(1) : '';
 *
 * @param {string} text - The input string to capitalize
 * @returns {string} The string with its first letter uppercased, or `''` if falsy
 *
 * @example
 * capitalize('hello world') // 'Hello world'
 * capitalize('jOHN dOE') // 'JOHN dOE' — only first char is changed
 * capitalize('') // ''
 */
export const capitalize = (text: string): string =>
    text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
