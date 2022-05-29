2/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
*/

function pigIt(str){
  
    // 1. split string in to array
    // 2. Loop through each element
    // 3. for each element move first letter to the end and add ay
    // 4. join the array
    // 5. return the string
    
    return str.split(' ').map( word => { 
        if(word === '!' || word === '?') {
          return word;
        }
        let arr = word.split('');
        arr.push(arr.shift());
        return arr.join('') + 'ay'}
      ).join(' ');
    
  }

/* Top solutions analysis */

function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

// regex selecting the different parts of the regex then adding the ay.

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
}

// Selects words with letters, this skips any punctuation