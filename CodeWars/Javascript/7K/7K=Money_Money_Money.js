/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
*/

function calculateYears(principal, interest, tax, desired) {
    let year = 0;
    while(principal < desired) {
      let interestAmount = principal * interest;
      let taxAmount = interestAmount * tax;
      principal += interestAmount - taxAmount;
      year++;
    }
    
    return year;
  }

/* Top solutions analysis */
function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}