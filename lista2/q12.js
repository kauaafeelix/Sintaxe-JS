// Exercício 12: Crie uma função para retornar um número aleatório entre 1 e 100.

const prompt = require('prompt-sync')();

function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(numeroAleatorio());