document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("nome"));            // Nome
        console.log(data.get("apresentacao"));    // Apresentação
        console.log(data.get("dose"));             // Dose
        console.log(data.get("horario"));          // Horário de tomada
        console.log(data.get("duracao"));          // Duração do tratamento
        console.log(data.get("idPaciente"));       // ID do Paciente

        window.alert("Dados salvos!");
    });
});
