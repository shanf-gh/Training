/* 
Level: 7 kyu
Link: Highest and Lowest
*/

function highAndLow(numbers){
    let numArr = numbers.split(" ").sort((a, b) => a-b);
    return `${numArr[numArr.length-1]} ${numArr[0]}`
}

/* Top solutions analysis */

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// .map(Number) converts all the elements to Number but it is not necessary here since we're going to implicitly convert them.
// The apply method calls the max/min functions with the array to apply on it.
// Math.min and max accept a list of numbers but not an object as argument

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// the ... is the spread syntax. It expands the array in a list