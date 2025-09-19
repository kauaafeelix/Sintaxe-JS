// 22 - Crie um array chamado "frutas" com as frutas: maçã, banana e laranja. Imprima o array no
// console.
// Acesse o segundo elemento do array "frutas" e imprima no console.
// Adicione a fruta "morango" ao final do array "frutas". Imprima o array atualizado no console.
// Remova o primeiro elemento do array "frutas". Imprima o array atualizado no console.
// Crie um novo array chamado "numeros" com alguns números. Use o método push() para adicionar um
// novo número ao final do array. Imprima o array atualizado no console.

// Use o método pop() para remover o último elemento do array "numeros". Imprima o array atualizado no
// console.
// Use o método unshift() para adicionar um novo número no início do array "numeros". Imprima o array
// atualizado no console.
// Use o método shift() para remover o primeiro elemento do array "numeros". Imprima o array atualizado
// no console.
// Crie um novo array chamado "frutas2" com as frutas: manga, abacaxi e melancia. Use o método
// concat() para unir os arrays "frutas" e "frutas2" em um único array chamado "todasFrutas". Imprima o
// array "todasFrutas" no console.
// Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
// array "todasFrutas". Imprima o novo array no console.
// Use o método splice() para remover o segundo elemento do array "todasFrutas". Imprima o array
// atualizado no console.
// Use o método indexOf() para encontrar o índice da fruta "banana" no array "todasFrutas". Imprima o
// índice no console.
// Use o método filter() para criar um novo array que contenha apenas as frutas que começam com a letra
// "m". Imprima o novo array no console.
// Use o método map() para criar um novo array que contenha o dobro de cada elemento do array
// "numeros". Imprima o novo array no console.
// Use o método forEach() para imprimir cada elemento do array "todasFrutas" no console.

const frutas = ["maçã", "banana", "laranja"];
console.log(frutas);
console.log(frutas[1]);
frutas.push("morango");
console.log(frutas);
frutas.shift();
console.log(frutas);

const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.unshift(0);
console.log(numeros);
numeros.shift();
console.log(numeros);

const frutas2 = ["manga", "abacaxi", "melancia"];
const todasFrutas = frutas.concat(frutas2);

console.log(todasFrutas);

const primeirosDois = todasFrutas.slice(0, 2);
console.log(primeirosDois);
todasFrutas.splice(1, 1);
console.log(todasFrutas);

const indiceBanana = todasFrutas.indexOf("banana");
console.log(indiceBanana);

const frutasComM = todasFrutas.filter(fruta => fruta.startsWith('m'));
console.log(frutasComM);

const numerosDobro = numeros.map(num => num * 2);
console.log(numerosDobro);

todasFrutas.forEach(fruta => console.log(fruta));