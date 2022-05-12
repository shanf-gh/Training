/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
*/

function divisors(integer) {
    let arr = []
    for(let i = 2; i <= Math.ceil(integer/2); i++) {
      if(integer % i === 0) {
        arr.push(i);
      } 
    }
    
    return arr.length ? arr : `${integer} is prime`;
};

/* Top solutions analysis */

function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};