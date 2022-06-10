'use strict'

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} n Натуральное число.
 * @param {number} result сумма.
 */

 function sumTo(n) {
    let result = 0;
  
    for (let i = 1; i <= n; i++) {
      result += i;
    }
  
    return result;
  }