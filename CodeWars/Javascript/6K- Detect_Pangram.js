/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
*/

function isPangram(string){
    let chars = string.toLowerCase().split('').filter(char => char.match(/[a-z]/g));
    
    let collection = chars.reduce((coll, char) => {
      if(!coll.includes(char)) {
        coll.push(char);
      }
      return coll;
    }, []);
      
    return collection.length === 26;
}

/* Top solutions analysis */
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// This is checking that every letter of the alphabet is present in the string. If it find an element that isn't, the function will return false.
// If it doesn't return false, it means that it checked all letters and they all appear at least once in the string