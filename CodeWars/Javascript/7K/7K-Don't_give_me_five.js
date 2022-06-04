/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
*/

function dontGiveMeFive(start, end)
{
  let count = 0;
    
  for(let i = start; i <= end; i++) {
    let num = String(i).split('');
    if(!num.includes('5')) {
      count++;
    }
  }
  
  return count;
}

/* Top solutions analysis */
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }