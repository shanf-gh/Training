/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
*/
function removeChar(str){
    return str.substring(1,str.length-1);
};

/* Top solutions analysis */
function removeChar(str) {
    return str.slice(1, -1);
}