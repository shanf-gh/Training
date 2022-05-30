/* 
Level: 4 kyuu
Link: https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript
*/
snail = function(array) {
    // define boundaries
    let top = 0;
    let left = 0;
    let bottom = array.length;
    let right = array.length;
    let snailArr = [];
    let count = array.length * array.length;
    let mid = Math.ceil(array.length / 2);
    
    if(array.length < 2) {
      snailArr = array[0];
    } else {
  //     snailArr.push(...array[top].slice(left, right))
  //     snailArr.push(array[1][right-1]);
  //     snailArr.push(...array[bottom-1].slice(left,right).reverse());
  //     snailArr.push(array[1][left]);
  //     left++;
  //     right--;
  //     snailArr.push(...array[top+1].slice(left, right))
      
      for(let outer = 0; outer < mid; outer++) {
        // top
        if(count === snailArr.length) { break};
        snailArr.push(...array[outer].slice(left + outer, right - outer))
        // right
        for(let i = outer + 1; i < right - outer - 1; i++) {
          snailArr.push(array[i][right - outer - 1]);
        }
          
        if(count === snailArr.length) { break};
        // bottom
        snailArr.push(...array[bottom - outer - 1].slice(left+outer,right-outer).reverse());
        
        // left
        for(let i = outer + 1; i < bottom - outer - 1; i++) {      
          snailArr.push(array[bottom - i - 1][left + outer]);
        }
      }
    }
    
    return snailArr;
  }


/* Top solutions analysis */
