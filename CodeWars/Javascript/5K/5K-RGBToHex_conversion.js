/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/513e08acc600c94f01000001/javascript
*/

function rgb(r, g, b){
    return convertToHex(r)+convertToHex(g)+convertToHex(b);  
  }
    
  function convertToHex(int) {
    if(int <= 0) {
      return "00";
    } else if (int >= 255) {
      return "FF";
    } else {
      return int.toString(16).toUpperCase().padStart(2,0);
    }
  }

/* Top solutions analysis */
