/**
 * Validates if the given string is a correctly formatted email address.
 *
 * This function checks if the provided email string matches the pattern
 * of having non-whitespace characters before and after an '@' symbol,
 * followed by a period and additional non-whitespace characters.
 *
 * @param email - The email address string to validate.
 * @returns A boolean indicating whether the email address is valid.
 */

export const validateEmailFormat = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
