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