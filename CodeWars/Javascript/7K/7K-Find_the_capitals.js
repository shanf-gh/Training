/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
*/

var capitals = function (word) {
    return word.split('').reduce((arr, char, index) => {
      if(char === char.toUpperCase()) {
        arr.push(index);
      }
      return arr;
    }, []);
  };

/* Top solutions analysis */
