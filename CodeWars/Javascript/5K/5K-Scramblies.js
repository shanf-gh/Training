/* 
Level: 5 kyuu
Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
*/


// FAILED
function scramble(str1, str2) {
    
    let tempstr1 = str1.split('').sort();
    let tempstr2 = str2.split('').sort();
    let lastIndex = 0;
    
    for(let i = 0; i < tempstr2.length; i++) {
      let str2Index = tempstr1.indexOf(tempstr2[i], lastIndex);
      if(str2Index === -1) {
        return false;
      } else {
        lastIndex = str2Index + 1;
      }
    }
    
    return true;
  }
  

/* Top solutions analysis */
function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);
}

// Create an object occurences that uses each character as key and the number of occurences as value
// The every function substracts one in the object for each character in str2 that matches
// If there isn't the function returns NaN and returns false.