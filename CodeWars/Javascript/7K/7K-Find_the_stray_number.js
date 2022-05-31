/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/57f609022f4d534f05000024/javascript
*/

function stray(numbers) {
    let numCount = {};
    
    numbers.map(x => (x in numCount) ? numCount[x]++ : numCount[x] = 1);
    
    for(key in numCount) {
      if(numCount[key]===1){
        return Number(key);
      }
    }
}

/* Top solutions analysis */
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}