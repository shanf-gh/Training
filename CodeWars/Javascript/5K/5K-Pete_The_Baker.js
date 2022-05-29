/* 
Level: 5 kyu
Link: https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
*/
function cakes(recipe, available) {
    let ingredientUsage = [];
    for(let ingredient in recipe) {
      if(!available[ingredient]) {
        return 0;
      }
      ingredientUsage.push(Math.floor(available[ingredient] / recipe[ingredient]));
    }
    return Math.min(...ingredientUsage);
}

/* Top solutions analysis */

function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
}

// Gets the keys instead of loopint through one of the object
// Use that array of keys with reduce to access values of the two objects
// Within the Math.floor default to 0 if the object don't have an ingredient