/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript/me/best_practice
*/

function moveZeros(arr) {
    return arr.sort((a, b) => a === 0 ? 1 : b === 0 ? -1 : 0)
}

/* Top solutions analysis */
