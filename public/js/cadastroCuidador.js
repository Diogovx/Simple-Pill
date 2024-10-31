const form= document.getElementById("forms");
form.addEventListener("submit",async(e)=>{
    const data=new FormData(form);
    console.log(data.get("nome"));
    console.log(data.get("tel"));
    console.log(data.get("prof"));
    console.log(data.get("dataNasc"));
    console.log(data.get("endereco"));
    window.alert("Cadastro realizado");
});


/* BOTÃO VOLTAR*/
document.getElementById("voltar").addEventListener("click",async(e)=>{
    window.location.href= "cadastroinicial.html";
});

/* BOTÃO SALVAR*/
document.getElementById("salvar").addEventListener("click",async(e)=>{
    window.location.href= "bemvindoCuidador.html";
});