// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.querySelector("input[placeholder='Ihr Name']").value;
        const email = form.querySelector("input[placeholder='Ihre E-Mail-Adresse']").value;
        const message = form.querySelector("textarea[placeholder='Ihre Nachricht']").value;

        if (name && email && message) {
            alert("Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.");
            form.reset();
        } else {
            alert("Bitte füllen Sie alle Felder aus.");
        }
    });
});
