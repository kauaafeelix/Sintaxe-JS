// Exercício 10: Crie uma função que aceite um número e retorne um array com todos os
// números de 1 até o número fornecido, incluindo o número fornecido.
// // Exemplo de uso:
// let numero = 5;
// console.log(criarArray(numero)); // [1, 2, 3, 4, 5]

const prompt = require('prompt-sync')();

let numero = Number(prompt("Insira um número: "));
function criarArray(numero) {
    let resultado = [];
    for (let i = 1; i <= numero; i++) {
        resultado.push(i);
    }
    return resultado;
}
console.log(criarArray(numero));