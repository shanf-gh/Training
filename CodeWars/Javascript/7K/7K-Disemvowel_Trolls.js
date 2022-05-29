/* 
Level: 7kyu
Link: https://www.codewars.com/kata/52fba66badcd10859f00097e
*/

function disemvowel(str) {
  return str.match(/[^aiueo]/gi).join('');
}


/* Top solutions analysis */

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// replace using regex to replace vowels with empty string
// This doesn't require excluding the regex and joining the resulting array from match as done in the solution.