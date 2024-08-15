const prompt = require("prompt-sync")();
let senha = "anderson123";
let tentativa

do {
    tentativa = prompt ("Qual a senha?");
} while (tentativa !== senha);
alert ("Senha correta!")
