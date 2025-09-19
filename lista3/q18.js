// 18 - Crie um novo array chamado "numeros" com alguns números. Imprima o array no console.
// Use o método join() para transformar o array "numeros" em uma string separada por vírgulas. Imprima
// a string resultante no console.
// Use o método reverse() para inverter a ordem dos elementos do array "numeros". Imprima o array
// atualizado no console.
// Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
// array "numeros". Imprima o novo array no console.
// Use o método sort() para ordenar o array "nomes" em ordem alfabética. Imprima o array atualizado no
// console.
// Use o método filter() para criar um novo array que contenha apenas os números pares do array
// "numeros". Imprima o novo array no console.
// Use o método map() para criar um novo array que contenha o quadrado de cada elemento do array
// "numeros". Imprima o novo array no console.
// Use o método reduce() para calcular a soma de todos os elementos do array "numeros". Imprima o
// resultado no console.
// Use o método forEach() para imprimir cada elemento do array "nomes" no console.

const numeros = [5, 3, 8, 1, 2];
console.log(numeros);
const stringNumeros = numeros.join(',');
console.log(stringNumeros);
numeros.reverse();
console.log(numeros);
const primeirosDois = numeros.slice(0, 2);
console.log(primeirosDois);
const nomes = ["Kafe", "Jotalu", "Maria", "Uber"];
nomes.sort();
console.log(nomes);
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);
const quadrados = numeros.map(num => num * num);
console.log(quadrados);
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);
nomes.forEach(nome => console.log(nome));