/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
*/

function createPhoneNumber(numbers){
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
  }

/* Top solutions analysis */

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}

// first step sets up a format
// second step replaces the x in the format string with the numbers by looping and replacing
// After each iteration, one x is replace and the next one can be replace in the next iteration
