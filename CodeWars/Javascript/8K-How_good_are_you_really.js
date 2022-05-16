/* 
Level: 8kyuu
Link: https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
*/

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, val) => acc + val,0) / classPoints.length < yourPoints;
}  

/* Top solutions analysis */