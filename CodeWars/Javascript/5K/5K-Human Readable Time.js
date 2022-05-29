/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript
*/

function humanReadable (seconds) {
    let min = Math.floor(seconds / 60 % 60);
    let sec = Math.floor(seconds % 60);
    let hours = Math.floor(seconds / 3600);
    
    return ('00'+hours+":").slice(-3) + ('00'+min+":").slice(-3) + ('00'+sec).slice(-2);
  }

/* Top solutions analysis */
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
            pad(parseInt(seconds / 60 % 60)) + ":" +
            pad(seconds % 60)
}

// Created a function to pad the values
// parsed int and calculated hours, mins, seconds using division and modulo
// concatenated the padded returned values