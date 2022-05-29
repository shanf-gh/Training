/* 
Level: 5 kyuu
Link: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
*/

function firstNonRepeatingLetter(s) {
    // Parameter is a string
    // Return one character
    // Example: see tests
    // Pseudocode:
    if(s.length === 1) {
      return s;
    }
    
    for(let i = 0; i < s.length; i++) {
      if((s.match(new RegExp(s[i],'gi')) || '').length === 1) {
        return s[i];
      }
    }
    
    return "";
}

/* Top solutions analysis */

function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
}