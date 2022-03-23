/* 
Level: 7kyu
Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

function getCount(str) {
    let vowels = ['a','e', 'i', 'o', 'u'];
    
    return str.split('').filter(x => vowels.includes(x)).length;
  }

/* Top solutions analysis */
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

// This solution uses the match method of string with a regexp.
// The ||[] is to handle null input. Because the str.match() would be falsy and go to the second expression