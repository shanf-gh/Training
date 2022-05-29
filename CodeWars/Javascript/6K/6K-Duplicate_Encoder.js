/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript
*/

function duplicateEncode(word){
    let count = {};
    let wordArr = word.toLowerCase().split('');
    wordArr.map((val) => {
      val in count ? count[val]++ : count[val] = 1
    });
    
    let newString = '';
    for(let i = 0; i < wordArr.length; i++) {
      const char = wordArr[i];
      if(count[char] > 1) {
        newString += ')';
      } else {
        newString += '(';
      }
    }
    return newString;
  }
  

/* Top solutions analysis */
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}