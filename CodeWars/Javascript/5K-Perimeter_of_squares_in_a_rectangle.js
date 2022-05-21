/* 
Level: 5 kyuu
Link: https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript
*/

function perimeter(n) {
    let fib = [];
    
    for(let i = 0; i <= n; i++) {
      if(i < 2) {
        fib.push(1);
      } else {
        fib.push(fib[i-2] + fib[i-1]);
      }
    }
      
    return 4 * fib.reduce((sum, val) => sum + val, 0);
}

/* Top solutions analysis */