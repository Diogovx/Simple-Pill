document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("tipo"));        // Tipo
        console.log(data.get("frequencia"));  // Frequência
        console.log(data.get("tempo"));       // Tempo
        console.log(data.get("melhora"));     // Melhora
        console.log(data.get("idPaciente"));      // ID do Paciente


        window.alert("Dados salvos!");
    });
});
