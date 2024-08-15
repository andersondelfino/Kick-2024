const prompt = require("prompt-sync")();
let numero = "23";
let tentativa

do {
    tentativa = prompt ("Adivinhe o numero:");
} while (tentativa !== numero);
console.log ("O numero correto é " + numero);