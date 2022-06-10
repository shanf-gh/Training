/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript
*/

function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[.; ]).{6,}$/.test(password);
}

/* Top solutions analysis */
function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
  }