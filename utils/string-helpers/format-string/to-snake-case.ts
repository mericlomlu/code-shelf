/**
 * Converts a string to snake_case.
 *
 * Handles space-separated, hyphen-separated, and camelCase input.
 * Inserts an underscore between a lowercase and an uppercase letter to split
 * camelCase words before lowercasing the entire result.
 *
 * @param {string} text - The input string to convert
 * @returns {string} The snake_cased string
 *
 * @example
 * toSnakeCase('Hello World') // 'hello_world'
 * toSnakeCase('hello-world') // 'hello_world'
 * toSnakeCase('helloWorld') // 'hello_world'
 * toSnakeCase('myComponentName') // 'my_component_name'
 */
export const toSnakeCase = (text: string): string =>
    text
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
