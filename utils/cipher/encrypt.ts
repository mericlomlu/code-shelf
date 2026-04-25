/**
 * Encrypts a plain text string using AES-256-GCM via the Web Crypto API.
 *
 * A random 12-byte IV is generated on every call and prepended to the ciphertext,
 * so the same input always produces a different output. The result is base64-encoded
 * and safe to store in cookies, localStorage, or pass as a URL param.
 *
 * Requires the Web Crypto API — available in all modern browsers and Next.js
 * (Node.js 16+) without any additional packages.
 *
 * @param {string} value - The plain text string to encrypt
 * @returns {Promise<string>} Base64-encoded string containing the IV + ciphertext
 *
 * @example
 * // Basic usage
 * const encrypted = await encrypt('sensitive data');
 *
 * @example
 * // Store an encrypted token in localStorage
 * const encrypted = await encrypt(token);
 * localStorage.setItem('token', encrypted);
 */

const ENCRYPTION_KEY = '********************************'; // Replace with process.env.ENCRYPTION_KEY — must be exactly 32 characters (AES-256)

export async function encrypt(value: string): Promise<string> {
    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(ENCRYPTION_KEY),
        { name: 'AES-GCM' },
        false,
        ['encrypt'],
    );

    const iv = crypto.getRandomValues(new Uint8Array(12));

    const ciphertext = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        new TextEncoder().encode(value),
    );

    const combined = new Uint8Array(iv.byteLength + ciphertext.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(ciphertext), iv.byteLength);

    return btoa(Array.from(combined, b => String.fromCharCode(b)).join(''));
}
