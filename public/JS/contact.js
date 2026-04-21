const form = document.getElementById("form");
const btn = document.getElementById("btn");
const btnText = document.getElementById("btn-text");
const btnIcon = document.getElementById("btn-icon");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    btn.disabled = true;
    btnText.textContent = "sending...";
    btnIcon.className = "ri-loader-4-line spinning";

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form)
    });
    const json = await res.json();

    if (json.success) {
        btnText.textContent = "sent!";
        btnIcon.className = "ri-check-line";
        btn.classList.add("success");
        form.reset();
    }
    else {
        btnText.textContent = "send";
        btnIcon.className = "ri-send-plane-fill";
        btn.disabled = false;
        status.textContent = "something went wrong.";
        status.classList.add("error");
    }
});
