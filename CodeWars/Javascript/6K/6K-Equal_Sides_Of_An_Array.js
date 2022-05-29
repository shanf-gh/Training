/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
*/

function findEvenIndex(arr)
{
  for(let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0,i+1).reduce((sum, val) => sum + val, 0);
    let rightSum = arr.slice(i).reduce((sum, val) => sum + val, 0);
    
    if( leftSum === rightSum) {
      return i;
    }
  }
  
  // no match
  return -1;
}

/* Top solutions analysis */
function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}
