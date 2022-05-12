/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
*/

function oddOrEven(array) {
    return array.reduce((acc, val) => acc + val, 0) % 2 ? "odd" : "even";
}

/* Top solutions analysis */