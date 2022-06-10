"use strict";

/**
 * 
 * @returns {number} sum - возвращает сумму всех своих аргументов
 * 
 *  
 */

 function sum(...array) {
    let sum = 0;
    for (let i of array)
        sum += i;
    return sum;
}   