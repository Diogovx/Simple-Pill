document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("tipo"));         // Tipo
        console.log(data.get("nome"));         // Nome
        console.log(data.get("receita"));      // Receita
        console.log(data.get("dispensado"));   // Dispensado
        console.log(data.get("comprado"));      // Comprado
        console.log(data.get("dose"));         // Dose
        console.log(data.get("horario"));      // Horário
        console.log(data.get("comAlimento"));  // Com alimento
        console.log(data.get("duracao"));      // Duração
        console.log(data.get("idPaciente"));   // ID do Paciente

        window.alert("Dados salvos!");
    });
});
