/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript
*/

function anagrams(word, words) {
    return words.reduce((acc, value) => {
      const sortedValue = value.split('').sort((a,b) => a < b ? 1 : -1).join('');   
      const sortedWord = word.split('').sort((a,b) => a < b ? 1 : -1).join('');
      
      if(sortedValue === sortedWord) {
        acc.push(value);
      }
      
      return acc;
    }, [])
}

/* Top solutions analysis */
