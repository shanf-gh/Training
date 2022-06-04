/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
*/

function nbDig(n, d) {
    // n positive integer
    // d integer between 0 and 9 inclusive
    
    // square all numbers between 0 and n inclusive
    let count = 0;
    let digit = String(d);
    
    for(let k = 0; k <= n; k++) {
      let sqrArr = String(k**2).split('');
      sqrArr.forEach( x => {
        if (x === digit) {
          count++ 
        }
      });
    }
    
    return count;
}

/* Top solutions analysis */
function nbDig(n, d) {
    var res=0;
    for (var g=0;g<=n;g++){
        var square=(g*g+"").split("");
        square.forEach((s)=>s==d?res++:null)
    }
    return res;
}