/**
 * Decrypts a base64-encoded AES-256-GCM ciphertext produced by `encryptValue`.
 *
 * Reads the 12-byte IV from the front of the payload, then decrypts the remaining
 * ciphertext. AES-GCM is authenticated — if the ciphertext was tampered with or
 * the wrong key is used, this will throw rather than return garbage.
 *
 * Requires the Web Crypto API — available in all modern browsers and Next.js
 * (Node.js 16+) without any additional packages.
 *
 * @param {string} encryptedValue - Base64-encoded string produced by `encryptValue`
 * @returns {Promise<string>} The original plain text string
 * @throws {DOMException} If the ciphertext is invalid, corrupted, or the key is wrong
 *
 * @example
 * // Basic usage
 * const plain = await decryptValue(encrypted);
 *
 * @example
 * // Read and decrypt a stored token
 * const encrypted = localStorage.getItem('token');
 * const token = encrypted ? await decryptValue(encrypted) : null;
 */

const ENCRYPTION_KEY = '********************************'; // Replace with process.env.ENCRYPTION_KEY — must be exactly 32 characters (AES-256)

export async function decryptValue(encryptedValue: string): Promise<string> {
    const combined = Uint8Array.from(atob(encryptedValue), c => c.charCodeAt(0));
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);

    const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(ENCRYPTION_KEY),
        { name: 'AES-GCM' },
        false,
        ['decrypt'],
    );

    const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        ciphertext,
    );

    return new TextDecoder().decode(decrypted);
}
