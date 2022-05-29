/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
*/

function narcissistic(value) {
    // get the length of current number
    let number = value.toString().split('');
    let len = number.length;
    // get the sum of each digit raised to the number of digits
    let sum = number.reduce((sum, val) => sum + Math.pow(+val, len), 0);
    
    return sum === value;
}
  

/* Top solutions analysis */
