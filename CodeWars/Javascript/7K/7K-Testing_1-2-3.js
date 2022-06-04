/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
*/
var number=function(array){
    if(!array.length) { return array };
    
    return array.map((x, i) => `${i+1}: ${x}`);
}


/* Top solutions analysis */
var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }