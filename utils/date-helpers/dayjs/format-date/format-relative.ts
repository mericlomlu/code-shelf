import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

/**
 * Formats a date as a human-readable relative time string.
 *
 * Uses the dayjs `relativeTime` plugin via `fromNow()`, which handles both
 * past and future dates — e.g. `'5 minutes ago'` or `'in 3 hours'`.
 * Returns `null` for invalid or nullish input instead of returning an empty string.
 *
 * @param {dayjs.ConfigType} value - The date to format (Date, string, number, or dayjs object)
 * @returns {string | null} A relative time string, or `null` if the input is invalid
 *
 * @example
 * formatRelative('2024-01-10') // '5 days ago' (relative to when called)
 * formatRelative(dayjs().add(2, 'hour')) // 'in 2 hours'
 * formatRelative('invalid') // null
 */
export function formatRelative(value: dayjs.ConfigType): string | null {
    if (value === null || value === undefined) return null;
    return dayjs(value).isValid() ? dayjs(value).fromNow() : null;
}
