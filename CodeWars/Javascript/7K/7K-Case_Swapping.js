/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript
*/

function swap(str){
    return str
        .split('')
        .map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())
        .join('')
}

/* Top solutions analysis */
function swapCase(x) { return x == x.toLowerCase() ? x.toUpperCase() : x.toLowerCase() }

function swap(str) { return str.split("").map(swapCase).join("") }
// The callback function for map is declared and defined separately. It makes the code cleaner and each function has a specific function.