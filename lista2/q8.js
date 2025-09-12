// Exercício 8: Crie uma função que aceite um array e um valor. A função deve retornar a
// quantidade de vezes que o valor aparece no array.
// // Exemplo de uso:
// let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// let valor = 4;
// console.log(contarOcorrencias(array, valor)); // 4


const prompt = require('prompt-sync')();
let numeros = prompt("Insira números separados por vírgula: ");
let arrayNumeros = numeros.split(',').map(Number);
let valor = Number(prompt("Insira um valor: "));

function contarOcorrencias(arrayNumeros, valor) {
    let contador = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] === valor) {
            contador++;
        }
    }
    return contador;
}
console.log(contarOcorrencias(arrayNumeros, valor));