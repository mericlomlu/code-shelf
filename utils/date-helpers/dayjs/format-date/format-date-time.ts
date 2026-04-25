import dayjs from 'dayjs';

/**
 * Formats a date-time value to a string using the given format.
 *
 * Defaults to `DD.MM.YYYY HH:mm` if no format is provided. Returns `null` for
 * invalid or nullish input instead of throwing.
 *
 * @param {dayjs.ConfigType} value - The date-time to format (Date, string, number, or dayjs object)
 * @param {string} [dateTimeFormat='DD.MM.YYYY HH:mm'] - A dayjs-compatible format string
 * @returns {string | null} The formatted date-time string, or `null` if the input is invalid
 *
 * @example
 * formatDateTime('2024-01-15T14:30:00') // '15.01.2024 14:30'
 * formatDateTime('2024-01-15T14:30:00', 'DD.MM.YYYY HH:mm:ss') // '15.01.2024 14:30:00'
 * formatDateTime('invalid') // null
 */

const DEFAULT_FORMAT = 'DD.MM.YYYY HH:mm';

export function formatDateTime(value: dayjs.ConfigType, dateTimeFormat: string = DEFAULT_FORMAT): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).format(dateTimeFormat) : null;
}
