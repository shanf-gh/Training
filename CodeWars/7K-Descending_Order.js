/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
*/

function descendingOrder(n) {
    return Number(n.toString().split("").sort((a,b) => a>b? -1:1).join(""));
}

/* Top solutions analysis */