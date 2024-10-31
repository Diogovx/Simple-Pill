const form= document.getElementById("forms");
form.addEventListener("submit",async(e)=>{
    const data=new FormData(form);
    console.log(data.get("nome"));
    console.log(data.get("dataNasc"));
    console.log(data.get("medicacoes"));
    console.log(data.get("consultas"));
    console.log(data.get("internacoes"));
    console.log(data.get("vacinas"));
    console.log(data.get("prontuarios"));
    console.log(data.get("sintomas"));
    console.log(data.get("observacoes"));
});
document.getElementById("voltar").addEventListener("click",async(e)=>{
    window.location.href= "cadastroViaSUS.html";
});

document.getElementById("salvar").addEventListener("click",async(e)=>{
    window.location.href= "";
});