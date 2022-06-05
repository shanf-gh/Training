/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/javascript
*/

function sortArray(array) {
    // getting all the odd numbers
    let oddArr = array.filter(x => x % 2).sort((a, b) => a - b);
    
    // replacing in arr
    let oddCount = -1; 
    return array.map(x => {
      if(x%2===0) {
        return x;
      } else {
        oddCount++;
        return oddArr[oddCount];
      }
    })
  }

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }