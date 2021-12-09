var pegar_numero_spam = document.getElementById("currentNumber");
var pegar_numero = 0;

function incremento () {
    pegar_numero = pegar_numero + 1;
    pegar_numero_spam.innerHTML = pegar_numero;
}

function decremento () {
    pegar_numero = pegar_numero - 1;
    pegar_numero_spam.innerHTML = pegar_numero;
}