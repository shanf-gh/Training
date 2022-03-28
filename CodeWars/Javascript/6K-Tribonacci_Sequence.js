/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/556deca17c58da83c00002db
*/

function tribonacci(signature,n){
    let newArr=signature; 
    if(n<3) {
      return signature.splice(0,n);
    }
    
    for(let i = 0; i < n - 3; i++) {
        newArr.push(newArr.slice(i).reduce((sum, x) => sum + x, 0));
    }
    return newArr;
  }

/* Top solutions analysis */

function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
  }

  // the slice is doing the work of my if statement.
  // One problem is that is mutates the parameter signature.

  function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
  }

  // This solution is better than the one above because it assigns the signature to a new variable.
  // Slice(-3) picks the last three values and reduce sums them
  // result.length is cleverly used here to add to the nth index. There is always +1 length compared to the index