"use strict";

/**
 * 
 * @param {number} arr - неупорядоченный массив чисел
 * @returns {number} arrReverseSorted - отсортированный по убыванию массив
 *  
 */

 function arrReverseSorted(arr) {
    let a = [];
    arr = arr.split(',');
    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i]);
    }
    return a.sort((a, b) => b - a);
}