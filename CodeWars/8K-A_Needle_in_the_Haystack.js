/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
*/

function findNeedle(haystack) {
    // your code here
    return `found the needle at position ${haystack.findIndex((el) => el === 'needle')}`
  }

/* Top solutions analysis */

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

// indexOf is a method of array that returns the first index at which a given element can be found