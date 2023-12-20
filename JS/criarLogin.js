let labelUsuario = document.querySelector('#labelUsuario')
let userField = document.querySelector("#criarUsuario")
let validUser = false

let labelSenha = document.querySelector('#labelSenha')
let userPass = document.querySelector("#criarSenha")
let validPass = false

let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let userConfirmPass = document.querySelector("#confirmSenha")
let validConfirmPass = false


let btnCriar = document.querySelector("#criar")

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

btnCriar.addEventListener("click", () => {
    cadastrar()
})


userField.addEventListener('keyup', () => {
    if (userField.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        userField.setAttribute('style', 'border-color: red')
        validUser = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        userField.setAttribute('style', 'border-color: green')
        validUser = true
    }
})

userPass.addEventListener('keyup', () => {
    if (userPass.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        userPass.setAttribute('style', 'border-color: red')
        validPass = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        userPass.setAttribute('style', 'border-color: green')
        validPass = true
    }
})
userConfirmPass.addEventListener('keyup', () => {
    if (userPass.value != userConfirmPass.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        userConfirmPass.setAttribute('style', 'border-color: red')
        validConfirmPass = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        userConfirmPass.setAttribute('style', 'border-color: green')
        validConfirmPass = true
    }
})


function cadastrar() {
    if (validUser && validPass && validConfirmPass) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                userCad: userField.value,
                senhaCad: userPass.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = "login.html"
        },3000)
        


    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}


