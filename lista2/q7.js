// Exercício 7: Crie uma função que aceite dois parâmetros: um array de números e um
// número. A função deve retornar um novo array com todos os números maiores que o
// número fornecido.
// // Exemplo de uso:
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num = 5;
// console.log(filtrarNumeros(array, num)); // [6, 7, 8, 9]

const prompt = require('prompt-sync')();

let numeros = prompt("Insira números separados por vírgula: ");
let arrayNumeros = numeros.split(',').map(Number);
let num = Number(prompt("Insira um número: "));

function filtrarNumeros(arrayNumeros, num) {
    let resultado = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > num) {
            resultado.push(arrayNumeros[i]);
        }
    }
    return resultado;
}
console.log(filtrarNumeros(arrayNumeros, num));
