const prompt = require("prompt-sync")();
let numeros = prompt('digite seu numero para ser multiplicado');
let numero = parseInt(numeros);

for (let i = 0; i <= numero; i++){
    if (i % 2 != 1){
        console.log(i)
    }
}
