document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("motivo"));       // Motivo
        console.log(data.get("local"));        // Local
        console.log(data.get("duracao"));      // Duração
        console.log(data.get("data"));         // Data
        console.log(data.get("idPaciente"));   // ID do Paciente

        window.alert("Dados salvos!");
    });
});
