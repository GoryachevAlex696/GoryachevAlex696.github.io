"use strict";

/**
 * 
 * @param {number} str ���������� � ���������� ������
 * @return {number} New_String ������ � ��������� ������ ��������
 */
 function ucFirst(str){

    if(!str) return str;

    let New_String = str[0].toUpperCase() + str.slice(1)

    return New_String;

}