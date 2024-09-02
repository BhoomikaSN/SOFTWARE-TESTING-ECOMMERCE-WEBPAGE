document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach((item, index) => {
            const itemElement = document.createElement('li');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <span>${item.name} - ₹${item.price.toFixed(2)}</span>
                <input type="number" value="${item.quantity}" min="1" data-index="${index}">
                <button data-index="${index}" class="remove-item">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }

    cartItemsContainer.addEventListener('input', (e) => {
        if (e.target.type === 'number') {
            const index = e.target.dataset.index;
            cartItems[index].quantity = parseInt(e.target.value);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    });

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.dataset.index;
            cartItems.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCart();
        }
    });

    
    updateCart();
});
