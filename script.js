// Add any JavaScript you need for interactivity, like form validation or animations
document.addEventListener('DOMContentLoaded', function() {
    // Example of simple form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields');
        }
    });
});
