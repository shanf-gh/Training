/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/javascript
*/

function removeExclamationMarks(s) {
    return s.split('').filter((x) => x != '!').join('')
}

/* Top solutions analysis */

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}