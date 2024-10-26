"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const firstName = document.getElementById("firstName");
    const secoundName = document.getElementById("secoundName");
    const resultDiv = document.getElementById("result");
    const button = document.getElementById("click");
    const checkInput = () => {
        if (firstName.value.trim().length > 0 && secoundName.value.trim().length > 0) {
            button.disabled = false;
        }
        else {
            button.disabled = true;
        }
    };
    firstName.addEventListener("input", checkInput);
    secoundName.addEventListener("input", checkInput);
    button.addEventListener("click", () => {
        const randomNumber = Math.floor(Math.random() * 100); // Generate on each click
        if (firstName.value.trim() === "" || secoundName.value.trim() === "") {
            resultDiv.innerText = "Please Fill this all input";
        }
        else {
            resultDiv.innerText = `Congulation ${firstName.value} & ${secoundName.value}, matching is ${randomNumber}%`;
        }
    });
});