const fieldUser = document.querySelector('#usuario')
const fieldPassword = document.querySelector('#senha')
const formLogin = document.querySelector('#form-login')
const BotaoEntra = document.querySelector("#login");

const userAluno = {
    'login' : 'aluno',
    'password' : '1234'
}
const userProfessor = {
    'login' : 'professor',
    'password' : '1234'
}
function verifyUser() {
    if (fieldUser.value === userProfessor.login) {
        login()
    } else if (fieldUser.value === userAluno.login) {
        login2()  
    }
}

function userIsAuthenticatedAlu() {
    return userAluno.login === fieldUser.value &&
        userAluno.password === fieldPassword.value
}
function userIsAuthenticatedProf() {
    return  userProfessor.login === fieldUser.value &&
    userProfessor.password === fieldPassword.value
}

function resetFormLogin() {
    formLogin.reset()
}

function login() {

    if (userIsAuthenticatedProf()) {
        localStorage.setItem('userProfessor', userProfessor.login)
        resetFormLogin()
        window.location.href = "ProfessorHome.html"
    } else {
        localStorage.removeItem('userProf')
        resetFormLogin()
        alert('Usuário/Senha inválidos.')
    }
}
function login2() {

    if (userIsAuthenticatedAlu()) {
        localStorage.setItem('userAluno', userAluno.login)
        resetFormLogin()
        window.location.href = "#"
    } else {
        localStorage.removeItem('userAluno')
        resetFormLogin()
        alert('Usuário/Senha inválidos.')
    }
}



BotaoEntra.addEventListener('click', (e) => {
    e.preventDefault()
    verifyUser()
})

