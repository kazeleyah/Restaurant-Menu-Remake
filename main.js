const menu = {
    "Sushi": [
        { name: "Salmon Nigiri", price: 4.99, img: "path/to/salmon_nigiri.jpg" },
        { name: "Tuna Sashimi", price: 5.99, img: "path/to/tuna_sashimi.jpg" },
        { name: "California Roll", price: 6.99, img: "path/to/california_roll.jpg" },
        { name: "Eel Roll", price: 7.99, img: "path/to/eel_roll.jpg" },
        { name: "Spicy Tuna Roll", price: 8.99, img: "path/to/spicy_tuna_roll.jpg" }
    ],
    "Sashimi": [
        { name: "Salmon Sashimi", price: 9.99, img: "path/to/salmon_sashimi.jpg" },
        { name: "Tuna Sashimi", price: 10.99, img: "path/to/tuna_sashimi.jpg" },
        { name: "Octopus Sashimi", price: 11.99, img: "path/to/octopus_sashimi.jpg" },
        { name: "Mackerel Sashimi", price: 12.99, img: "path/to/mackerel_sashimi.jpg" },
        { name: "Yellowtail Sashimi", price: 13.99, img: "path/to/yellowtail_sashimi.jpg" }
    ],
    "Rolls": [
        { name: "Dragon Roll", price: 14.99, img: "path/to/dragon_roll.jpg" },
        { name: "Rainbow Roll", price: 15.99, img: "path/to/rainbow_roll.jpg" },
        { name: "Spider Roll", price: 16.99, img: "path/to/spider_roll.jpg" },
        { name: "Tempura Roll", price: 17.99, img: "path/to/tempura_roll.jpg" },
        { name: "Philadelphia Roll", price: 18.99, img: "path/to/philadelphia_roll.jpg" }
    ],
    "Sides": [
        { name: "Edamame", price: 4.99, img: "path/to/edamame.jpg" },
        { name: "Miso Soup", price: 3.99, img: "path/to/miso_soup.jpg" },
        { name: "Seaweed Salad", price: 5.49, img: "path/to/seaweed_salad.jpg" },
        { name: "Gyoza", price: 6.49, img: "path/to/gyoza.jpg" },
        { name: "Tempura Vegetables", price: 7.49, img: "path/to/tempura_vegetables.jpg" }
    ],
    "Desserts": [
        { name: "Mochi", price: 4.99, img: "path/to/mochi.jpg" },
        { name: "Green Tea Ice Cream", price: 5.99, img: "path/to/green_tea_ice_cream.jpg" },
        { name: "Red Bean Cake", price: 6.99, img: "path/to/red_bean_cake.jpg" },
        { name: "Dango", price: 7.99, img: "path/to/dango.jpg" },
        { name: "Fruit Sushi", price: 8.99, img: "path/to/fruit_sushi.jpg" }
    ]
};

let totalPrice = 0; // Initialize total price

function displayMenu() {
    const menuDiv = document.getElementById('menu');
    for (const category in menu) {
        const section = document.createElement('div');
        section.innerHTML = `<h3>${category}</h3><img src="images/${category.toLowerCase()}.png" alt="${category} Header" class="section-header">`; // Section header image
        menu[category].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>`;
            section.appendChild(itemDiv);
        });
        menuDiv.appendChild(section);
    }
}

function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    cartItems.appendChild(listItem);
    
    totalPrice += itemPrice; // Update total price
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalDiv = document.getElementById('total-price');
    totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Call displayMenu to render the menu on page load
displayMenu();
