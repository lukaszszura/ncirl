// JavaScript validation for the garden shop form
document.getElementById('gardenForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Get the email value and the email error display element
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');

    // Define a regular expression (regex) pattern for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
        // If email doesn't match, show an error message
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        // Clear any error if the email is valid
        emailError.textContent = '';

        // Show a success message
        alert('Thank you for signing up!');
    }
});
