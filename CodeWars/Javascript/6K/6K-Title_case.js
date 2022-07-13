/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
*/

function titleCase(title, minorWords) {
    if(title === '') {
      return '';
    } 
    
    // ensure minorWords is always lowercase
    const list = minorWords ? minorWords.split(' ').map(word => word.toLowerCase()) : [''];
  
    return title.split(' ').map((word, index) => {
      if(list.indexOf(word.toLowerCase()) >= 0 && index !== 0) {
        console.log(list)
        return word.toLowerCase();
      } else {
        let newWord = word[0].toUpperCase() 
        newWord += word.length > 1 ? word.slice(1).toLowerCase() : '';
        return newWord;
      }
    }).join(' ');
    
    
  }
  
  

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function titleCase(title, minorWords) {
    var minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
      if(v != "" && ( (minorWords.indexOf(v) === -1) || i == 0)) {
        v = v.split('');
        v[0] = v[0].toUpperCase();
        v = v.join('');
      }
      return v;
    }).join(' ');
  }