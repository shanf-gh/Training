/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
*/

function queueTime(customers, n) {
    console.log(customers);
    console.log(n);
    if(customers.length === 0) {
      return 0;
    } else if(n >= customers.length) {
      return Math.max(...customers);
    } else {
      // less tills than customers
      let tillsTime = [];
      for(let i = 0; i < customers.length; i++){
        // populate each till first
        let custTime = customers[i];
        if(tillsTime.length < n) {
          tillsTime.push(custTime);
        } else {
          // all tills are taken, find the one that finishes next
          let nextTill = tillsTime.indexOf(Math.min(...tillsTime));
          tillsTime[nextTill] += custTime;
        }
      }
      
      return Math.max(...tillsTime);
    }
    
  }

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################
function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
      let idx = w.indexOf(Math.min(...w));
      w[idx] += t;
    }
    return Math.max(...w);
}