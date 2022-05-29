/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/54da5a58ea159efa38000836
*/

function findOdd(A) {

    // if only one value return that value
    if(A.length === 1) return A[0];
    
    // get object with count
    let uniqueObj = A.reduce((acc, currValue) => { 
      if(currValue in acc) {
        acc[currValue] += 1;
      } else {
        acc[currValue] = 1;
      }
      return acc;
    }, {})
    
    for(const value in uniqueObj) {
      if(uniqueObj[value] % 2 === 1) {
        return Number(value);
      }
    }
  
    // fallback
    return 0;
  }

/* Top solutions analysis */

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


// using bitwise operation. There is a good explanation in the solution section.
// In essence it accumulates the bitwise operations and if a value is already there it will cancel it out, then add it when it comes back up
// This solution work in this specific case because we're looking at only one number that is represented an odd number of time
// meaning that all other number will be cancelled by the time the reduce is done

function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
}

  // a bit more compact version of my code