/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
*/

function solution(str, ending){
    return !ending || str.slice(-ending.length) === ending; 
}

/* Top solutions analysis */

function solution(str, ending){
    return str.endsWith(ending);
  }