// Add event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get input values
    const userId = document.getElementById("user-id").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get error message elements
    const userIdError = document.getElementById("userIdError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    userIdError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Validate User ID
    if (!userId) {
        userIdError.textContent = "User ID is required.";
        isValid = false;
    } else if (userId.length < 5) {
        userIdError.textContent = "User ID must be at least 5 characters.";
        isValid = false;
    }

    // Validate Password
    if (!password) {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = "Password must contain at least one uppercase letter.";
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = "Password must contain at least one number.";
        isValid = false;
    } else if (!/[!@#$%^&*]/.test(password)) {
        passwordError.textContent = "Password must contain at least one special character.";
        isValid = false;
    }

    // If the form is valid, display a success message
    if (isValid) {
        alert("Login successful!");
        // Optionally, redirect or process the form further
        // window.location.href = "dashboard.html";
    }
});
