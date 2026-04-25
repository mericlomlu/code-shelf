import dayjs from 'dayjs';

/**
 * Formats a date value to a string using the given format.
 *
 * Defaults to `DD.MM.YYYY` if no format is provided. Returns `null` for
 * invalid or nullish input instead of throwing.
 *
 * @param {dayjs.ConfigType} value - The date to format (Date, string, number, or dayjs object)
 * @param {string} [dateFormat='DD.MM.YYYY'] - A dayjs-compatible format string
 * @returns {string | null} The formatted date string, or `null` if the input is invalid
 *
 * @example
 * formatDate('2024-01-15') // '15.01.2024'
 * formatDate('2024-01-15', 'YYYY/MM/DD') // '2024/01/15'
 * formatDate('invalid') // null
 */

const DEFAULT_FORMAT = 'DD.MM.YYYY';

export function formatDate(value: dayjs.ConfigType, dateFormat: string = DEFAULT_FORMAT): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).format(dateFormat) : null;
}
