// Desenvolva um algoritmo que leia um número inteiro e imprima seu sucessor e
// seu antecessor na tela.

const prompt = require('prompt-sync')();

let numero = Number(prompt("Insira um número: "));
function antecessorESucessor(numero) {
    let antecessor = numero - 1;
    let sucessor = numero + 1;
    return "O antecessor de "+ numero +"é " +antecessor+" e o seu sucessor é "+sucessor+"."
}
console.log(antecessorESucessor(numero));