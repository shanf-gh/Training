/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
*/

function accum(s) {
    return s.split('').map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i)).join('-');
}

// My solution is the same as the top solution

/* Top solutions analysis */