//7 - Verificar se uma palavra é um palíndromo.

const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra: ");

for(let i = 0, j = palavra.length - 1; i < j; i++, j--){
    if(palavra[i]!== palavra[j]){
        console.log(palavra+" não é um palíndromo.");
    }else{
        console.log(palavra+" é um palíndromo.");
    }
}