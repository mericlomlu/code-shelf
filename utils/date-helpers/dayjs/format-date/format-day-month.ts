import dayjs from 'dayjs';

/**
 * Formats a date value to a day-month string using the given format.
 *
 * Defaults to `DD.MM`. Returns `null` for invalid or nullish input instead of throwing.
 * Useful for event lists, calendar strips, and recurring schedules where the year is implied.
 *
 * @param {dayjs.ConfigType} value - The date to format (Date, string, number, or dayjs object)
 * @param {string} [dayMonthFormat='DD.MM'] - A dayjs-compatible format string
 * @returns {string | null} The formatted day-month string, or `null` if the input is invalid
 *
 * @example
 * formatDayMonth('2024-01-15') // '15.01'
 * formatDayMonth('2024-01-15', 'DD MMMM') // '15 January'
 * formatDayMonth('invalid') // null
 */

const DEFAULT_FORMAT = 'DD.MM';

export function formatDayMonth(value: dayjs.ConfigType, dayMonthFormat: string = DEFAULT_FORMAT): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).format(dayMonthFormat) : null;
}
