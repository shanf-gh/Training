/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/550f22f4d758534c1100025a
*/

function dirReduc(arr){
    //   n -> s or s -> n
    //   e -> w or w -> e
      const cancellingGroup = ["NORTHSOUTH", "SOUTHNORTH", "EASTWEST", "WESTEAST"];
      let pointer = 0;
      
      while(pointer < arr.length) {
        
        if(cancellingGroup.includes(arr[pointer] + arr[pointer+1])){
          arr.splice(pointer,2);
          if(pointer > 0) {
            // set the pointer one index back to check if it would cancel the next value
            pointer--;
          }
        } else {
          pointer++;
        }
      }
      return arr;   
}

/* Top solutions analysis */

function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
}

// Used an object to store opposites as key:value pairs
// Use a reduce method to push/pop elements on
// if statement checks for the last element of the accumulator to equal the opposite current direction
// pops if true, push current direction if false