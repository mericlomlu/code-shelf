/**
 * Normalizes and formats a Turkish phone number string for display purposes.
 *
 * The function removes non-digit characters and applies Turkey-specific
 * phone number formatting rules.
 *
 * Supported formats:
 * - International numbers starting with '+' → '+CC (AAA) XXX XX XX'
 * - Turkish numbers starting with '90' → '+90 (AAA) XXX XX XX'
 * - GSM numbers starting with '5' (10 digits) → '+90 (AAA) XXX XX XX'
 * - Landline numbers starting with '2', '3', or '4' → '+90 (AAA) XXX XX XX'
 * - Call center numbers starting with '444' → '444 XXX XXX'
 * - Numbers starting with '850' → '0 (850) XX XX XXX'
 *
 * This function is intended for **display formatting only** and should not
 * be used for validation.
 *
 * @param phoneNumber - A raw phone number string containing digits and optional formatting characters.
 * @returns A formatted Turkish phone number string.
 */

export const formatTurkishPhoneNumber = (phoneNumber: string): string => {
    let cleaned = phoneNumber.replace(/[\s()-]/g, '');

    if (cleaned.startsWith('+')) {
        return cleaned.replace(/(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3 $4 $5');
    }

    if (cleaned.startsWith('90') && cleaned.length === 12) {
        return `+90 (${cleaned.slice(2, 5)}) ${cleaned.slice(5, 8)} ${cleaned.slice(
            8,
            10,
        )} ${cleaned.slice(10, 12)}`;
    }

    if (cleaned.startsWith('444')) {
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    }

    if (cleaned.startsWith('0')) {
        cleaned = cleaned.substring(1);
    }

    if (cleaned.startsWith('850')) {
        cleaned = cleaned.padEnd(10, '0');
        return `0 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 5)} ${cleaned.slice(
            5,
            7,
        )} ${cleaned.slice(7, 10)}`;
    }

    if (cleaned.startsWith('5') && cleaned.length === 10) {
        return `+90 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(
            6,
            8,
        )} ${cleaned.slice(8, 10)}`;
    }

    if (['2', '3', '4'].includes(cleaned[0]) && cleaned.length === 10) {
        return `+90 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(
            6,
            8,
        )} ${cleaned.slice(8, 10)}`;
    }

    return cleaned.length >= 7
        ? cleaned.replace(/(\d{3})(\d{2})(\d{2})(.*)/, '$1 $2 $3 $4').trim()
        : cleaned.replace(/(\d{3})(\d{2})(\d*)/, '$1 $2 $3').trim();
};
