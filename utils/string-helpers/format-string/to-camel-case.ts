/**
 * Converts a string to camelCase.
 *
 * Handles space-separated, hyphen-separated, and underscore-separated input.
 * Lowercases the entire string first, then uppercases the first letter of
 * each subsequent word segment.
 *
 * @param {string} text - The input string to convert
 * @returns {string} The camelCased string
 *
 * @example
 * toCamelCase('hello world') // 'helloWorld'
 * toCamelCase('hello-world') // 'helloWorld'
 * toCamelCase('hello_world') // 'helloWorld'
 * toCamelCase('Hello World') // 'helloWorld'
 */
export const toCamelCase = (text: string): string =>
    text
        .toLowerCase()
        .replace(/[-_\s]+(.)/g, (_, char: string) => char.toUpperCase());
