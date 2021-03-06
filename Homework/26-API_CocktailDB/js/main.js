//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// #####################################################
// #################### Constructors ###################
// #####################################################

function CreateDrinkCard(name, drinkThumb, ingredients, instructions) {
    this.name = name;
    this.drinkThumb = drinkThumb;
    this.ingredients = ingredients;
    this.instructions = instructions;
}

// #####################################################
// ################# Generate elements fn ##############
// #####################################################

function generateDrinkCard(obj, index, numberOfCards) {
    return `
        <section class="drink-card ${index === 1 ? 'active' : ''}">
            <div class="drink-card-number">${index} / ${numberOfCards}</div>
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

// #####################################################
// ################# Card navigation ###################
// #####################################################
function changeCard(n) {
    // get list of all drink cards
    let drinkCards = document.querySelectorAll(".drink-card");
    // determine the current active card
    let activeCardIndex = [...drinkCards].findIndex(card => card.classList.contains("active"));

    // determine the index of the next card to show
    // check if the extremities of the array
    let showCardIndex = activeCardIndex + n;

    if(showCardIndex >= drinkCards.length) {
        showCardIndex = 0;
    } else if (showCardIndex < 0) {
        showCardIndex = drinkCards.length - 1;
    }

    // toggle active and new cards
    drinkCards[activeCardIndex].classList.toggle("active");
    drinkCards[showCardIndex].classList.toggle("active");
}

// #####################################################
// ##################### API Call ######################
// #####################################################

function searchDrink() {

    let drink = document.querySelector('input').value;

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink)
    .then(res => res.json())
    .then(data => {
        const drinkContainer = document.querySelector('.drink-card-container');
        // clear drink container
        drinkContainer.innerHTML = '';
        const drinks = data.drinks;
        
        drinks.forEach((drink, index) => {
            let ingredients = generateIngredientsArray(drink);
            // Create new drink object
            let newDrink = new CreateDrinkCard(drink.strDrink, drink.strDrinkThumb, ingredients, drink.strInstructions)
            // append new drink card
            drinkContainer.innerHTML += generateDrinkCard(newDrink, index + 1, drinks.length);
        });
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
} 


// #####################################################
// ################# Event listeners ###################
// #####################################################

document.querySelector('button').addEventListener('click', searchDrink)