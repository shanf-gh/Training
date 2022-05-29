/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/5875b200d520904a04000003/javascript
*/

function enough(cap, on, wait) {
    return cap > on + wait ? 0 : (wait + on) - cap;
}

/* Top solutions analysis */
