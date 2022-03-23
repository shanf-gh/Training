/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
*/

function descendingOrder(n) {
    return Number(n.toString().split("").sort((a,b) => a>b? -1:1).join(""));
}

/* Top solutions analysis */
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

// n.toString() and String(n) are similar. I used a method of number while this solution used the String object to convert the number
// sort() sorts ascending by default, the .reverse() reverses that order

function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

// This solution is interesting for the callback function in the sort method.
// b - a is shortening my callback as if b > a the result is b will come before a.s