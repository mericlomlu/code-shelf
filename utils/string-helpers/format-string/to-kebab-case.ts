/**
 * Converts a string to kebab-case.
 *
 * Handles space-separated, underscore-separated, and camelCase input.
 * Inserts a hyphen between a lowercase and an uppercase letter to split
 * camelCase words before lowercasing the entire result.
 *
 * @param {string} text - The input string to convert
 * @returns {string} The kebab-cased string
 *
 * @example
 * toKebabCase('Hello World') // 'hello-world'
 * toKebabCase('hello_world') // 'hello-world'
 * toKebabCase('helloWorld') // 'hello-world'
 * toKebabCase('myComponentName') // 'my-component-name'
 */
export const toKebabCase = (text: string): string =>
    text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
