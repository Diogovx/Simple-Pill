document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".caixaBranca form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const data = new FormData(form);
        console.log(data.get("1")); // Alerta 1
        console.log(data.get("2")); // Alerta 2
        console.log(data.get("3")); // Alerta 3
        console.log(data.get("idPaciente")); // ID
        window.alert("Alertas salvos");
    });
});
