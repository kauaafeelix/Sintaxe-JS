// Exercício 13: Crie uma função que retorne a diferença em dias entre duas datas.

const prompt = require('prompt-sync')();

let data1 = new Date(prompt("Insira a primeira data (AAAA-MM-DD): "));
let data2 = new Date(prompt("Insira a segunda data (AAAA-MM-DD): "));
function diferencaDias(data1, data2) {
    const umDia = 24 * 60 * 60 * 1000;
    const diferenca = Math.abs(data2 - data1);
    return Math.round(diferenca / umDia);
}
console.log(diferencaDias(data1, data2));