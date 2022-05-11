/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
*/

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if(Math.sqrt(sq)%1) {
      return -1;
    }
    
    return Math.pow(Math.sqrt(sq) + 1,2)
    
}


/* Top solutions analysis */