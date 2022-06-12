/* 
Level: 4 kyu
Link: https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript
*/

function validSolution(board){
    // row validation
    let validArr = [1,2,3,4,5,6,7,8,9];
    const GRID_SIZE = 9;
    // loop through each row
    for(let i = 0; i < GRID_SIZE; i++) {
      let row = board[i].slice().sort((a, b) => a - b);
      // loop through row and compare against validArr
      for(let j = 0; j < GRID_SIZE; j++){
        if(row[j] !== validArr[j]) {
          // arrays are not equal
          return false;
        }
      }
    }
  
    // No need to check for 0 as it is handled by row validation already
    // column validation
    let blocks = [[],[],[],[],[],[],[],[],[]];
    for(let i = 0; i < GRID_SIZE; i++) {
      let column = [];
      // build up column array
      for(let j = 0; j < GRID_SIZE; j++) {
        column.push(board[j][i]);
        // build block array while looping through all cells
        let blockX = Math.floor(i/3);
        let blockY = Math.floor(j/3) * 3;
        blocks[blockX + blockY].push(board[j][i])
      }
      // sort
      column = column.sort((a, b) => a - b);
      // loop through row and compare against validArr
      for(let k = 0; k < GRID_SIZE; k++){
        if(column[k] !== validArr[k]) {
          // arrays are not equal
          return false;
        }
      }
    }
    
    // block validation
    for(let i = 0; i < GRID_SIZE; i++) {
      let row = blocks[i].slice().sort((a, b) => a - b);
      // loop through row and compare against validArr
      for(let j = 0; j < GRID_SIZE; j++){
        if(row[j] !== validArr[j]) {
          // arrays are not equal
          return false;
        }
      }
    }
    // row, column and block validation passed
    return true;
}

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
function equals45(n){
    return n == 45;
  }
  
  function validSolution(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }