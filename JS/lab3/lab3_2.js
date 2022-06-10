"use strict";

/**
 * 
 * @param {number} str полученная с клавиатуры строка
 * @return {number} New_String строка с заглавным первым символом
 */
 function ucFirst(str){

    if(!str) return str;

    let New_String = str[0].toUpperCase() + str.slice(1)

    return New_String;

}