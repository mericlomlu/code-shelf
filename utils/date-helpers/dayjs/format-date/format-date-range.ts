import dayjs from 'dayjs';

/**
 * Formats a date range as a string using the given format.
 *
 * When `start` and `end` fall on the same calendar day, only a single date is returned
 * to avoid redundancy (e.g. `'15.01.2024'` instead of `'15.01.2024 - 15.01.2024'`).
 * Returns `null` if either date is invalid or nullish.
 *
 * @param {dayjs.ConfigType} start - The start of the range
 * @param {dayjs.ConfigType} end - The end of the range
 * @param {string} [dateFormat='DD.MM.YYYY'] - A dayjs-compatible format string applied to both dates
 * @returns {string | null} The formatted range string, or `null` if either input is invalid
 *
 * @example
 * formatDateRange('2024-01-10', '2024-01-15') // '10.01.2024 - 15.01.2024'
 * formatDateRange('2024-01-15', '2024-01-15') // '15.01.2024' — same day, shown once
 * formatDateRange('2024-01-10', '2024-01-15', 'YYYY/MM/DD') // '2024/01/10 - 2024/01/15'
 * formatDateRange('invalid', '2024-01-15') // null
 */

const DEFAULT_FORMAT = 'DD.MM.YYYY';

export function formatDateRange(
    start: dayjs.ConfigType,
    end: dayjs.ConfigType,
    dateFormat: string = DEFAULT_FORMAT,
): string | null {
    if (start === null || start === undefined || end === null || end === undefined) return null;

    const dayjsStart = dayjs(start);
    const dayjsEnd = dayjs(end);

    if (!dayjsStart.isValid() || !dayjsEnd.isValid()) return null;

    if (dayjsStart.isSame(dayjsEnd, 'day')) return dayjsStart.format(dateFormat);

    return `${dayjsStart.format(dateFormat)} - ${dayjsEnd.format(dateFormat)}`;
}
