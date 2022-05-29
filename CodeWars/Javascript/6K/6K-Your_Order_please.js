/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
*/

function order(words){
    if(!words) return words;
    // split the string into words
    // identify the number
    // 
    let regex = /\d/g; 
    let wordsArr = words.split(' ');
    let wordObj = {};
    
    wordsArr.map(word => {
      let num = word.match(regex);
      wordObj[num] = word;
    });
    
    let newArr = [];
    
    for(let i = 1; i <= wordsArr.length; i++) {
      newArr.push(wordObj[i]);
    }
    
    return newArr.join(' ');
}

/* Top solutions analysis */
function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
}    