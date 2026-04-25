/**
 * Sanitizes an alphanumeric string by removing all non-letter and non-digit characters.
 *
 * The function:
 * - Preserves only letters (A – Z, a – z) and digits (0–9)
 * - Removes whitespace, symbols, and punctuation
 *
 * This utility is **domain-agnostic** and intended for generic input sanitization,
 * such as reference codes, identifiers, serial numbers, or mixed text–number fields.
 *
 * @param value - The raw input string to be sanitized.
 * @returns A string containing only alphanumeric characters.
 */
export const sanitizeAlphaNumericCharacters = (value: string): string => value.replace(/[^a-zA-Z0-9]/g, '');
