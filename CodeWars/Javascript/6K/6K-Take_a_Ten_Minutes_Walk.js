/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript
*/

function isValidWalk(walk) {
    if(walk.length === 10) {
      let finalMove = walk.reduce((acc, val) => {
        switch(val) {
            case 'n':
              acc[0]++;
              break;
            case 's':
              acc[0]--;
              break;
            case 'e':
              acc[1]++;
              break;
            case 'w':
              acc[1]--;
              break;
        }
        return acc;
      }, [0,0])
      return finalMove[0] === 0 && finalMove[1] === 0;
    } else {
      return false;
    }
  }

/* Top solutions analysis */