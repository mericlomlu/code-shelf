import dayjs from 'dayjs';

/**
 * Checks whether the given date falls on yesterday.
 *
 * Compares at day-level granularity — time is ignored.
 *
 * @param {dayjs.ConfigType} value - The date to check (Date, string, number, or dayjs object)
 * @returns {boolean} `true` if the date is yesterday
 *
 * @example
 * isYesterday(new Date()) // false
 * isYesterday(dayjs().subtract(1, 'day')) // true
 */
export function isYesterday(value: dayjs.ConfigType): boolean {
    return dayjs(value).isSame(dayjs().subtract(1, 'day'), 'day');
}
