/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
*/

// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    let sortedAges = ages.slice().sort((a, b) => b - a);
    
    return [sortedAges[1], sortedAges[0]];
  }
  

/* Top solutions analysis */
// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
}