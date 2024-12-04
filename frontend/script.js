// script.js

// Function to handle adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productTitle = this.parentElement.querySelector('.card-title').innerText;
        const productPrice = this.parentElement.querySelector('.card-text').innerText;
        alert(`${productTitle} has been added to your cart for ${productPrice}`);
    });
});

// Form validation for Sign-In and Sign-Up pages
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');

    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            if (!signInForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            signInForm.classList.add('was-validated');
        });
    }

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                event.preventDefault();
                return;
            }

            if (!signUpForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            signUpForm.classList.add('was-validated');
        });
    }
});