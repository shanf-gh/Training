/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
*/

const sequenceSum = (begin, end, step) => {
    if(begin > end) return 0;
    
    let sum = 0;
    for(let i = begin; i <= end; i += step) {
      sum+=i;
    }
    return sum;
  };

/* Top solutions analysis */
const sequenceSum = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
      sum += i;
    }
    return sum;
  };