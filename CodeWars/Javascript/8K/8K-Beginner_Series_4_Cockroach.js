/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
*/

function cockroachSpeed(s) {
    // input is in km/h  
    // output need to be in cm/s
  
    return Math.floor(s * 10000 / 360);
}

/* Top solutions analysis */
const cockroachSpeed = s => Math.floor(s / 0.036);