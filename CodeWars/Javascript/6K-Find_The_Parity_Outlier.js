/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
*/

function findOutlier(integers){
    // determine if even or odd set
    let evenOddTest = [];
    for(let i = 0; i < 3; i++) {
      integers[i] % 2 ? 0 : evenOddTest.push(integers[i]);
    }
    let isEven = evenOddTest.length > 1 ? true : false;  
    
    for(let i = 0; i < integers.length; i++) {
      
      if(Math.abs(integers[i] % 2) === (isEven ? 1 : 0)) {
        return integers[i];
      }
    }
  }

/* Top solutions analysis */

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}