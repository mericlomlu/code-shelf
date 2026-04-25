import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';

dayjs.extend(isBetweenPlugin);

/**
 * Checks whether a date falls within a given range.
 *
 * Requires the `dayjs/plugin/isBetween` plugin, which is extended above.
 * Inclusivity controls whether the range boundaries count as matches:
 * - `'[]'` — both boundaries inclusive (default)
 * - `'()'` — both boundaries exclusive
 * - `'[)'` — start inclusive, end exclusive
 * - `'(]'` — start exclusive, end inclusive
 *
 * @param {dayjs.ConfigType} date - The date to test
 * @param {dayjs.ConfigType} start - The start of the range
 * @param {dayjs.ConfigType} end - The end of the range
 * @param {'[]' | '()' | '[)' | '(]'} [inclusivity='[]'] - Boundary inclusivity
 * @returns {boolean} `true` if `date` falls within the range
 *
 * @example
 * isBetween('2024-01-15', '2024-01-10', '2024-01-20') // true
 * isBetween('2024-01-10', '2024-01-10', '2024-01-20') // true — boundary included by default
 * isBetween('2024-01-10', '2024-01-10', '2024-01-20', '()') // false — boundary excluded
 */
export function isBetween(
    date: dayjs.ConfigType,
    start: dayjs.ConfigType,
    end: dayjs.ConfigType,
    inclusivity: '[]' | '()' | '[)' | '(]' = '[]',
): boolean {
    return dayjs(date).isBetween(dayjs(start), dayjs(end), null, inclusivity);
}
