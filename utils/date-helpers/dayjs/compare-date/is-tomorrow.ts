import dayjs from 'dayjs';

/**
 * Checks whether the given date falls on tomorrow.
 *
 * Compares at day-level granularity — time is ignored.
 *
 * @param {dayjs.ConfigType} value - The date to check (Date, string, number, or dayjs object)
 * @returns {boolean} `true` if the date is tomorrow
 *
 * @example
 * isTomorrow(new Date()) // false
 * isTomorrow(dayjs().add(1, 'day')) // true
 */
export function isTomorrow(value: dayjs.ConfigType): boolean {
    return dayjs(value).isSame(dayjs().add(1, 'day'), 'day');
}
