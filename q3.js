//3 - Mostrar os múltiplos de 3 entre 1 e 30.

const prompt = require('prompt-sync')();

for (i = 1; i<= 30;i++ ){
    if(i %3 == 0){
        console.log (i+" é multiplo de 3");
    }
    else{
        console.log(i);
    }
}