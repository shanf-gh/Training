/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/javascript
*/

// write the function isAnagram
var isAnagram = function(test, original) {
    let str1 = test.toLowerCase().split('').sort().join('');
    let str2 = original.toLowerCase().split('').sort().join('');
    
    return str1 === str2;
  };
  
/* Top solutions analysis */
// write the function isAnagram
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };