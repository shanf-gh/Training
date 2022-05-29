/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  return arrayOfSheep.reduce((p,c) => c ? p + 1 : p, 0);
}

/* Top solutions analysis */

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// using filter because the array is an array of booleans then getting the length of the array which would only contain true