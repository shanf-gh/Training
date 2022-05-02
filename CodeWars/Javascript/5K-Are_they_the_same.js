/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/550498447451fbbd7600041c/javascript
*/
function comp(array1, array2){
    if(array1 === null || array2 === null) {
      return false;
    } 
    
    a1 = array1.map(x => x * x).sort((a, b) => a - b);
    a2 = array2.sort((a, b) => a - b);
    
    for(let i = 0; i < a1.length; i++) {
      if(a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
}

/* Top solutions analysis */
