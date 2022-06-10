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

         string1 += string + "\n";       
    }
    return string1;
}