import dayjs from 'dayjs';

/**
 * Checks whether date `a` is after or equal to date `b`.
 *
 * Inclusive equivalent of `isAfter`. Useful for range validation where
 * the boundary dates themselves are valid (e.g. start ≤ selected ≤ end).
 *
 * @param {dayjs.ConfigType} a - The date to test
 * @param {dayjs.ConfigType} b - The date to test against
 * @returns {boolean} `true` if `a` is after or the same moment as `b`
 *
 * @example
 * isSameOrAfter('2024-01-15', '2024-01-10') // true
 * isSameOrAfter('2024-01-15', '2024-01-15') // true — equal dates pass
 * isSameOrAfter('2024-01-10', '2024-01-15') // false
 */
export function isSameOrAfter(a: dayjs.ConfigType, b: dayjs.ConfigType): boolean {
    return !dayjs(a).isBefore(dayjs(b));
}
