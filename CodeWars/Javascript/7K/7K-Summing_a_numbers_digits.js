/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/52f3149496de55aded000410/javascript
*/

function sumDigits(number) {
    return String(number).split('').reduce((sum, val) => {
      if(+val) {
        sum += +val;
      }
      return sum;
    }, 0)
  }
  

/* Top solutions analysis */
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}