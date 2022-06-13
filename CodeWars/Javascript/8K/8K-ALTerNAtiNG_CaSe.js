/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
*/

String.prototype.toAlternatingCase = function () {
    return this.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');
}

/* Top solutions analysis */
