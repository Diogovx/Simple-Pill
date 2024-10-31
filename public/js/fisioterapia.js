document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("frequencia"));   // Frequência
        console.log(data.get("duracao"));       // Duração
        console.log(data.get("exercicios"));    // Exercícios
        console.log(data.get("retorno"));       // Retorno
        console.log(data.get("idPaciente"));    // ID do Paciente

        window.alert("Dados salvos!");
    });
});
