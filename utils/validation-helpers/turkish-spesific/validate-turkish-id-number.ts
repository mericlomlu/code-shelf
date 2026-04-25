/**
 * Validate a Turkish Republic ID number (TC Kimlik No).
 *
 * According to the algorithm described in:
 * https://en.wikipedia.org/wiki/Turkish_identification_number
 *
 * @param tckn The 11-digit TC Kimlik No as a string.
 * @returns Whether the given number is valid, according to the algorithm.
 */

export const validateTckn = (tckn: string): boolean => {
    if (tckn.length !== 11 || !/^\d+$/.test(tckn)) {
        return false;
    }

    const tc = tckn.split("").map(Number);

    const sum = tc.reduce((accumulator, number_) => accumulator + number_, 0);
    if (sum === 0) {
        return false;
    }

    let odds = 0;
    let evens = 0;

    for (let k = 0; k < 9; k++) {
        if (k % 2 === 0) {
            odds += tc[k];
        } else {
            evens += tc[k];
        }
    }

    const t1 = odds * 3 + evens;
    const c1 = (10 - (t1 % 10)) % 10;
    const t2 = c1 + evens;
    const t3 = t2 * 3 + odds;
    const c2 = (10 - (t3 % 10)) % 10;

    return c1 === tc[9] && c2 === tc[10];
};
