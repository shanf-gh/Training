/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
*/

function deleteNth(arr,n){
    let countObj = {};
    
    return arr.reduce((arr, curr) => {
      if(curr in countObj) {
        if(countObj[curr] < n) {
          arr.push(curr);
        }
        countObj[curr]++;
      } else {
        arr.push(curr);
        countObj[curr] = 1;
      }
      return arr;
    }, []);
}


/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }