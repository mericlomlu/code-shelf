import dayjs from 'dayjs';

/**
 * Checks whether date `a` is strictly before date `b`.
 *
 * Time-aware — if both values include a time component it is taken into account.
 * For an inclusive check (a ≤ b) use `isSameOrBefore` instead.
 *
 * @param {dayjs.ConfigType} a - The date to test
 * @param {dayjs.ConfigType} b - The date to test against
 * @returns {boolean} `true` if `a` is strictly before `b`
 *
 * @example
 * isBefore('2024-01-10', '2024-01-15') // true
 * isBefore('2024-01-15', '2024-01-10') // false
 * isBefore('2024-01-15', '2024-01-15') // false — use isSameOrBefore for equality
 */
export function isBefore(a: dayjs.ConfigType, b: dayjs.ConfigType): boolean {
    return dayjs(a).isBefore(dayjs(b));
}
