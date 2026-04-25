import dayjs from 'dayjs';

/**
 * Formats a date value to an ISO 8601 string.
 *
 * Returns `null` for invalid or nullish input instead of throwing.
 *
 * @param {dayjs.ConfigType} value - The date to format (Date, string, number, or dayjs object)
 * @returns {string | null} ISO 8601 string (e.g. `'2024-01-15T00:00:00.000Z'`), or `null` if invalid
 *
 * @example
 * formatISODate('2024-01-15') // '2024-01-15T00:00:00.000Z'
 * formatISODate(new Date()) // current datetime in ISO 8601 format
 * formatISODate('invalid') // null
 */
export function formatISODate(value: dayjs.ConfigType): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).toISOString() : null;
}
