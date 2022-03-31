/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5264d2b162488dc400000001
*/

function spinWords(string){
    return string.split(' ').map(x => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ');
}

/* Top solutions analysis */

// top solution are very similar