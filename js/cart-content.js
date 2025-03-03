function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total").querySelector("span");

    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Ваш кошик порожній 🛒</p>";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="cart-item" data-index="${index}">
                <p><strong>${item.title}</strong> ${item.profession}  - ${item.price}$ x ${item.quantity}</p>
                <button class="decrease"> - </button>
                <button class="increase"> + </button>
                <button class="remove">❌ Видалити</button>
            </div>
        `;
    });

    cartTotal.textContent = total;
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

document.getElementById("cart-items").addEventListener("click", function(event) {
    const target = event.target;
    const itemElement = target.closest(".cart-item");
    if (!itemElement) return;

    const index = itemElement.dataset.index;

    if (target.classList.contains("decrease")) {
        updateQuantity(index, -1);
    } else if (target.classList.contains("increase")) {
        updateQuantity(index, 1);
    } else if (target.classList.contains("remove")) {
        removeItem(index);
    }
});

document.getElementById("clear-cart").addEventListener("click", function () {
    localStorage.removeItem("cart");
    document.getElementById("cart-total").querySelector("span").textContent = "0"; // Оновлюємо суму
    loadCart();
});

loadCart();