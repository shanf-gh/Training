/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/javascript
*/
function findSum(n) {
    let sum = 0;
    
    for(let i = 0; i <= n; i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i;
      }
    }
    
    return sum;
  }
/* Top solutions analysis */
