// Get API Key
const key = config.API_KEY;

//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`

  console.log(date);
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        if('copyright' in data) {
          document.querySelector('p').innerText = `Photo by ${data.copyright}`;
        }

        document.querySelector('h2').innerText = data.title;
        document.querySelector('img').src = data.url;
        document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}