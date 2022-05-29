/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
*/

decodeMorse = function(morseCode){
    console.log(morseCode);
    return morseCode.trim().split('   ').map(x => x.split(' ').reduce((word, char) => word += MORSE_CODE[char], '')).join(' ');
  }

/* Top solutions analysis */
