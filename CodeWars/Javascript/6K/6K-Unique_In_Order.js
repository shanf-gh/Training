/* 
Level: 6 kyuu
Link: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
*/

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    // check if array, if not split into array
    if(!Array.isArray(iterable)) {
      iterable = iterable.split('');
    }
    
    let uniqueInOrder = iterable.reduce((arr, val) => {
      if(arr.length === 0 ) {
        arr.push(val);
      } else {
        if(arr[arr.length -1 ] !== val) {
          arr.push(val)
        }  
      }
      return arr;
    }, []);
    
    // return result array
    return uniqueInOrder;
}

/* Top solutions analysis */