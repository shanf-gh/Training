/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/530e15517bc88ac656000716/javascript
*/

function rot13(message){
    let regex = new RegExp('[^a-zA-Z]');
    return message.split('').map(x => {
      if(regex.test(x)) {
        return x;
      } else {
        let ROT13Code = x.charCodeAt(0) + 13;
        if((x === x.toLowerCase() && ROT13Code > 122) || (x === x.toUpperCase() && ROT13Code > 90)) {
          ROT13Code -= 26;
        }
        return String.fromCharCode(ROT13Code);
      }
    }).join('');
  }
/* Top solutions analysis */

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

// declare two variable containing the regular alphabet and the alphabet offset by 13 positions
// Use a regexp to replace any a-z, globally case-insensitive, finding the index of each character
// then returning the character at the same index in b


var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) { 
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}

// get the ascii char position in variable instead of hardcoding the values