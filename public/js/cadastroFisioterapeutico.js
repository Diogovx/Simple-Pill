document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#forms");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("data"));
        console.log(data.get("local"));
        console.log(data.get("nSecoes"));
        console.log(data.get("diagnostico"));
        console.log(data.get("idPaciente")); // ID

        window.alert("Dados salvos!");
    });
});
