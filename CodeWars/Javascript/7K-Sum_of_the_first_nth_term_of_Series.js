/* 
Level: 7 kyuu
Link: https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
*/

function SeriesSum(n)
{
  let series = [];
  for(let i = 0; i < n ; i++) {
    if(i === 0 ) {
      series.push(1);
    } else if (i === 1) {
      series.push(1/4);
    } else {
      series.push(1/(4+(i-1)*3));
    }
  }
  console.log(series);
  return n === 0 ? '0.00' : series.reduce((sum, val) => sum + val, 0).toFixed(2).toString();
}

/* Top solutions analysis */
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}

// 1 is 1/1
// 0.25 is 1/4 or 1 / (1 + 3)
