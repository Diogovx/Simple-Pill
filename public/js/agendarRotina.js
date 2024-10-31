document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("forms");
    const salvarButton = document.getElementById("salvar");

    salvarButton.addEventListener("click", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("nomePaciente"));
        console.log(data.get("idPaciente"));
        console.log(data.get("corrida"));
        console.log(data.get("musculacao"));
        console.log(data.get("alongamento"));
        console.log(data.get("diaSemana"));

        window.alert("Rotina realizada");
    });
});
