/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
    console.log(arr);
    let count = 0;
    const regex = /[;:]+[-~]{0,1}[)D]+/g;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].match(regex)) {
        count++;
      }
    }
    return count;
  }


/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}