// Exercício 5: Crie uma função chamada calcularMedia que recebe um array de números
// como parâmetro e retorna a média dos números.
// console.log(calcularMedia([1, 2, 3, 4, 5])); // 3

const prompt = require('prompt-sync')();

let numeros = prompt("Insira números separados por vírgula: ");
let arrayNumeros = numeros.split(',').map(Number);

function calcularMedia(arrayNumeros) {
    let soma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }
    return soma / arrayNumeros.length;
}
console.log(calcularMedia(arrayNumeros));