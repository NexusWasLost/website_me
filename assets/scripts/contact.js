
const form = document.querySelector(".contact-form");
const submitButton = form.querySelector("button[type='submit']");
const submitIcon = submitButton.querySelector("span");
const formStatus = form.querySelector(".form-status");

const originalButtonText = submitButton.innerHTML;

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
        const res = await fetch(form.action, {
            method: "POST",
            body: new FormData(form)
        });

        if (!res.ok) {
            throw new Error("Request failed");
        }

        const json = await res.json();
        console.log(json);

        if (json.success) {
            submitButton.innerHTML = 'Message sent! <span>✓</span>';
            submitButton.classList.add("success");

            formStatus.textContent = "Thanks for reaching out ! I'll get back to you soon.";
            formStatus.classList.add("success");

            form.reset();
        }
        else {
            throw new Error("Submission failed");
        }
    }
    catch (error) {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;

        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.classList.add("error");
    }
});
