document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("data"));
        console.log(data.get("local"));
        console.log(data.get("diagnostico"));
        console.log(data.get("idPaciente"));

        window.alert("Dados salvos!");
    });
});
