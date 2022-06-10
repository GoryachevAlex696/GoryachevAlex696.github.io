'use strict';
/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * 
 * @param {number} n Степень, должна быть натуральным числом.
 * 
 */

function factorial(n) { 

    if (n == 0)
        return 1;

    return (n * factorial(n - 1));
    
}