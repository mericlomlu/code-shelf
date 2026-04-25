import dayjs from 'dayjs';

/**
 * Checks whether date `a` is strictly after date `b`.
 *
 * Time-aware — if both values include a time component it is taken into account.
 * For an inclusive check (a ≥ b) use `isSameOrAfter` instead.
 *
 * @param {dayjs.ConfigType} a - The date to test
 * @param {dayjs.ConfigType} b - The date to test against
 * @returns {boolean} `true` if `a` is strictly after `b`
 *
 * @example
 * isAfter('2024-01-15', '2024-01-10') // true
 * isAfter('2024-01-10', '2024-01-15') // false
 * isAfter('2024-01-15', '2024-01-15') // false — use isSameOrAfter for equality
 */
export function isAfter(a: dayjs.ConfigType, b: dayjs.ConfigType): boolean {
    return dayjs(a).isAfter(dayjs(b));
}
