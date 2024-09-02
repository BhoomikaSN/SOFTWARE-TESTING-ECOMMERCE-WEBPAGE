document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = {
                name: e.target.dataset.name,
                price: parseFloat(e.target.dataset.price),
                quantity: 1
            };

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

            if (existingProductIndex > -1) {
                cartItems[existingProductIndex].quantity += 1;
            } else {
                cartItems.push(product);
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert(`${product.name} added to cart`);
        });
    });
});
