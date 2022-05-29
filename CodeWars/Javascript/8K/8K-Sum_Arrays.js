/* 
Level: 8 kyu
Link: https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
*/

// Sum Numbers
function sum (numbers) {
    "use strict";
    
    return numbers.length ? numbers.reduce((acc, val) => acc + val,0.0) : 0;
};

/* Top solutions analysis */

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}