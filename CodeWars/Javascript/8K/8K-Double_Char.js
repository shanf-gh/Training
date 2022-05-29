/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
*/

function doubleChar(str) {
    return str.split('').reduce((acc, val) => acc + val + val, '');
  }


/* Top solutions analysis */
const doubleChar = (str) => str.split("").map(c => c + c).join("");