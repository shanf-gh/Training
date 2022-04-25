document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://cataas.com/cat?json=true';
  const container = document.querySelector(".container");
  const tagSection = document.querySelector(".tags");
  const tagList = document.querySelector(".taglist");

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data);
        document.querySelector('img').src = `https://cataas.com/cat/${data.id}`;
        
        if(container.classList.contains('hide')) {
          container.classList.toggle('hide');
        }

        // remove all list items
        removeAllChildren(tagList);
        // hide tag section if tag array is empty
        const tags = data.tags;
        if(tags.length === 0) {  
          if(!tagSection.classList.contains('hide')) {
            tagSection.classList.toggle('hide');
          }
        } else {
          // shows and populate tag section if tag array is not empty
          if(tagSection.classList.contains('hide')) {
            tagSection.classList.toggle('hide');
          }

          tags.forEach(tag => {
            let li = document.createElement('li');
            li.innerText = tag;
            tagList.append(li);
          });
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function removeAllChildren(parent) {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function toggleHide(element) {
  if(!element.classList.contains('hide')) {
    element.classList.toggle('hide');
  } else {
    element.classList.toggle('hide');
  }
}