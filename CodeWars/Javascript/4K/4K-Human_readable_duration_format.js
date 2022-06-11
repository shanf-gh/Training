/* 
Level: 4 kyu
Link: https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
*/

function formatDuration (seconds) {
  
    // calc durations
    let s = seconds % 60;
    let min = Math.floor(seconds / 60) % 60;
    let hour = Math.floor(seconds / (60*60)) % 24;
    let day = Math.floor(seconds / (60*60*24)) % 365;
    let year = Math.floor(seconds / (60*60*24*365));
    // group variables in object
    let duration_obj = {
      "year": year,
      "day": day,
      "hour": hour,
      "minute": min,
      "second": s
    }
     
    // build string
    let durationArr = [];
    for(let duration in duration_obj) {
      let measure = duration;
      let value = duration_obj[duration]
      // add s for plural
      if(value > 1) {
        measure += 's';
      }
      if(value > 0) {
        durationArr.push(`${value} ${measure}`);
      }
    }
    
    let durationStr = durationArr.reduce((str, val, i) => {
      let separator = ', ';
      if(durationArr.length > 1 && i === durationArr.length - 1) {
        separator = ' and ';
      }
      if(i === 0) {
        str += val;
      } else {
        str += separator + val;
      }
      return str;
    }, "");
  
    
    return durationStr || 'now';    
  }
  


/* Top solutions analysis */

// ################################
// TOP SOLUTION 1 
// ################################

function formatDuration (seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (var key in time) {
      if (seconds >= time[key]) {
        var val = Math.floor(seconds/time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
   
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
  }