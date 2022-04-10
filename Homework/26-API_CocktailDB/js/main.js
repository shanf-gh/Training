//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
function CreateDrinkCard(name, drinkThumb, ingredients, instructions) {
    this.name = name;
    this.drinkThumb = drinkThumb;
    this.ingredients = ingredients;
    this.instructions = instructions;
}

function generateDrinkCard(obj, index, numberOfCards) {
    return `
        <section class="drink-card">
            <div class="drink-card-number">${index}/${numberOfCards}</div>
            <h2>${obj.name}</h2>
            <section class="drink-info">
                <div class="left-panel">
                    <img src="${obj.drinkThumb}" alt="">
                </div>
                <div class="right-panel">
                    <section class="list-ingredients">
                        <h3>Ingredients</h3>
                        ${obj.ingredients.reduce((acc, val) => acc += `<li>${val}</li>`, '')}
                    </section>
                    <section class="cocktail-instructions">
                        <h3>Instructions</h3>
                        <p>${obj.instructions}</p>
                    </section>
                </div>
            </section>
        </section>
    `;
}

function generateIngredientsArray(obj) {
    const drink = obj;
    let ingredients = [];
    for(let i = 1; i < 15; i++) {
        let measure = drink[`strMeasure${i}`];
        let ingredient = drink[`strIngredient${i}`];
        
        if(ingredient === null) {
            break;
        }
        ingredients.push(measure || '' + ingredient);
    }

    return ingredients;
}

function searchDrink() {

    let drink = document.querySelector('input').value;

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink)
    .then(res => res.json())
    .then(data => {
        const drinkContainer = document.querySelector('.drink-card-container');
        const drinks = data.drinks;
        
        drinks.forEach((drink, index) => {
            let ingredients = generateIngredientsArray(drink);
        
            let newDrink = new CreateDrinkCard(drink.strDrink, drink.strDrinkThumb, ingredients, drink.strInstructions)
            // append new drink card
            drinkContainer.innerHTML += generateDrinkCard(newDrink, index + 1, drinks.length);
        });
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
} 


document.querySelector('button').addEventListener('click', searchDrink)