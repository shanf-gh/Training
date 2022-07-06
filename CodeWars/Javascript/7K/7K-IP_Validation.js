/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
*/

function isValidIP(str) {
    return str.split('.').length === 4 && str.split('.').every(val => {
      if(val.length !== String(+val).length) {
        return false;
      }
      return +val >= 0 && +val <=255
    });
  }

/* Top solutions analysis */
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

// Other solution

function isValidIP(str) {
    var p = str.split('.');
    return p.length == 4 && p.every(function(s) {
      return /^\d+$/.test(s) && s >= 0 && s <= 255;
    });
  }