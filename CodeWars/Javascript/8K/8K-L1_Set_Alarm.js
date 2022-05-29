/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
*/

function setAlarm(employed, vacation){
    // true if tru,false
    if(employed && !vacation) {
      return true;
    }
    return false;
}

/* Top solutions analysis */
const setAlarm = (employed, vacation) => employed && !vacation;