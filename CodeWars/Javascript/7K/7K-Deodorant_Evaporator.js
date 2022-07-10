/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript
*/

function evaporator(content, evap_per_day, threshold){
    let i = 0;
    
    while((1-evap_per_day/100)**i > threshold/100) {
      i++;
    }
    
    return i;
  }

/* Top solutions analysis */
function evaporator(content, evap_per_day, threshold){ 
    threshold = threshold / 100
    evap_per_day = evap_per_day / 100
    return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
  }