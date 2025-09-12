// // Exercício 15: Crie um array chamado "frutas" que contém "maçã", "banana" e "laranja".
// Imprima o segundo elemento do array "frutas".
// Adicione "manga" ao final do array "frutas".
// Remova o primeiro elemento do array "frutas".
// Verifique o tamanho do array "frutas".
// Crie um loop for que percorre o array "frutas" e imprime cada fruta.
// Use o método forEach para imprimir cada elemento do array "frutas".
// Use o método map para criar um novo array que contém o tamanho de cada fruta do array
// "frutas".
// Use o método filter para criar um novo array que contém apenas as frutas do array "frutas"
// que têm mais de 5 caracteres.
// Use o método reduce para calcular a soma dos números em um array.

const prompt = require('prompt-sync')();
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[1]);

frutas.push("manga");
console.log(frutas);

frutas.shift();
console.log(frutas);
console.log(frutas.length);
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
frutas.forEach(fruta => console.log(fruta));

let tamanhos = frutas.map(fruta => fruta.length);
console.log(tamanhos);
let frutasFiltradas = frutas.filter(fruta => fruta.length > 5);
console.log(frutasFiltradas);
let numeros = prompt("Insira números separados por vírgula: ");
let arrayNumeros = numeros.split(',').map(Number);
let soma = arrayNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);