/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
*/

function zeros (n) {
    // src: https://www.purplemath.com/modules/factzero.htm
    
    // calculate the number of multiple of 5 with increasing power/exponents
    let multiple = 0;
    let power = 1;
    let sum = 0;
    do {
      multiple = Math.floor(n / Math.pow(5, power));
      sum += multiple;
      power++;
    } while(multiple > 1)
    
    return sum;
    
}

/* Top solutions analysis */

function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}