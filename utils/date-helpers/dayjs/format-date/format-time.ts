import dayjs from 'dayjs';

/**
 * Formats a date-time value to a time-only string using the given format.
 *
 * Defaults to `HH:mm`. Returns `null` for invalid or nullish input instead of throwing.
 * For seconds precision use `formatTimeWithSeconds` or pass `'HH:mm:ss'` as the format.
 *
 * @param {dayjs.ConfigType} value - The date-time to format (Date, string, number, or dayjs object)
 * @param {string} [timeFormat='HH:mm'] - A dayjs-compatible format string
 * @returns {string | null} The formatted time string, or `null` if the input is invalid
 *
 * @example
 * formatTime('2024-01-15T14:30:00') // '14:30'
 * formatTime('2024-01-15T09:05:00', 'HH:mm:ss') // '09:05:00'
 * formatTime('invalid') // null
 */

const DEFAULT_FORMAT = 'HH:mm';

export function formatTime(value: dayjs.ConfigType, timeFormat: string = DEFAULT_FORMAT): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).format(timeFormat) : null;
}
