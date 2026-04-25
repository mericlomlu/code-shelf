import dayjs from 'dayjs';

/**
 * Checks whether the given date falls on today.
 *
 * Compares at day-level granularity — time is ignored.
 *
 * @param {dayjs.ConfigType} value - The date to check (Date, string, number, or dayjs object)
 * @returns {boolean} `true` if the date is today
 *
 * @example
 * isToday(new Date()) // true
 * isToday('2024-01-15') // true only if today is 2024-01-15
 */
export function isToday(value: dayjs.ConfigType): boolean {
    return dayjs(value).isSame(dayjs(), 'day');
}
