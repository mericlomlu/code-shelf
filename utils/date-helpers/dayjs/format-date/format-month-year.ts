import dayjs from 'dayjs';

/**
 * Formats a date value to a month-year string using the given format.
 *
 * Defaults to `MM.YYYY`. Returns `null` for invalid or nullish input instead of throwing.
 * Useful for billing cycles, report headers, and monthly groupings.
 *
 * @param {dayjs.ConfigType} value - The date to format (Date, string, number, or dayjs object)
 * @param {string} [monthYearFormat='MM.YYYY'] - A dayjs-compatible format string
 * @returns {string | null} The formatted month-year string, or `null` if the input is invalid
 *
 * @example
 * formatMonthYear('2024-01-15') // '01.2024'
 * formatMonthYear('2024-01-15', 'MMMM YYYY') // 'January 2024'
 * formatMonthYear('invalid') // null
 */

const DEFAULT_FORMAT = 'MM.YYYY';

export function formatMonthYear(value: dayjs.ConfigType, monthYearFormat: string = DEFAULT_FORMAT): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).format(monthYearFormat) : null;
}
