/* 
Level: 7 kyu
Link: https://www.codewars.com/kata/5bc052f93f43de7054000188/solutions/javascript
*/

function solve(a,b){

    if(a===b) {
      return true;
    } else if(!a.includes('*')) {
      return false;
    } else {
      return b.match(new RegExp('^'+a.replace('*','[a-z]*')+'$'),'i') ? true : false;
    }
    
  }

/* Top solutions analysis */
const solve =(a,b) => new RegExp(`^${a.replace('*','.*')}$`).test(b);
