"use strict";
/**
 * 
 * @param {number} num вводимое с клавиатуры число
 * @return result дробная часть числа num
 */

 function getDecimal(num) {
    
    let result = num - Math.floor(num);

    return result;
  }



/**
 * 
 * @param {string} str полученная с клавиатуры строка
 * @return  new_string строка с заглавным первым символом
 */
function ucFirst(str) {

    if (!str) return str;

    let new_string = str[0].toUpperCase() + str.slice(1);

    return new_string;

}

/**
 * 
 * @param {number} str полученная с клавиатуры строка
 * @return если спам - true, иначе - false
 * 
 */
function checkSpam(str) {

    str = str.toLowerCase();

    return str.includes('xxx') || str.includes('viagra');

}


/**
 * 
 * @param {number} str полученная с клавиатуры строка
 * @param {number} maxlength максимальный размер строки
 * @return  возвращаем усечённую строку
 *  
 */
function truncate(str, maxlength) {

    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '\u{2026}';
    return str;
}

/**
 * 
 * @param {string} str полученная с клавиатуры строка
 * @return return  возвращаем изменённую строку
 *  
 */
function camelize(str) {

    let symbol;
    let array_size = str.length;

    while (array_size != 0) {

        if (str.includes("-")) {

            symbol = str.indexOf('-');
            str = str.slice(0, symbol) + str[symbol + 1].toUpperCase() + str.substring(symbol + 2);

        }
        array_size -= 1;
    }
    return str;
}

/**
 * 
 * @param {number} N - число чисел Фибоначи* 
 * @returns {number} n -ное число Фибоначи
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

/**
 * 
 * @param {number} arr - неупорядоченный массив чисел
 * @returns {number} arrReverseSorted - отсортированный по убыванию массив
 *  
 */

 function arrReverseSorted(array) {
     let arr = [];

     array = array.split(',');

     for (let i = 0; i < array.length; i++) {
         arr.push(array[i]);
     }
     return arr.sort((arr, s) => s - arr);
 }

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







