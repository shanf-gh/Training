/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
*/

function duplicateCount(text){
    let unique = [];
    let duplicate = [];
    text.toLowerCase().split('').map(x => {
      if(!unique.includes(x)) {
        unique.push(x);
      } else if(!duplicate.includes(x)) {
        duplicate.push(x);
      }
    })
    return duplicate.length;   
}

/* Top solutions analysis */
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}