// 9 - Crie uma função que recebe um array de 3 números coloque eles em ordem crescente. Crie sua
// própria função para isso.

const prompt = require('prompt-sync')();

let numeros = prompt("Insira 3 números separados por vírgula: ");
let arrayNumeros = numeros.split(',').map(Number);
function ordenarCrescente(arrayNumeros) {
    for (let i = 0; i < arrayNumeros.length - 1; i++) {
        for (let j = i + 1; j < arrayNumeros.length; j++) {
            if (arrayNumeros[i] > arrayNumeros[j]) {
                let temp = arrayNumeros[i];
                arrayNumeros[i] = arrayNumeros[j];
                arrayNumeros[j] = temp;
            }
        }
    }
    return arrayNumeros;
}
console.log(ordenarCrescente(arrayNumeros));