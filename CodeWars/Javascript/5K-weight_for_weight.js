/* 
Level: 5 kyuu
Link: https://www.codewars.com/kata/55c6126177c9441a570000cc
*/

function orderWeight(strng) {
  // split the string into an array of string/numbers
  // split the string again and sum values
  // order
  return strng.split(' ').sort((a, b) => {
    let valA = a.split('').reduce((acc, val) => acc + +val, 0);
    let valB = b.split('').reduce((acc, val) => acc + +val, 0);
    
    if(valA < valB) {
      return -1; 
    } else if(valA > valB) {
      return 1;
    } else {
      if(a < b) {
        return -1;
      } else {
        return 1;
      }
    }
    return 0;
  }).join(' ');
}

/* Top solutions analysis */
function orderWeight(strng) {
    const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
     function comp(a,b){
       let sumA = sum(a);
       let sumB = sum(b);
       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
      };
    return strng.split(' ').sort(comp).join(' ');
}