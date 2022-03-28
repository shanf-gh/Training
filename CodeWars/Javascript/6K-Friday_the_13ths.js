/* 
Level: 6 kyu
Link: https://www.codewars.com/kata/540954232a3259755d000039/train/javascript
*/

function fridayTheThirteenths(start, end) {
    let thirteens = [];
    
    if(end === undefined) {
      end = start;
    }
      
    for(let i = start; i <= end; i++) {
      for(let j = 0; j < 12; j++) {
        let date = new Date(i, j, 13);
        if(date.getDay() === 5) {
          thirteens.push(`${j+1}/13/${i}`);
        }
      }
    }
    
    return thirteens.join(' ');
    
  }

  // days and month start at 0 index
  // getDay() starts on Sunday at 0 to 6 for Saturday

/* Top solutions analysis */

function fridayTheThirteenths(start, end) {
    end = end || start;
    var matches = [];
    for (var year = start; year <= end; ++year)
      for (var month = 1; month <= 12; ++month)
        if (new Date(year, month - 1, 13).getDay() == 5)
          matches.push(month + '/13/' + year);
    return matches.join(' ');
  }

  // end is using a shorted || operator, its more concise than the if statement I used
  // I should have used more explicit variable names
  