/**
 * Shortens a string to a maximum length, appending `'...'` if truncated.
 *
 * Returns the original string unchanged if it fits within `maxLength`.
 *
 * @param {string} text - The string to truncate
 * @param {number} [maxLength=18] - Maximum character count before truncation
 * @returns {string} The original string, or a truncated version ending with `'...'`
 *
 * @example
 * truncate('Hello, World!', 5) // 'Hello...'
 * truncate('Hi', 10) // 'Hi'
 * truncate('Short text') // 'Short text' — fits within default 18 chars
 */
export const truncate = (text: string, maxLength: number = 18): string =>
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
