/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
*/

String.prototype.camelCase=function(){
    let str = this;
    return str.split(' ').map(word => word === "" ? "" : word[0].toUpperCase() + word.slice(1)).join('');
}

/* Top solutions analysis */
String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }