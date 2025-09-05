//6 - Converter uma temperatura em Celsius para Fahrenheit.
const prompt = require('prompt-sync')();

let temperatura = prompt("Digite a Temperatura em Celsius: ");

let conversao = temperatura *1.8 + 32;

console.log(temperatura+" graus Celsius em Fahrenheit é: "+conversao+" F");