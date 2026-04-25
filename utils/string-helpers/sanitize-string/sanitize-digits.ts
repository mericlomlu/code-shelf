/**
 * Removes all non-digit characters from a string, keeping only `0–9`.
 *
 * Useful for sanitizing phone number inputs, ID fields, or any numeric-only field
 * where the raw input may contain dashes, spaces, or other formatting characters.
 *
 * @param {string} value - The input string to sanitize
 * @returns {string} A string containing only digit characters
 *
 * @example
 * sanitizeNumber('+1 (555) 123-4567') // '15551234567'
 * sanitizeNumber('abc123def') // '123'
 * sanitizeNumber('no digits here') // ''
 */
export const sanitizeDigits = (value: string): string => value.replace(/\D/g, '');
