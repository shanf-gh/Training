/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
*/

function removeUrlAnchor(url){
  
    if(url.indexOf('#')>0) {
      return url.slice(0, url.indexOf("#"));
    } 
    return url;
}

/* Top solutions analysis */
function removeUrlAnchor(url){
    return url.split('#')[0];
}