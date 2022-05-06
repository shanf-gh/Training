/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/5541f58a944b85ce6d00006a/javascript
*/

function productFib(prod){
    // Start at F(1) = 1
    let result = [1, 2];
    while(prod > result[0] * result[1]) {
      result.push(result[0] + result[1]);
      result.shift()
      if(result[0] * result[1] === prod) {
        result.push(true);
        return result;
      }
    }
    
    result.push(false);
    return result;
}

/* Top solutions analysis */
function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
      nPlus = n + nPlus;
      n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
}

// The inside if in my code was redundant. 
// When the product is equal to the prod, it will be greater than prod, which will break the loop.

function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

// Use of destructuring assignment
// swap a for the b value
// swap b for the sum of a and b
