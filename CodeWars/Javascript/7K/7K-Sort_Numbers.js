/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript
*/

function solution(nums){
    if(!nums || !nums.length) {
      return [];
    }
    
    return nums.sort((a, b) => a - b);
}

/* Top solutions analysis */
function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }