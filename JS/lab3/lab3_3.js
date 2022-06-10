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