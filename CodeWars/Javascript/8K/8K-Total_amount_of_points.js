/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
*/

function points(games) {
    return games.reduce((acc, val) => {
      let scores = val.split(':');
      
      if(scores[0] > scores[1]) {
        acc += 3;
      } else if (scores[0] === scores[1]) {
        acc += 1;
      }
      
      return acc;
    }, 0);
    
}


/* Top solutions analysis */