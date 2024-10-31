document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("consultas"));       // Consultas
        console.log(data.get("exames"));          // Exames
        console.log(data.get("medicacao"));       // Medicação
        console.log(data.get("terapiaGrupo"));    // Terapia em grupo
        console.log(data.get("internacoes"));      // Internações
        console.log(data.get("idPaciente"));      // ID do Paciente

        window.alert("Dados salvos!");
    });
});
