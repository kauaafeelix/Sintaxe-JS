// 11 - Exiba os números de 1 a 30 com as seguintes regras:
// Se divisível por 3, exiba "Fizz".
// Se divisível por 5, exiba "Buzz".
// Se divisível por 3 e 5, exiba "FizzBuzz".
// Caso contrário, exiba o número.

for (let i= 1; i <=30; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i+": FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log (i+": Fizz");
    }
    else if(i % 5 == 0){
        console.log(i+": Buzz")
    }
    else{
        console.log(i+": nem Fizz, nem Buzz ")
    }

}