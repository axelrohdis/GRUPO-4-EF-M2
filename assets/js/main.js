// Traer inputs con jQuery
const nameInput = $("#name");
const emailInput = $("#email");
const messageInput = $("#message");
const form = $("#contactForm");
const formMessage = $("#formMessage");

// Mostrar mensajes usando Bootstrap alerts
function showMessage(text, type) {

    formMessage
        .html(text)
        .removeClass()
        .addClass("alert")
        .addClass(type === "error" ? "alert-danger" : "alert-success"); 
}

form.on("submit", function (event) {
    event.preventDefault();

    const name = nameInput.val().trim();
    const email = emailInput.val().trim();
    const message = messageInput.val().trim();

    // Validación básica
    if (name === "" || email === "" || message === "") {
        showMessage("❌ Debes completar todos los campos.", "error");
        return;
    }

    // Validación de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showMessage("❌ Ingresa un correo válido.", "error");
        return;
    }

    // OK
    showMessage(`✅ ¡Gracias ${name}! Tu mensaje fue enviado correctamente.`, "success");

    form.trigger("reset"); // Limpia con jQuery
});

$(document).ready(function () {

    // Smooth Scroll
    $("nav a").on("click", function (event) {
        event.preventDefault();

        let destino = $(this).attr("href"); // #proyectos, #contacto, etc.

        if (destino && destino.startsWith("#")) {
            $("html, body").animate({
                scrollTop: $(destino).offset().top
            }, 600);
        }
    });

});