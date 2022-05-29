/* 
Level: 5 kyuu
Link: https://www.codewars.com/kata/5270d0d18625160ada0000e4/javascript
*/

function score( dice ) {
    let throwObj = dice.reduce((acc, val) => {
      if(val in acc) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
      return acc;
    }, {});
  
    
    let score = 0;
    for(let key in throwObj) {
      if(key == 5 ){
       if(throwObj[key] >= 3) {
          score += 500 + (throwObj[key] - 3) * 50;
        } else {
          score += throwObj[key] * 50;
        }
      } else if(key >= 2 && key <= 6 && throwObj[key] >= 3) {
        score += key * 100;
      } else if (key == 1){
        if(throwObj[key] >= 3) {
          score += 1000 + (throwObj[key] - 3) * 100;
        } else {
          score += throwObj[key] * 100;
        }
      }
    }
    return score;
}

/* Top solutions analysis */
function score( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){ 
      return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
}
  