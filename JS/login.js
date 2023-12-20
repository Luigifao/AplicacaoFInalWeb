localStorage.setItem("aluno",1234)
localStorage.setItem("professor", 1234)


let BotaoEntra = document.getElementById("login");

BotaoEntra.addEventListener("click",function(){
    let login = document.getElementById("usuario").value();
    let senha = document.getElementById("senha").value();
    window.alert(login)
})