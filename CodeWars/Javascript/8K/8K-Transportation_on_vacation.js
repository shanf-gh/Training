/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
*/

function rentalCarCost(d) {
    const carCost = d * 40;
    let discount = 0;
    if(d >= 7) {
      discount = 50;
    } else if (d >= 3) {
      discount = 20;
    }
    
    return carCost - discount;
    
}

/* Top solutions analysis */