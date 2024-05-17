/*
Grupos entre 2 e 4 pessoas
Entrega: 20/05/2024
Apresentação para a turma: 10 minutos cada
Entrega do código: até 19/05/2024
Requisitos:
Rodar em uma página HTML;
Logica rodando em Javascript;
Estilos em CSS;
Jogador começa com 100 fichas;
Aposta mínima: 10 Fichas e se tentar apostar menos o sistema avisará
"Não é permitido apostar mais do que o saldo atual de fichas"
Rolar dois dados:
Se a soma dos dados for 7 -> recebe o dobro do valor apostado;
Se a soma dos dados for 2 ou 12 -> recebe o triplo do valor apostado;
Se não houver fichas suficientes para a aposta mínima -> fim de jogo
Avisar o jogador;
Deve haver uma forma de parar o jogo a qualquer momento.
*/

let somaDados;
let bonus;
let fichas = 100;

document.getElementById("valorFichas").innerText = "Fichas: " + fichas;

function jogarDado(id) {
    let result = Math.floor(Math.random() * 6) + 1;

    document.getElementById(id).setAttribute('name', 'dice-' + result);

    return result;
}

function mostrarValor() {
    somaDosDados();
    var texto = document.getElementById("aposta").value;
    document.getElementById("valorDigitado").innerText = "O valor da aposta foi: " + texto;
    document.getElementById("somaDados").innerText = "A soma dos dados foi: " + somaDados;
}

function somaDosDados() {
    let valorApostado = document.getElementById("aposta").value;
    const resultado = document.getElementById("resultado");

    const dado1 = jogarDado('dado1');

    const dado2 = jogarDado('dado2');

    const soma = dado1 + dado2;

    console.log("Valor apostado: " + valorApostado);

    if (soma == 7) {
        bonus = valorApostado * 2;
        fichas = fichas + bonus;
        resultado.innerText = soma
        document.getElementById("valorFichas").innerText = "Fichas: " + fichas;
        alert(`A soma dos dados foi: ${soma}. Você ganhou ${bonus} fichas`);
    } else if (soma == 2 || soma == 12) {
        bonus = valorApostado * 3;
        fichas = fichas + bonus;
        resultado.innerText = soma
        document.getElementById("valorFichas").innerText = "Fichas: " + fichas;
        alert(`A soma dos dados foi: ${soma}. Você ganhou ${bonus} fichas`);
    } else {
        fichas = fichas - valorApostado;
        resultado.innerText = soma
        document.getElementById("valorFichas").innerText = "Fichas: " + fichas;
    }
}

document.getElementById('jogar').addEventListener('click', (event) => {
    event.preventDefault();
    somaDosDados();
})