"use strict";
/**
 * 
 * @param {number} num �������� � ���������� �����
 * @return {number} str ������� ����� ����� num
 */

 function getDecimal(num) {
    
    let result = num - Math.floor(num);

    return result;
  }