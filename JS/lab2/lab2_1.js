'use strict';
/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @param {number} result, возведённое в n-ную степень.
 */
function pow(x, n) {
    let result = x;
    if ((n == 0) && (n < 0)) {
        result = 1;
    }
    else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    }

    return result;
}