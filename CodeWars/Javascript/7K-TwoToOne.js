/* 
Level: 7 Kyu
Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
*/

function longest(s1, s2) {
    return (s1+s2).split('').sort().reduce((acc, val) => acc.includes(val) ? acc : acc+=val);
}

/* Top solutions analysis */