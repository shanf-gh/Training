//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
let test = '';
function getFetch(){
  // const choice = document.querySelector('input').value
  const url = 'https://acnhapi.com/v1/fish/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data);
        // console.log(data['angelfish']);
        for(let key in data) {
          document.querySelector(".card-table").innerHTML += createCard(data[key]);
        }
        // document.querySelector(".fish-list").innerHTML += `<li>${data[0].name['name']}${}</li>`;
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function createCard(obj) {
  // console.log(obj);
  return `<section class="fish-card">
				<section class="name">
					<h3>${obj['name']['name-USen']}</h3>
					<img src="https://acnhapi.com/v1/icons/fish/${obj['id']}" alt="obj['name']['name-USen']">
				</section>
				<section class="availability">
          <section class="seasonality">
            <h3>Seasonality</h3>
            <section>
              <table class="availability-month">
                ${getSeasonalityRows(obj['availability']['month-array-northern'])}
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
              <div>
                <h4>CJ</h4>
                <span>${obj['price-cj']}</span>
              </div>
              </section>
            </section>
				</section>
			</section>`;
}

// function getSeasonalityRows(monthsArray) {
//   const months = ['Jan','Feb','Mar.','Apr.','May','June','July','Aug.','Sep.','Oct.','Nov.','Dec.'];

//   monthsArray = monthsArray.sort((a, b) => a-b);

//   return `
//     <tr>
//       <td><div>Jan</div></td>
//       <td><div>Feb.</div></td>
//       <td><div>Mar.</div></td>
//       <td><div>Apr.</div></td>
//     </tr>
//     <tr>
//       <td><div>May</div></td>
//       <td><div>June</div></td>
//       <td><div>July</div></td>
//       <td><div>Aug.</div></td>
//     </tr>
//     <tr>
//       <td><div>Sep.</div></td>
//       <td><div>Oct.</div></td>
//       <td><div>Nov.</div></td>
//       <td><div>Dec.</div></td>
//     </tr>
//   `
// }

function getSeasonalityRows(monthsArray) {
  const months = ['Jan','Feb','Mar.','Apr.','May','June','July','Aug.','Sep.','Oct.','Nov.','Dec.'];
  
	// // sort parameter array
  // monthsArray = monthsArray.sort((a, b) => a-b);
  
  let dataRow = months.map((month, index) => `<td><div ${monthsArray.includes(index+1) ? `class='active'` : ''}>${month}</div></td>`);

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