//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
function searchDrink() {

    let drink = document.querySelector('input').value;

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink)
    .then(res => res.json())
    .then(data => {
        let drinkCard = document.querySelector('.drink-card')

        let drink = data.drinks[0];

        // create an array of ingredients
        let ingredients = [];
        for(let i = 1; i < 15; i++) {
            let measure = drink[`strMeasure${i}`];
            let ingredient = drink[`strIngredient${i}`];
            
            if(measure === null) {
                measure = '';
            }

            if(ingredient!==null) {
                ingredients.push(measure + ingredient);
            }
        }


        // set values in HTML elements
        drinkCard.querySelector('h2').innerText = drink.strDrink;
        drinkCard.querySelector('img').src = drink.strDrinkThumb;
        drinkCard.querySelector('.list-ingredients > ul').innerHTML = ingredients.reduce((acc, val) => acc += `<li>${val}</li>`, '');
        drinkCard.querySelector('.cocktail-instructions p').innerText = drink.strInstructions;
        // Show the card
        drinkCard.style.display = "block";

        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
} 


document.querySelector('button').addEventListener('click', searchDrink)