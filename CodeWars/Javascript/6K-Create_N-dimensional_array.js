/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/6161847f52747c0025d0349a/train/javascript
*/

const createNDimensionalArray = (n, size) => {
    let arr = [];
    
    for(let i = 0; i < size; i++) {
      arr.push(`level ${n}`);
    }
    
    let depth = n;
    let tempArr = [];
    while(depth > 1) {
      for(let j = 0; j < size; j++) {
        tempArr.push(arr);
      }
      arr = tempArr.slice();
      tempArr = [];
      depth--;
    }
    
    return arr;
}


/* Top solutions analysis */

const createNDimensionalArray = (n,s) => {
    let arr = Array(s).fill(`level ${n}`)
    for(let i=1;i<n;i++) arr = Array(s).fill(arr)
    return arr
}
// Array(s) creates an array of size s
// fill then fills the array with the value passed as argument
// array(s).fill(arr) is then used in a loop to fill arr into arr
