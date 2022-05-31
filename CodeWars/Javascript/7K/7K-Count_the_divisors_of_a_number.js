/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
*/

function getDivisorsCnt(n){
    if(n === 1) { return 1 };
  
    let count = 1;
    let mid = Math.ceil(n / 2);

    for(let i = 1; i <= mid; i++) {
      if(n % i === 0) {
        count++;
      }
    }

    return count;

}

/* Top solutions analysis */
function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
  }