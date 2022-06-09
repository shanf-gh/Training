/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
*/

function towerBuilder(nFloors) {
  
    // calculate the length of base
    const base = (nFloors - 1) * 2 + 1;
    
    let tower = [];
    
    for(let i = 0; i < nFloors; i++) {
      let towerBody = "*".repeat(i * 2 + 1);
      let towerSpace = " ".repeat((base - (i * 2 + 1)) / 2);
      tower.push(towerSpace + towerBody + towerSpace);
    }
    return tower;
}

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }