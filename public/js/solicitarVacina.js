document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("vacina1"));  // Prescrever vacina 1
        console.log(data.get("vacina2"));  // Prescrever vacina 2
        console.log(data.get("vacina3"));  // Prescrever vacina 3
        console.log(data.get("vacina4"));  // Prescrever vacina 4
        console.log(data.get("idPaciente")); // ID do Paciente

        window.alert("Dados salvos!");
    });
});
