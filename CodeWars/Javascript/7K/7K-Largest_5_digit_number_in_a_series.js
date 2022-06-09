/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
*/

function solution(digits){
    let ans = 0;
    for(let i = 0; i <= digits.length - 4; i++) {
      const curr = +digits.substr(i, 5);
      if(curr > ans) {
        ans = curr;
      }
    }
    return ans;
}

/* Top solutions analysis */
