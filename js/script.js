const botaoContador = document.getElementById("btnContador");
const detalhesContador = document.getElementById("detalhesContador");

botaoContador.addEventListener("click", function () {

    detalhesContador.classList.toggle("aberto");

    if (detalhesContador.classList.contains("aberto")) {

        botaoContador.textContent = "Mostrar menos";

    } else {

        botaoContador.textContent = "Mostrar mais";

    }

});

const botaoCadastro = document.getElementById("btnCadastro");
const detalhesCadastro = document.getElementById("detalhesCadastro");

botaoCadastro.addEventListener("click", function () {
    detalhesCadastro.classList.toggle("aberto");

    if (detalhesCadastro.classList.contains("aberto")) {
        botaoCadastro.textContent = "Mostrar menos";
    } else {
        botaoCadastro.textContent = "Mostrar mais";
    }
});


const botaoMedia = document.getElementById("btnMedia");
const detalhesMedia = document.getElementById("detalhesMedia");

botaoMedia.addEventListener("click", function () {
    detalhesMedia.classList.toggle("aberto");

    if (detalhesMedia.classList.contains("aberto")) {
        botaoMedia.textContent = "Mostrar menos";
    } else {
        botaoMedia.textContent = "Mostrar mais";
    }
});