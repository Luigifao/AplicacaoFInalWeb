// =====Aluno home=====
function redirectTo(page) {

    window.location.href = page;
}
//=====AlunoMaterias=====
document.addEventListener('DOMContentLoaded', function () {
    var materiaButtons = document.querySelectorAll('.materias-conteiner button');
    materiaButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            
            var materiaNome = button.innerText;
        });
    });
});
//=====Matéria=====
// script.js

document.addEventListener('DOMContentLoaded', function () {
    
    var materiaButtons = document.querySelectorAll('.menu-group .menu-button');
    
    materiaButtons.forEach(function (button) {
        button.addEventListener('click', function () {
             var materiaNome = button.innerText;
        });
    });
    var aulaButtons = document.querySelectorAll('.aula .menu-button');
    
    aulaButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var aulaNome = button.innerText;
        });
    });
});
//=====Notificacoes=====
// script.js

document.addEventListener('DOMContentLoaded', function () {
    var imagensNoticias = document.querySelectorAll('.feed-noticias img');

    imagensNoticias.forEach(function (imagem) {
        imagem.addEventListener('click', function () {
            var noticiaAlt = imagem.alt;
            alert('Notícia: ' + noticiaAlt);
        });
    });
});
//=====SendQTN=====
function mostrarDuvidas(materia, professor) {
    var menuDuvidas = document.getElementById('menuDuvidas');
    var duvidasContainer = document.getElementById('duvidasContainer');
    var materiaNome = document.getElementById('materiaNome');
    var professorNome = document.getElementById('professorNome');

    menuDuvidas.style.display = 'none';
    duvidasContainer.style.display = 'block';
    materiaNome.textContent = 'Matéria: ' + materia;
    professorNome.textContent = 'Professor(a): ' + professor;
}

function enviarDuvida() {
    var campoDuvida = document.getElementById('campoDuvida').value;
    alert('Dúvida enviada: ' + campoDuvida);
    
}
//=====VerifyMissings=====
function mostrarFaltas() {
    var faltasContainer = document.getElementById('faltasContainer');
    if (faltasContainer.style.display === 'none' || faltasContainer.style.display === '') {
        faltasContainer.style.display = 'block';
    } else {
        faltasContainer.style.display = 'none';
    }
}
function mostrarMenuDuvidas() {
    var menuDuvidas = document.getElementById('menuDuvidas');
    var duvidasContainer = document.getElementById('duvidasContainer');

    if (menuDuvidas.style.display === 'none' || menuDuvidas.style.display === '') {
        menuDuvidas.style.display = 'block';
        duvidasContainer.style.display = 'none';
    } else {
        menuDuvidas.style.display = 'none';
    }
}



