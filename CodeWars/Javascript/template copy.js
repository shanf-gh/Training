/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript
*/

function persistence(num) {
    let numToArray = (val) => val.toString().split('').map(Number);
    
    let product = numToArray(num);
    let count = 0;
    
    while(product.length > 1) {
      product = product.reduce((acc, val) => acc *= val, 1);
      product = numToArray(product);
      count++;
    }
    
    return count;
}
/* Top solutions analysis */

function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }