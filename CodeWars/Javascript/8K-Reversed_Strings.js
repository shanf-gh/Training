/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
*/

function solution(str){
  
    let reversedString = '';
    
    for(let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    
    return reversedString;
    
  }

/* Top solutions analysis */

function solution(str){
    return str.split('').reverse().join('');  
  }

// split() method is splitting the string into an array of letters
// reverse() method is reversing the array
// join () method is used to concatenate all the elements of the array