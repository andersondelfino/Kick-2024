const prompt = require("prompt-sync")({sigint:true});

const jogador = prompt("Qual o seu nome? ");

let jogo = 10;
let pontuacao = 0;
let resposta;

while(jogo != 0){
    jogo = parseInt(prompt("Olá, " + jogador + "! " + "Em qual Quiz vc deseja entrar? 1- Portugues 2 -Matemática 3- História  0- Sair"));

    switch(jogo) {
        case 1:
         pontuacao += jogarPortugues(); 
         break;  

        case 2:
        pontuacao += jogarMatemática();
        break;
        case 3:
            pontuacao += jogarHistoria();
            break;
        case 0:
            console.log("Você saiu!");
            break;
        default:
            console.log("Digite uma opção válida")
    }
}



    function jogarPortugues() {
        let pontuacao = 0;
        let resposta;

        resposta = prompt("A palavra CABELO tem 3 síbalas? 1-Verdadeiro  2-Falso");
        if (resposta === "1"){
            console.log("Parabéns!");
            pontuacao++;
        }else {
            console.log("Resposta incorreta.");
        }

        resposta = prompt("Quantas vocais tem na palavra FUTEBOL? 1- Quatro  2- Seis 3- Zero 4- Três");
        if (resposta === "4"){
            console.log("Parabéns! São três vocais: U, E e O");
            pontuacao++;
        }else {
            console.log("Resposta incorreta.");
        }
        return pontuacao;
    }

    function jogarMatemática() {
        let pontuacao = 0;
        let resposta;

        resposta = prompt("A multiplicação de 3x3 é igual a 9? 1-Verdadeiro  2-Falso");
        if (resposta === "1"){
            console.log("Parabéns!");
            pontuacao++;
        }else {
            console.log("Resposta incorreta.");
        }

        resposta = prompt("Oito divido por 2 é igual a...? Responda: 1- Zero  2- Seis  3- Quatro  4- Dois");
        if (resposta === "3"){
            console.log("Parabéns!");
            pontuacao++;
        }else {
            console.log("Resposta incorreta.");
        }
        return pontuacao;
    }

    function jogarHistoria() {
        let pontuacao = 0;
        let resposta;

        resposta = prompt("Quem descobriu o Brasil foi Pedro Álvares Cabral? 1-Verdadeiro  2-Falso");
        if (resposta === "1"){
            console.log("Parabéns!");
            pontuacao++;
        }else {
            console.log("Resposta incorreta.");
        }

        resposta = prompt("Em qual ano Tiradentes morreu?? Responda: 1- 1975  2- 1792  3- 1973  4- 1976");
        if (resposta === "2"){
            console.log("Parabéns!");
            pontuacao++;
        }else {
            console.log("Resposta incorreta.");
        }
        return pontuacao;
    }

    console.log("Obrigado por jogar " + jogador + "!" + " Sua pontuação foi de: " + pontuacao);