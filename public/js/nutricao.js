document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("tipo"));        // Tipo
        console.log(data.get("alimentos"));    // Alimentos
        console.log(data.get("duracao"));      // Duração
        console.log(data.get("resultados"));   // Resultados
        console.log(data.get("idPaciente"));   // ID do Paciente

        window.alert("Dados salvos!");
    });
});
