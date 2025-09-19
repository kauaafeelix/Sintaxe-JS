// 12 - Criar uma função que junte dois arrays e retorno o resultado como um novo array.

function juntarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const resultado = juntarArrays(array1, array2);
console.log(resultado);