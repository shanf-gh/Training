/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
*/

function century(year) {
    // Finish this :)
    return Math.floor(year / 100) + (year % 100 === 0 ? 0 : 1);
  }

/* Top solutions analysis */

const century = year => Math.ceil(year/100)

// ceil rounds up to the nearest century