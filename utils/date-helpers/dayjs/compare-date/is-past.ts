import dayjs from 'dayjs';

/**
 * Checks whether the given date is in the past.
 *
 * Compares against the current moment at millisecond precision.
 * Use this for time-aware checks (e.g. has a deadline passed).
 * For day-level checks use `isBefore` with a day granularity instead.
 *
 * @param {dayjs.ConfigType} value - The date to check (Date, string, number, or dayjs object)
 * @returns {boolean} `true` if the date is strictly before now
 *
 * @example
 * isPast('2020-01-01') // true
 * isPast(dayjs().add(1, 'hour')) // false
 */
export function isPast(value: dayjs.ConfigType): boolean {
    return dayjs(value).isBefore(dayjs());
}
