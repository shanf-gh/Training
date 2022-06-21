/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
*/

function expandedForm(num) {
    return String(num).split('').reverse().map((x, i) => x * (10 ** i)).reverse().filter((x) => x !== 0).join(' + ');
}

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");