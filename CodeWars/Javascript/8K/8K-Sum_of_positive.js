/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/

function positiveSum(arr) { 
    return arr.reduce((sum, val) => val > 0 ? sum += val : sum,0);
}

/* Top solutions analysis */