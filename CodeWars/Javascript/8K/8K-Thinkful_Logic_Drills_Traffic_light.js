/* 
Level: 8 kyuu
Link: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
*/

function updateLight(current) {
    let nextLight = "";
    switch(current) {
        case "green":
          nextLight = "yellow";
          break;
        case "yellow":
          nextLight = "red";
          break;
        case "red":
          nextLight = "green";
          break;
    }
  
    return nextLight;
}

/* Top solutions analysis */
function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
}

// multiple ternaries, not great for readability

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]

// using an object with key being current color and value the next one