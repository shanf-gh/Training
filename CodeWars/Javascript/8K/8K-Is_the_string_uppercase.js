/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
*/

String.prototype.isUpperCase = function() {
    const str = [...this].join('');
    return str.toUpperCase() === str;
}

/* Top solutions analysis */
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}