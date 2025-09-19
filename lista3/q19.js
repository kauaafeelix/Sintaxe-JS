// 19 - Crie um novo array chamado "idades" com algumas idades. Use o método every() para verificar se
// todos os elementos do array são maiores que 18. Imprima o resultado no console.


const idades = [20, 25, 30, 17, 22];
const todasMaioresQue18 = idades.every(idade => idade > 18);
console.log(todasMaioresQue18);