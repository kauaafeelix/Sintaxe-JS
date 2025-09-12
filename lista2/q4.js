// Exercício 4: Crie uma função chamada ehPar que recebe um número como parâmetro e
// retorna true se o número for par e false caso contrário.

const prompt = require('prompt-sync')();

let numero = Number(prompt("Insira um número: "));

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(ehPar(numero));