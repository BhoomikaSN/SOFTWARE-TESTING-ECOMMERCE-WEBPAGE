document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const location = document.getElementById('location').value;
        const feedback = document.getElementById('feedback').value;

        // Save location and feedback to localStorage (or send to server)
        localStorage.setItem('location', location);
        localStorage.setItem('feedback', feedback);

        // Show confirmation message
        alert('Thank you for placing the order!');

        // Redirect to home page
        window.location.href = 'index.html';
    });
});
