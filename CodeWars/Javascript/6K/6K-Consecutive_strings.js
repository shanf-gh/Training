/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
*/

function longestConsec(strarr, k) {
    // your code
  if (k <= 0 || strarr.length <= 0 || k >= strarr.length) return '';
  console.log(strarr);
  let consArr = [];
  
  for(let i = 0; i < strarr.length - k + 1; i++) {
//     console.log(strarr.slice(i, i + k));
    consArr.push(strarr.slice(i, i + k).join(''));
  }
  let longest = consArr.reduce((sumArr, val) => {
    if(sumArr[0]) {
      if(val.length > sumArr[0].length) {
        sumArr = [val];
      } else if (val.length === sumArr[0].length) {
        sumArr.push(val);
      }
    } else {
        sumArr.push(val);
    }    
    
    return sumArr;
  },[])
  
  return longest[0]
}

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}