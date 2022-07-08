/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let validCode = enteredCode === correctCode;
    let validDate = new Date(currentDate) <= new Date(expirationDate);
    return validCode && validDate;
  }

/* Top solutions analysis */
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
  }