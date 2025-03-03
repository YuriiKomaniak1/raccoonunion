async function loadRaccoons() {
    const response = await fetch("api/products.json");
    let raccoons = await response.json();

    renderRaccoons(raccoons);
    updateCartCount();

    const filterSelect = document.getElementById("filter-class");
    const sortSelect = document.getElementById("sort-price");

    if (filterSelect) {
        filterSelect.addEventListener("change", () => applyFilters(raccoons));
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", () => applyFilters(raccoons));
    }
}

function applyFilters(raccoons) {
    const selectedClass = document.getElementById("filter-class").value;
    const selectedSort = document.getElementById("sort-price").value;

    let filteredRaccoons = selectedClass === "all" 
        ? raccoons 
        : raccoons.filter(raccoon => raccoon.class === selectedClass);

    if (selectedSort === "asc") {
        filteredRaccoons.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "desc") {
        filteredRaccoons.sort((a, b) => b.price - a.price);
    }

    renderRaccoons(filteredRaccoons);
}

function renderRaccoons(raccoons) {
    let raccoonsHTML = "";
    for (const raccoon of raccoons) {
        raccoonsHTML += `
            <article class="raccoon__item">
                <img class="raccoon__image" src="${raccoon.image}" alt="${raccoon.title}">
                <h3 class="raccoon__name">${raccoon.title}</h3>
                <p class="raccoon__profession">${raccoon.profession}</p>
                <p class="raccoon__description">${raccoon.description}</p>
                <div class="raccoons__actions">
                    <button class="buy-button button button-card" data-id="${raccoon.id}" data-title="${raccoon.title}"  data-profession="${raccoon.profession}"  data-price="${raccoon.price}">
                        Замовити - ${raccoon.price}$ за годину
                    </button>
                </div>
            </article>`;
    }

    const raccoonsContainer = document.querySelector(".raccoons__list");
    raccoonsContainer.innerHTML = raccoonsHTML;

    document.querySelectorAll(".buy-button").forEach(button => {
        button.addEventListener("click", (event) => {
            const id = event.target.dataset.id;
            const title = event.target.dataset.title;
            const price = event.target.dataset.price;
            const profession = event.target.dataset.profession;
            addToCart({ id, title, profession, price });
        });
    });
}

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find(product => product.id === item.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").textContent = totalCount;
}

// Викликаємо функцію прямо в скрипті після завантаження partial
loadRaccoons();