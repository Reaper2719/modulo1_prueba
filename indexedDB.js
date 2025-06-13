function guardarRespuestas() {
  const respuestas = {};
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    if (input.type === "radio" && input.checked) {
      respuestas[input.name] = input.value;
    } else if (input.type === "checkbox") {
      if (!respuestas[input.name]) respuestas[input.name] = [];
      if (input.checked) respuestas[input.name].push(input.value);
    } else if (input.type === "text" || input.tagName === "TEXTAREA") {
      respuestas[input.name] = input.value;
    }
  });

  localStorage.setItem("respuestas_modulo1", JSON.stringify(respuestas));
  alert("Respuestas guardadas localmente.");
}
