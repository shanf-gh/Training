/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
*/

function sumArray(array) {
  
    // handle cases where arg is empty or has 2 items or less
    if(!array || array.length < 3) {
      return 0;
    }
    
    let min = Math.min(...array);
    let max = Math.max(...array);
    
    return array.sort().reduce((sum, val) =>  sum + val,0) - (min + max);
    
}

/* Top solutions analysis */
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0