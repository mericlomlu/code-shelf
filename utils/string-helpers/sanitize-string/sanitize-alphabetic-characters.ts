/**
 * Removes all non-alphabetic characters from a string, preserving Latin letters and whitespace.
 *
 * Allows only `a–z`, `A–Z`, and whitespace. All digits, symbols, and punctuation are stripped.
 * Intended for name fields, city inputs, or any free-text field that should contain only letters.
 *
 * @note To support additional character sets, extend the regex with the relevant Unicode ranges.
 * @example
 * // Extend for Turkish characters (ğ, ü, ş, ö, ç, ı, İ, etc.)
 * const sanitizeTurkishAlphabetic = (value: string): string =>
 *     value.replaceAll(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '');
 *
 * @example
 * // Extend for any Unicode letter using the \p{L} property (requires 'u' flag)
 * const sanitizeUnicodeAlphabetic = (value: string): string =>
 *     value.replaceAll(/[^\p{L}\s]/gu, '');
 *
 * @param {string} value - The input string to sanitize
 * @returns {string} A string containing only Latin letters and spaces
 *
 * @example
 * sanitizeAlphabeticCharacters('John123 Doe!') // 'John Doe'
 * sanitizeAlphabeticCharacters('hello@world') // 'helloworld'
 */
export const sanitizeAlphabeticCharacters = (value: string): string =>
    value.replaceAll(/[^a-zA-Z\s]/g, '');
