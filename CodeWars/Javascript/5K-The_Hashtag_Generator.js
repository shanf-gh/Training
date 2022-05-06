/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52449b062fb80683ec000024/javascript
*/

function generateHashtag (str) {
    //   if(!str.trim()) return false;
      
      let hashTagged = str.split(' ').reduce((acc, val) => { 
          if(val) {
            acc += val.charAt(0).toUpperCase() + val.slice(1);
          }
          return acc;
        }, '#');
      
      if(hashTagged === '#' || hashTagged.length > 140) {
        return false;
      } else {
        return hashTagged;
      }
    }

/* Top solutions analysis */

