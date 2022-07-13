/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
*/
function declareWinner(fighter1, fighter2, firstAttacker) {
    let fighter1Down = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    let fighter2Down = Math.ceil(fighter2.health / fighter1.damagePerAttack); 
    if(fighter1Down === fighter2Down) {
      return firstAttacker;
    } else if (fighter1Down > fighter2Down) {
      return fighter1.name;
    } else {
      return fighter2.name;
    } 
  }

/* Top solutions analysis */
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}