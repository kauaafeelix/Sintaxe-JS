// Exercício 9: Crie uma função que aceite uma string e retorne o número de vogais nessa
// string.
// // Exemplo de uso:
// let texto = "Exemplo de uma string qualquer";
// console.log(contarVogais(texto)); // 10

const prompt = require('prompt-sync')();

let texto = prompt("Insira um texto: ");

function contarVogais(texto) {
    let contador = 0;
    let vogais = "aeiouAEIOU";
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}  
console.log(contarVogais(texto));