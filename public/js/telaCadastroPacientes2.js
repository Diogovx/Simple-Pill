const form= document.getElementById("forms");
form.addEventListener("submit",async(e)=>{
    const data=new FormData(form);
    console.log(data.get("nome"));
    console.log(data.get("dataNasc"));
    console.log(data.get("cpf"));
    console.log(data.get("idPaciente"));
});
document.getElementById("voltar").addEventListener("click",async(e)=>{
    window.location.href= "cadastroViaSUS.html";
});

document.getElementById("salvar").addEventListener("click",async(e)=>{
    window.location.href= "telaCadastroPacientes.html";
});