/**
 * Sanitizes a passport number string by removing invalid characters
 * and normalizing the result to uppercase.
 *
 * The function:
 * - Removes all non-alphanumeric characters
 * - Preserves only letters (A – Z) and digits (0–9)
 * - Converts the final result to uppercase
 *
 * This utility is intended for **input sanitization only** and does not
 * perform any validation regarding country-specific passport formats,
 * length, or checksum rules.
 *
 * @param value - The raw passport number input.
 * @returns A sanitized, uppercase passport number string containing only alphanumeric characters.
 */

export const sanitizePassportNumber = (value: string): string => {
    return value.replaceAll(/[^a-zA-Z0-9]/g, '').toUpperCase();
};