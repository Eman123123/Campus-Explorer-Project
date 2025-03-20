document.addEventListener("DOMContentLoaded", function () {
    const verifyEmailForm = document.getElementById("verifyEmailForm");
    const resetPasswordForm = document.getElementById("resetPasswordForm");
    const emailInput = document.getElementById("email");
    const newPasswordInput = document.getElementById("newPassword");
    const backButton = document.getElementById("backButton");
    const emailError = document.getElementById("emailError");
    const newPasswordError = document.getElementById("newPasswordError");

    // Debugging: Log when the DOM is loaded
    console.log("DOM fully loaded and parsed");

    // Handle email verification form submission
    verifyEmailForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Verify Email Form Submitted"); // Debugging

        const email = emailInput.value.trim();

        if (!validateEmail(email)) {
            emailError.style.display = "block"; // Show email error message
            return;
        }

        // Simulate email verification
        alert("Email verified! Please enter a new password.");
        verifyEmailForm.style.display = "none"; // Hide verify email form
        resetPasswordForm.style.display = "block"; // Show reset password form
    });

    // Handle password reset form submission
    resetPasswordForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Reset Password Form Submitted"); // Debugging

        // Get new password input
        const newPassword = newPasswordInput.value.trim();

        // Validate new password
        if (!validatePassword(newPassword)) {
            newPasswordError.style.display = "block"; // Show password error message
            return;
        }

        // Simulate password reset
        alert("Password updated successfully!");
        console.log("New password:", newPassword);

        // Redirect to login page
        window.location.href = "login.html";
    });

    // Handle back button click
    backButton.addEventListener("click", function () {
        console.log("Back button clicked"); // Debugging
        history.back(); // Navigate to the previous page
    });

    // Validation functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }
});