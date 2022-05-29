/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript
*/
function digPow(n, p){
    // turn n into an array
    let nArr = n.toString().split('');
    
    // loop through each digit
    let sum = 0;
    for(let i = 0; i < nArr.length; i++) {
      sum += nArr[i] ** (p + i);
    }
    // compare sum with n
    if( (sum/n) % 1 === 0) {
      return sum/n;
    } else {
      return -1;
    }
}

/* Top solutions analysis */
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}