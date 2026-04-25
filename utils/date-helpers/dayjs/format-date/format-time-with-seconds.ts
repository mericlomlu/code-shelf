import dayjs from 'dayjs';

/**
 * Formats a date-time value to a time string including seconds using the given format.
 *
 * Defaults to `HH:mm:ss`. Returns `null` for invalid or nullish input instead of throwing.
 * For minute-level precision use `formatTime` instead.
 *
 * @param {dayjs.ConfigType} value - The date-time to format (Date, string, number, or dayjs object)
 * @param {string} [timeFormat='HH:mm:ss'] - A dayjs-compatible format string
 * @returns {string | null} The formatted time string, or `null` if the input is invalid
 *
 * @example
 * formatTimeWithSeconds('2024-01-15T14:30:45') // '14:30:45'
 * formatTimeWithSeconds('2024-01-15T09:05:03', 'HH[h] mm[m] ss[s]') // '09h 05m 03s'
 * formatTimeWithSeconds('invalid') // null
 */

const DEFAULT_FORMAT = 'HH:mm:ss';

export function formatTimeWithSeconds(value: dayjs.ConfigType, timeFormat: string = DEFAULT_FORMAT): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).format(timeFormat) : null;
}
