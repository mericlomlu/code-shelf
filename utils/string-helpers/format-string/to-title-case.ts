/**
 * Capitalizes the first letter of each word in a string (Title Case).
 *
 * Splits on spaces, uppercases the first character and lowercases the rest
 * of each word. Returns an empty string for falsy input.
 *
 * @note For locale-aware casing (e.g. Turkish dotless i, German ß), replace
 * `toUpperCase` / `toLowerCase` with `toLocaleUpperCase(locale)` / `toLocaleLowerCase(locale)`.
 *
 * @param {string} text - The input string to convert
 * @returns {string} The title-cased string, or `''` if input is falsy
 *
 * @example
 * toTitleCase('hello world') // 'Hello World'
 * toTitleCase('JOHN DOE') // 'John Doe'
 * toTitleCase('') // ''
 */
export const toTitleCase = (text: string): string =>
    text
        ? text
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ')
        : '';
