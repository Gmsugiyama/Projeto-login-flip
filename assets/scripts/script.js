let nomeCadastrado;
let emailCadastrado;
let senhaCadastrada;

function cadastrarFlip(){
    let flip = document.getElementById("card")
    flip.className = "flip";
}
function cadastrar(){
    let nome = document.getElementById("cadastrarNome")
    let email = document.getElementById("cadastrarEmail")
    let senha = document.getElementById("cadastrarSenha")
    let mensagem = document.getElementById("mensagem")
    if(nome.value != "" && email.value != "" && senha.value != ""){
        nomeCadastrado = nome.value;
        emailCadastrado = email.value;
        senhaCadastrada = senha.value;

        
        mensagem.style.cssText = `opacity: 1;color: rgb(50, 156, 18);
        background-color: rgb(166, 212, 148);`
        mensagem.innerText = "Cadastro efetuado com sucesso!"

        setTimeout(()=>{
            let flip = document.getElementById("card")
        flip.className = "";
        mensagem.style.cssText = `opacity: 0`
        }, 900)
    }else{
        mensagem.style.cssText = `opacity: 1;`
        mensagem.innerText = "Preencha todos os campos!"
    }
}

function login(){
    let senha = document.getElementById("senhaLogin")
    let email = document.getElementById("emailLogin")
    console.log("antees if")
    if(senha.value == senhaCadastrada && email.value == emailCadastrado){
        mensagem.style.cssText = `opacity: 1;color: rgb(50, 156, 18);
        background-color: rgb(166, 212, 148);`
        mensagem.innerText = "Login efetuado com sucesso!"
        setTimeout(()=>{
            mensagem.innerText = `Seja bem-vindo ${nomeCadastrado}`
        }, 900)
        console.log("if")
    }else{
        mensagem.style.cssText = `opacity: 1;`
        mensagem.innerText = "As informações digitadas estão erradas"
        console.log("else")
    }
}
