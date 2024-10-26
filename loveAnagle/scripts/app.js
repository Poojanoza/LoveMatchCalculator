document.addEventListener("DOMContentLoaded", function() {
    var firstName = document.getElementById("firstName");
    var secoundName = document.getElementById("secoundName");
    var resultDiv = document.getElementById("result");
    var button = document.getElementById("click");

    // Check if resultDiv and other elements are correctly accessed
    if (!firstName || !secoundName || !resultDiv || !button) {
        console.error("One of the elements (firstName, secoundName, resultDiv, button) is not found in the HTML.");
        return;
    }

    // Function to enable or disable the button based on input validity
    function checkInput() {
        button.disabled = firstName.value.trim() === "" || secoundName.value.trim() === "";
    }

    // Add event listeners for real-time validation
    firstName.addEventListener("input", checkInput);
    secoundName.addEventListener("input", checkInput);

    button.addEventListener("click", function () {
        var randomNumber = Math.floor(Math.random() * 100); // Generate on each click
        var firstNameValue = firstName.value || "";
        var secoundNameValue = secoundName.value || "";

        resultDiv.innerHTML = "Congratulations ".concat(firstNameValue, " & ").concat(secoundNameValue, ", matching is ").concat(randomNumber, "%");
    });
});
