// Exercício 6: Crie uma arrow function que aceite uma string e retorne a mesma string em
// letras maiúsculas.

const prompt = require('prompt-sync')();

let texto = prompt("Insira um texto: ");

const maiusculas = texto => texto.toUpperCase();

console.log(maiusculas(texto));