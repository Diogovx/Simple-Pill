document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("doencasAtuais"));
        console.log(data.get("historicoMedico"));
        console.log(data.get("medicacaoFrequente"));
        console.log(data.get("outros"));
        console.log(data.get("idPaciente")); // ID

        window.alert("Dados salvos!");
    });
});
