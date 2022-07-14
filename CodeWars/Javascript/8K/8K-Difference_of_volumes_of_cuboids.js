/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
*/

function findDifference(a, b) {
    return Math.abs(a.reduce((a,b) => a * b, 1) - b.reduce((a,b) => a * b, 1))
}

/* Top solutions analysis */
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }