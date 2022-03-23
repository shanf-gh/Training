/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
*/

var summation = function (num) {
    // Code here
    let sum =0;
    for(let i=1; i<=num;i++){
      sum += i;
    }
    return sum;
  }

/* Top solutions analysis */

// using math
const summation = n => n * (n + 1) / 2;

// using recursion
var summation = function f(num) {
    return num ? num + f(num-1) : 0;
}
