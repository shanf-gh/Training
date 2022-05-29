/* 
Level: 7kyu
Link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript
*/
// FAILED
function validatePIN (pin) {
    let regex = /^(\d{4}|\d{6})$/g;
    return regex.test(pin);
}

/* Top solutions analysis */