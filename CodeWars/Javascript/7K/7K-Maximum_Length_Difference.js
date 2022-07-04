/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
*/

function mxdiflg(a1, a2) {
    if(!a1.length || !a2.length) return -1;
    
    let aLengths = a1.map(x => x.length);
    let bLengths = a2.map(x => x.length);
    let aMin = Math.min(...aLengths);
    let aMax = Math.max(...aLengths);
    let bMin = Math.min(...bLengths);
    let bMax = Math.max(...bLengths);
    let aDiff = Math.abs(aMin - bMax);
    let bDiff = Math.abs(bMin - aMax);
    
    return aDiff > bDiff ? aDiff : bDiff; 
  }

/* Top solutions analysis */
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }