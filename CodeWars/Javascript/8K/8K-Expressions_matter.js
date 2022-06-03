/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
*/

function expressionMatter(a, b, c) {
    console.log(a,b,c);
    let arr = [
      a + b * c,
      (a + b) * c,
      a * b * c,
      a * b + c,
      a * (b + c),
      a + b + c
    ]
    
    return Math.max(...arr);// highest achievable result
  }

/* Top solutions analysis */
