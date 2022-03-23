/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
*/

function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.reduce((pv, cv) => {
        typeof cv !== 'string' ? pv.push(cv) : ''; 
        return pv;
    },[]);  
}

/* Top solutions analysis */

function filter_list(l) {
    return l.filter(v => typeof v == "number")
}

// filter() method creates a new array with the elements that pass the test in the function