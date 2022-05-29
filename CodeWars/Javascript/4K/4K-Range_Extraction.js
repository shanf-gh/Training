/* 
Level: 4 kyu
Link: Range Extraction
*/

function solution(list){
    console.log(list);
    return list.reduce((acc, val, i) => {
  //     console.log(acc);
      if((acc.lastValRange !== null && val - acc.lastValRange === 1)|| val - acc.lastVal === 1) {
        if(i === list.length -1) {
          // append lastValRange
          if(val - acc.lastVal !== 1) {
            acc.finalArray[acc.finalArray.length-1] += `-${val}`;
          } else {
            acc.finalArray.push(val);
          }
          acc.lastValRange = null;
        } else {      
          acc.lastValRange = val;
        }
      } else { 
        if (acc.lastValRange !== null && acc.lastValRange - acc.lastVal !== 1) {
          // append lastValRange
          acc.finalArray[acc.finalArray.length-1] += `-${acc.lastValRange}`;
          acc.lastValRange = null;
        } else if (acc.lastValRange - acc.lastVal === 1){
          // push the lastValRange if there is only one unit of difference
  //         console.log('woooo');
          acc.finalArray.push(acc.lastValRange);
          acc.lastValRange = null;
        }
        acc.finalArray.push(val);
        acc.lastVal = val; 
      }
      return acc;
    }, {finalArray:[], lastVal: null, lastValRange: null})['finalArray'].join(',');
}

/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

// Breakdown into multiple functions
// first step, reduce 
// reduce callback. First if statement returns the first number as a range because the range is empty
//                  Second declare two variable to get the last range and the last number in that range
//                  Third check if the current number is the last number +1, if it is push number in the lastRange, otherwise push into the range
//                  Since the array is passed as reference, the lastRange array is modified by the push
// second step, map to convert into a range.
// Map callback. Check if the length of the range has less than 3 items. If it is just join it, if not concatenate first and last element of the range
// Third step, join the array for the final answer.
