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
    if (n == 0) {
        result = 1;
    }
    else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    }

    return result;
}

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} n Степень, должна быть натуральным числом.
 * @param {number} result, возведённое в n-ную степень.
 */

 function sumTo(n) {
    let result = 0;
  
    for (let i = 1; i <= n; i++) {
      result += i;
    }
  
    return result;
  }

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

'use strict';
/**
 * @param {number} n - число чисел Фибоначи* 
 * @returns {number} - n-ное число Фибоначи
 * 
 */

function fib(n) { 

    if (n <= 2n)
        return 1;
    else{
       

        let First_Value = 0n, Second_Value = 1n, Next;

        for (let i = 2n; i < n; i++) {

            Next = First_Value + Second_Value;

                First_Value = Second_Value;

                    Second_Value = Next;


        }
        

    return Next;

    }
    
}

'use strict';
/**
 * возращается анонимная фун-ия сравнения аргумента y
 * с x : false если y<x, true если y>x, иначе null
 * @param {numeric} x - число х 
 * @returns {function} - функция сравнения
 * 
 */
 function compare(x) {

    let result = function () {   

        if (y > x) return true

            else if (y < x) return false

        else return null;        
    }
    return result();
}

'use strict';
/**
 * Напишите функцию printNumbers(), которая принимает два целочисленных значения:
 *  num - конечное число
 *   cols - количество колонок
 * @param {number} num - число
 * @param {number} cols - к-во столбцов 
 * @returns {string} - выввод результата
 * 
 */
 function printNumbers(num, cols) {
     let string1 = ""

     let rows = Math.ceil(num / cols); //кол-во строк округлено в большую сторону

     for (let row = 0; row < rows; ++row) {

         let string = ' ';

         for (let col = 0; col < cols; ++col) {

             if ((row + rows * col) < num)

             string += (row + rows * col) + ' ';
         }

         string1 += str + "\n";       
    }
    return string1;
}