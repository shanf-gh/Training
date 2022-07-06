/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript
*/

// Return the nth triangular number
function triangular( n ) {
    if (n <= 0) {
      return 0;
    } else {
      return (n * (n + 1))/2;
    }
  }
  

/* Top solutions analysis */
// Return the nth triangular number
function triangular( n ) {
    return (n > 0) ? ((n * n) + n) / 2 : 0;
  }