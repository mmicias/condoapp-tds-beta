document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Obrigado pelo interesse no CondoAPP-TDS! Em breve entraremos em contato."
        );

    });

});