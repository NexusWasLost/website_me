"use strict";

const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const submitText = document.getElementById("submitText");
const submitIcon = document.getElementById("submitIcon");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitButton.disabled = true;
    submitText.textContent = "Sending...";
    submitIcon.className = "ri-loader-4-line spinning";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
        const res = await fetch(form.action, {
            method: "POST",
            body: new FormData(form)
        });

        const json = await res.json();

        if (json.success) {
            submitText.textContent = "Sent!";
            submitIcon.className = "ri-check-line";
            submitButton.classList.add("success");
            form.reset();
        }
        else {
            throw new Error("Submission failed");
        }
    }
    catch (error) {
        submitText.textContent = "Send message";
        submitIcon.className = "ri-arrow-right-up-line";
        submitButton.disabled = false;
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.classList.add("error");
    }
});
