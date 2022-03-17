/* 
Level: 8 Kyuu
Link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num * num, 0);
}   

/* Reduce method of array has a syntax of:
    reduce(previousValue, currentValue, currentIndex, array) {}, initialValue);

*/

/* Top solutions analysis */