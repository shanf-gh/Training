/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
*/

function findMissingLetter(array)
{
  let last = 0;
  let res = 0;
  for(let i = 0; i < array.length; i++) {
    let currentCharCode = array[i].charCodeAt(0);    
    if(last === 0 || currentCharCode === last + 1) {
      last = currentCharCode;
    } else {
      return String.fromCharCode(last+1);
    } 
  }
}

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }