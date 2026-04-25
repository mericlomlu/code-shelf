import dayjs from 'dayjs';

/**
 * Checks whether two dates fall on the same calendar day.
 *
 * Ignores time — only year, month, and day are compared.
 * Useful when you want equality at day-level without caring about the time component.
 *
 * @param {dayjs.ConfigType} a - The first date
 * @param {dayjs.ConfigType} b - The second date
 * @returns {boolean} `true` if both dates are on the same calendar day
 *
 * @example
 * isSameDay('2024-01-15T08:00', '2024-01-15T22:00') // true — same day, different times
 * isSameDay('2024-01-15', '2024-01-16') // false
 */
export function isSameDay(a: dayjs.ConfigType, b: dayjs.ConfigType): boolean {
    return dayjs(a).isSame(dayjs(b), 'day');
}
