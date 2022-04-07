/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript/me/best_practice
*/

function moveZeros(arr) {
    return arr.sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0)
}

/* Top solutions analysis */
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
// alternative
var moveZeros = function (arr) {
    return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0))
}
// concatenating two arrays that are filtered on not 0 and 0


