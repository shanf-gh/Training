/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
*/

var number = function(busStops){
    return busStops.reduce((sum, value) => sum + value[0] - value[1],0);
} 

/* Top solutions analysis */

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);