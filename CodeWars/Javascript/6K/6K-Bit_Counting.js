/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript
*/

var countBits = function(n) {
    return n === 0 ? n : n.toString(2).split('').reduce((sum, val) => sum + +val, 0);
  };

/* Top solutions analysis */

countBits = n => n.toString(2).split('0').join('').length;

