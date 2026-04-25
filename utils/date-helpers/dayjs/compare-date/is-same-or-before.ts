import dayjs from 'dayjs';

/**
 * Checks whether date `a` is before or equal to date `b`.
 *
 * Inclusive equivalent of `isBefore`. Useful for range validation where
 * the boundary dates themselves are valid (e.g. start ≤ selected ≤ end).
 *
 * @param {dayjs.ConfigType} a - The date to test
 * @param {dayjs.ConfigType} b - The date to test against
 * @returns {boolean} `true` if `a` is before or the same moment as `b`
 *
 * @example
 * isSameOrBefore('2024-01-10', '2024-01-15') // true
 * isSameOrBefore('2024-01-15', '2024-01-15') // true — equal dates pass
 * isSameOrBefore('2024-01-16', '2024-01-15') // false
 */
export function isSameOrBefore(a: dayjs.ConfigType, b: dayjs.ConfigType): boolean {
    return !dayjs(a).isAfter(dayjs(b));
}
