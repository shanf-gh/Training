//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
function searchDrink() {

    let drink = document.querySelector('input').value;

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink)
    .then(res => res.json())
    .then(data => {
        let drink = data.drinks[0];
        document.querySelector('h2').innerText = drink.strDrink;
        document.querySelector('img').src = drink.strDrinkThumb;
        document.querySelector('h3').innerText = drink.strInstructions;
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`);
    });
} 


document.querySelector('button').addEventListener('click', searchDrink)