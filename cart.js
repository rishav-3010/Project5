// Sample list of products from the shop page
const products = [
    { id: 1, name: 'Margherita Pizza', price: 299, img: 'veg-pizza1.jpg' },
    { id: 2, name: 'Farmhouse Pizza', price: 399, img: 'veg-pizza2.jpg' },
    { id: 3, name: 'Veggie Delight Pizza', price: 349, img: 'veg-pizza3.jpg' },
    { id: 4, name: 'Paneer Tikka Pizza', price: 449, img: 'veg-pizza4.jpg' },
    { id: 5, name: 'Pepperoni Pizza', price: 499, img: 'nonveg-pizza1.jpg' },
    { id: 6, name: 'Chicken Supreme Pizza', price: 549, img: 'nonveg-pizza2.jpg' },
    { id: 7, name: 'BBQ Chicken Pizza', price: 599, img: 'nonveg-pizza3.jpg' },
    { id: 8, name: 'Meat Lovers Pizza', price: 649, img: 'nonveg-pizza4.jpg' },
    { id: 9, name: 'Chicken Drumsticks', price: 299, img: 'chicken-drumsticks.jpg' },
    { id: 10, name: 'Paneer Butter Masala', price: 350, img: 'paneer-butter-masala.jpg' },
    { id: 11, name: 'Egg Curry', price: 250, img: 'egg-curry.jpg' },
    { id: 12, name: 'Butter Chicken', price: 499, img: 'butter-chicken.jpg' }
];

// Cart data structure
let cart = [];

// Function to add items to the cart
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    cart.push(product);
    updateCart();
}

// Function to remove items from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update the cart display and total price
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.img}" class="cart-item-image" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price and checkout button state
    document.getElementById('total-price').innerText = `Total: ₹${totalPrice}`;
    document.getElementById('checkout-btn').disabled = cart.length === 0;
}

// Sample usage: Adding items from the shop page
// This would be called when "Add to Cart" button is clicked on the shop page
document.addEventListener('DOMContentLoaded', () => {
    // Simulate adding products to the cart (this would actually be triggered by button clicks)
    addToCart(1); // Adding Margherita Pizza
    addToCart(5); // Adding Pepperoni Pizza
});
