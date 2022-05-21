/* 
Level: 5 kyuu
Link: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
*/

// FAILED



/* Top solutions analysis */

function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
}

// first line tests if last character of input is a character or a number, append 1 if not a number and return
// use replace method of string, first param is a regex targetting group of 0 + group of 0 to 9 at the end of the string
// second param is the replacer function to replace the match
// create a variable to store p2 (digit values) incremented
// in the return, check if the length of up is larger than the length of digits. 
// If it is,  slice the non-digit to the penultimate character and append up
// if it isn't, append to p1 (non-digit)