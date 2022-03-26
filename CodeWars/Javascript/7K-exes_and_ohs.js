/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

function XO(str) {
    return str.toLowerCase().replace(/x/g,'').length === str.toLowerCase().replace(/o/g, '').length;
}

// replaceAll method didn't work for some reason
// replace using a regex with a global tag
// Could remove the toLowerCase() and add a i flag to the regex for case insensitiveness 

/* Top solutions analysis */

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

// str.match creates an array of the matched values
// x &&... and o && checks that those are not falsey/empty
// if they're both falsy the function will return true which is a condition of the challenge
// if they're not falsy the length can be checked against each other, return true if match, false if not.
