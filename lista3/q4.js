// 4
// Desenvolva um algoritmo que leia um número e se for maior que 20 imprima a
// metade desse número.

const prompt = require('prompt-sync')();
let numero = Number(prompt("Insira um número: "));
function metadeSeMaiorQueVinte(numero) {
    if (numero > 20) {
        let metade = numero / 2;
        return "A metade de "+ numero +" é "+ metade +".";
    }
    else {
        return "O número não é maior que 20.";
    }
}
console.log(metadeSeMaiorQueVinte(numero));