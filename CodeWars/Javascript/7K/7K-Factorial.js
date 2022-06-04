/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
*/

function factorial(n)
{
  if(n < 0 || n > 12) {
    throw 'RangeError';
  }
  
  if(n === 0) {
    return 1;
  } else {
    let res = 1;
    for(let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  }
  
}

/* Top solutions analysis */
function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }