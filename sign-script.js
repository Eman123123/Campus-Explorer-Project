document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form[data-action="signup"]');
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const ageInput = document.getElementById("age");
    const phoneNumberInput = document.getElementById("phone-number");
    const backButton = document.getElementById("backButton");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Real-time email validation
    emailInput.addEventListener("input", function () {
        if (validateEmail(emailInput.value)) {
            emailError.style.display = "none"; // Hide error message
            passwordInput.disabled = false; // Enable password field
        } else {
            passwordInput.disabled = true; // Disable password field
            ageInput.disabled = true; // Disable age field
            phoneNumberInput.disabled = true; // Disable phone number field
        }
    });

    // Real-time password validation
    passwordInput.addEventListener("input", function () {
        if (validatePassword(passwordInput.value)) {
            passwordError.style.display = "none"; // Hide error message
            ageInput.disabled = false; // Enable age field
            phoneNumberInput.disabled = false; // Enable phone number field
        } else {
            ageInput.disabled = true; // Disable age field
            phoneNumberInput.disabled = true; // Disable phone number field
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

    // Show password error message when hovering over age or phone number fields
    ageInput.addEventListener("mouseover", function () {
        if (ageInput.disabled && !validatePassword(passwordInput.value)) {
            passwordError.style.display = "block"; // Show password error message
        }
    });

    ageInput.addEventListener("mouseout", function () {
        passwordError.style.display = "none"; // Hide password error message
    });

    phoneNumberInput.addEventListener("mouseover", function () {
        if (phoneNumberInput.disabled && !validatePassword(passwordInput.value)) {
            passwordError.style.display = "block"; // Show password error message
        }
    });

    phoneNumberInput.addEventListener("mouseout", function () {
        passwordError.style.display = "none"; // Hide password error message
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form inputs
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const age = ageInput.value.trim();
        const phoneNumber = phoneNumberInput.value.trim();

        // Validate inputs
        if (!validateEmail(email)) {
            alert("Email must end with @gmail.com.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (!validateAge(age)) {
            alert("Age must be between 18 and 100.");
            return;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert("Phone number must be 10 digits.");
            return;
        }

        // If all validations pass, submit the form (or send data to the server)
        alert("Sign Up Successful!");
        console.log("Form Data:", { email, password, age, phoneNumber });
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

    function validateAge(age) {
        return age >= 18 && age <= 100;
    }

    function validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phoneNumber);
    }
});