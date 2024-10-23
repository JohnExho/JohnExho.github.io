
function myMenuFunction() {
var i = document.getElementById("navMenu");

if(i.className === "nav-menu") {
    i.className += " responsive";
} else {
    i.className = "nav-menu";
}
}
    let isForgotCompleted = false; // Track if the Forgot form is completed

    // Handle Forgot Password Form Submission
    function handleForgot(event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.querySelector("input[name='email']").value;
        const otp = document.querySelector("input[name='otpBox']").value;

        if (!validateEmail(email) || !otp.trim()) {
            alert("Please provide a valid email and OTP.");
            return false;
        }

        isForgotCompleted = true; // Mark Forgot form as completed
        switchToConfirm(); // Switch to Confirm form
        return true;
    }

    // Validate Email Format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function goLogin() {
        window.location.href = "Login.html";
    }

    // Switch to Confirm Form
    function switchToConfirm() {
        if (!isForgotCompleted) {
            alert("Please complete the Forgot Password form first.");
            return;
        }
        document.getElementById("forgot").style.left = "-510px"; // Move Forgot form off-screen
        document.getElementById("confirm").style.right = "5px"; // Bring Confirm form to view
        document.getElementById("forgot").style.opacity = 0; // Fade out Forgot form
        document.getElementById("confirm").style.opacity = 1; // Fade in Confirm form
    }

    // Handle Confirm Form Submission
    function matchPassword(event) {
        event.preventDefault(); // Prevent default submission
        var NewPassword = document.getElementById("NewPassword").value;
        var ConfirmPassword = document.getElementById("ConfirmPassword").value;

        // Show the popup message and handle redirection
        if (NewPassword === ConfirmPassword) {
            showPopup("Password changed successfully");
            document.getElementById("popup").style.display = "inline-block"; // Show the popup
            // Call the redirect function on popup click
            document.getElementById("popup").onclick = function() {
                redirectToLogin(NewPassword, ConfirmPassword);
            };
        } else {
            showPopup("Passwords do not match");
            document.getElementById("popup").style.display = "inline-block"; // Show the popup
        }
        return false; // Prevent form from submitting
    }

    // Show Popup
    function showPopup(message) {
        const popup = document.getElementById("myPopup");
        popup.textContent = message; // Set the popup text
        popup.classList.add("show"); // Show the popup
    }

    // Redirect to Login
    function redirectToLogin(NewPassword, ConfirmPassword) {
        if (NewPassword === ConfirmPassword) {
            window.location.href = "Login.html"; // Redirect to login page
        }
    }
