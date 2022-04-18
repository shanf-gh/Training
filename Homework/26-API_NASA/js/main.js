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
        let container = document.querySelector(".picture-card");
        console.log(data);
        
        container.innerHTML = generatePictureCard(data);

        // display the container
        container.style.display = 'block';
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


function generatePictureCard(obj) {
  let copyright = '';
  if('copyright' in obj) {
    copyright = `<h4 class="picture-copyright">Photo by <span>${obj.copyright}</span></h4>`;
  }

  if(obj.media_type === 'video') {
    media = `<iframe src="${obj.url}"></iframe>`;
  } else if(obj.media_type === 'image') {
    media = `<img src="${obj.url}" alt="${obj.title}">`;
  }

  return `
    <header>
      <h2 class="picture-title">${obj.title}</h2>
      ${copyright||''}
    </header>
    <section class="picture-data">
      <section class="picture">
        ${media}
      </section>
      <section class="picture-info">
        <p>${obj.explanation}</p>
      </section>
    </section>
  `
}