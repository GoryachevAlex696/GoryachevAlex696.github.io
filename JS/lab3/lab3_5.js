"use strict";

/**
 * 
 * @param {number} str полученная с клавиатуры строка
 * 
 *  
 */
 function camelize(str) {

    let symbol;
    let array_size = str.length;

    while(array_size != 0){

        if (str.includes("-")) {

            symbol = str.indexOf('-');
            str = str.slice(0, symbol) + str[symbol + 1].toUpperCase() + str.substring(symbol + 2);
            
        }
    array_size -= 1;
}
    return str;
}