document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("1"));  // Observação 1
        console.log(data.get("2"));  // Observação 2
        console.log(data.get("3"));  // Observação 3
        console.log(data.get("idPaciente"));  // ID do Paciente

        window.alert("Dados salvos!");
    });
});
