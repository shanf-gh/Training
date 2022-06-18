/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
*/
function high(x){
    let charCode = char => char.charCodeAt() - 96;
    let words = x.split(' ');
    let response = '';
    let responseScore = 0;
    
    words.forEach(word => {
      let score = word.split('').reduce((sum, char) => sum + charCode(char),0);
      if(score > responseScore) {
        response = word;
        responseScore = score;
      }
    });
    
    return response;
    
  }

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}