/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript 6K-convert_string_to_camel_case
*/

function toCamelCase(str){
    if(!str) return str;
    
    let words = str.split(/[-_]/g);
    
    return words.reduce((fullStr, val, index) => {
      let firstLetter = val[0];
      let word = firstLetter.toUpperCase() + val.substr(1);
      if(index === 0 && word !== val) {
        word = val;
      }
      
      return fullStr + word;
    }, '');
}

/* Top solutions analysis */

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}

// Targets letters after a dash or underscore and replace it with the uppercase of the letter
// Targeting the special character bypass the first word