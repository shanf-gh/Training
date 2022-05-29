/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
*/

function removeSmallest(numbers) {
    let index = numbers.indexOf(Math.min(...numbers));
    let number = numbers[index];
    let numArr = numbers.slice();
    numArr.splice(index, 1)
    return numArr;
  }

/* Top solutions analysis */
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}