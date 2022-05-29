/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
*/

const findShort = (s) => s.split(" ").sort((a,b) => a.length < b.length ? -1 : a.length > b.length ? 1 : 0)[0].length;

// split string into array, sort it from shortest to longest, get first element then get its length.

/* Top solutions analysis */

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}

// Apply the Math.min method on the new array from s.split().map that has the length of the strings

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

// similar to above but using the spread operator