/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
*/

function alphabetPosition(text) {
    const txtArr = text.toLowerCase().split('');
    
    return txtArr.reduce((acc, val) => {
      let charCode = val.charCodeAt(0);
      if(charCode >= 97 && charCode <= 122) {
        acc.push(charCode - 96)
      }
      return acc;
    }, []).join(' ');;
}
/* Top solutions analysis */

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }

  return result.slice(0, result.length-1);
}