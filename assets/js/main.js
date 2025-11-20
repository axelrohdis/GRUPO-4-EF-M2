document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".div-content-form");
  const form = document.getElementById("formMessage");
  const inputName = document.getElementById("inputName");
  const inputEmail = document.getElementById("inputEmail");
  const textArea = document.getElementById("textArea");
  const divResults = document.querySelector(".div-results");

  const sanitize = (str) => {
    return str.trim().replace(/[<>]/g, "");
  };

  btnContacto.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.classList.add("fade-in");
    setTimeout(() => modal.classList.remove("fade-in"), 300);
  });

  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Limpiar resultados
    divResults.innerHTML = "";

    // Sanitizar
    const nameValue = sanitize(inputName.value);
    const emailValue = sanitize(inputEmail.value);
    const messageValue = sanitize(textArea.value);

    let errors = [];

    // Validar nombre
    if (nameValue.length < 3 || nameValue.length > 50) {
      errors.push("El nombre debe tener entre 3 y 50 caracteres.");
    }

    // Validar email manualmente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      errors.push("El email no es válido.");
    }

    // Validar mensaje
    if (messageValue.length < 12 || messageValue.length > 200) {
      errors.push("El mensaje debe tener entre 12 y 200 caracteres.");
    }

    // Mostrar errores
    if (errors.length > 0) {
      divResults.innerHTML = `
        <div class="alert alert-danger mt-3">
          ${errors.map((err) => `<p class="m-0">${err}</p>`).join("")}
        </div>
      `;
      return;
    }

    // Si no hay errores → éxito temporal
    divResults.innerHTML = `
      <div class="alert alert-success mt-3">
        Mensaje enviado correctamente.
      </div>
    `;

    // Limpiar input después de enviado
    inputName.value = "";
    inputEmail.value = "";
    textArea.value = "";
  });
});
