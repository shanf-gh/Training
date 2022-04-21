//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
let test = '';
function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://acnhapi.com/v1/fish/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data);
        console.log(data['angelfish']);
        // for(let key in data) {
        //   document.querySelector(".fish-list").innerHTML += `<li>${data[key]['name']['name-EUen']}</li>`;
        // }
        // document.querySelector(".fish-list").innerHTML += `<li>${data[0].name['name']}${}</li>`;
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}