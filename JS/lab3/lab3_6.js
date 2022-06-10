"use strict";

/**
 * 
 * @param {number} N - ����� ����� ��������* 
 * @returns {number} n -��� ����� ��������
 *  
 */
 function fib(n) { 

    let first_value = 0n, second_value = 1n, next = 1n;
    
if (n == 0)
 next = 0;
    else
    if (n >= 1)
        if (n >= 2) {
    for (let i = 2n; i < n; i++) {

        first_value = next;

             next = second_value + next;

                second_value = first_value;
    }
    

}

return next;

}

function fibs(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(fib(i));
    }
    return array;
}

