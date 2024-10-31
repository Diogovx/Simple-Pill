document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        const data = new FormData(form);
        console.log(data.get("tipo"));    // Tipo
        console.log(data.get("dose"));    // Dose
        console.log(data.get("data"));    // Data
        console.log(data.get("reforco")); // Reforço
        console.log(data.get("idPaciente")); // ID do Paciente


        window.alert("Dados salvos!");
    });
});
