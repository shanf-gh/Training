/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
*/

function wave(str){
    let res = [];
      
    for(let i = 0; i < str.length; i++) {
      if(str[i] !== ' ') {
        let newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1);
        res.push(newStr);
      }
    }
    return res;
  }

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}