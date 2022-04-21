document.querySelector('form').addEventListener('submit', getData, false);

function getData(event) {
  const data = Object.fromEntries(new FormData(event.target).entries());
  getFetch(data);
  event.preventDefault();
}


function getFetch(formData){
  const url = `https://acnhapi.com/v1/${formData['type']}`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const cardTable = document.querySelector(".card-table");
        // clear cardTable
        clearElement(cardTable)
        // populate cardTable
        for(let key in data) {
          cardTable.innerHTML += createCard(data[key], formData) || '';
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function clearElement(element) {
  element.innerHTML = '';
}

function createCard(obj, formData) {
  
  const monthAvailability = obj['availability'][`month-array-${formData['hemisphere']}`];

  // Check if the fish/creature/bug is present during the selected month 
  const month = formData['month-select'] || '';
  if(month !=='' && !monthAvailability.includes(+month)) {
    return false;
  }

  return `<section class="fish-card">
				<section class="name">
					<h3>${obj['name']['name-USen']}</h3>
					<img src="https://acnhapi.com/v1/icons/${formData['type']}/${obj['id']}" alt="obj['name']['name-USen']">
				</section>
				<section class="availability">
          <section class="seasonality">
            <h3>Seasonality</h3>
            <section>
              <table class="availability-month">
                ${getSeasonalityRows(monthAvailability)}
              </table>
            </section>
          </section>
					<section class="active-hours">
						<h3>Current Active Hours</h3>
						<p>${obj['availability']['time'] || 'All day' }</p>
					</section>
				</section>
				<section class="location-price">
					<section class="location">
						<h3>Location</h3>
						<span>${obj['availability']['location']}</span>
					</section>
					<section class="pricing">
						<h3>Pricing</h3>
						<section class="price-detail">
              <div>
                <h4>Regular</h4>
                <span>${obj['price']}</span>
              </div>
              ${getSpecialPrice(obj) || ''}
              </section>
            </section>
				</section>
			</section>`;
}

function getSeasonalityRows(monthsArray) {
  const months = ['Jan','Feb','Mar.','Apr.','May','June','July','Aug.','Sep.','Oct.','Nov.','Dec.'];
  // creates table data - assign class of selected if the month is in the monthsArray
  let dataRow = months.map((month, index) => `<td><div ${monthsArray.includes(index+1) ? `class='active'` : ''}>${month}</div></td>`);

  // reduces the data into a single string of tablerows
  return dataRow.reduce((acc, el, index) =>{
    if(index === 0) {
      acc += `<tr>${el}`;
    } else if (index+1 === dataRow.length) {
      acc += `${el}</tr>`;
    } else if((index+1)%4 === 0) {
      acc += `${el}</tr><tr>`;
    } else {
      acc += el;
    }
    return acc;
  },'');
}

function getSpecialPrice(obj) {
  let vendor = '' ;
  let price = '';

  if(obj['price-cj']) {
    vendor = 'CJ';
    price = obj['price-cj'];
  } else if (obj['price-flick']) {
    vendor = 'Flick';
    price = obj['price-flick'];
  } else {
    return false;
  }

  return `
  <div>
    <h4>${vendor}</h4>
    <span>${price}</span>
  </div>
  `;
}