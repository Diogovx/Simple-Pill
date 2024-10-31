const form = document.getElementById("forms");
const salvarButton = document.getElementById("salvar");

salvarButton.addEventListener("click", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    console.log(data.get("data"));
    console.log(data.get("local"));
    console.log(data.get("horario"));
    console.log(data.get("nomeProf"));
    console.log(data.get("endereco"));
    console.log(data.get("nomePaciente"));
    console.log(data.get("idPaciente"));
    console.log(data.get("tipoConsulta"));

    window.alert("Agendamento realizado");
});
