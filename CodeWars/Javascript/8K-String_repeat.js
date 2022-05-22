/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/javascript
*/

function repeatStr (n, s) {
    let repeatedString = '';
    for(let i = 0; i < n; i++) {
      repeatedString += s;
    }
    
    return repeatedString;
  }

/* Top solutions analysis */

function repeatStr (n, s) {
    return s.repeat(n);
}