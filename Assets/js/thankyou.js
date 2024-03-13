// JavaScript to handle form submission and display thank you message
document.getElementById('signup-form').addEventListener('submit', function(event) {

    event.preventDefault();
    document.getElementById('thank-you-message').removeAttribute('hidden');
});