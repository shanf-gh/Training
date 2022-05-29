/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/541c8630095125aba6000c00
*/

function digital_root(n) {
    let root = n.toString().split('').map(Number).reduce((sum, val) => sum + val, 0);
     
    return root >= 10 ? digital_root(root) : root; 
}



/* Top solutions analysis */

function digital_root(n) {
    return (n - 1) % 9 + 1;
}

// this is math...

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

// Checks if the value is less than 10 (one digit), returns n if true
// return statement is recursive. The string to number step is handled in the reduce with the +d (digit?)
