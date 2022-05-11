/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript
*/

function printerError(s) {
    let regex = /[n-z]{1}/g;
    let error = s.match(regex);
    return `${error ? error.length : 0}/${s.length}`
}

/* Top solutions analysis */