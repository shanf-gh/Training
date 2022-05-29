/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1
*/

function isIsogram(str){
  let formatStr = str.toLowerCase().split('').sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  
  for(let i = 0; i < formatStr.length; i++) {
    if(formatStr[i] === formatStr[i+1]) {
      return false;
    }
  }
  
  return true;
  
}

// string sort 

/* Top solutions analysis */

function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

// Create a set of unique caracters and compare its size to the length of the string
