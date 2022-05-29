/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript
*/

function findUniq(arr) {
    let countObj = {};
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] in countObj) {
        countObj[arr[i]]++;
      } else {
        countObj[arr[i]] = 1;
      }
    }
    
    for(const key in countObj) {
      if(countObj[key] === 1) {
        return Number(key);
      }
    }
}

/* Top solutions analysis */

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}
