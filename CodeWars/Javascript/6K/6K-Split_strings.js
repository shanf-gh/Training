/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
*/

function solution(str){
  
    let arr = [];
    for(let i = 0; i < str.length; i+=2 ) {
      
      arr.push(str[i] + (str[i+1] || "_"));
    }
    
    return arr;
    
  }

/* Top solutions analysis */
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }