document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[data-action="signin"]');
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const backButton = document.getElementById("backButton");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Real-time email validation
    emailInput.addEventListener("input", function () {
        if (validateEmail(emailInput.value)) {
            emailError.style.display = "none"; // Hide email error message
            passwordInput.disabled = false; // Enable password field
        } else {
            passwordInput.disabled = true; // Disable password field
        }
    });

    // Show email error message when hovering over password field
    passwordInput.addEventListener("mouseover", function () {
        if (passwordInput.disabled && !validateEmail(emailInput.value)) {
            emailError.style.display = "block"; // Show email error message
        }
    });

    passwordInput.addEventListener("mouseout", function () {
        emailError.style.display = "none"; // Hide email error message
    });

    // Show password error message when hovering over submit button
    form.addEventListener("mouseover", function (event) {
        if (event.target.tagName === "BUTTON" && !validatePassword(passwordInput.value)) {
            passwordError.style.display = "block"; // Show password error message
        }
    });

    form.addEventListener("mouseout", function () {
        passwordError.style.display = "none"; // Hide password error message
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form inputs
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Validate inputs
        if (!validateEmail(email)) {
            alert("Email must end with @gmail.com.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // If all validations pass, submit the form (or send data to the server)
        alert("Login Successful!");
        console.log("Login Data:", { email, password });
        // You can send the data to the server using fetch() or XMLHttpRequest here
    });

    // Handle back button click
    backButton.addEventListener("click", function () {
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