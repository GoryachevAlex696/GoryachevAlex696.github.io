'use strict';
/**
 * возращается анонимная фун-ия сравнения аргумента y
 * с x : false если y<x, true если y>x, иначе null
 * @param {numeric} x - число х 
 * @returns {function} - функция сравнения
 * 
 */
 function compare(x) {

    let result = function (y) {   

        if (y > x) return true

            else if (y < x) return false

        else return null;        
    }
    return result;
}