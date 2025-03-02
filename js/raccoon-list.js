const response = await fetch('api/products.json');
const raccoons = await response.json();
renderRaccoons(raccoons);




function renderRaccoons(raccoons) {
    let raccoonsHTML = "";
    for (const raccoon of   raccoons) {
        raccoonsHTML += `<article class="raccoon__item">
              <img class="raccoon__image" src="${raccoon.image}" alt="${raccoon.title}">
              <h3 class="raccoon__name">${raccoon.title}</h3>
              <p class="raccoon__profession">${raccoon.profession}</p>
              <p class="raccoon__description">
              ${raccoon.description}
              </p>
              <div class="raccoons__actions">
                  
                  <button class="buy-button button button-card">
                      Замовити - ${raccoon.price}$ за годину
                  </button>
              </div>
          </article>`;
    }
    const raccoonsContainer = document.querySelector(".raccoons__list");
    raccoonsContainer.innerHTML = raccoonsHTML;
  }
  
  renderRaccoons(raccoons);