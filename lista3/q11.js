// 11 - Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na
// ordem crescente.

const prompt = require('prompt-sync')();
let elementos = prompt("Insira os elementos do array separados por vírgula: ");
let arrayElementos = elementos.split(',').map(Number);
function ordenarCrescente(arrayElementos) {
    for (let i = 0; i < arrayElementos.length - 1; i++) {
        for (let j = i + 1; j < arrayElementos.length; j++) {
            if (arrayElementos[i] > arrayElementos[j]) {
                let temp = arrayElementos[i];
                arrayElementos[i] = arrayElementos[j];
                arrayElementos[j] = temp;
            }
        }
    }
    return arrayElementos;
}
console.log(ordenarCrescente(arrayElementos));