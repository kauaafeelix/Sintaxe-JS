// 10 - Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal
// array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1 

const prompt = require('prompt-sync')();
let numeros = prompt("Insira 3 números separados por vírgula: ");
let arrayNumeros = numeros.split(',').map(Number);
console.log("Array original: " + arrayNumeros);

arrayNumeros.reverse();
console.log("Array invertido: " + arrayNumeros);