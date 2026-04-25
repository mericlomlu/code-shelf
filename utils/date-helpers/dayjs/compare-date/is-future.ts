import dayjs from 'dayjs';

/**
 * Checks whether the given date is in the future.
 *
 * Compares against the current moment at millisecond precision.
 * Use this for time-aware checks (e.g. is a booking still upcoming).
 * For day-level checks use `isAfter` with a day granularity instead.
 *
 * @param {dayjs.ConfigType} value - The date to check (Date, string, number, or dayjs object)
 * @returns {boolean} `true` if the date is strictly after now
 *
 * @example
 * isFuture('2099-01-01') // true
 * isFuture(dayjs().subtract(1, 'hour')) // false
 */
export function isFuture(value: dayjs.ConfigType): boolean {
    return dayjs(value).isAfter(dayjs());
}
