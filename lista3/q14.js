// 14 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.
// Tanto o caractere quanto a string devem ser informadas.

function contarCaracteres(str, char) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }   
    }
    return contador;
}

console.log(contarCaracteres("javascript", "a"));