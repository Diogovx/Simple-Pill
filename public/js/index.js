// src/index.js
async function loadPage(pageName) {
    try {
        const response = await fetch(`${pageName}.html`);
        const htmlContent = await response.text();
        document.getElementById('app').innerHTML = htmlContent;

        // Carregar o CSS correspondente
        const oldLink = document.getElementById("page-style");
        if (oldLink) oldLink.remove();

        const newLink = document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.id = "page-style";
        newLink.href = `${pageName}.css`;
        document.head.appendChild(newLink);
    } catch (error) {
        console.error("Erro ao carregar a página:", error);
    }
}
// Exemplo de carregamento inicial da página de login
document.addEventListener("DOMContentLoaded", () => loadPage('loginOuCadastro'));
