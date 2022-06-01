/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
*/


function isPrime(num) {
    let numIsPrime = false;
    
    // negative number, 0 and 1 are not prime
    if(num === 2 || num === 3) {
      numIsPrime = true;
    } else if (num > 3) {
      // check last digit
      let numArr = String(num).split('');
      let isEven = numArr[numArr.length - 1] % 2 === 0;
      let sumIsMultipleOfThree = numArr.reduce((sum, val) => sum + val, 0) % 3 === 0;
      
      if(!isEven && !sumIsMultipleOfThree) {
        let sqrt = Math.sqrt(num);
        numIsPrime = true;
        for(let i = 2; i <= sqrt; i++) {
          if(num%i===0) {
            numIsPrime = false;
            break;
          }
        }
      }
    }
    return numIsPrime;
    
  }
  


/* Top solutions analysis */

function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}

// ################################
// TOP SOLUTION 1 
// ################################