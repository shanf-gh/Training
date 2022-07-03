/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
*/

function sumDigPow(a, b) {
    let resultArr = [];
    
    for(let i = a; i <= b; i++) {
      if(i === +String(i).split('').reduce((sum,val, index) => sum + val ** (index + 1),0)) {
        resultArr.push(i);
      }
    }
    return resultArr;
  }
  

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
function sumDigPow(a, b) {
    var ans = [];
    while(a <= b){
      if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
        ans.push(a);
      a++;
    }
    return ans;
  }